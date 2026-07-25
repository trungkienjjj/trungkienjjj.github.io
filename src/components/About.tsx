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
          figure="// fig. 02"
          eyebrow="About"
          title="Research questions, handled with an engineering habit."
        />
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I turn AI ideas into systems that can be tested, inspected, and explained. My
              strongest public evidence combines Vietnamese OCR adaptation with dataset
              engineering for historical documents.
            </p>
            <p>
              I also contribute graph audits, evaluation tooling, data pipelines, backend
              services, and resilient product workflows. Each project below labels individual
              scope separately from team-level outcomes.
            </p>
          </div>

          <div className="border-y border-line/10">
            {principles.map(([label, detail], index) => (
              <div
                key={label}
                className="grid gap-2 border-b border-line/10 py-5 last:border-b-0 sm:grid-cols-[3rem_8rem_1fr] sm:items-baseline"
              >
                <span className="font-mono text-xs text-amber">0{index + 1}</span>
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
