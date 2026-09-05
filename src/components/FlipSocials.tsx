import React, { useState } from "react";
import { Mail, Code2, FileText, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profileData } from "../data/profile";

interface FlipTileProps {
  letter: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

const FlipTile: React.FC<FlipTileProps> = ({ letter, icon, label, href, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const content = (
    <div
      className="relative w-9 h-9 sm:w-10 sm:h-10 cursor-pointer select-none"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={onClick}
      title={label}
    >
      <div
        className="w-full h-full relative transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face: Letter */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-sm sm:text-base font-bold text-zinc-300 shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          {letter}
        </div>

        {/* Back Face: Icon */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-white text-zinc-950 border border-white shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export const FlipSocials: React.FC = () => {
  const tiles: FlipTileProps[] = [
    {
      letter: "C",
      label: "LinkedIn Profile",
      icon: <LinkedinIcon className="w-4 h-4 text-blue-600" />,
      href: profileData.linkedinUrl,
    },
    {
      letter: "O",
      label: "GitHub Repositories",
      icon: <GithubIcon className="w-4 h-4 text-zinc-950" />,
      href: profileData.githubUrl,
    },
    {
      letter: "N",
      label: "Email Sameer",
      icon: <Mail className="w-4 h-4 text-red-600" />,
      href: `mailto:${profileData.email}`,
    },
    {
      letter: "T",
      label: "LeetCode 350+ Solved",
      icon: <Code2 className="w-4 h-4 text-amber-600" />,
      href: profileData.leetcodeUrl,
    },
    {
      letter: "A",
      label: "Call Phone",
      icon: <Phone className="w-4 h-4 text-emerald-600" />,
      href: `tel:${profileData.phone}`,
    },
    {
      letter: "C",
      label: "Resume Facts",
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      onClick: () => {
        alert(
          `Sameer — AI/ML & Data Science Engineer\nB.Tech CSE (Data Science) 8.5 CGPA\nContact: ${profileData.email} | ${profileData.phone}`
        );
      },
    },
    {
      letter: "T",
      label: "Quick Ping",
      icon: <Send className="w-4 h-4 text-indigo-600" />,
      href: `mailto:${profileData.email}?subject=Hello%20Sameer%20-%20From%20Portfolio`,
    },
  ];

  return (
    <div className="flex flex-row lg:flex-col items-center justify-center gap-1.5 sm:gap-2 p-1">
      {tiles.map((tile, i) => (
        <FlipTile key={i} {...tile} />
      ))}
    </div>
  );
};
