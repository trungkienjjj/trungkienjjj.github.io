import type { Project } from "../../data/projects";
import type { ReactNode } from "react";

export function CaseIntro({
  project,
  label,
  children
}: {
  project: Project;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="role-badge">{project.type}</span>
        <span className="eyebrow-badge">{project.period}</span>
      </div>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">{label}</p>
      <h3 className="mt-3 font-mono text-3xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-4xl">
        {project.title}
      </h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-muted">{children}</div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      {project.links && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="text-link font-mono text-xs text-teal"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
