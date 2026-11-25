import type { ReactNode } from "react";

export function ExternalLink({
  href,
  className,
  children
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" title="Opens in a new tab">
      {children}
      <svg viewBox="0 0 16 16" fill="none" className="external-link-icon" aria-hidden="true">
        <path d="M6.5 3H3.75A.75.75 0 0 0 3 3.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V9.5M9 3h4v4m0-4L7 9"
          stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
