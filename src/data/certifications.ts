export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  verificationBadge: string;
  skillsLearned: string[];
  description: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials & Database / SQL",
    issuer: "Amazon Web Services",
    year: "2024",
    verificationBadge: "AWS Certified",
    skillsLearned: ["Cloud Architecture", "AWS Core Services", "Database Management", "SQL Queries"],
    description:
      "Comprehensive verification of foundational cloud concepts, AWS security, cloud storage, relational and NoSQL database management, and cloud economics.",
  },
  {
    id: "meta-backend-cert",
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    year: "2026",
    verificationBadge: "Meta Professional",
    skillsLearned: ["Backend Systems", "APIs & Microservices", "Database Design", "Security & Git"],
    description:
      "Rigorous industry curriculum covering modern server-side architecture, RESTful API development, data modeling, automated testing, and web application deployment standards.",
  },
];
