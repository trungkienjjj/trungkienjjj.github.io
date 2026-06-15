import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";
import { FunnelChart } from "./FunnelChart";

const project = projects.find((item) => item.id === "historical-ocr")!;

export function HistoricalOcrCaseStudy() {
  return (
    <article id={project.id} className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project} label="// case 04 · dataset engineering">
          <p>
            Repeated OCR ambiguities and page-layout errors were converted into deterministic
            editing, geometry, filtering, and validation rules.
          </p>
          <p>
            The result was 8,687 aligned text lines from 240 pages of{" "}
            <em>Dai Viet Su Ky Toan Thu</em>, exceeding the original 3,000-line target by
            189.6%.
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
