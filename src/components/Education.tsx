import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="ledger-section pt-0">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          eyebrow="Education"
          title="Academic grounding for evidence-led AI engineering."
        />
        <article className="border border-line/10 bg-surface/45 p-6 sm:p-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-teal">
            University of Science, Viet Nam National University Ho Chi Minh City
          </p>
          <h3 className="mt-3 font-mono text-2xl font-semibold text-paper">
            Bachelor of Science in Artificial Intelligence
          </h3>
          <p className="mt-3 font-mono text-sm text-amber">
            2023-2027 · Expected graduation in 2027
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            <strong className="text-paper">GPA: 9.003/10 (3.842/4.0).</strong>{" "}
            Academic Encouragement Scholarship, Semester 1 AY 2023-2024 —
            Excellent tier; one of two recipients in the 2023 Artificial Intelligence cohort.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Coursework and project evidence span machine learning, computer vision, natural
            language processing, databases, algorithms, statistics, and software engineering.
          </p>
        </article>
      </div>
    </section>
  );
}
