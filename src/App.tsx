import React, { useState, useEffect } from "react";
import { Navbar, NavTab } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWidget } from "./components/FloatingWidget";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Craft } from "./pages/Craft";
import { Credentials } from "./pages/Credentials";
import { Journal } from "./pages/Journal";
import { Visitorbook } from "./pages/Visitorbook";
import { Project } from "./data/projects";
import { DrowsinessSimModal } from "./components/DrowsinessSimModal";
import { RagTestModal } from "./components/RagTestModal";

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>("home");
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  // Sync route with hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (
        [
          "home",
          "projects",
          "experience",
          "craft",
          "credentials",
          "journal",
          "visitorbook",
          "stream",
        ].includes(hash)
      ) {
        if (hash === "stream") {
          setCurrentTab("visitorbook");
        } else {
          setCurrentTab(hash as NavTab);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.location.hash = tab === "visitorbook" ? "stream" : tab;
  };

  const handleOpenDemo = (project: Project) => {
    setSelectedDemoProject(project);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans relative selection:bg-blue-500/30 selection:text-white">
      {/* Subtle Background Radial Glow and Ambient Dot Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
        <div className="absolute inset-0 dot-bg opacity-35" />
      </div>

      {/* Floating Pill Navigation Bar */}
      <Navbar currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main Content Area */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        {currentTab === "home" && (
          <Home onNavigate={handleSelectTab} onOpenDemo={handleOpenDemo} />
        )}
        {currentTab === "projects" && <Projects onOpenDemo={handleOpenDemo} />}
        {currentTab === "experience" && <Experience />}
        {currentTab === "craft" && <Craft />}
        {currentTab === "credentials" && <Credentials />}
        {currentTab === "journal" && <Journal />}
        {currentTab === "visitorbook" && <Visitorbook />}
      </main>

      {/* Interactive Simulation Modals */}
      <DrowsinessSimModal
        isOpen={selectedDemoProject?.demoType === "cv-simulation"}
        onClose={() => setSelectedDemoProject(null)}
      />

      <RagTestModal
        isOpen={selectedDemoProject?.demoType === "rag-playground"}
        onClose={() => setSelectedDemoProject(null)}
      />

      {/* Floating Stream/Messenger button at bottom right */}
      <FloatingWidget onNavigate={handleSelectTab} />

      {/* Footer */}
      <Footer onNavigate={handleSelectTab} />
    </div>
  );
}

export default App;
