export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: "CGPA";
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description: string;
  highlightStat: string;
}

export const educationData: EducationItem[] = [
  {
    id: "btech-cse-datascience",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Data Science)",
    institution: "IILM University",
    location: "Greater Noida, India",
    period: "2023 – 2027",
    grade: "8.5 / 10",
    gradeType: "CGPA",
    description:
      "Specialized in Artificial Intelligence, Machine Learning algorithms, Data Structures, Applied Statistics, and Big Data Engineering. Active contributor to technical forums and project collaborations.",
    highlights: [
      "Consistent academic excellence with 8.5 CGPA",
      "Specialization in Data Science and Machine Learning",
      "Core coursework in Neural Networks, Computer Vision, DBMS, and Algorithms",
    ],
  },
  {
    id: "diploma-mechanical",
    degree: "Diploma in Engineering",
    field: "Mechanical Engineering",
    institution: "Jamia Millia Islamia",
    location: "New Delhi, India",
    period: "2020 – 2023",
    grade: "8.2 / 10",
    gradeType: "CGPA",
    description:
      "Solid foundation in engineering mathematics, analytical problem solving, thermodynamics, and computational design principles before pivoting into computer science and AI.",
    highlights: [
      "Graduated with 8.2 CGPA distinction",
      "Pivotal foundation in applied mathematics and analytical systems thinking",
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "leetcode-milestone",
    title: "350+ Algorithmic Challenges Solved",
    organization: "LeetCode",
    description:
      "Solved 350+ Data Structures & Algorithms problems across arrays, trees, graphs, dynamic programming, and binary search, demonstrating strong algorithmic intuition and time/space complexity optimization.",
    highlightStat: "350+ Problems",
  },
  {
    id: "internship-collaboration",
    title: "Cross-Functional AI/ML Teamwork Recognition",
    organization: "Industry Internships (Colourbar & MedTourEasy)",
    description:
      "Recognized for proactive communication and effective collaboration while bridging the gap between AI/ML development, data analytics, and reporting stakeholders.",
    highlightStat: "Cross-Team Impact",
  },
];
