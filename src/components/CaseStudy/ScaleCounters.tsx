import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useMotionPreferences } from "../../motion/MotionPreferences";

interface CounterProps {
  value: number;
  label: string;
}

function Counter({ value, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const reducedMotion = useMotionPreferences();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || reducedMotion) {
      if (reducedMotion) setDisplay(value);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, value]);

  return (
    <div ref={ref} className="border-l border-line/10 pl-4">
      <strong className="block font-mono text-2xl font-semibold tracking-[-0.04em] text-teal sm:text-3xl">
        {Math.round(display).toLocaleString("en-US")}
      </strong>
      <span className="mt-2 block text-xs text-muted">{label}</span>
    </div>
  );
}

export function ScaleCounters() {
  return (
    <div className="relative overflow-hidden border border-line/10 bg-surface/60 p-5 sm:p-7">
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 700 420" aria-hidden="true">
        {Array.from({ length: 36 }, (_, index) => {
          const x = 35 + ((index * 83) % 630);
          const y = 35 + ((index * 137) % 350);
          return <circle key={index} cx={x} cy={y} r={index % 5 === 0 ? 3 : 1.5} className="fill-teal" />;
        })}
        <path d="M35 250 Q180 70 340 205 T665 120 M70 350 Q250 220 420 320 T650 260" className="fill-none stroke-amber" strokeWidth="1" />
      </svg>
      <div className="relative">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
          artifact export and audit counts
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Counter value={7833848} label="node-export rows" />
          <Counter value={19994844} label="relationship-export rows" />
          <Counter value={142} label="duplicate identifiers surfaced" />
        </div>
        <p className="mt-10 border-t border-line/10 pt-4 text-xs leading-5 text-muted">
          Export-row totals are not presented as live database runtime counts.
        </p>
      </div>
    </div>
  );
}
