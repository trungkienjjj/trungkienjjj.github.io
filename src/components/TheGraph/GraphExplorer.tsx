import { useState } from "react";
import { featuredProjectEdges, featuredProjects } from "../../data/projects";

const topic = {
  vision: "Vision & language",
  reasoning: "Reasoning & retrieval",
  systems: "Systems & data"
} as const;

const points = [
  { x: 25, y: 25 },
  { x: 75, y: 25 },
  { x: 25, y: 75 },
  { x: 75, y: 75 }
];

export function GraphExplorer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const activeId = hoveredId ?? focusedId ?? selectedId;
  const selected = featuredProjects.find((project) => project.id === selectedId);
  const edges = featuredProjectEdges.filter(({ source, target }) => source === activeId || target === activeId);
  const related = new Set(edges.map(({ source, target }) => source === activeId ? target : source));
  const sharedTags = [...new Set(edges.flatMap((edge) => edge.sharedTags))];

  return (
    <section className="project-map" aria-labelledby="project-map-title">
      <header className="border-b border-line/10 px-5 py-4 sm:px-6">
        <h2 id="project-map-title" className="font-mono text-base font-semibold text-paper">Project map</h2>
        <p className="mt-1 text-sm text-muted">Select a project to see its connections and open its case study.</p>
      </header>

      <div className="project-map-grid">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="project-map-lines" aria-hidden="true">
          {edges.map((edge) => {
            const source = points[featuredProjects.findIndex((project) => project.id === edge.source)];
            const target = points[featuredProjects.findIndex((project) => project.id === edge.target)];
            return (
              <line key={edge.source + edge.target} x1={source.x} y1={source.y} x2={target.x} y2={target.y}
                vectorEffect="non-scaling-stroke" strokeDasharray={edge.crossCluster ? "4 5" : undefined} />
            );
          })}
        </svg>
        {featuredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-map-node"
            data-cluster={project.cluster}
            data-related={related.has(project.id) || undefined}
            aria-pressed={selectedId === project.id}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setHoveredId(project.id);
            }}
            onPointerLeave={() => setHoveredId(null)}
            onFocus={() => setFocusedId(project.id)}
            onBlur={() => setFocusedId(null)}
            onClick={() => setSelectedId((current) => current === project.id ? null : project.id)}
          >
            <span className="project-map-topic"><span aria-hidden="true" />{topic[project.cluster]}</span>
            <span className="font-mono text-sm font-semibold leading-tight text-paper sm:text-base">{project.graphLabel}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-line/10 px-5 py-4 sm:px-6">
        <p className="min-h-5 text-xs leading-5 text-muted">
          {sharedTags.length > 0 ? "Shared topics · " + sharedTags.join(", ") : "Lines show topics shared by two projects."}
        </p>
        <div className="mt-2 flex min-h-8 flex-wrap items-center justify-between gap-x-4 gap-y-1" aria-live="polite">
          {selected ? (
            <>
              <span className="text-xs text-muted">{selected.type}</span>
              <a className="text-link py-1 font-mono text-xs font-semibold text-teal" href={"#" + selected.id}
                aria-label={"Read case study: " + selected.title}>
                Read case study <span aria-hidden="true">↓</span>
              </a>
            </>
          ) : (
            <a className="text-link py-1 font-mono text-xs font-semibold text-teal" href="#projects">
              Browse all projects <span aria-hidden="true">↓</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
