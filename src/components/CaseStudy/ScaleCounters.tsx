import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useMotionPreferences } from "../../motion/MotionPreferences";

interface CounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function Counter({ value, label, prefix = "", suffix = "", decimals = 0 }: CounterProps) {
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
        {prefix}
        {display.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        })}
        {suffix}
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
          aggregate graph scale
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Counter value={7833706} label="nodes" />
          <Counter value={19994844} label="relationships" />
          <Counter value={1.5} decimals={1} prefix="~" suffix=" GB" label="source data" />
          <Counter value={15} prefix="~" suffix=" min" label="local import" />
        </div>
      </div>
    </div>
  );
}
