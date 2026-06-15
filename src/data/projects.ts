export type ProjectPeriod = "2025" | "2025-2026" | "2026-present";
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
    type: "Individual",
    period: "2025-2026",
    periodKey: "2025-2026",
    cluster: "vision",
    featured: true,
    graphTags: ["OCR", "LoRA/PEFT", "Multimodal", "Evaluation"],
    tech: ["PyTorch", "DeepSeek-OCR", "LoRA", "Unsloth", "Transformers", "PEFT"],
    headlineMetric: "Mean CER 38.49% -> 12.15% (-68.4%)",
    summary:
      "A reproducible LoRA adaptation and evaluation pipeline for Vietnamese handwritten line recognition.",
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
    id: "agentic-rag",
    title: "Agentic Temporal RAG",
    graphLabel: "Temporal RAG",
    type: "Research prototype",
    period: "2026-Present",
    periodKey: "2026-present",
    cluster: "reasoning",
    featured: true,
    graphTags: ["Agents", "Neo4j", "FAISS", "Evaluation"],
    tech: ["LangGraph", "Neo4j", "FAISS", "Cypher", "Temporal QA"],
    headlineMetric: "5-stage architecture designed and prototyped",
    summary:
      "A reliability-oriented architecture for multi-hop temporal reasoning with graph retrieval, vector fallback, evidence verification, and calibrated abstention.",
    contributions: [
      "Designed five explicit stages with typed state transitions and evidence logging.",
      "Prototyped conditional fallback from incomplete Neo4j graph evidence to FAISS retrieval.",
      "Defined an abductive verifier and abstention-aware response path without claiming completed benchmark results."
    ]
  },
  {
    id: "historical-ocr",
    title: "Historical Vietnamese OCR Dataset Pipeline",
    graphLabel: "Historical OCR",
    type: "Individual contribution within a team project",
    period: "2025",
    periodKey: "2025",
    cluster: "vision",
    featured: true,
    graphTags: ["OCR", "Data Engineering"],
    tech: ["Python", "JavaScript", "Regex", "Bounding boxes", "Dataset QA"],
    headlineMetric: "8,687 lines from 240 pages (189.6% beyond target)",
    summary:
      "A semi-automatic pipeline that converts scanned historical pages into aligned line crops, bounding boxes, and Unicode labels.",
    contributions: [
      "Produced 8,687 training-ready text-line crops and labels from 240 scanned pages.",
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
    type: "Team project - graph construction contribution",
    period: "2026",
    periodKey: "2026-present",
    cluster: "reasoning",
    featured: true,
    graphTags: ["Neo4j", "Data Engineering"],
    tech: ["Neo4j", "Cypher", "Docker", "PowerShell", "WSL"],
    headlineMetric: "7,833,706 nodes / 19,994,844 relationships",
    summary:
      "Large-scale graph construction workflows for Vietnamese legal documents and article-level relationships.",
    contributions: [
      "Developed preprocessing workflows and the Neo4j bulk-import pipeline.",
      "Automated integrity checks and tuned Docker/WSL memory settings for an 8 GB machine.",
      "Documented a one-command local setup for teammates."
    ]
  },
  {
    id: "spendsense",
    title: "SpendSense AI Investment Platform",
    graphLabel: "SpendSense",
    type: "Team - investment workflow contribution",
    period: "2026",
    periodKey: "2026-present",
    cluster: "systems",
    featured: false,
    graphTags: ["FastAPI", "React/TS"],
    tech: ["FastAPI", "React", "TypeScript", "Gemini", "ChromaDB", "Market data"],
    headlineMetric: "Full-stack robo-advisor with multi-source financial data",
    summary:
      "An AI-assisted personal finance platform spanning natural-language asset entry, risk-based allocation, and savings planning.",
    contributions: [
      "Owned the investment and robo-advisor flow across FastAPI and React/TypeScript.",
      "Integrated Vietnamese equities, Binance crypto prices, and SJC gold feeds."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/quanpro147/Spend-Sense-AI"
      }
    ]
  },
  {
    id: "weather-monitor",
    title: "Weather Monitor Data Platform",
    graphLabel: "Weather",
    type: "Team",
    period: "2026",
    periodKey: "2026-present",
    cluster: "systems",
    featured: false,
    graphTags: ["FastAPI", "Data Engineering"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Supabase", "Redis", "Docker"],
    headlineMetric: "Scheduled ETL pipeline with duplicate prevention",
    summary:
      "A Dockerized weather platform with scheduled ingestion, cloud storage, caching, API services, and an interactive dashboard.",
    contributions: [
      "Contributed to Open-Meteo ingestion and duplicate-prevention workflows.",
      "Supported PostgreSQL/Supabase migration tooling and Docker-based local infrastructure."
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
    type: "Individual",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Evaluation"],
    tech: ["NumPy", "Logistic regression", "SMOTE", "Vectorization"],
    headlineMetric: "Recall 0.6316 / F1 0.4785",
    summary:
      "A NumPy-only binary-classification pipeline with custom logistic regression and SMOTE for 19,158 mixed-type records.",
    contributions: [
      "Implemented preprocessing, stable binary cross-entropy, gradient descent, and SMOTE from scratch.",
      "Compared the custom model with a scikit-learn baseline on recall and F1."
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/trungkienjjj/HR_Analytics_Project"
      }
    ]
  },
  {
    id: "video-retrieval",
    title: "Video-to-Text Semantic Retrieval",
    graphLabel: "Video Retrieval",
    type: "Team - retrieval contribution",
    period: "2025",
    periodKey: "2025",
    cluster: "reasoning",
    featured: false,
    graphTags: ["FAISS", "Multimodal", "Retrieval"],
    tech: ["FAISS", "Multimodal embeddings", "Similarity search", "Python"],
    headlineMetric: "Natural-language ranked top-k frame retrieval",
    summary:
      "A natural-language video search workflow using multimodal feature extraction, FAISS indexing, and ranked frame inspection.",
    contributions: [
      "Developed the frame retrieval workflow, similarity scoring, and top-k inspection.",
      "Structured caching and retrieval data flow for responsive search."
    ]
  },
  {
    id: "netflix-recommender",
    title: "Netflix Content Analytics & Recommender",
    graphLabel: "Netflix Recsys",
    type: "Team - project leader",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Retrieval"],
    tech: ["Python", "Pandas", "TF-IDF", "Cosine similarity", "Data visualization"],
    headlineMetric: "8,800+ titles analyzed with content-based retrieval",
    summary:
      "A reproducible data-science study of Netflix catalogue strategy with a TF-IDF and cosine-similarity recommendation system.",
    contributions: [
      "Led the two-person course project across data cleaning, exploratory analysis, research questions, and reporting.",
      "Built the content-based recommendation workflow from title metadata using TF-IDF and cosine similarity."
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
    title: "Swarm Intelligence & Search Benchmark",
    graphLabel: "Algorithm Lab",
    type: "Team - equal contribution",
    period: "2025",
    periodKey: "2025",
    cluster: "reasoning",
    featured: false,
    graphTags: ["Evaluation", "Optimization"],
    tech: ["Python", "PSO", "ABC", "ACO", "A*", "Statistical evaluation"],
    headlineMetric: "15 benchmark cases with 10-run comparisons",
    summary:
      "A reproducible comparison of swarm intelligence and classical search across continuous optimization, TSP, and grid pathfinding.",
    contributions: [
      "Contributed to a shared framework covering continuous and discrete optimization problems.",
      "Validated the complete experiment suite across nine continuous and six discrete cases."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/quanpro147/HCMUS-CSAI-Project-1"
      }
    ]
  },
  {
    id: "hashi-solvers",
    title: "Hashiwokakero Solver Benchmark",
    graphLabel: "Hashi Solvers",
    type: "Team - equal contribution",
    period: "2025",
    periodKey: "2025",
    cluster: "reasoning",
    featured: false,
    graphTags: ["Evaluation", "Optimization"],
    tech: ["Python", "PySAT", "A*", "Backtracking", "CNF", "Multiprocessing"],
    headlineMetric: "4 solver strategies across 10 puzzle sizes",
    summary:
      "A CNF-based puzzle-solving system comparing PySAT, A*, backtracking, and brute force with timeout, memory, and runtime reporting.",
    contributions: [
      "Contributed to the solver and benchmark architecture for increasingly large Hashiwokakero boards.",
      "Supported reproducible output generation and performance visualization."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/4-useless-student/HCMUS-CSAI-Project-2"
      }
    ]
  },
  {
    id: "happiness-dashboard",
    title: "World Happiness Interactive Dashboard",
    graphLabel: "Happiness",
    type: "Team - equal contribution",
    period: "2026",
    periodKey: "2026-present",
    cluster: "systems",
    featured: false,
    graphTags: ["Data Visualization", "Data Engineering"],
    tech: ["Streamlit", "Plotly", "Pandas", "Statistics", "Data visualization"],
    headlineMetric: "1,502 records / ~175 countries / 2015-2024",
    summary:
      "A five-page interactive dashboard for temporal, spatial, correlation, and composition analysis of global happiness indicators.",
    contributions: [
      "Contributed to the shared analysis and dashboard implementation.",
      "Helped structure reusable selectors, cached data loading, and interactive visual exploration."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/tunah72/happiness-score-analysis"
      }
    ]
  },
  {
    id: "wdi-dashboard",
    title: "World Development Indicators Dashboard",
    graphLabel: "WDI Tableau",
    type: "Team - 25% contribution",
    period: "2026",
    periodKey: "2026-present",
    cluster: "systems",
    featured: false,
    graphTags: ["Data Visualization", "Data Engineering", "Evaluation"],
    tech: ["Tableau", "Python", "Pandas", "World Bank WDI", "LaTeX"],
    headlineMetric: "4,263 rows x 23 indicators, 2000-2020",
    summary:
      "A Tableau and Python study of global CO2 emissions, economic development, and renewable-energy transition.",
    contributions: [
      "Owned the renewable-energy transition analysis as an explicitly documented 25% team contribution.",
      "Produced five analysis views and contributed to the report and demo."
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/tunah72/world-development-indicators"
      },
      {
        label: "Video demo",
        href: "https://drive.google.com/drive/folders/1y6I8LarorTPOAjccBVfmc9r7WtJKev99?usp=sharing"
      }
    ]
  },
  {
    id: "vietsport",
    title: "VietSport Sports Center Database",
    graphLabel: "VietSport DB",
    type: "Team - database contribution",
    period: "2025",
    periodKey: "2025",
    cluster: "systems",
    featured: false,
    graphTags: ["Data Engineering"],
    tech: ["SQL Server", "T-SQL", "Stored procedures", "Triggers", "Data modeling"],
    headlineMetric: "25-table normalized schema",
    summary:
      "A relational system for booking, services, inventory, invoicing, refunds, staffing, and memberships.",
    contributions: [
      "Designed parts of the normalized 25-table schema.",
      "Implemented constraints, triggers, and stored procedures for transactional business rules."
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
  { value: "2026-present", label: "2026-Present" }
] as const;

export type PeriodFilter = (typeof periodOptions)[number]["value"];
