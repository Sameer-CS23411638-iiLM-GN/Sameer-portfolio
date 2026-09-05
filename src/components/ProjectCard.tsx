import React, { useState } from "react";
import { Project } from "../data/projects";
import { Play, Cpu, Layers, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  onOpenDemo?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<"scope" | "tech">("scope");

  return (
    <div className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-2xl p-5 sm:p-7 transition-all duration-500 flex flex-col justify-between backdrop-blur-sm shadow-xl">
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-blue-400 font-medium mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-white/95 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">{project.subtitle}</p>
          </div>

          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-semibold shrink-0">
              Featured
            </span>
          )}
        </div>

        {/* Tab Switcher: Scope & Overview vs Tech Architecture */}
        <div className="inline-flex p-1 bg-black/40 border border-white/10 rounded-xl gap-1 my-3">
          <button
            onClick={() => setActiveTab("scope")}
            className={`relative px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "scope"
                ? "bg-white/15 text-white shadow-sm font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Scope & Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`relative px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "tech"
                ? "bg-white/15 text-white shadow-sm font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Tech Architecture</span>
          </button>
        </div>

        {/* Description Body */}
        <div className="min-h-[96px] text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-4">
          {activeTab === "scope" ? (
            <p className="animate-fade-in">{project.scopeOverview}</p>
          ) : (
            <p className="animate-fade-in font-mono text-[11px] sm:text-xs text-zinc-300/90 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">
              {project.techArchitecture}
            </p>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 mb-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center text-center p-1.5 rounded-lg bg-white/[0.02]">
              <span className="text-xs sm:text-sm font-semibold text-white tracking-tight font-display">
                {metric.value}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[10px] sm:text-[11px] font-mono hover:bg-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-2 pt-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>

        {project.hasInteractiveDemo && onOpenDemo ? (
          <button
            onClick={() => onOpenDemo(project)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {project.demoType === "cv-simulation" ? (
              <>
                <Activity className="w-3.5 h-3.5 animate-pulse text-blue-400" />
                <span>Simulate CV Model</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-blue-400" />
                <span>Test RAG Pipeline</span>
              </>
            )}
          </button>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all"
          >
            <span>Overview</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
