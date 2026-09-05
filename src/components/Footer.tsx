import React from "react";
import { profileData } from "../data/profile";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { NavTab } from "./Navbar";

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/10 py-10 sm:py-12 bg-black/40 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Copyright & Identity */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-1">
            <p className="text-xs sm:text-sm text-zinc-400">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">{profileData.name}</span>
              {" • "}
              <span className="text-zinc-500 font-mono text-xs">AI/ML & Data Science</span>
            </p>
            <p className="text-xs text-zinc-500">
              Built with React, TypeScript, Tailwind CSS & Framer Motion.
            </p>
          </div>

          {/* Visitorbook Callout matching reference */}
          <div className="order-1 md:order-2">
            <p className="text-xs sm:text-sm text-zinc-400">
              Enjoyed your stay? Drop your thoughts at{" "}
              <button
                onClick={() => {
                  onNavigate("visitorbook");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-white font-medium hover:text-blue-400 underline underline-offset-4 transition-colors cursor-pointer inline-flex items-center gap-0.5"
              >
                Stream
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-5 order-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profileData.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="LeetCode Profile (350+ Solved)"
              title="LeetCode (350+ Solved)"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
