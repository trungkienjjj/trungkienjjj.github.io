import { lazy, Suspense } from "react";
import { projects } from "../../data/projects";
import { DeferredRender } from "../DeferredRender";
import { CaseIntro } from "./CaseIntro";

const OCRComparisonChart = lazy(() => import("./OCRComparisonChart"));
const project = projects.find((item) => item.id === "deepseek-ocr")!;

export function DeepSeekCaseStudy() {
  return (
    <article id={project.id} className="case-shell">
      <div className="case-grid">
        <CaseIntro project={project} label="// case 01 · adaptation + evaluation">
          <p>
            Fine-tuned DeepSeek-OCR with rank-16 LoRA and reduced mean Character Error Rate
            from <strong className="text-paper">38.49%</strong> to{" "}
            <strong className="text-teal">12.15%</strong>, a{" "}
            <strong className="text-amber">68.4% relative reduction</strong>.
          </p>
          <p>
            The work pairs model adaptation with a reproducible evaluation suite over 1,446
            held-out images, so improvement is visible across the distribution rather than only
            in one average.
          </p>
        </CaseIntro>

        <figure className="border border-line/10 bg-surface/60 p-4 sm:p-6">
          <figcaption className="mb-4 flex items-center justify-between gap-4 border-b border-line/10 pb-3">
            <span className="font-mono text-xs font-semibold text-paper">Base → fine-tuned</span>
            <span className="font-mono text-[0.62rem] text-muted">lower CER is better</span>
          </figcaption>
          <DeferredRender fallback={<div className="h-[370px] bg-line/5" />}>
            <Suspense fallback={<div className="h-[370px] animate-pulse bg-line/5" />}>
              <OCRComparisonChart />
            </Suspense>
          </DeferredRender>
          <div className="mt-4 grid gap-3 border-t border-line/10 pt-4 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="font-mono text-3xl font-semibold text-amber">5 → 0</div>
            <p className="text-sm text-muted">
              30-second inference timeouts, base model versus fine-tuned model.
            </p>
          </div>
        </figure>
      </div>

      <div className="mt-8 grid gap-5 border-l border-teal/30 pl-5 text-sm leading-7 text-muted lg:ml-[40%] lg:grid-cols-2">
        <p>
          The evaluation harness reports substitution, deletion, and insertion counts, exact
          matches, CER quality buckets, failed or empty outputs, and excessive-length
          hallucinations.
        </p>
        <p>
          Best/worst-case inspection and per-sample failure traces make the remaining
          punctuation, diacritic, and low-quality-image limitations inspectable.
        </p>
      </div>
    </article>
  );
}
