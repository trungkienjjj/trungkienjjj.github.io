import { ExternalLink } from "./ExternalLink";
import { m } from "framer-motion";
import { publicCvPath } from "../data/profile";
import { GraphExplorer } from "./TheGraph/GraphExplorer";
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
              AI Engineering & Evaluation
            </div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Nguyen Tran Trung Kien · Ho Chi Minh City, Vietnam
            </p>
            <h1 className="font-mono text-[clamp(2.75rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-paper">
              I build <span className="text-amber">measurable</span>, inspectable AI systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              I study Artificial Intelligence at HCMUS. My projects span Vietnamese OCR,
              dataset validation, and knowledge graph tooling for retrieval-augmented generation.
              I also evaluate conversational AI and check Vietnamese speech transcripts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="#projects">
                Explore work <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                className="button-secondary"
                href={publicCvPath}
                download
              >
                Download public CV
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 font-mono text-xs text-muted">
              <ExternalLink className="text-link" href="https://github.com/trungkienjjj">
                GitHub
              </ExternalLink>
              <ExternalLink className="text-link" href="https://www.linkedin.com/in/trungkienjjj/">
                LinkedIn
              </ExternalLink>
              <ExternalLink className="text-link" href="https://www.kaggle.com/nguyentrantrungkien">
                Kaggle
              </ExternalLink>
            </div>
          </m.div>

          <m.div
            {...reveal}
            transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.14 }}
            className="min-w-0"
          >
            <GraphExplorer />
          </m.div>
        </div>
      </div>
    </section>
  );
}
