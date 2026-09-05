import React, { useState, useEffect } from "react";
import {
  VisitorEntry,
  getVisitorEntries,
  saveVisitorEntry,
  toggleLikeEntry,
} from "../data/visitorbook";
import {
  Heart,
  Send,
  Pin,
  User,
  MessageSquare,
  BookOpen,
  Code2,
  Headphones,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import confetti from "canvas-confetti";

export const Visitorbook: React.FC = () => {
  const [entries, setEntries] = useState<VisitorEntry[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [userAuth, setUserAuth] = useState<{
    name: string;
    handle: string;
    avatar: string;
    provider: "github" | "google" | "guest";
  } | null>(null);

  // Form states
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<VisitorEntry["category"]>("Hello");
  const [customName, setCustomName] = useState("");
  const [customHandle, setCustomHandle] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    setEntries(getVisitorEntries());
  }, []);

  const handleAuth = (provider: "github" | "google" | "guest") => {
    let mockUser = {
      name: "GitHub Developer",
      handle: "@developer",
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=GithubUser${Date.now()}&backgroundColor=3b82f6`,
      provider,
    };

    if (provider === "google") {
      mockUser = {
        name: "Google Explorer",
        handle: "@explorer",
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=GoogleUser${Date.now()}&backgroundColor=10b981`,
        provider,
      };
    } else if (provider === "guest") {
      mockUser = {
        name: "Guest Visitor",
        handle: "@guest",
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=Guest${Date.now()}&backgroundColor=8b5cf6`,
        provider,
      };
    }

    setUserAuth(mockUser);
    setCustomName(mockUser.name);
    setCustomHandle(mockUser.handle);
  };

  const handlePostThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsPosting(true);

    const authorName = customName.trim() || userAuth?.name || "Guest Visitor";
    const authorHandle = customHandle.trim() || userAuth?.handle || "@visitor";
    const avatar =
      userAuth?.avatar ||
      `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(authorName)}&backgroundColor=3b82f6`;

    saveVisitorEntry({
      name: authorName,
      handle: authorHandle.startsWith("@") ? authorHandle : `@${authorHandle}`,
      avatar,
      message: message.trim(),
      timestamp: "Just now",
      category,
      provider: userAuth?.provider || "guest",
    });

    setEntries(getVisitorEntries());
    setMessage("");
    setIsPosting(false);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#10b981", "#ffffff", "#8b5cf6"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleLike = (id: string) => {
    const updated = toggleLikeEntry(id);
    setEntries(updated);
  };

  const categories: ("All" | VisitorEntry["category"])[] = [
    "All",
    "Vision & AI",
    "RAG Systems",
    "Algorithms",
    "Hello",
  ];

  const filteredEntries =
    activeFilter === "All"
      ? entries
      : entries.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-24">
      {/* Editorial Header matching abdulsamad.tech/visitorbook */}
      <div className="mb-10 flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4">
            <span className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-zinc-300">
              Drop Your
            </span>
            <span className="relative group">
              <span className="font-instrument italic text-5xl sm:text-7xl md:text-7xl bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-tight block">
                Thoughts!
              </span>
              <div className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-20 bg-blue-500/10 blur-[70px] -z-10 rounded-full" />
            </span>
          </div>

          <p className="text-zinc-400 text-base sm:text-xl font-light max-w-2xl mt-4 leading-relaxed">
            Leave a trace of your journey. Thoughts on AI/ML architectures, project feedback, or a simple hello.
          </p>

          {/* Sign-in / Identity Provider Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {!userAuth ? (
              <>
                <button
                  onClick={() => handleAuth("github")}
                  className="flex items-center justify-center gap-2.5 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full transition-all group cursor-pointer shadow-lg"
                >
                  <GithubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="font-light text-xs sm:text-sm text-white/90 group-hover:text-white">
                    Continue with GitHub
                  </span>
                </button>

                <button
                  onClick={() => handleAuth("google")}
                  className="flex items-center justify-center gap-2.5 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full transition-all group cursor-pointer shadow-lg"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.6-.4-4z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C40.6 35.6 44 29.8 44 24c0-1.3-.1-2.7-.4-4z"/>
                  </svg>
                  <span className="font-light text-xs sm:text-sm text-white/90 group-hover:text-white">
                    Continue with Google
                  </span>
                </button>

                <button
                  onClick={() => handleAuth("guest")}
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all text-xs font-mono text-zinc-300 hover:text-white cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Guest Mode</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 bg-white/5 border border-white/15 px-4 py-2 rounded-full">
                <img src={userAuth.avatar} alt="Avatar" className="w-6 h-6 rounded-full" />
                <span className="text-xs text-white font-medium">{userAuth.name}</span>
                <span className="text-[11px] font-mono text-blue-400">({userAuth.handle})</span>
                <button
                  onClick={() => setUserAuth(null)}
                  className="text-[10px] text-zinc-500 hover:text-white ml-2 underline cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Interests Quick Badges matching reference right sidebar */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto shrink-0">
          {[
            {
              title: "Research Papers",
              desc: "Deep Learning & Vision",
              icon: <BookOpen className="w-4 h-4 text-blue-400" />,
            },
            {
              title: "AI & RAG",
              desc: "LangChain & Vector Stores",
              icon: <Cpu className="w-4 h-4 text-emerald-400" />,
            },
            {
              title: "Competitive DSA",
              desc: "350+ LeetCode Solved",
              icon: <Code2 className="w-4 h-4 text-amber-400" />,
            },
            {
              title: "Coding Music",
              desc: "Deep focus state",
              icon: <Headphones className="w-4 h-4 text-purple-400" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-zinc-950/60 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-zinc-900/80 transition-all cursor-default"
            >
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                {item.icon}
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-white">{item.title}</span>
                <span className="block text-[10px] text-zinc-400 font-mono">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Composer Box */}
      <div className="border border-white/10 rounded-2xl p-5 sm:p-6 bg-white/[0.02] backdrop-blur-md mb-12 shadow-xl">
        <form onSubmit={handlePostThought} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Your Name (e.g. Alex Chen)"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={customHandle}
                onChange={(e) => setCustomHandle(e.target.value)}
                placeholder="Social / GitHub Handle (e.g. @alexc)"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors font-mono"
              />
            </div>
            <div className="w-full sm:w-48">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as VisitorEntry["category"])}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-mono"
              >
                <option value="Hello">Category: Hello</option>
                <option value="Vision & AI">Category: Vision & AI</option>
                <option value="RAG Systems">Category: RAG Systems</option>
                <option value="Algorithms">Category: Algorithms</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Drop your thought, comment on the drowsiness detection pipeline, or say hi..."
              maxLength={280}
              rows={3}
              className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none leading-relaxed"
              required
            />
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-zinc-500 mt-1">
              <span>Markdown supported • Stored locally in your browser</span>
              <span>{message.length} / 280</span>
            </div>
          </div>

          <div className="flex justify-end items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isPosting || !message.trim()}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-semibold text-xs transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Leave a Thought</span>
            </button>
          </div>
        </form>
      </div>

      {/* Stream Category Filter */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <h2 className="text-base sm:text-lg font-light text-white tracking-tight">
            Stream ({filteredEntries.length})
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-white text-zinc-950 font-semibold"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stream Messages List */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className={`border rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-md ${
              entry.isPinned
                ? "bg-blue-500/[0.04] border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                : "bg-white/[0.02] hover:bg-white/[0.04] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={entry.avatar}
                  alt={entry.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-zinc-900 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {entry.name}
                    </span>
                    {entry.isPinned && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                        <Pin className="w-2.5 h-2.5 fill-blue-400" />
                        <span>Pinned</span>
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 block">
                    {entry.handle} • {entry.timestamp}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                {entry.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-4 pl-12 sm:pl-13">
              {entry.message}
            </p>

            <div className="flex items-center justify-between border-t border-white/5 pt-3 pl-12 sm:pl-13 text-xs text-zinc-400">
              <button
                onClick={() => handleLike(entry.id)}
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors cursor-pointer group"
              >
                <Heart className="w-3.5 h-3.5 group-hover:fill-red-400 transition-colors" />
                <span className="font-mono text-[11px]">{entry.likes}</span>
              </button>

              <span className="text-[10px] text-zinc-400 font-mono">
                via {entry.provider}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
