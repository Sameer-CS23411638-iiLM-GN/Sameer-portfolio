import React from "react";
import { experienceData } from "../data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Career Journey
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 leading-none">
          Professional <span className="font-instrument italic text-zinc-400">Experience</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
          Industry internships and applied software engineering roles focusing on scalable data pipelines, automated reporting with LLMs, and machine learning deployments.
        </p>
      </header>

      {/* Timeline List */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-white/10 before:to-transparent">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="relative pl-10 sm:pl-12 group">
            {/* Timeline Pin Indicator */}
            <div className="absolute left-1.5 sm:left-2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Experience Card */}
            <div className="border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all shadow-xl">
              {/* Top Row: Role & Period */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                      {exp.role}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base text-zinc-300 font-medium mt-0.5">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Quantified Metrics Highlight Bar */}
              <div className="grid grid-cols-3 gap-2.5 my-4 p-3 rounded-xl bg-black/40 border border-white/5">
                {exp.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <span className="text-xs sm:text-sm font-bold text-white font-display block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Contributions */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                  Key Accomplishments
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {exp.contributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
