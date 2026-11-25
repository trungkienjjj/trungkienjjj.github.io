import { SectionHeader } from "./SectionHeader";

const capabilities = [
  {
    name: "Multimodal AI and OCR",
    tags: ["DeepSeek-OCR", "PyTorch", "LoRA/PEFT", "Image preprocessing"],
    links: [["Model adaptation", "#deepseek-ocr"], ["Dataset pipeline", "#historical-ocr"]]
  },
  {
    name: "Evaluation and reliability",
    tags: ["CER", "Error analysis", "Failure traces", "Regression checks"],
    links: [["OCR evaluation", "#deepseek-ocr"], ["Legal graph audit", "#legal-graph"]]
  },
  {
    name: "Knowledge graphs",
    tags: ["Neo4j", "Cypher", "Bulk import", "Integrity audits"],
    links: [["Vietnamese Legal KG", "#legal-graph"]]
  },
  {
    name: "Backend and product systems",
    tags: ["Python", "FastAPI", "React", "TypeScript", "Resilience"],
    links: [["SpendSense", "#spendsense"], ["Weather platform", "#weather-monitor"]]
  },
  {
    name: "Data engineering",
    tags: ["SQL", "ETL", "Docker", "Dataset QA", "Transactions"],
    links: [["Historical OCR", "#historical-ocr"], ["VietSport DB", "#vietsport"]]
  },
  {
    name: "Applied machine learning",
    tags: ["NumPy", "Retrieval", "Optimization", "Experiment design"],
    links: [["HR analytics", "#hr-analytics"], ["Algorithm benchmark", "#algorithm-benchmark"]]
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="ledger-section">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills linked to the work that demonstrates them."
        />
        <div className="grid gap-px bg-line/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.name} className="bg-ink p-5 sm:p-6">
              <h3 className="font-mono text-lg font-semibold text-paper">{capability.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <p className="mt-7 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                Demonstrated in -&gt;
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                {capability.links.map(([label, href]) => (
                  <a className="text-link text-xs text-teal" key={href} href={href}>{label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
