export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  summary: string;
  tags: string[];
  content: string[];
}

export const journalData: JournalArticle[] = [
  {
    id: "optimizing-cv-inference-latency",
    slug: "optimizing-cv-inference-latency",
    title: "Optimizing Real-time CNN Inference: Slashing Frame Latency by 35% with OpenCV",
    date: "May 2026",
    readingTime: "4 min read",
    category: "Computer Vision",
    summary:
      "A technical walkthrough on optimizing a live 30 FPS video pipeline feeding deep learning models. Decoupling frame capture from neural network inference through asynchronous queueing and Eye Aspect Ratio (EAR) preprocessing.",
    tags: ["Computer Vision", "OpenCV", "CNN", "Performance Tuning"],
    content: [
      "In building the Real-Time Driver Drowsiness Detection system, achieving a 92% classification accuracy was only half the challenge. The real test came when running inference on a live continuous webcam stream.",
      "The naive approach of running sequential frame capture, facial landmark extraction, and TensorFlow forward-passes resulted in severe frame jitter and perceptible latency drops (~18 FPS).",
      "By profiling the pipeline, the primary bottleneck was identified in synchronous frame acquisition and redundant full-frame CNN evaluation. Switching to an Eye Aspect Ratio (EAR) metric as a lightweight first-pass filter allowed the pipeline to skip unnecessary heavy CNN evaluations when eyes were clearly wide open.",
      "Furthermore, decoupling video capture into a dedicated background worker thread with a circular frame buffer slashed total inference latency by 35%, ensuring buttery-smooth 30+ FPS real-time responsiveness.",
    ],
  },
  {
    id: "production-rag-fastapi-docker",
    slug: "production-rag-fastapi-docker",
    title: "Architecting a Resilient RAG Backend with FastAPI, LangChain, and CI/CD",
    date: "March 2026",
    readingTime: "5 min read",
    category: "Generative AI",
    summary:
      "Key architectural decisions behind building a production-style Retrieval-Augmented Generation backend: semantic chunking, vector database index strategies, and testing with PyTest & GitHub Actions.",
    tags: ["RAG", "FastAPI", "Docker", "GitHub Actions", "LangChain"],
    content: [
      "Generative AI prototypes often break down when transitioned into multi-document enterprise environments. Building the AI Knowledge Assistant required a strict production mindset from day one.",
      "Rather than relying on monolithic scripts, the architecture was modularized around FastAPI with asynchronous request routing, strict Pydantic validation, and automated OpenAPI documentation.",
      "For retrieval fidelity, recursive character text splitters with 10% chunk overlap were used to prevent critical semantic boundaries from being cut off during high-dimensional vector embeddings generation.",
      "To guarantee system reliability, the entire service was containerized with multi-stage Docker builds, backed by a comprehensive PyTest suite, and enforced with a GitHub Actions CI workflow running on every commit.",
    ],
  },
  {
    id: "350-leetcode-algorithmic-intuition",
    slug: "350-leetcode-algorithmic-intuition",
    title: "From 0 to 350+ LeetCode DSA Problems: Developing Algorithmic Intuition",
    date: "January 2026",
    readingTime: "3 min read",
    category: "Algorithms & CS",
    summary:
      "Reflections on solving 350+ data structures and algorithms problems. Why pattern recognition in graph traversals, two-pointers, and dynamic programming is fundamental to engineering efficient software.",
    tags: ["LeetCode", "DSA", "Algorithms", "C++", "Python"],
    content: [
      "Solving 350+ algorithmic problems on LeetCode was never about memorizing solutions; it was about internalizing patterns and developing a visceral sense for time and space complexity trade-offs.",
      "The transition from brute-force thinking to recognizing invariant properties—such as monotonic stacks for next-greater element queries or topological sort for dependency resolution—directly influences how I architect production software.",
      "Whether optimizing SQL database joins with 500K+ rows or architecting sub-second RAG retrieval pipelines, algorithmic discipline remains the bedrock of great engineering.",
    ],
  },
];
