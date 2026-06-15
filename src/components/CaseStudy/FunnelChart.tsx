export function FunnelChart() {
  return (
    <figure className="border border-line/10 bg-surface/60 p-5 sm:p-7">
      <figcaption className="mb-8 flex items-center justify-between gap-4 border-b border-line/10 pb-3">
        <span className="font-mono text-xs font-semibold text-paper">Page-to-line pipeline</span>
        <span className="font-mono text-[0.62rem] text-muted">target marker shown</span>
      </figcaption>

      <div className="space-y-7">
        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <span className="font-mono text-2xl font-semibold text-amber">240</span>
            <span className="text-xs text-muted">scanned pages</span>
          </div>
          <div className="h-8 w-[42%] border border-amber/40 bg-amber/10" />
        </div>

        <div className="flex justify-center font-mono text-teal" aria-hidden="true">↓ segment · map · validate</div>

        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <span className="font-mono text-3xl font-semibold text-teal">8,687</span>
            <span className="text-xs text-muted">training-ready text-line crops</span>
          </div>
          <div className="relative h-12 border border-teal/40 bg-teal/[0.12]">
            <div className="absolute inset-y-0 left-[34.53%] border-l-2 border-dashed border-amber" />
            <span className="absolute left-[34.53%] top-full mt-2 -translate-x-1/2 font-mono text-[0.6rem] text-amber">
              target 3,000
            </span>
          </div>
          <p className="mt-8 text-right font-mono text-xs text-amber">+189.6% beyond target</p>
        </div>
      </div>

      <div className="mt-8 border-t border-line/10 pt-4">
        <strong className="font-mono text-xl text-paper">&gt;99%</strong>
        <span className="ml-3 text-sm text-muted">estimated mapping accuracy</span>
      </div>
    </figure>
  );
}
