import { SectionHeader } from "./SectionHeader";

const certifications = [
  "Deep Learning with PyTorch",
  "Machine Learning Pipelines with Azure ML Studio",
  "Data Visualization using Plotly"
];

export function Education() {
  return (
    <section id="education" className="ledger-section pt-0">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          figure="// record"
          eyebrow="Education & certifications"
          title="Academic grounding, without invented credential metadata."
        />
        <div className="grid gap-px bg-line/10 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="bg-ink p-6 sm:p-8">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-teal">
                  VNU-HCM University of Science
                </p>
                <h3 className="mt-3 font-mono text-2xl font-semibold text-paper">
                  B.S. in Artificial Intelligence
                </h3>
              </div>
              <span className="font-mono text-sm text-amber">2023-2027</span>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
              GPA 3.81/4.00. Ranked 1st in the AI major by semester GPA and received
              the merit-based scholarship in Semester 1, Academic Year 2023-2024.
            </p>
          </article>
          <article className="bg-ink p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-teal">
              Completed certifications
            </p>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              {certifications.map((certification) => (
                <li className="border-l border-amber/35 pl-3" key={certification}>
                  {certification}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
