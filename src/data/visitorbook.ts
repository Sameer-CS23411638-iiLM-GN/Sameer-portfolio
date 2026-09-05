export interface VisitorEntry {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  message: string;
  timestamp: string;
  category: "Vision & AI" | "RAG Systems" | "Algorithms" | "Hello";
  likes: number;
  isPinned?: boolean;
  provider: "github" | "google" | "guest";
}

export const initialVisitorEntries: VisitorEntry[] = [
  {
    id: "pin-1",
    name: "Sameer",
    handle: "@sameer_dev",
    avatar: "/profile.jpg",
    message: "Welcome to my digital stream & visitorbook! Feel free to leave your thoughts on my AI/ML projects, discuss RAG architectures, or just say hello.",
    timestamp: "Pinned Note",
    category: "Hello",
    likes: 34,
    isPinned: true,
    provider: "github",
  },
  {
    id: "entry-2",
    name: "Arjun Verma",
    handle: "@arjun_ml",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunV",
    message: "The 35% latency optimization on the OpenCV driver drowsiness system is super impressive. Decoupling frame acquisition from CNN inference is classic systems-level thinking.",
    timestamp: "2 hours ago",
    category: "Vision & AI",
    likes: 12,
    provider: "github",
  },
  {
    id: "entry-3",
    name: "Elena Rostova",
    handle: "@elena_ai",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaR",
    message: "Love the clean modular structure of your FastAPI RAG backend with PyTest and GitHub Actions CI. Very clean engineering discipline.",
    timestamp: "1 day ago",
    category: "RAG Systems",
    likes: 9,
    provider: "google",
  },
  {
    id: "entry-4",
    name: "Rahul Sharma",
    handle: "@rahul_codes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RahulS",
    message: "350+ LeetCode problems solved while maintaining an 8.5 CGPA in Data Science! Stellar consistency, Sameer. Keep it up!",
    timestamp: "3 days ago",
    category: "Algorithms",
    likes: 18,
    provider: "github",
  },
];

const STORAGE_KEY = "sameer_portfolio_visitorbook_v1";

export function getVisitorEntries(): VisitorEntry[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load visitorbook entries from localStorage", e);
  }
  return initialVisitorEntries;
}

export function saveVisitorEntry(entry: Omit<VisitorEntry, "id" | "likes">): VisitorEntry {
  const current = getVisitorEntries();
  const newEntry: VisitorEntry = {
    ...entry,
    id: "entry-" + Date.now(),
    likes: 0,
  };
  const updated = [newEntry, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save visitorbook entry", e);
  }
  return newEntry;
}

export function toggleLikeEntry(id: string): VisitorEntry[] {
  const current = getVisitorEntries();
  const updated = current.map((item) => {
    if (item.id === id) {
      return { ...item, likes: item.likes + 1 };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update likes in localStorage", e);
  }
  return updated;
}
