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
              AI / ML / Evaluation
            </div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              // Nguyen Tran Trung Kien · Ho Chi Minh City, Vietnam
            </p>
            <h1 className="font-mono text-[clamp(2.75rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-paper">
              I build <span className="text-amber">measurable</span>, inspectable AI systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Artificial Intelligence undergraduate at HCMUS, with evidence-backed work in
              Vietnamese OCR, evaluation, knowledge graphs, data pipelines, and reliable Python
              services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="#projects">
                Explore work <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                className="button-secondary"
                href="/assets/NguyenTranTrungKien_AI_ML_Public_2026-07-21.pdf"
                download
              >
                Download public CV
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 font-mono text-xs text-muted">
              <a className="text-link" href="https://github.com/trungkienjjj" target="_blank" rel="noreferrer">
                GitHub [new tab]
              </a>
              <a className="text-link" href="https://linkedin.com/in/trungkienjjj" target="_blank" rel="noreferrer">
                LinkedIn [new tab]
              </a>
              <a className="text-link" href="https://www.kaggle.com/nguyentrantrungkien" target="_blank" rel="noreferrer">
                Kaggle [new tab]
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
