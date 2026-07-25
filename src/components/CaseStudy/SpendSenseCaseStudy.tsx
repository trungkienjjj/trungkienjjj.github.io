import { projects } from "../../data/projects";
import { CaseIntro } from "./CaseIntro";

const project = projects.find((item) => item.id === "spendsense")!;

const flow = [
  ["01", "Asset input", "Natural-language and structured investment inputs"],
  ["02", "Market compatibility", "Vietnamese equities, crypto, and gold data paths"],
  ["03", "Allocation flow", "Risk-aware robo-advisor and savings-planning behavior"],
  ["04", "Product resilience", "Reports, frontend states, fallbacks, and regression retesting"]
];

export function SpendSenseCaseStudy() {
  return (
    <article id={project.id} className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project} label="// case 04 - full-stack product workflow">
          <p>
            My scope connected the investment and robo-advisor workflow across FastAPI and
            React/TypeScript, including compatible market-data paths and report delivery.
          </p>
          <p className="border-l border-amber/40 pl-4 text-paper">
            This is a bounded team contribution in a working prototype. No team-level outcome
            metric or project-wide ownership is claimed.
          </p>
        </CaseIntro>
        <div className="grid gap-px border border-line/10 bg-line/10 sm:grid-cols-2">
          {flow.map(([number, title, detail]) => (
            <div key={number} className="bg-surface p-5 sm:p-6">
              <span className="font-mono text-xs text-amber">{number}</span>
              <h4 className="mt-3 font-mono text-base font-semibold text-paper">{title}</h4>
              <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
