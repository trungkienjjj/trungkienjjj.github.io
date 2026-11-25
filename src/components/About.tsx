import { SectionHeader } from "./SectionHeader";

const principles = [
  ["Measure", "Use held-out evaluation and distribution-level diagnostics, not a single showcase output."],
  ["Inspect", "Expose failure traces, data checks, and ownership boundaries so results can be reviewed."],
  ["Harden", "Treat fallbacks, reproducible setup, and regression checks as part of the AI system."]
];

export function About() {
  return (
    <section id="about" className="ledger-section">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          eyebrow="About"
          title="How I build and evaluate AI."
        />
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              For Vietnamese OCR, I fine-tuned a model and measured character errors on
              held-out handwriting. I also built tools to align lines in historical scans and
              audited graph exports for a legal question-answering prototype.
            </p>
            <p>
              In freelance work, I compared conversational AI models, labeled failures, and
              explained my ratings with evidence. I also correct machine-generated Vietnamese
              transcripts against the audio, including missed replies and segment boundaries.
            </p>
            <p>
              In my ongoing thesis work on temporal question answering, I integrated a local
              Hugging Face backend and checked inference and answer parsing in a small CPU run.
            </p>
          </div>

          <div className="border-y border-line/10">
            {principles.map(([label, detail]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-line/10 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:items-baseline"
              >
                <strong className="font-mono text-lg font-semibold text-paper">{label}</strong>
                <span className="text-sm leading-6 text-muted">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
