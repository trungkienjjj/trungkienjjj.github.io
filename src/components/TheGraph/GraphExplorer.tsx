import { lazy, Suspense, useEffect, useState } from "react";
import type { PeriodFilter } from "../../data/projects";
import { periodOptions } from "../../data/projects";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useMotionPreferences } from "../../motion/MotionPreferences";
import { GraphListFallback } from "./GraphListFallback";

const Graph = lazy(() => import("./Graph"));

export function GraphExplorer({ compact = false }: { compact?: boolean }) {
  const isNarrow = useMediaQuery("(max-width: 767px)");
  const reducedMotion = useMotionPreferences();
  const [view, setView] = useState<"graph" | "list">(() =>
    window.matchMedia("(max-width: 767px)").matches ? "list" : "graph"
  );
  const [period, setPeriod] = useState<PeriodFilter>("all");

  useEffect(() => {
    if (isNarrow || reducedMotion) setView("list");
  }, [isNarrow, reducedMotion]);

  return (
    <div className={`graph-shell ${compact ? "graph-shell-compact" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/10 px-4 py-3">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
            // fig. 01
          </p>
          <h2 className="font-mono text-sm font-semibold text-paper">The Graph</h2>
        </div>
        <div className="flex gap-1" aria-label="Project view">
          {(["graph", "list"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setView(option)}
              className={`segment-button ${view === option ? "segment-button-active" : ""}`}
              aria-pressed={view === option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-line/10 px-4 py-3">
        <span className="mr-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
          time
        </span>
        {periodOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`time-button ${period === option.value ? "time-button-active" : ""}`}
            onClick={() => setPeriod(option.value)}
            aria-pressed={period === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>

      {view === "graph" ? (
        <Suspense
          fallback={
            <div className="grid min-h-[360px] place-items-center font-mono text-xs text-muted">
              plotting project map...
            </div>
          }
        >
          <Graph period={period} compact={compact} />
        </Suspense>
      ) : (
        <GraphListFallback period={period} compact={compact} />
      )}
    </div>
  );
}
