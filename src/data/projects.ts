export type ProjectPeriod = "2025" | "2025-2026" | "2026";
export type ProjectCluster = "reasoning" | "vision" | "systems";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  graphLabel: string;
  type: string;
  period: string;
  periodKey: ProjectPeriod;
  cluster: ProjectCluster;
  featured: boolean;
  graphTags: string[];
  tech: string[];
  headlineMetric: string;
  summary: string;
  contributions: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "deepseek-ocr",
    title: "DeepSeek-OCR Vietnamese Adaptation",
    graphLabel: "DeepSeek-OCR",
    type: "Individual coursework",
    period: "2025-2026",
    periodKey: "2025-2026",
    cluster: "vision",
    featured: true,
    graphTags: ["OCR", "LoRA/PEFT", "Multimodal", "Evaluation"],
    tech: ["PyTorch", "DeepSeek-OCR", "LoRA", "Unsloth", "Transformers", "PEFT"],
    headlineMetric: "Mean CER 38.49% -> 12.15% (-68.4% relative)",
    summary:
      "A reproducible rank-16 LoRA adaptation and evaluation pipeline for Vietnamese handwritten line recognition.",
    contributions: [
      "Fine-tuned DeepSeek-OCR with 16-bit LoRA rank 16 on 5,783 UIT-HWDB line images.",
      "Built dynamic crops, global image views, response-only loss masking, and a custom multimodal collator.",
      "Evaluated 1,446 held-out samples with distribution, timeout, hallucination, and error-type analysis."
    ],
    links: [
      {
        label: "Training notebook",
        href: "https://www.kaggle.com/code/nguyentrantrungkien/01-finetuning-model"
      }
    ]
  },
  {
    id: "historical-ocr",
    title: "Historical Vietnamese OCR Dataset Pipeline",
    graphLabel: "Historical OCR",
    type: "Completed contribution - team coursework",
    period: "2025",
    periodKey: "2025",
    cluster: "vision",
    featured: true,
    graphTags: ["OCR", "Data Engineering"],
    tech: ["Python", "JavaScript", "Regex", "Bounding boxes", "Dataset QA"],
    headlineMetric: "8,687 aligned lines from 235 source page images",
    summary:
      "A semi-automatic pipeline that converts scanned historical pages into aligned line crops, bounding boxes, and Unicode labels.",
    contributions: [
      "Produced 8,687 aligned text lines from 235 artifact-backed source page images.",
      "Built an interactive line-break editor and deterministic text-to-box mapping tools.",
      "Added geometry normalization, footer filtering, box merging, and crop/export completeness checks."
    ],
    links: [
      {
        label: "Team dataset repository",
        href: "https://github.com/Hieuabssy/VNeseOCR_dataset"
      }
    ]
  },
  {
    id: "legal-graph",
    title: "Vietnamese Legal Knowledge Graph",
    graphLabel: "Legal KG",
    type: "Team contribution - working course prototype",
    period: "2026",
    periodKey: "2026",
    cluster: "reasoning",
    featured: true,
    graphTags: ["Neo4j", "Data Engineering", "Evaluation"],
    tech: ["Neo4j", "Cypher", "Docker", "Python", "PowerShell", "WSL"],
    headlineMetric: "7,833,848 node-export rows / 19,994,844 relationship-export rows",
    summary:
      "Import tooling, graph integrity audits, and LLM evaluation artifacts for a Vietnamese legal knowledge-graph prototype.",
    contributions: [
      "Developed preprocessing and Neo4j bulk-import tooling for the team graph.",
      "Built graph audit checks that surfaced 142 duplicate identifiers.",
      "Contributed LLM evaluation artifacts, tests, and teammate setup documentation."
    ]
  },
  {
    id: "spendsense",
    title: "SpendSense AI Investment Platform",
    graphLabel: "SpendSense",
    type: "Team contribution - working prototype",
    period: "2026",
    periodKey: "2026",
    cluster: "systems",
    featured: true,
    graphTags: ["FastAPI", "React/TS", "Data Engineering"],
    tech: ["FastAPI", "React", "TypeScript", "Gemini", "ChromaDB", "Market data"],
    headlineMetric: "Investment workflow across Vietnamese equities, crypto, and gold",
    summary:
      "An AI-assisted personal-finance platform spanning asset entry, allocation guidance, market data, and report generation.",
    contributions: [
      "Owned investment and robo-advisor flows across FastAPI and React/TypeScript.",
      "Integrated compatible market-data paths for Vietnamese equities, crypto, and gold.",
      "Contributed reports, frontend behavior, resilience fixes, and regression retesting."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/4-useless-student/Spend-Sense-AI"
      }
    ]
  },
  {
    id: "weather-monitor",
    title: "Weather Monitor Data Platform",
    graphLabel: "Weather",
    type: "Team contribution - working prototype",
    period: "2026",
    periodKey: "2026",
    cluster: "systems",
    featured: false,
    graphTags: ["FastAPI", "Data Engineering", "Evaluation"],
    tech: ["Python", "FastAPI", "Forecasting", "Anomaly detection", "Dashboard"],
    headlineMetric: "Forecasting, anomaly detection, and AI-summary fallbacks",
    summary:
      "A weather-monitoring platform that connects forecast and anomaly outputs to an interactive dashboard.",
    contributions: [
      "Contributed forecast and anomaly-detection workflows.",
      "Implemented AI-summary fallbacks and dashboard integration."
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/trungkienjjj/weather-monitor-dashboard"
      }
    ]
  },
  {
    id: "hr-analytics",
    title: "HR Analytics from Scratch",
    graphLabel: "HR Analytics",
    type: "Individual coursework",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Evaluation"],
    tech: ["NumPy", "Logistic regression", "SMOTE", "Vectorization"],
    headlineMetric: "NumPy-only model and SMOTE pipeline",
    summary:
      "A from-scratch binary-classification workflow with explicit preprocessing, optimization, and baseline comparison.",
    contributions: [
      "Implemented preprocessing, stable binary cross-entropy, gradient descent, and SMOTE from scratch.",
      "Compared the custom model with a scikit-learn baseline."
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/trungkienjjj/HR_Analytics_Project"
      }
    ]
  },
  {
    id: "netflix-recommender",
    title: "Netflix Content Analytics and Recommender",
    graphLabel: "Netflix Recsys",
    type: "Two-person coursework - project lead",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Retrieval", "Data Visualization"],
    tech: ["Python", "Pandas", "TF-IDF", "Cosine similarity", "Data visualization"],
    headlineMetric: "Content analysis with TF-IDF retrieval",
    summary:
      "A reproducible catalogue study paired with a content-based recommendation workflow.",
    contributions: [
      "Led the two-person course project across cleaning, analysis, research questions, and reporting.",
      "Built the TF-IDF and cosine-similarity recommendation workflow."
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/trungkienjjj/ds-netflix-analysis"
      }
    ]
  },
  {
    id: "algorithm-benchmark",
    title: "Swarm Intelligence and Search Benchmark",
    graphLabel: "Algorithm Lab",
    type: "Team contribution - completed coursework",
    period: "2025",
    periodKey: "2025",
    cluster: "reasoning",
    featured: false,
    graphTags: ["Evaluation", "Optimization"],
    tech: ["Python", "PSO", "ABC", "ACO", "A*", "Statistical evaluation"],
    headlineMetric: "Optimization and search benchmark framework",
    summary:
      "A shared experimental framework for swarm-intelligence and classical search methods.",
    contributions: [
      "Contributed implementations and matching benchmark commits.",
      "Supported reproducible experiment execution and result inspection."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/quanpro147/HCMUS-CSAI-Project-1"
      }
    ]
  },
  {
    id: "model-merging",
    title: "Model Merging for Image Classification",
    graphLabel: "Model Merging",
    type: "Team contribution",
    period: "2025",
    periodKey: "2025",
    cluster: "vision",
    featured: false,
    graphTags: ["Evaluation", "Multimodal"],
    tech: ["PyTorch", "Model merging", "Image classification", "Experiment tracking"],
    headlineMetric: "Evaluation workflow for merged classifiers",
    summary:
      "A team experiment comparing model-merging approaches for image classification.",
    contributions: [
      "Contributed evaluation and experiment workflow code.",
      "Kept personal contribution wording separate from team-level results."
    ]
  },
  {
    id: "wdi-dashboard",
    title: "World Development Indicators Dashboard",
    graphLabel: "WDI Tableau",
    type: "Team project - documented 25% contribution",
    period: "2026",
    periodKey: "2026",
    cluster: "systems",
    featured: false,
    graphTags: ["Data Visualization", "Data Engineering"],
    tech: ["Tableau", "Python", "Pandas", "World Bank WDI", "LaTeX"],
    headlineMetric: "Renewable-energy analysis with documented ownership",
    summary:
      "A Tableau and Python study of development indicators, emissions, and renewable-energy transition.",
    contributions: [
      "Owned the renewable-energy transition analysis as a documented 25% contribution.",
      "Contributed analysis views, report content, and the demo."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/tunah72/world-development-indicators"
      }
    ]
  },
  {
    id: "vietsport",
    title: "VietSport Sports Center Database",
    graphLabel: "VietSport DB",
    type: "Team contribution - completed coursework",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Data Engineering"],
    tech: ["SQL Server", "T-SQL", "Stored procedures", "Transactions", "Concurrency"],
    headlineMetric: "Stored procedures and transaction/concurrency behavior",
    summary:
      "A relational sports-center system with transaction-aware business workflows.",
    contributions: [
      "Implemented stored procedures for operational workflows.",
      "Worked on transaction and concurrency behavior in SQL Server."
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/trungkienjjj/sports-center-db-portfolio"
      }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const compactProjects = projects.filter((project) => !project.featured);

export interface ProjectEdge {
  source: string;
  target: string;
  sharedTags: string[];
  crossCluster: boolean;
}

export const projectEdges: ProjectEdge[] = projects.flatMap((source, index) =>
  projects.slice(index + 1).flatMap((target) => {
    const sharedTags = source.graphTags.filter((tag) => target.graphTags.includes(tag));
    return sharedTags.length
      ? [
          {
            source: source.id,
            target: target.id,
            sharedTags,
            crossCluster: source.cluster !== target.cluster
          }
        ]
      : [];
  })
);

export const periodOptions = [
  { value: "all", label: "All" },
  { value: "2025", label: "2025" },
  { value: "2025-2026", label: "2025-2026" },
  { value: "2026", label: "2026" }
] as const;

export type PeriodFilter = (typeof periodOptions)[number]["value"];
