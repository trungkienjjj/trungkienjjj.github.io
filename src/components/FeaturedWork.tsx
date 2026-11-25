import { useEffect, useLayoutEffect, useState } from "react";
import { featuredProjects } from "../data/projects";
import { DeepSeekCaseStudy } from "./CaseStudy/DeepSeekCaseStudy";
import { HistoricalOcrCaseStudy } from "./CaseStudy/HistoricalOcrCaseStudy";
import { LegalGraphCaseStudy } from "./CaseStudy/LegalGraphCaseStudy";
import { SpendSenseCaseStudy } from "./CaseStudy/SpendSenseCaseStudy";

const caseStudies: Record<string, () => JSX.Element> = {
  "deepseek-ocr": DeepSeekCaseStudy,
  "historical-ocr": HistoricalOcrCaseStudy,
  "legal-graph": LegalGraphCaseStudy,
  spendsense: SpendSenseCaseStudy
};

function caseFromHash() {
  const hash = window.location.hash.slice(1);
  const id = hash === "ocr-before-after" ? "deepseek-ocr" : hash;
  return featuredProjects.find((project) => project.id === id)?.id;
}

export function FeaturedWork() {
  const [selection, setSelection] = useState(() => {
    const id = caseFromHash();
    return { id: id ?? featuredProjects[0].id, scrollToCase: Boolean(id) };
  });

  useEffect(() => {
    function followCaseLink() {
      const id = caseFromHash();
      if (id) setSelection({ id, scrollToCase: true });
    }
    window.addEventListener("hashchange", followCaseLink);
    return () => window.removeEventListener("hashchange", followCaseLink);
  }, []);

  useLayoutEffect(() => {
    if (!selection.scrollToCase) return;
    const targetId = window.location.hash.slice(1);
    const section = document.getElementById(targetId);
    section?.focus({ preventScroll: true });
    section?.scrollIntoView({ block: "start" });
  }, [selection]);

  return (
    <>
      <div role="group" aria-label="Choose a featured case study" className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {featuredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            aria-pressed={selection.id === project.id}
            aria-controls={project.id}
            className="case-choice"
            onClick={() => {
              if (caseFromHash()) window.history.replaceState(null, "", "#" + project.id);
              setSelection({ id: project.id, scrollToCase: false });
            }}
          >
            {project.graphLabel}
          </button>
        ))}
      </div>
      {featuredProjects.map((project) => {
        const CaseStudy = caseStudies[project.id];
        const active = project.id === selection.id;
        return (
          <section key={project.id} id={project.id} aria-label={project.title} tabIndex={-1}
            className="mt-4 scroll-mt-24 focus:outline-none" hidden={!active}>
            {active && <CaseStudy />}
          </section>
        );
      })}
    </>
  );
}
