import { SectionHeader } from "./SectionHeader";

const capabilities = [
  {
    name: "Generative AI & LLMs",
    tags: ["Transformers", "PEFT/LoRA", "Prompt design", "LangChain"],
    links: [["DeepSeek-OCR", "#deepseek-ocr"], ["Temporal RAG", "#agentic-rag"]]
  },
  {
    name: "AI Agents & RAG",
    tags: ["LangGraph", "State contracts", "Fallback routing", "Abstention"],
    links: [["Temporal RAG", "#agentic-rag"], ["Video retrieval", "#video-retrieval"]]
  },
  {
    name: "Multimodal AI & OCR",
    tags: ["DeepSeek-OCR", "Image preprocessing", "Bounding boxes", "Embeddings"],
    links: [["Model adaptation", "#deepseek-ocr"], ["Dataset pipeline", "#historical-ocr"]]
  },
  {
    name: "AI Evaluation & Reliability",
    tags: ["CER", "Percentiles", "Hallucination review", "Timeout monitoring"],
    links: [["OCR evaluation", "#deepseek-ocr"], ["HR comparison", "#hr-analytics"]]
  },
  {
    name: "Backend & Data Engineering",
    tags: ["Python", "FastAPI", "SQL", "ETL", "Docker"],
    links: [["Weather platform", "#weather-monitor"], ["VietSport DB", "#vietsport"]]
  },
  {
    name: "Knowledge Graphs & Retrieval",
    tags: ["Neo4j", "Cypher", "FAISS", "ChromaDB"],
    links: [["Legal KG", "#legal-graph"], ["Temporal RAG", "#agentic-rag"]]
  },
  {
    name: "MLOps & Developer Tools",
    tags: ["Git/GitHub", "Kaggle", "Azure ML", "Reproducible notebooks"],
    links: [["DeepSeek-OCR", "#deepseek-ocr"], ["Legal KG", "#legal-graph"]]
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="ledger-section">
      <div className="mx-auto max-w-page px-5 sm:px-7">
        <SectionHeader
          figure="// fig. 07"
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
                Demonstrated in →
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
