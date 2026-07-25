import { useEffect, useId, useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
import { select } from "d3-selection";
import {
  projectEdges,
  projects,
  type PeriodFilter,
  type Project
} from "../../data/projects";
import { useMotionPreferences } from "../../motion/MotionPreferences";
import { useClusterLayout } from "./useClusterLayout";

function matchesPeriod(project: Project, filter: PeriodFilter) {
  return filter === "all" || project.periodKey === filter;
}

function curvePath(
  source: { x?: number; y?: number },
  target: { x?: number; y?: number },
  offset: number
) {
  const sx = source.x ?? 0;
  const sy = source.y ?? 0;
  const tx = target.x ?? 0;
  const ty = target.y ?? 0;
  const mx = (sx + tx) / 2;
  const my = (sy + ty) / 2;
  const dx = tx - sx;
  const dy = ty - sy;
  const length = Math.max(Math.hypot(dx, dy), 1);
  const cx = mx - (dy / length) * offset;
  const cy = my + (dx / length) * offset;
  return `M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`;
}

export default function Graph({
  period,
  compact
}: {
  period: PeriodFilter;
  compact: boolean;
}) {
  const layout = useClusterLayout();
  const reducedMotion = useMotionPreferences();
  const svgRef = useRef<SVGSVGElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (svgRef.current) select(svgRef.current).attr("data-ready", "true");
  }, []);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId),
    [activeId]
  );

  const openProject = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <div className="overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 900 570"
        className={`w-full ${compact ? "min-h-[360px]" : "min-h-[440px]"}`}
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>Project relationship graph</title>
        <desc id={descriptionId}>
          {projects.length} portfolio projects grouped into reasoning and retrieval, vision and language,
          and systems and data. Lines connect projects with shared tags.
        </desc>
        <g aria-hidden="true">
          <text x="485" y="42" className="graph-cluster-label">REASONING + RETRIEVAL</text>
          <text x="70" y="62" className="graph-cluster-label">VISION + LANGUAGE</text>
          <text x="355" y="550" className="graph-cluster-label">SYSTEMS + DATA</text>
        </g>

        <g aria-hidden="true">
          {projectEdges.map((edge, index) => {
            const source = layout.get(edge.source)!;
            const target = layout.get(edge.target)!;
            const sourceProject = projects.find((project) => project.id === edge.source)!;
            const targetProject = projects.find((project) => project.id === edge.target)!;
            const visible =
              matchesPeriod(sourceProject, period) && matchesPeriod(targetProject, period);
            const connected =
              !activeId || activeId === edge.source || activeId === edge.target;
            return (
              <path
                key={`${edge.source}-${edge.target}`}
                d={curvePath(source, target, (index % 3 - 1) * 18)}
                className={edge.crossCluster ? "graph-edge-cross" : "graph-edge"}
                style={{ opacity: visible && connected ? 0.68 : 0.1 }}
              />
            );
          })}
        </g>

        {projects.map((project, index) => {
          const node = layout.get(project.id)!;
          const isVisible = matchesPeriod(project, period);
          const isActive = activeId === project.id;
          return (
            <m.g
              key={project.id}
              role="link"
              tabIndex={0}
              aria-label={`${project.graphLabel}. ${project.title}. ${project.type}. ${project.headlineMetric}`}
              onFocus={() => setActiveId(project.id)}
              onBlur={() => setActiveId(null)}
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => openProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(project.id);
                }
              }}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, x: 450 - (node.x ?? 0), y: 285 - (node.y ?? 0), scale: 0.7 }
              }
              animate={{ opacity: isVisible ? 1 : 0.25, x: 0, y: 0, scale: isActive ? 1.08 : 1 }}
              transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.055 }}
              className="graph-node cursor-pointer outline-none"
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.radius + (isActive ? 5 : 0)}
                className={project.cluster === "vision" ? "graph-node-amber" : "graph-node-teal"}
              />
              <circle cx={node.x} cy={node.y} r="4" className="fill-paper" />
              <text x={node.x} y={(node.y ?? 0) + node.radius + 19} textAnchor="middle" className="graph-node-label">
                {project.graphLabel}
              </text>
              <text x={node.x} y={(node.y ?? 0) + node.radius + 34} textAnchor="middle" className="graph-node-period">
                {project.period}
              </text>
            </m.g>
          );
        })}
      </svg>

      <div className="pointer-events-none min-h-14 border-t border-line/10 bg-ink/75 px-4 py-3">
        {activeProject ? (
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-teal">
                {activeProject.type}
              </p>
              <p className="mt-1 text-xs text-paper">{activeProject.headlineMetric}</p>
            </div>
            <span className="font-mono text-[0.62rem] text-amber">enter ↘</span>
          </div>
        ) : (
          <p className="font-mono text-[0.65rem] text-muted">
            hover or focus a node to inspect · select to open the case study
          </p>
        )}
      </div>
    </div>
  );
}
