import { useMemo, useState } from "react";
import { projects, type PeriodFilter } from "../../data/projects";

function matchesPeriod(projectPeriod: string, filter: PeriodFilter) {
  return filter === "all" || projectPeriod === filter;
}

export function GraphListFallback({
  period,
  compact
}: {
  period: PeriodFilter;
  compact: boolean;
}) {
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter(
      (project) =>
        matchesPeriod(project.periodKey, period) &&
        [project.title, project.type, ...project.graphTags, ...project.tech]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
    );
  }, [period, query]);

  return (
    <div className={compact ? "p-4" : "p-5"}>
      <label className="block">
        <span className="sr-only">Search projects</span>
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects or technologies"
        />
      </label>
      <div className={`mt-3 grid gap-2 ${compact ? "max-h-[340px] overflow-auto pr-1" : "sm:grid-cols-2"}`}>
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="group border border-line/10 bg-ink/35 p-3 transition hover:border-teal/40 hover:bg-teal/5 focus-visible:border-teal/60"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-mono text-xs font-semibold text-paper group-hover:text-teal">
                {project.title}
              </h3>
              <span className="font-mono text-[0.6rem] text-amber">{project.period}</span>
            </div>
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">{project.headlineMetric}</p>
            <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-muted">
              {project.type}
            </p>
          </a>
        ))}
      </div>
      {!visibleProjects.length && (
        <p className="py-8 text-center font-mono text-xs text-muted">No matching projects.</p>
      )}
    </div>
  );
}
