import React, { useState } from "react";
import { skillsData } from "../data/skills";
import { Cpu, Terminal, Code2, Database, Shield, Zap, Sparkles } from "lucide-react";

export const Craft: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Craft" },
    { id: "languages", label: "Languages" },
    { id: "ai-ml-dl", label: "AI / Deep Learning" },
    { id: "generative-ai", label: "Generative AI & RAG" },
    { id: "computer-vision", label: "Computer Vision" },
    { id: "backend-systems", label: "Backend & APIs" },
    { id: "databases", label: "Databases" },
    { id: "devops-tools", label: "DevOps & Testing" },
  ];

  const displayedCategories =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case "ai-ml-dl":
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case "generative-ai":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case "computer-vision":
        return <Zap className="w-4 h-4 text-cyan-400" />;
      case "backend-systems":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "databases":
        return <Database className="w-4 h-4 text-rose-400" />;
      case "devops-tools":
        return <Shield className="w-4 h-4 text-indigo-400" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Technical Arsenal
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 leading-none">
          Refined <span className="font-instrument italic text-zinc-400">Craft & Stack</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
          Languages, machine learning frameworks, computer vision algorithms, and backend architectures strictly grounded in hands-on production experience.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === opt.id
                  ? "bg-white text-zinc-950 font-semibold shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </header>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className="border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Category Title with Icon */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-5">
                {category.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-2 border transition-all ${
                      skill.highlight
                        ? "bg-white/10 text-white border-white/25 shadow-sm"
                        : "bg-white/[0.03] text-zinc-300 border-white/10 hover:bg-white/5"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                    )}
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-zinc-400 font-sans opacity-70">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
