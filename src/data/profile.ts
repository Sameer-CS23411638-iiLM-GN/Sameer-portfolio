export interface ProfileData {
  name: string;
  signature: string;
  avatarUrl: string;
  role: string;
  subRole: string;
  location: string;
  email: string;
  phone: string;
  whatsapp?: string;
  whatsappUrl?: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl: string;
  summary: string;
  philosophies: {
    text: string;
    glowColor: string;
  }[];
  currentFocus: {
    title: string;
    subtitle: string;
    statusColor: string;
  };
  availability: {
    title: string;
    subtitle: string;
    statusColor: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Sameer",
  signature: "Sameer",
  avatarUrl: "/profile.jpg",
  role: "AI / ML & Data Science Engineer",
  subRole: "B.Tech CSE (Data Science) • 2023 - 2027",
  location: "New Delhi, India",
  email: "sameerlntmhipower@gmail.com",
  phone: "9625431008",
  whatsapp: "9625431008",
  whatsappUrl: "https://wa.me/919625431008",
  githubUrl: "https://github.com/Sameer-CS23411638-iiLM-GN",
  linkedinUrl: "https://linkedin.com/in/sameer-662453292",
  leetcodeUrl: "https://leetcode.com/u/Sameer9625/",
  summary:
    "B.Tech Computer Science (Data Science) student with hands-on experience engineering Python-based AI/ML, Computer Vision systems (CNN, TensorFlow/Keras, OpenCV), and Generative AI/RAG backends (LangChain, OpenAI LLM APIs). Strong foundation in statistics, probability, backend API development (FastAPI, Flask), SQL data pipelines, and Git/CI-CD workflows.",
  philosophies: [
    {
      text: "Engineering resilient AI/ML & Computer Vision pipelines with optimized frame-latency and measurable real-world accuracy.",
      glowColor: "#3b82f6", // Electric blue
    },
    {
      text: "Designing production-style RAG architectures with LangChain, vector embeddings, and containerized FastAPI services.",
      glowColor: "#10b981", // Emerald
    },
    {
      text: "Driven by analytical rigor and algorithmic problem-solving, with 350+ DSA challenges conquered on LeetCode.",
      glowColor: "#8b5cf6", // Purple
    },
  ],
  currentFocus: {
    title: "Refining craft",
    subtitle: "RAG Architectures, Computer Vision & Scalable APIs",
    statusColor: "#ef4444",
  },
  availability: {
    title: "Open to",
    subtitle: "AI/ML Internships & Engineering Roles",
    statusColor: "#22c55e",
  },
  metrics: [
    {
      label: "DSA Solved",
      value: "350+",
      detail: "LeetCode Algorithmic Problems",
    },
    {
      label: "Detection Accuracy",
      value: "92%",
      detail: "Real-time CNN CV on 10K+ frames",
    },
    {
      label: "Pipeline Scale",
      value: "500K+",
      detail: "Rows processed with 40% speedup",
    },
    {
      label: "B.Tech CGPA",
      value: "8.5 / 10",
      detail: "IILM University (Data Science)",
    },
  ],
};
