const proof = [
  { value: "68.4% CER ↓", label: "DeepSeek-OCR", href: "#deepseek-ocr", color: "text-amber" },
  { value: "8,687 lines", label: "Historical OCR", href: "#historical-ocr", color: "text-teal" },
  { value: "7.8M nodes", label: "Legal knowledge graph", href: "#legal-graph", color: "text-teal" },
  { value: "3.81 GPA", label: "Education", href: "#education", color: "text-amber" }
];

export function ProofStrip() {
  return (
    <div className="mt-12 grid border-y border-line/10 sm:grid-cols-2 lg:grid-cols-4">
      {proof.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex items-baseline justify-between gap-4 border-b border-line/10 px-3 py-4 transition hover:bg-surface/60 sm:border-l sm:first:border-l-0 lg:border-b-0"
        >
          <strong className={`font-mono text-sm font-semibold ${item.color}`}>{item.value}</strong>
          <span className="text-right text-xs text-muted group-hover:text-paper">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
