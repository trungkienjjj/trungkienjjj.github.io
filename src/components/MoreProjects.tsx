import { useMemo, useState } from "react";
import { compactProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { SectionHeader } from "./SectionHeader";

const filters = [
  "All",
  "Evaluation",
  "Data Engineering",
  "Data Visualization",
  "Optimization",
  "FastAPI"
] as const;

export function MoreProjects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return compactProjects.filter((project) => {
      const matchesFilter =
        filter === "All" ||
        project.graphTags.includes(filter) ||
        project.tech.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()));
      const matchesQuery = [project.title, project.summary, project.type, ...project.tech, ...project.graphTags]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section className="pt-10">
      <SectionHeader
        eyebrow="Project catalog"
        title="More projects"
        intro="Search by project, technology, or theme."
      />
      <div className="mb-7 grid gap-3 md:grid-cols-[1fr_20rem]">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={`time-button ${filter === item ? "time-button-active" : ""}`}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
        <label>
          <span className="sr-only">Search compact projects</span>
          <input
            className="search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or technologies"
          />
        </label>
      </div>
      <div className="grid items-start gap-2 md:grid-cols-2">
        {visible.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      {!visible.length && (
        <p className="border border-line/10 py-10 text-center font-mono text-xs text-muted">
          No projects match this query.
        </p>
      )}
    </section>
  );
}
