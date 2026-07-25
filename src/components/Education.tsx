import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="ledger-section pt-0">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          figure="// record"
          eyebrow="Education"
          title="Academic grounding with public-safe detail."
        />
        <article className="border border-line/10 bg-surface/45 p-6 sm:p-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-teal">
            VNU-HCM University of Science (HCMUS)
          </p>
          <h3 className="mt-3 font-mono text-2xl font-semibold text-paper">
            Artificial Intelligence undergraduate
          </h3>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Coursework and project evidence span machine learning, computer vision, natural
            language processing, databases, algorithms, statistics, and software engineering.
            Graduation timing, grades, awards, language scores, and certificate metadata remain
            outside this public draft until explicitly confirmed.
          </p>
        </article>
      </div>
    </section>
  );
}
