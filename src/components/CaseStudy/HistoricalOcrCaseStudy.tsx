import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";
import { FunnelChart } from "./FunnelChart";

const project = projects.find((item) => item.id === "historical-ocr")!;

export function HistoricalOcrCaseStudy() {
  return (
    <article className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project}>
          <p>
            I built a line-break editor and text-to-box mapping tools, then added geometry,
            filtering, and export checks to catch layout and alignment errors.
          </p>
          <p>
            My contribution produced <strong className="text-teal">8,687 aligned text lines</strong>{" "}
            from <strong className="text-amber">235 source page images</strong>{" "}
            within a team project.
          </p>
        </CaseIntro>
        <FunnelChart />
      </div>

      <pre className="rules-block mt-8" aria-label="Dataset processing rules">
{`rules.pipeline = [
  "regex + geometry footer filtering",
  "Y-center box merging",
  "AABB rectification",
  "text-to-box count validation",
  "forced export + crop completeness checks"
]`}
      </pre>
    </article>
  );
}
