import { m } from "framer-motion";
import { GraphExplorer } from "./TheGraph/GraphExplorer";
import { ProofStrip } from "./ProofStrip";
import { useMotionPreferences } from "../motion/MotionPreferences";

export function Hero() {
  const reducedMotion = useMotionPreferences();
  const reveal = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 }
      };

  return (
    <section id="home" className="ledger-grid scroll-mt-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-page px-5 pb-14 sm:px-7 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <m.div {...reveal} transition={{ duration: 0.55 }}>
            <div className="mb-5 inline-flex items-center gap-3 border border-teal/25 bg-teal/5 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">
              <span className="h-1.5 w-1.5 bg-teal shadow-[0_0_14px_rgb(var(--teal))]" />
              Available for AI internships
            </div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              // Ho Chi Minh City · AI / ML / Research
            </p>
            <h1 className="font-mono text-[clamp(2.75rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-paper">
              Building AI systems that are{" "}
              <span className="text-amber">measurable</span>, useful, and{" "}
              <span className="text-teal">reliable</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Final-year Artificial Intelligence undergraduate at HCMUS, expected to graduate
              in 2027. I work across multimodal AI, Vietnamese OCR, NLP, data pipelines, and
              backend systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="#projects">
                Explore projects <span aria-hidden="true">→</span>
              </a>
              <a className="button-secondary" href="mailto:nttkien080925@gmail.com">
                Email me
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 font-mono text-xs text-muted">
              <a className="text-link" href="https://github.com/trungkienjjj" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="text-link" href="https://linkedin.com/in/trungkienjjj" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="text-link" href="https://www.kaggle.com/nguyentrantrungkien" target="_blank" rel="noreferrer">
                Kaggle ↗
              </a>
            </div>
          </m.div>

          <m.div
            {...reveal}
            transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.14 }}
            className="min-w-0"
          >
            <GraphExplorer compact />
          </m.div>
        </div>
        <ProofStrip />
      </div>
    </section>
  );
}
