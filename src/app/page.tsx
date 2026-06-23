"use client";

import dynamic from "next/dynamic";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import AIShowcase from "@/components/AIShowcase";
import Architecture from "@/components/Architecture";
import Achievements from "@/components/Achievements";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

// Dynamically import BackgroundCanvas with ssr: false to prevent hydration errors with Three.js
const BackgroundCanvas = dynamic(() => import("@/components/BackgroundCanvas"), {
  ssr: false,
});

export default function Home() {
  const { currentSection } = useScrollProgress();

  return (
    <main className="relative min-h-screen w-full bg-transparent text-white selection:bg-neon-blue/30 selection:text-white">
      {/* Fixed 3D Background layer responding to scroll progress */}
      <BackgroundCanvas currentSection={currentSection} />

      {/* Floating Navigation */}
      <Navbar />

      {/* Content Sections */}
      <div className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Workflow />
        <AIShowcase />
        <Architecture />
        <Achievements />
        <ResumeSection />
        <Contact />
      </div>
    </main>
  );
}
