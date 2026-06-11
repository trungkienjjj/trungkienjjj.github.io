const projectData = [
  {
    id: "deepseek-ocr",
    title: "DeepSeek-OCR for Vietnamese Handwriting",
    shortTitle: "DS-OCR",
    category: "NLP & OCR",
    status: "Completed",
    flagship: true,
    summary: "A reproducible LoRA adaptation and evaluation pipeline for Vietnamese handwritten line recognition.",
    contributions: [
      "Fine-tuned DeepSeek-OCR with 16-bit LoRA rank 16 using Unsloth, Transformers, PEFT, FP16, and gradient checkpointing.",
      "Built a custom multimodal collator with dynamic crops, global image views, and response-only loss masking.",
      "Evaluated base and adapted models on the same held-out set with CER distributions, timeout tracking, error types, and hallucination analysis."
    ],
    metrics: [
      ["38.49 → 12.15%", "Mean CER"],
      ["1,446", "Test images"],
      ["68.4%", "Relative reduction"]
    ],
    tags: ["PyTorch", "DeepSeek-OCR", "LoRA", "Unsloth", "Transformers", "CER"],
    links: [
      ["Training notebook", "https://www.kaggle.com/code/nguyentrantrungkien/01-finetuning-model"],
      ["Evaluation notebook", "https://www.kaggle.com/code/nguyentrantrungkien/02-evaluating-model"]
    ]
  },
  {
    id: "historical-ocr",
    title: "Historical Vietnamese OCR Dataset Pipeline",
    shortTitle: "OCR-DATA",
    category: "NLP & OCR",
    status: "Completed",
    flagship: true,
    summary: "A semi-automatic pipeline that converts scanned historical pages into aligned line crops, bounding boxes, and Unicode labels.",
    contributions: [
      "Processed 240 pages of Dai Viet Su Ky Toan Thu into 8,687 training-ready text lines.",
      "Built an HTML/JavaScript line-break editor and Python scripts for mapping, regex/geometric footer filtering, box merging, and AABB rectification.",
      "Added count and export validation to detect missing crops and incorrect ignore flags."
    ],
    metrics: [
      ["8,687", "Clean OCR lines"],
      ["240", "Pages processed"],
      [">99%", "Estimated mapping"]
    ],
    tags: ["Python", "JavaScript", "OCR", "Bounding Boxes", "Regex", "Dataset QA"],
    links: []
  },
  {
    id: "hr-analytics",
    title: "HR Analytics from Scratch",
    shortTitle: "NUMPY",
    category: "AI & ML",
    status: "Completed",
    flagship: true,
    summary: "A NumPy-only machine-learning pipeline for job-change prediction with custom logistic regression and SMOTE.",
    contributions: [
      "Processed 19,158 mixed-type records without Pandas using NumPy string operations, masking, encoding, and scaling.",
      "Implemented vectorized logistic regression, numerically stable binary cross-entropy, and gradient descent from scratch.",
      "Implemented SMOTE with NumPy broadcasting for pairwise KNN distances and compared results with a scikit-learn baseline."
    ],
    metrics: [
      ["0.6316", "Recall"],
      ["0.4785", "F1 score"],
      ["19,158", "Records"]
    ],
    tags: ["NumPy", "Logistic Regression", "SMOTE", "Vectorization", "Data Science"],
    links: [
      ["Repository", "https://github.com/trungkienjjj/HR_Analytics_Project"]
    ]
  },
  {
    id: "vietsport",
    title: "VietSport Database Management System",
    shortTitle: "SQL",
    category: "Backend",
    status: "Team project",
    flagship: true,
    summary: "A normalized SQL Server system for sports-center booking, services, inventory, invoicing, staffing, and memberships.",
    contributions: [
      "Designed parts of a 25-table relational schema and documented the portfolio version of the team project.",
      "Implemented triggers, constraints, and stored procedures for booking conflicts, inventory deduction, timing rules, and transactional integrity.",
      "Prepared sample data and business-rule documentation for reproducible demonstration."
    ],
    metrics: [
      ["25", "Relational tables"],
      ["4+", "Core triggers"],
      ["T-SQL", "Primary stack"]
    ],
    tags: ["SQL Server", "T-SQL", "Stored Procedures", "Triggers", "Data Modeling"],
    links: [
      ["Repository", "https://github.com/trungkienjjj/sports-center-db-portfolio"]
    ]
  },
  {
    id: "spendsense",
    title: "SpendSense AI",
    shortTitle: "FIN-AI",
    category: "Backend",
    status: "Team project",
    flagship: true,
    summary: "An AI-assisted personal finance platform combining receipt intelligence, semantic caching, live market data, and portfolio guidance.",
    contributions: [
      "Owned the investment and robo-advisor flow across backend and frontend.",
      "Integrated vnstock, Binance, and SJC feeds for Vietnamese equities, crypto, and gold pricing.",
      "Built natural-language asset entry, risk-based rebalancing, compound-growth planning, and dynamic savings calculations."
    ],
    metrics: [
      ["3", "Market sources"],
      ["FastAPI", "Backend"],
      ["React", "Frontend"]
    ],
    tags: ["FastAPI", "React", "TypeScript", "Gemini", "ChromaDB", "Market Data"],
    links: [
      ["Team repository", "https://github.com/quanpro147/Spend-Sense-AI"]
    ]
  },
  {
    id: "weather-monitor",
    title: "Weather Monitor Data Platform",
    shortTitle: "WEATHER",
    category: "Data",
    status: "Team project",
    flagship: true,
    summary: "A Dockerized weather platform with scheduled ingestion, cloud storage, caching, API services, and an interactive dashboard.",
    contributions: [
      "Contributed to the automated Open-Meteo data pipeline and duplicate-prevention workflow.",
      "Worked with FastAPI, PostgreSQL/Supabase, Redis, and Docker-based local infrastructure.",
      "Supported migration tooling that synchronized local weather data to the team's cloud database."
    ],
    metrics: [
      ["Docker", "Deployment"],
      ["Supabase", "Cloud database"],
      ["Redis", "Caching"]
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Supabase", "Redis", "Docker"],
    links: [
      ["Repository", "https://github.com/trungkienjjj/weather-monitor-dashboard"]
    ]
  },
  {
    id: "legal-graph",
    title: "Vietnamese Legal Knowledge Graph",
    shortTitle: "GRAPH",
    category: "Data",
    status: "Team project",
    flagship: false,
    summary: "Large-scale graph construction workflows for Vietnamese legal documents and article-level relationships.",
    contributions: [
      "Developed preprocessing and Neo4j bulk-import workflows for roughly 1.5 GB of data.",
      "Loaded and verified 7,833,706 nodes and 19,994,844 relationships on an 8 GB machine.",
      "Documented local setup and tuned Docker/WSL memory usage for teammates."
    ],
    metrics: [
      ["7.83M", "Nodes"],
      ["19.99M", "Relationships"],
      ["~15 min", "Local import"]
    ],
    tags: ["Neo4j", "Cypher", "PowerShell", "Docker", "Knowledge Graph"],
    links: []
  },
  {
    id: "netflix",
    title: "Netflix Content Analytics & Recommender",
    shortTitle: "RECSYS",
    category: "Data",
    status: "Completed",
    flagship: false,
    summary: "A data-science study of Netflix content strategy with a content-based recommendation system.",
    contributions: [
      "Led a two-person project covering data cleaning, exploratory analysis, business questions, and reporting.",
      "Analyzed more than 8,800 titles by geography, ratings, release timing, and content type.",
      "Built a TF-IDF and cosine-similarity content recommender."
    ],
    metrics: [
      ["8,800+", "Titles"],
      ["TF-IDF", "Features"],
      ["2", "Team members"]
    ],
    tags: ["Pandas", "scikit-learn", "TF-IDF", "Recommender Systems", "Visualization"],
    links: [
      ["Repository", "https://github.com/trungkienjjj/ds-netflix-analysis"]
    ]
  },
  {
    id: "agentic-rag",
    title: "Agentic Temporal RAG",
    shortTitle: "RAG",
    category: "AI & ML",
    status: "Research prototype",
    flagship: false,
    summary: "An ongoing research prototype for multi-hop temporal reasoning with graph retrieval, vector fallback, and evidence verification.",
    contributions: [
      "Designed a five-stage LangGraph architecture covering planning, graph navigation, fallback retrieval, verification, and answer generation.",
      "Prototyped explicit state contracts and conditional fallback from Neo4j traversal to FAISS retrieval.",
      "Currently investigating evaluation and calibrated abstention; no completed benchmark results are claimed."
    ],
    metrics: [
      ["5", "Pipeline stages"],
      ["Neo4j", "Graph retrieval"],
      ["FAISS", "Fallback"]
    ],
    tags: ["LangGraph", "Agentic RAG", "Neo4j", "FAISS", "Temporal QA"],
    links: []
  }
];

const filterNames = ["All", "AI & ML", "NLP & OCR", "Data", "Backend"];
const grid = document.querySelector("#project-grid");
const filters = document.querySelector("#project-filters");
const searchInput = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#project-modal");
const modalPanel = modal.querySelector(".modal-panel");
let selectedCategory = "All";
let previousFocus = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFilters() {
  filters.innerHTML = filterNames.map((name) => `
    <button class="filter-button${name === selectedCategory ? " active" : ""}" type="button" data-filter="${escapeHtml(name)}">
      ${escapeHtml(name)}
    </button>
  `).join("");
}

function getVisibleProjects() {
  const query = searchInput.value.trim().toLowerCase();
  return projectData
    .filter((project) => selectedCategory === "All" || project.category === selectedCategory)
    .filter((project) => {
      const haystack = [project.title, project.category, project.summary, ...project.tags].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => Number(b.flagship) - Number(a.flagship));
}

function renderProjects() {
  const projects = getVisibleProjects();
  grid.innerHTML = projects.map((project) => `
    <button class="project-card" type="button" data-project-id="${project.id}">
      <div class="project-art" aria-hidden="true"><span>${escapeHtml(project.shortTitle)}</span></div>
      <div class="project-body">
        <div class="project-topline">
          <span class="project-category">${escapeHtml(project.category)}</span>
          <span class="status-badge">${escapeHtml(project.status)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="tag-list">
          ${project.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
        <span class="project-open">View contribution and results →</span>
      </div>
    </button>
  `).join("");
  emptyState.hidden = projects.length !== 0;
}

function createLink(label, href) {
  const link = document.createElement("a");
  link.className = "button button-outline";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function openModal(projectId) {
  const project = projectData.find((item) => item.id === projectId);
  if (!project) return;

  previousFocus = document.activeElement;
  document.querySelector("#modal-title").textContent = project.title;
  document.querySelector("#modal-category").textContent = project.category;
  document.querySelector("#modal-status").textContent = project.status;
  document.querySelector("#modal-summary").textContent = project.summary;
  document.querySelector("#modal-visual").textContent = project.shortTitle;

  const contributions = document.querySelector("#modal-contributions");
  contributions.innerHTML = project.contributions.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const metrics = document.querySelector("#modal-metrics");
  metrics.innerHTML = project.metrics.map(([value, label]) => `
    <div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>
  `).join("");

  const tags = document.querySelector("#modal-tags");
  tags.innerHTML = project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

  const links = document.querySelector("#modal-links");
  links.replaceChildren();
  if (project.links.length) {
    project.links.forEach(([label, href]) => links.append(createLink(label, href)));
  } else {
    const note = document.createElement("span");
    note.className = "text-link";
    note.textContent = "Public artifact is being prepared with attribution and reproducibility checks.";
    links.append(note);
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (previousFocus) previousFocus.focus();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  selectedCategory = button.dataset.filter;
  renderFilters();
  renderProjects();
});

searchInput.addEventListener("input", renderProjects);

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (card) openModal(card.dataset.projectId);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
  if (event.key === "Tab" && !modal.hidden) {
    const focusable = [...modal.querySelectorAll("a[href], button:not([disabled]), [tabindex='0']")];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#site-nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

const themeButton = document.querySelector("#theme-button");
const themeMenu = document.querySelector("#theme-menu");
const savedTheme = localStorage.getItem("portfolio-theme") || "cyan";
document.body.dataset.theme = savedTheme;

themeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = themeMenu.classList.toggle("open");
  themeButton.setAttribute("aria-expanded", String(open));
});

themeMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-theme]");
  if (!button) return;
  document.body.dataset.theme = button.dataset.theme;
  localStorage.setItem("portfolio-theme", button.dataset.theme);
  themeMenu.classList.remove("open");
  themeButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (!themeMenu.contains(event.target) && event.target !== themeButton) {
    themeMenu.classList.remove("open");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

const header = document.querySelector("#site-header");
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

function updateScrollState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  const position = window.scrollY + 160;
  let activeId = "home";
  sections.forEach((section) => {
    if (position >= section.offsetTop) activeId = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${activeId}`));
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function startParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.querySelector("#particle-canvas");
  const context = canvas.getContext("2d");
  let particles = [];
  let frame;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: Math.min(55, Math.floor(rect.width / 22)) }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.4 + 0.4
    }));
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);
    const color = getComputedStyle(document.body).getPropertyValue("--accent-rgb").trim();

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(${color}, .28)`;
      context.fill();
    });

    frame = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
}

renderFilters();
renderProjects();
startParticles();
document.querySelector("#current-year").textContent = new Date().getFullYear();
