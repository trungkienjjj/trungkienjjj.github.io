import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";
import { PipelineDiagram } from "./PipelineDiagram";

const project = projects.find((item) => item.id === "agentic-rag")!;

export function TemporalRagCaseStudy() {
  return (
    <article id={project.id} className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project} label="// case 02 · temporal reasoning">
          <p>
            The architecture makes failure handling part of the system design: graph retrieval
            can fall back to vector evidence, evidence is checked before generation, and the
            final stage can abstain.
          </p>
          <p className="border-l border-amber/40 pl-4 text-paper">
            Designed and prototyped the architecture; current work focuses on implementation and
            experimental validation.
          </p>
        </CaseIntro>
        <PipelineDiagram />
      </div>
    </article>
  );
}
