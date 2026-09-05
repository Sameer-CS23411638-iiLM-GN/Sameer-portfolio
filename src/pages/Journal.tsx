import React, { useState } from "react";
import { journalData, JournalArticle } from "../data/journal";
import { BookOpen, Calendar, Clock, ChevronDown, ChevronUp, Tag } from "lucide-react";

export const Journal: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(journalData[0]?.id ?? null);

  const toggleArticle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <header className="mb-14 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Engineering Logs & Essays
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 leading-none">
          Technical <span className="font-instrument italic text-zinc-400">Journal</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
          Deep-dives into computer vision latency profiling, production RAG system architecture, and algorithmic design patterns.
        </p>
      </header>

      {/* Article List */}
      <div className="space-y-6">
        {journalData.map((article) => {
          const isExpanded = expandedId === article.id;
          return (
            <article
              key={article.id}
              className="border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all shadow-xl"
            >
              {/* Metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-2">
                <span className="text-blue-400 uppercase tracking-wider font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2
                onClick={() => toggleArticle(article.id)}
                className="text-xl sm:text-2xl font-light text-white tracking-tight cursor-pointer hover:text-blue-400 transition-colors my-2"
              >
                {article.title}
              </h2>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                {article.summary}
              </p>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="pt-4 mt-4 border-t border-white/10 space-y-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed animate-fade-in bg-black/20 p-4 rounded-xl">
                  {article.content.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              )}

              {/* Footer row: Tags & Expand toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleArticle(article.id)}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer font-medium"
                >
                  <span>{isExpanded ? "Collapse" : "Read Full Article"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
