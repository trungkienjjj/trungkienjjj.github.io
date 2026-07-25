export function FunnelChart() {
  return (
    <figure className="border border-line/10 bg-surface/60 p-5 sm:p-7">
      <figcaption className="mb-8 flex items-center justify-between gap-4 border-b border-line/10 pb-3">
        <span className="font-mono text-xs font-semibold text-paper">Page-to-line pipeline</span>
        <span className="font-mono text-[0.62rem] text-muted">artifact-backed counts</span>
      </figcaption>

      <div className="space-y-7">
        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <span className="font-mono text-2xl font-semibold text-amber">235</span>
            <span className="text-xs text-muted">source page images</span>
          </div>
          <div className="h-8 w-[42%] border border-amber/40 bg-amber/10" />
        </div>

        <div className="flex justify-center font-mono text-teal" aria-hidden="true">down: segment - map - validate</div>

        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <span className="font-mono text-3xl font-semibold text-teal">8,687</span>
            <span className="text-xs text-muted">aligned text lines</span>
          </div>
          <div className="h-12 border border-teal/40 bg-teal/[0.12]" />
        </div>
      </div>

      <p className="mt-8 border-t border-line/10 pt-4 text-sm leading-6 text-muted">
        Geometry and export checks make data defects reviewable; mapping accuracy is not
        published until a reproducible measurement is confirmed.
      </p>
    </figure>
  );
}
