import { ExternalLink } from "../ExternalLink";
import type { Project } from "../../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <details id={project.id} className="project-card group scroll-mt-24">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <span className="font-mono text-sm font-semibold leading-snug text-paper">{project.title}</span>
        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-teal transition-transform group-open:rotate-180" aria-hidden="true">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="border-t border-line/10 px-4 pb-5 pt-4 sm:px-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="role-badge">{project.type}</span>
          <span className="font-mono text-[0.62rem] text-amber">{project.period}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
        <p className="mt-4 border-l border-teal/35 pl-3 font-mono text-xs leading-5 text-teal">
          {project.headlineMetric}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>
        {project.links && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {project.links.map((link) => (
              <ExternalLink key={link.href} className="text-link min-h-6 font-mono text-xs text-teal" href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}
