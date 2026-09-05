export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Computer Vision" | "Generative AI" | "Machine Learning" | "Data Engineering";
  featured: boolean;
  scopeOverview: string;
  techArchitecture: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  hasInteractiveDemo?: boolean;
  demoType?: "cv-simulation" | "rag-playground";
}

export const projectsData: Project[] = [
  {
    id: "driver-drowsiness-detection",
    title: "Real-Time Driver Drowsiness Detection",
    subtitle: "Deep Learning & Computer Vision Inference Pipeline",
    category: "Computer Vision",
    featured: true,
    scopeOverview:
      "Trained, tested, and evaluated a CNN-based computer vision (Deep Learning) model on 10K+ labeled frames, achieving 92% real-time detection accuracy. Built an OpenCV video capture and frame-preprocessing pipeline feeding the CNN. Profiled and optimized the inference pipeline to reduce latency by 35%, enabling reliable real-time performance on live video.",
    techArchitecture:
      "Architected with an OpenCV video ingestion layer capturing 30 FPS webcam streams. Implemented facial landmark localization to calculate Eye Aspect Ratio (EAR) and mouth elongation metrics. Preprocessed frame batches are fed into a customized CNN binary/multi-class classifier in TensorFlow/Keras. Applied inference profiling and thread decoupling to cut latency by 35%, triggering audio-visual warnings upon consecutive threshold violations.",
    tags: ["Python", "OpenCV", "TensorFlow/Keras", "CNN", "Deep Learning", "Inference Optimization"],
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Dataset", value: "10K+ Frames" },
      { label: "Latency Cut", value: "-35%" },
    ],
    githubUrl: "https://github.com/Sameer-CS23411638-iiLM-GN",
    liveUrl: "#simulate-cv",
    hasInteractiveDemo: true,
    demoType: "cv-simulation",
  },
  {
    id: "ai-knowledge-assistant-rag",
    title: "AI Knowledge Assistant (RAG Backend)",
    subtitle: "Production-Style Retrieval-Augmented Generation Service",
    category: "Generative AI",
    featured: true,
    scopeOverview:
      "Built a production-style Retrieval-Augmented Generation backend in FastAPI with REST endpoints (upload, query, documents, health) and Swagger documentation. Integrated LangChain and OpenAI LLM APIs to serve retrieval-augmented responses across a 30+ document knowledge base. Wrote PyTest unit tests covering core API endpoints and retrieval logic, configured a GitHub Actions CI workflow to run tests automatically on each commit, and containerized the service with Docker.",
    techArchitecture:
      "Modular FastAPI backend implementing asynchronous request handlers and Pydantic request/response schemas. Employs LangChain text splitters for semantic document chunking, generates dense vector embeddings, and executes top-k similarity search over vector stores. Injects matched excerpts into engineered prompt templates sent to OpenAI LLMs. Verified with automated PyTest suites in a multi-stage Dockerized container orchestrated via GitHub Actions CI.",
    tags: ["Python", "FastAPI", "LangChain", "OpenAI APIs", "Docker", "PyTest", "GitHub Actions", "Vector DB"],
    metrics: [
      { label: "Knowledge Base", value: "30+ Docs" },
      { label: "CI/CD", value: "GitHub Actions" },
      { label: "Container", value: "Dockerized" },
    ],
    githubUrl: "https://github.com/Sameer-CS23411638-iiLM-GN",
    liveUrl: "#test-rag",
    hasInteractiveDemo: true,
    demoType: "rag-playground",
  },
  {
    id: "medical-health-prediction-engine",
    title: "Medical Diagnostic & Predictive Analytics Engine",
    subtitle: "Supervised Classification & Automated Clinical Reporting",
    category: "Machine Learning",
    featured: false,
    scopeOverview:
      "Built and validated Scikit-learn classification and regression models achieving 87% accuracy on real-world datasets during internship at MedTourEasy. Automated 30% of manual analyst workload by deploying the validated ML models directly into operational reporting routines. Authored and optimized SQL queries (window functions, CTEs, joins) across 3 databases, streamlining monthly reporting.",
    techArchitecture:
      "End-to-end predictive pipeline utilizing Scikit-learn with rigorous cross-validation and hyperparameter tuning. Engineered multi-database SQL aggregation scripts leveraging Common Table Expressions (CTEs) and window functions. Model deployment encapsulated in a structured Python service, eliminating 30% of manual repetitive data analyst reporting tasks.",
    tags: ["Python", "Scikit-learn", "SQL", "CTEs & Window Functions", "Data Modeling", "Predictive Analytics"],
    metrics: [
      { label: "Model Accuracy", value: "87%" },
      { label: "Workload Automated", value: "30%" },
      { label: "Databases Managed", value: "3 DBs" },
    ],
    githubUrl: "https://github.com/Sameer-CS23411638-iiLM-GN",
  },
  {
    id: "llm-automated-reporting-pipeline",
    title: "High-Throughput ETL & LLM Automated Reporting",
    subtitle: "Scalable Data Pipeline with Generative AI Summarization",
    category: "Data Engineering",
    featured: false,
    scopeOverview:
      "Engineered Python and SQL data pipelines processing 500K+ rows, cutting data preparation time by 40% at Colourbar Communications. Designed and deployed AI-assisted automation workflows using OpenAI's LLM API to automate recurring reporting tasks, improving analytical throughput and output consistency.",
    techArchitecture:
      "Constructed streaming batch-processing ETL pipelines in Python with connection pooling and chunked SQL execution to ingest 500K+ records. Integrated OpenAI API with deterministic prompt schemas to synthesize tabular metrics into executive briefing reports, eliminating report turnaround bottlenecks.",
    tags: ["Python", "SQL Data Pipelines", "OpenAI LLM API", "Batch Processing", "Workflow Automation"],
    metrics: [
      { label: "Volume Processed", value: "500K+ Rows" },
      { label: "Prep Time Cut", value: "-40%" },
      { label: "Output Quality", value: "Consistent LLM" },
    ],
    githubUrl: "https://github.com/Sameer-CS23411638-iiLM-GN",
  },
];
