import React from "react";
import { educationData, achievementsData } from "../data/education";
import { certificationsData } from "../data/certifications";
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Code2, ExternalLink } from "lucide-react";
import { profileData } from "../data/profile";

export const Credentials: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
          Academic & Professional Honors
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 leading-none">
          Degrees & <span className="font-instrument italic text-zinc-400">Credentials</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
          Formal computer science foundations, engineering distinctions, industry certifications, and algorithmic competitive achievements.
        </p>
      </header>

      {/* LeetCode & Algorithmic Achievement Banner */}
      <div className="border border-amber-500/20 rounded-2xl p-6 sm:p-8 bg-amber-500/[0.03] backdrop-blur-md mb-12 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Algorithmic Mastery
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              350+ LeetCode DSA Problems Solved
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 max-w-xl leading-relaxed">
              Demonstrating strong algorithmic intuition, discrete mathematics foundations, and rigorous time & space complexity optimization across arrays, trees, dynamic programming, and graphs.
            </p>
          </div>

          <a
            href={profileData.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-semibold text-xs transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>View LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl font-light text-white tracking-tight">Formal Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    CGPA: {edu.grade}
                  </span>
                </div>

                <h3 className="text-xl font-light text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-zinc-300 font-medium mb-1">
                  {edu.field}
                </h4>
                <p className="text-xs text-zinc-500 font-mono mb-4">
                  {edu.institution} • {edu.location}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-white/5">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl font-light text-white tracking-tight">Verified Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-400">{cert.year}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
                    {cert.verificationBadge}
                  </span>
                </div>

                <h3 className="text-lg font-light text-white tracking-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mb-3">{cert.issuer}</p>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {cert.skillsLearned.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-purple-400" />
          <h2 className="text-2xl font-light text-white tracking-tight">Recognitions & Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 rounded-xl p-5 bg-white/[0.02] flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                <Award className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold block">
                  {item.highlightStat}
                </span>
                <h4 className="text-base font-light text-white tracking-tight mt-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
