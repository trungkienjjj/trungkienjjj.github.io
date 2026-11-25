import { useState } from "react";
import examples from "../../data/ocr-examples.json";

type Edit =
  | { kind: "match" | "added" | "missing"; character: string }
  | { kind: "changed"; character: string; expected: string };

function compare(reference: string, output: string) {
  const expected = Array.from(reference.normalize("NFC"));
  const observed = Array.from(output.normalize("NFC"));
  const distance = Array.from({ length: expected.length + 1 }, (_, row) =>
    Array.from({ length: observed.length + 1 }, (_, col) => row === 0 ? col : row)
  );

  for (let row = 1; row <= expected.length; row++) {
    for (let col = 1; col <= observed.length; col++) {
      distance[row][col] = Math.min(
        distance[row - 1][col] + 1,
        distance[row][col - 1] + 1,
        distance[row - 1][col - 1] + Number(expected[row - 1] !== observed[col - 1])
      );
    }
  }

  const edits: Edit[] = [];
  let row = expected.length;
  let col = observed.length;
  while (row > 0 || col > 0) {
    const unchanged = expected[row - 1] === observed[col - 1];
    if (row && col && distance[row][col] === distance[row - 1][col - 1] + Number(!unchanged)) {
      edits.push(unchanged
        ? { kind: "match", character: observed[col - 1] }
        : { kind: "changed", character: observed[col - 1], expected: expected[row - 1] });
      row--;
      col--;
    } else if (row && distance[row][col] === distance[row - 1][col] + 1) {
      edits.push({ kind: "missing", character: expected[--row] });
    } else {
      edits.push({ kind: "added", character: observed[--col] });
    }
  }

  const count = distance[expected.length][observed.length];
  const cer = new Intl.NumberFormat("en", { style: "percent", maximumFractionDigits: 1 })
    .format(count / expected.length);
  return { edits: edits.reverse(), count, cer };
}

function showCharacter(character: string) {
  return character === " " ? "space" : character;
}

function Output({ title, reference, value }: { title: string; reference: string; value: string }) {
  const { edits, count, cer } = compare(reference, value);
  return (
    <div className="border border-line/15 bg-surface/60 p-4 sm:p-5">
      <div className="flex flex-wrap justify-between gap-2">
        <h5 className="font-mono text-sm font-semibold text-paper">{title}</h5>
        <p className="font-mono text-xs text-muted">{cer} CER · {count} {count === 1 ? "edit" : "edits"}</p>
      </div>
      <p lang="vi" className="sr-only">{value}</p>
      <p lang="vi" aria-hidden="true" className="mt-3 whitespace-pre-wrap break-words font-mono text-lg leading-relaxed text-paper">
        {edits.map((edit, index) => edit.kind === "match" ? (
          <span key={index}>{edit.character}</span>
        ) : (
          <mark key={index} data-edit={edit.kind} data-space={edit.character === " " || undefined} className="ocr-edit"
            title={edit.kind === "changed" ? "Expected " + showCharacter(edit.expected) : edit.kind === "missing" ? "Missing " + showCharacter(edit.character) : "Extra " + showCharacter(edit.character)}>
            {showCharacter(edit.character)}
          </mark>
        ))}
      </p>
    </div>
  );
}

export function OCRBeforeAfter() {
  const [example, setExample] = useState(examples[0]);
  return (
    <section className="mt-8 border border-line/15 bg-surface/45 p-4 sm:p-6" aria-labelledby="ocr-demo-title" id="ocr-before-after" tabIndex={-1}>
      <h4 id="ocr-demo-title" className="font-mono text-xl font-semibold text-paper">OCR before and after</h4>
      <div className="my-4 flex flex-wrap gap-2" role="group" aria-label="Choose an OCR example">
        {examples.map((item) => (
          <button key={item.id} type="button" className="case-choice" aria-pressed={item.id === example.id}
            onClick={() => setExample(item)}>
            {item.label}
          </button>
        ))}
      </div>
      <figure>
        <img className="block h-auto w-full max-w-3xl border border-line/15" width="768" height="158"
          src={new URL(`../../assets/ocr-${example.id}.png`, import.meta.url).href} alt={example.reference} lang="vi" />
        <figcaption className="mt-2 text-xs leading-5 text-muted">
          Redrawn reference text. The outputs below are excerpts from the recorded evaluation on the original handwriting.
        </figcaption>
      </figure>
      <div className="mt-4 grid gap-2 sm:grid-cols-2" aria-live="polite" aria-atomic="true">
        <Output title="Base model" reference={example.reference} value={example.base} />
        <Output title="Fine-tuned model" reference={example.reference} value={example.tuned} />
      </div>
      <p className="mt-3 text-xs leading-5 text-muted">
        <mark className="ocr-edit" data-edit="changed">Changed or extra</mark>{" · "}
        <mark className="ocr-edit" data-edit="missing">Missing</mark>
      </p>
      <p className="mt-2 text-xs leading-5 text-muted">
        CER here counts edits per character in the shown reference, including spaces and case.
        Extra characters can push CER above 100%.
      </p>
    </section>
  );
}
