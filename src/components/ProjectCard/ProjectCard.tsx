import { lazy, Suspense } from "react";
import type { Project } from "../../data/projects";
import { DeferredRender } from "../DeferredRender";

const HrMiniChart = lazy(() => import("./HrMiniChart"));

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={project.id} className="project-card scroll-mt-24">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className="role-badge">{project.type}</span>
        <span className="font-mono text-[0.62rem] text-amber">{project.period}</span>
      </div>
      <h3 className="mt-6 font-mono text-xl font-semibold leading-tight tracking-[-0.03em] text-paper">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
      <p className="mt-5 border-l border-teal/35 pl-3 font-mono text-xs leading-5 text-teal">
        {project.headlineMetric}
      </p>
      {project.id === "hr-analytics" && (
        <DeferredRender fallback={<div className="mt-5 h-44 bg-line/5" />}>
          <Suspense fallback={<div className="mt-5 h-44 animate-pulse bg-line/5" />}>
            <HrMiniChart />
          </Suspense>
        </DeferredRender>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span className="tag" key={tech}>{tech}</span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6">
        {project.links?.map((link) => (
          <a
            key={link.href}
            className="text-link inline-flex min-h-6 items-center font-mono text-xs text-teal"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
