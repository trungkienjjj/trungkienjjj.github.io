import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";
import { ScaleCounters } from "./ScaleCounters";

const project = projects.find((item) => item.id === "legal-graph")!;

export function LegalGraphCaseStudy() {
  return (
    <article id={project.id} className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project} label="// case 03 · graph construction">
          <p>
            The scale figures describe the team’s complete graph. My contribution was the
            preprocessing workflow, Neo4j bulk import, automated integrity checks, local
            resource tuning, and teammate setup documentation.
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
