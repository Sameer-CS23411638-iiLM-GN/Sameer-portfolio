import React, { useState } from "react";
import { Home, Menu, X, Sparkles, MessageSquare } from "lucide-react";

export type NavTab = "home" | "projects" | "experience" | "craft" | "credentials" | "journal" | "visitorbook";

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon?: React.ReactNode }[] = [
    { id: "home", label: "Home", icon: <Home className="w-3.5 h-3.5" /> },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "craft", label: "Craft" },
    { id: "credentials", label: "Credentials" },
    { id: "journal", label: "Journal" },
    { id: "visitorbook", label: "Stream", icon: <MessageSquare className="w-3.5 h-3.5 mr-1" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-3 sm:pt-5 pb-2 px-3 sm:px-0">
      <div className="w-full sm:w-auto h-12 sm:h-14">
        <div
          className="relative flex items-center justify-between sm:justify-center overflow-visible w-full h-full px-4 sm:px-6 rounded-[22px]"
          style={{
            background: "rgba(10, 10, 10, 0.75)",
            backdropFilter: "blur(16px) saturate(1.8) brightness(1.1)",
            WebkitBackdropFilter: "blur(16px) saturate(1.8) brightness(1.1)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
          }}
        >
          {/* Logo / Signature */}
          <button
            onClick={() => {
              onSelectTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1 text-white font-display text-lg sm:text-xl font-medium tracking-tight cursor-pointer mr-2 sm:mr-6 group text-left"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              S
            </span>
            <span className="tracking-tight text-white/90 group-hover:text-white transition-colors">
              ameer
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] ml-0.5 animate-pulse" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`relative px-3 py-1.5 transition-all duration-300 text-[11px] lg:text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center ${
                    isActive ? "text-white font-bold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all" />
                  )}
                </button>
              );
            })}

            {/* Subtle Divider */}
            <div className="ml-2 pl-2 border-l border-white/10 flex items-center">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>AI/ML</span>
              </div>
            </div>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-20 right-4 left-4 z-40 md:hidden transition-all duration-300">
          <div className="backdrop-blur-2xl bg-zinc-950/95 border border-white/15 rounded-2xl p-3 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative px-4 py-3 rounded-xl transition-all duration-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-white/10 text-white font-bold border border-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
