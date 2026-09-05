import React, { useState } from "react";
import { projectsData, Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

interface ProjectsProps {
  onOpenDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Computer Vision", "Generative AI", "Machine Learning", "Data Engineering"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-20">
      {/* Editorial Header */}
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Portfolio & Implementations
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 leading-none">
          Selected <span className="font-instrument italic text-zinc-400">Works</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed">
          A collection of machine learning systems, real-time computer vision inference pipelines, and production-style RAG backends built from foundational principles.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-zinc-950 font-semibold shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenDemo={onOpenDemo} />
        ))}
      </div>
    </div>
  );
};
