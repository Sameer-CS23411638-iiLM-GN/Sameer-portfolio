export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  contributions: string[];
  skills: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "colourbar-ai-ml-intern",
    role: "AI/ML Intern",
    company: "Colourbar Communications Pvt Ltd",
    location: "New Delhi, India",
    duration: "Jan 2026 – Jun 2026",
    period: "6 Months",
    type: "Internship",
    contributions: [
      "Engineered Python and SQL data pipelines processing 500K+ rows, cutting data preparation time by 40%.",
      "Designed and deployed AI-assisted automation workflows using OpenAI's LLM API to automate recurring reporting tasks.",
      "Improved analytical throughput and output consistency across reporting workflows through LLM-driven automation.",
      "Collaborated with cross-functional technical teams to integrate automated outputs into operational dashboards.",
    ],
    skills: [
      "Python",
      "SQL Data Pipelines",
      "OpenAI LLM API",
      "Workflow Automation",
      "ETL",
      "Prompt Engineering",
    ],
    metrics: [
      { label: "Data Scaled", value: "500K+ Rows" },
      { label: "Prep Time Cut", value: "40%" },
      { label: "Reliability", value: "High Consistency" },
    ],
  },
  {
    id: "medtoureasy-data-analyst-intern",
    role: "Data Analyst Intern",
    company: "MedTourEasy Pvt Ltd",
    location: "New Delhi, India",
    duration: "Feb 2025 – May 2025",
    period: "4 Months",
    type: "Internship",
    contributions: [
      "Built and validated Scikit-learn classification and regression models achieving 87% accuracy on real-world datasets.",
      "Automated 30% of manual analyst workload by deploying the validated ML models into the existing reporting process.",
      "Authored and optimized SQL queries (window functions, CTEs, joins) across 3 databases, streamlining monthly reporting.",
      "Conducted extensive exploratory data analysis, identifying key trends and eliminating manual data bottlenecks.",
    ],
    skills: [
      "Scikit-learn",
      "Classification & Regression",
      "SQL (CTEs, Window Functions)",
      "Data Modeling",
      "Pandas & NumPy",
    ],
    metrics: [
      { label: "Model Accuracy", value: "87%" },
      { label: "Workload Automated", value: "30%" },
      { label: "DBs Optimized", value: "3 Instances" },
    ],
  },
];
