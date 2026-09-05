import React from "react";
import { profileData } from "../data/profile";
import { experienceData } from "../data/experience";
import { projectsData, Project } from "../data/projects";
import { DotMatrix } from "../components/DotMatrix";
import { FlipSocials } from "../components/FlipSocials";
import { ProjectCard } from "../components/ProjectCard";
import { NavTab } from "../components/Navbar";
import { ArrowRight, Code2, Sparkles, Terminal, Award, MessageSquare } from "lucide-react";

interface HomeProps {
  onNavigate: (tab: NavTab) => void;
  onOpenDemo: (project: Project) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenDemo }) => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-16">
      {/* Bento Grid Header matching abdulsamad.tech */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 mb-12">
        {/* Profile Card (lg:col-span-12) */}
        <div className="lg:col-span-12 border border-white/10 rounded-2xl p-5 sm:p-6 bg-white/[0.02] backdrop-blur-md flex flex-col md:flex-row items-center gap-6 shadow-xl">
          {/* Avatar / Photo matching abdulsamad.tech */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/20 bg-zinc-900 shadow-xl group shrink-0">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
            </div>

            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white">
                  {profileData.name}
                </h1>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              <span className="inline-block text-sm sm:text-base font-medium mt-1 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                {profileData.role}
              </span>
              <span className="text-xs text-zinc-400 mt-0.5 font-mono">
                {profileData.location} • {profileData.subRole}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-20 w-[1px] bg-white/10 mx-2" />

          {/* Three Core Philosophies from Resume */}
          <ul className="text-left text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal space-y-2 flex-1">
            {profileData.philosophies.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span
                  className="h-2 w-2 rounded-full shrink-0 mt-1.5"
                  style={{
                    backgroundColor: item.glowColor,
                    boxShadow: `0 0 10px ${item.glowColor}`,
                  }}
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3D Flip Contacts Column (lg:col-span-1) */}
        <div className="lg:col-span-1 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md flex items-center justify-center p-2.5 shadow-lg">
          <FlipSocials />
        </div>

        {/* Experience Snapshot (lg:col-span-11) */}
        <div className="lg:col-span-11 border border-white/10 rounded-2xl p-5 sm:p-6 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <h2 className="text-lg sm:text-xl font-light text-white tracking-tight">
                Professional Experience
              </h2>
            </div>
            <button
              onClick={() => onNavigate("experience")}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer group"
            >
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onNavigate("experience")}
                className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-2">{exp.company}</p>
                <p className="text-xs text-zinc-300 font-light line-clamp-2 leading-relaxed">
                  {exp.contributions[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Status Bar (lg:col-span-7) */}
        <div className="lg:col-span-7 border border-white/10 rounded-2xl py-4 px-5 bg-white/[0.02] backdrop-blur-md flex flex-col sm:flex-row items-center justify-around gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold font-mono">
                {profileData.currentFocus.title}
              </p>
              <p className="text-xs sm:text-sm text-white font-medium">
                {profileData.currentFocus.subtitle}
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold font-mono">
                {profileData.availability.title}
              </p>
              <p className="text-xs sm:text-sm text-white font-medium">
                {profileData.availability.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* LED Dot Matrix Canvas (lg:col-span-3) */}
        <div className="lg:col-span-3 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md flex items-center justify-center p-2 shadow-lg">
          <DotMatrix />
        </div>

        {/* LeetCode & Academic Metric Quick Badge (lg:col-span-2) */}
        <div
          onClick={() => onNavigate("credentials")}
          className="lg:col-span-2 border border-white/10 rounded-2xl p-4 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md flex flex-col justify-center items-center text-center cursor-pointer group shadow-lg transition-all"
        >
          <Code2 className="w-5 h-5 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold text-white font-display">350+</span>
          <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
            LeetCode DSA
          </span>
          <span className="text-[10px] text-emerald-400 font-mono mt-0.5">8.5 CGPA B.Tech</span>
        </div>
      </div>

      {/* Featured Works Showcase */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
              Selected <span className="font-instrument italic text-zinc-300">Works</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate("projects")}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>All projects ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>

      {/* Technical Toolkit / Craft Preview */}
      <div className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/[0.02] backdrop-blur-md mb-16 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mt-1">
              Refined <span className="font-instrument italic text-zinc-300">Craft & Stack</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate("craft")}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Explore Complete Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: "Python", category: "Language" },
            { label: "OpenCV", category: "Computer Vision" },
            { label: "TensorFlow", category: "Deep Learning" },
            { label: "FastAPI", category: "Backend" },
            { label: "LangChain", category: "Generative AI" },
            { label: "PostgreSQL", category: "Databases" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-black/40 border border-white/5 text-center flex flex-col justify-center"
            >
              <span className="text-xs font-semibold text-white font-mono">{item.label}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stream / Visitorbook Callout Teaser matching reference */}
      <div className="relative border border-white/10 rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-md overflow-hidden shadow-2xl">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Interactive Stream
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-3 leading-tight">
            Drop Your{" "}
            <span className="font-instrument italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Thoughts!
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
            Leave a trace of your journey. Drop feedback on my AI/ML projects, discuss RAG architectures, or sign the visitorbook.
          </p>

          <button
            onClick={() => onNavigate("visitorbook")}
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Sign the Visitorbook</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
