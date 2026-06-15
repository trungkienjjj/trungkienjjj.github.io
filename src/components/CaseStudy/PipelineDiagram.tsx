import { m } from "framer-motion";
import { useMotionPreferences } from "../../motion/MotionPreferences";

const stages = [
  ["01", "Query Planner", "decompose temporal question"],
  ["02", "Neo4j Temporal-Graph Navigator", "traverse time-aware facts"],
  ["03", "FAISS Fallback Retriever", "recover incomplete evidence"],
  ["04", "Abductive Evidence Verifier", "test evidence consistency"],
  ["05", "Abstention-Aware Generator", "answer or decline"]
] as const;

export function PipelineDiagram() {
  const reducedMotion = useMotionPreferences();

  return (
    <figure className="border border-line/10 bg-surface/60 p-4 sm:p-6">
      <figcaption className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line/10 pb-3">
        <span className="font-mono text-xs font-semibold text-paper">Five-stage query path</span>
        <span className="font-mono text-[0.62rem] text-muted">solid = primary · dashed = conditional</span>
      </figcaption>

      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map(([number, title, note], index) => (
          <div className="contents" key={number}>
            <m.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.12 }}
              className="relative min-h-36 border border-line/10 bg-ink/45 p-3"
            >
              <span className="font-mono text-[0.62rem] text-amber">{number}</span>
              <h4 className="mt-8 font-mono text-xs font-semibold leading-5 text-paper">{title}</h4>
              <p className="mt-2 text-xs leading-5 text-muted">{note}</p>
            </m.div>
            {index < stages.length - 1 && (
              <div
                className={`flex items-center justify-center font-mono text-sm ${
                  index === 1 ? "text-amber" : "text-teal"
                }`}
                aria-hidden="true"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">{index === 1 ? "┄→" : "→"}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[2fr_1fr]">
        <div className="border-l border-dashed border-amber/50 pl-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-amber">
            stage 02 → 03
          </p>
          <p className="mt-1 text-xs text-muted">when graph evidence is incomplete</p>
        </div>
        <div className="border-l border-dashed border-amber/50 pl-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-amber">
            stage 05 → abstain
          </p>
          <p className="mt-1 text-xs text-muted">when verified evidence is insufficient</p>
        </div>
      </div>
    </figure>
  );
}
