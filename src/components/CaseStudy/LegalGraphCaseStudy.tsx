import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";
import { ScaleCounters } from "./ScaleCounters";

const project = projects.find((item) => item.id === "legal-graph")!;

export function LegalGraphCaseStudy() {
  return (
    <article className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project}>
          <p>
            The team built a graph-based prototype for Vietnamese legal question answering.
            These row counts come from the team's CSV exports. I worked on the import path,
            integrity checks, and evaluation support.
          </p>
          <ul className="space-y-2 border-l border-teal/30 pl-4">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseIntro>
        <ScaleCounters />
      </div>
    </article>
  );
}
