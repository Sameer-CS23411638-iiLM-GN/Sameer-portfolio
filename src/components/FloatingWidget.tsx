import React from "react";
import { MessageCircle } from "lucide-react";
import { NavTab } from "./Navbar";

interface FloatingWidgetProps {
  onNavigate: (tab: NavTab) => void;
  unreadCount?: number;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({ onNavigate, unreadCount = 4 }) => {
  return (
    <aside aria-label="Quick Stream Messenger" className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      <button
        onClick={() => {
          onNavigate("visitorbook");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-12 h-12 flex items-center justify-center bg-zinc-950/80 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl hover:bg-white/10 hover:border-white/30 transition-all text-white group relative cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Open Stream / Visitorbook"
        title="Leave a thought on Stream"
      >
        <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />

        {/* Live Visitor / Message Count Badge */}
        <div className="absolute -top-1.5 -right-1.5 bg-zinc-900/90 backdrop-blur-md border border-white/15 px-1.5 py-0.5 rounded-lg shadow-lg flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
          <span className="text-[10px] font-bold text-white/80 font-mono">{unreadCount}</span>
        </div>
      </button>
    </aside>
  );
};
