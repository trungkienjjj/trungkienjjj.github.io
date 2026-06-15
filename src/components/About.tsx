import { SectionHeader } from "./SectionHeader";

const credentials = [
  ["GPA", "3.81 / 4.00", "B.S. in Artificial Intelligence"],
  ["Rank", "1st", "AI major by semester GPA, Semester 1 AY 2023-2024"],
  ["Award", "Merit-based", "HCMUS scholarship, Semester 1 AY 2023-2024"]
];

export function About() {
  return (
    <section id="about" className="ledger-section">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          figure="// fig. 02"
          eyebrow="About"
          title="Research depth with an engineering habit."
        />
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I enjoy turning research ideas into systems that can be tested, inspected, and
              explained. My strongest completed work is a DeepSeek-OCR adaptation pipeline for
              Vietnamese handwriting, supported by a separate historical-document dataset
              engineering project.
            </p>
            <p>
              I also build data and backend systems with Python, FastAPI, SQL, Docker, vector
              databases, and modern frontend tools. My current research prototype investigates
              multi-agent temporal RAG with explicit fallback and verification stages.
            </p>
          </div>

          <div className="border-y border-line/10">
            {credentials.map(([label, value, detail]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-line/10 py-4 last:border-b-0 sm:grid-cols-[8rem_10rem_1fr] sm:items-baseline"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  {label}
                </span>
                <strong className="font-mono text-lg font-semibold text-amber">{value}</strong>
                <span className="text-sm text-muted">{detail}</span>
              </div>
            ))}
            <details className="group py-4">
              <summary className="grid cursor-pointer list-none gap-2 sm:grid-cols-[8rem_10rem_1fr] sm:items-baseline">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  English
                </span>
                <strong className="font-mono text-lg font-semibold text-teal">IELTS 6.5</strong>
                <span className="text-sm text-muted group-open:text-paper">
                  Expand skill breakdown <span aria-hidden="true">+</span>
                </span>
              </summary>
              <div className="mt-4 grid grid-cols-2 gap-3 border-l border-teal/30 pl-4 font-mono text-xs text-muted sm:ml-[18rem] sm:grid-cols-4">
                <span>Reading <strong className="text-paper">8.5</strong></span>
                <span>Listening <strong className="text-paper">6.5</strong></span>
                <span>Writing <strong className="text-paper">6.0</strong></span>
                <span>Speaking <strong className="text-paper">5.5</strong></span>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
