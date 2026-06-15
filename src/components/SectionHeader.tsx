interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  figure?: string;
}

export function SectionHeader({ eyebrow, title, intro, figure }: SectionHeaderProps) {
  return (
    <header className="mb-10 grid gap-5 border-t border-line/10 pt-5 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <div className="mb-3 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-teal">
          {figure && <span className="text-muted">{figure}</span>}
          <span>{eyebrow}</span>
        </div>
        <h2 className="max-w-4xl font-mono text-3xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-md text-sm leading-6 text-muted md:text-right">{intro}</p>}
    </header>
  );
}
