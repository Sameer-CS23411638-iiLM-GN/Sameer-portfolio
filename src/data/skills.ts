export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages utilized for software development, algorithmic problem-solving, and systems engineering.",
    skills: [
      { name: "Python", level: "Advanced", highlight: true },
      { name: "C++", level: "Proficient", highlight: true },
      { name: "Java", level: "Proficient" },
      { name: "SQL", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Proficient" },
    ],
  },
  {
    id: "ai-ml-dl",
    name: "AI, ML & Deep Learning",
    description: "Statistical modeling, deep neural networks, and classical machine learning algorithms.",
    skills: [
      { name: "TensorFlow / Keras", level: "Advanced", highlight: true },
      { name: "PyTorch", level: "Proficient", highlight: true },
      { name: "Scikit-learn", level: "Advanced", highlight: true },
      { name: "CNN / RNN / ANN", level: "Advanced", highlight: true },
      { name: "NumPy & Pandas", level: "Advanced" },
      { name: "Matplotlib & Seaborn", level: "Proficient" },
      { name: "Machine Learning Foundations", level: "Advanced" },
    ],
  },
  {
    id: "generative-ai",
    name: "Generative AI & RAG",
    description: "LLM application architecture, retrieval-augmented generation pipelines, and embedding models.",
    skills: [
      { name: "LangChain", level: "Advanced", highlight: true },
      { name: "RAG Architecture", level: "Advanced", highlight: true },
      { name: "OpenAI LLM APIs", level: "Advanced", highlight: true },
      { name: "LlamaIndex", level: "Proficient" },
      { name: "Vector Databases & Embeddings", level: "Proficient", highlight: true },
      { name: "Fine-tuning Concepts (LoRA/QLoRA)", level: "Specialized" },
    ],
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    description: "Real-time image pre-processing, video capture pipelines, and visual feature extraction.",
    skills: [
      { name: "OpenCV", level: "Advanced", highlight: true },
      { name: "CNN Detection Systems", level: "Advanced", highlight: true },
      { name: "Real-time Video Pipelines", level: "Advanced", highlight: true },
      { name: "Latency Profiling & Optimization", level: "Proficient" },
    ],
  },
  {
    id: "backend-systems",
    name: "Backend & API Engineering",
    description: "Production-ready web services, RESTful schemas, and automated documentation.",
    skills: [
      { name: "FastAPI", level: "Advanced", highlight: true },
      { name: "Flask", level: "Proficient" },
      { name: "REST API Design", level: "Advanced" },
      { name: "Swagger / OpenAPI", level: "Advanced" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Data Engineering",
    description: "Relational modeling, complex analytic queries, and vector storage.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", highlight: true },
      { name: "MySQL", level: "Proficient" },
      { name: "Window Functions & CTEs", level: "Advanced", highlight: true },
      { name: "Multi-table Joins & Indexing", level: "Advanced" },
      { name: "Embeddings & Vector Databases", level: "Proficient" },
    ],
  },
  {
    id: "devops-tools",
    name: "Tools, DevOps & Testing",
    description: "Containerization, automated continuous integration pipelines, and test-driven methodologies.",
    skills: [
      { name: "Docker", level: "Proficient", highlight: true },
      { name: "GitHub Actions (CI/CD)", level: "Proficient", highlight: true },
      { name: "PyTest", level: "Proficient", highlight: true },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Agile Collaboration", level: "Proficient" },
    ],
  },
  {
    id: "core-cs",
    name: "Core CS & Algorithmic Rigor",
    description: "Fundamental computer science theory, algorithmic efficiency, and statistical reasoning.",
    skills: [
      { name: "Data Structures & Algorithms (350+ Solved)", level: "Advanced", highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "Statistics & Probability", level: "Advanced" },
      { name: "Analytical Problem Solving", level: "Advanced" },
    ],
  },
];
