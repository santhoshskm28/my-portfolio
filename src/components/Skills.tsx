"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layout, Server, Database, Cloud } from "lucide-react";

// Load 3D SkillsGlobe client-side only
const SkillsGlobe = dynamic(() => import("./SkillsGlobe"), { ssr: false });

interface SkillDetail {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai";
  exp: string;
  useCase: string;
}

const skillDetails: Record<string, SkillDetail> = {
  React: {
    name: "React",
    category: "frontend",
    exp: "3 Years Experience",
    useCase: "Building highly interactive SPA/MPA component hierarchies with hook states and performance rendering."
  },
  "Next.js": {
    name: "Next.js",
    category: "frontend",
    exp: "2 Years Experience",
    useCase: "App Router development with SSR, dynamic generation, edge functions, routing, and search optimizations."
  },
  Tailwind: {
    name: "Tailwind CSS",
    category: "frontend",
    exp: "3 Years Experience",
    useCase: "Utility-first CSS styling, designing responsive components, theme templates, and custom style systems."
  },
  HTML: {
    name: "HTML5",
    category: "frontend",
    exp: "4 Years Experience",
    useCase: "Structuring semantic web elements optimized for SEO, visual accessibility (WCAG), and responsive layouts."
  },
  CSS: {
    name: "CSS3",
    category: "frontend",
    exp: "4 Years Experience",
    useCase: "Creating smooth custom transitions, keyframe animations, glassmorphism templates, and media query grids."
  },
  "Node.js": {
    name: "Node.js",
    category: "backend",
    exp: "2 Years Experience",
    useCase: "Backend service setups, non-blocking I/O event loops, stream file handling, and cluster routing configurations."
  },
  "Express.js": {
    name: "Express.js",
    category: "backend",
    exp: "2 Years Experience",
    useCase: "Creating custom middleware, routing engines, robust REST API structures, and validating query fields."
  },
  "REST APIs": {
    name: "REST APIs",
    category: "backend",
    exp: "2.5 Years Experience",
    useCase: "Designing standardized endpoint URIs, handling complex status codes, validating payloads, and CORS."
  },
  JWT: {
    name: "JWT Authentication",
    category: "backend",
    exp: "2 Years Experience",
    useCase: "Implementing stateless security tokens, token validation middlewares, and token rotations (refresh/access)."
  },
  MongoDB: {
    name: "MongoDB Atlas",
    category: "database",
    exp: "2 Years Experience",
    useCase: "Designing flexible NoSQL schemas, executing aggregation pipelines, indexing fields, and replica setups."
  },
  SQL: {
    name: "SQL",
    category: "database",
    exp: "2 Years Experience",
    useCase: "Creating relational tables, writing JOIN queries, designing triggers, and executing schema indexing."
  },
  Railway: {
    name: "Railway Hosting",
    category: "cloud",
    exp: "1.5 Years Experience",
    useCase: "Deploying full-stack web applications, configuring environments, automatic branch builds, and databases."
  },
  Netlify: {
    name: "Netlify",
    category: "cloud",
    exp: "2 Years Experience",
    useCase: "Static site deployments, configuring redirects, header tags, edge forms, and serverless background tasks."
  },
  Docker: {
    name: "Docker",
    category: "cloud",
    exp: "1.5 Years Experience",
    useCase: "Writing custom Dockerfiles, orchestrating multi-container apps with compose, ensuring dev-prod parity."
  },
  Gemini: {
    name: "Gemini API",
    category: "ai",
    exp: "1 Year Experience",
    useCase: "Integrating Google AI models, configuring structured JSON schemas, multimodal prompts, and function calling."
  },
  Claude: {
    name: "Claude (Anthropic)",
    category: "ai",
    exp: "1 Year Experience",
    useCase: "Implementing system-prompt constructs, multi-agent frameworks, complex logic checks, and structured tools."
  },
  OpenAI: {
    name: "OpenAI API",
    category: "ai",
    exp: "1 Year Experience",
    useCase: "Integrating GPT models, creating embeddings, vectors search, custom agent toolsets, and assistant API builds."
  },
  Cursor: {
    name: "Cursor AI",
    category: "ai",
    exp: "1.5 Years Experience",
    useCase: "Leveraging semantic codebase searches, multi-file edits, and quick AI prompts to accelerate engineering."
  },
  Antigravity: {
    name: "Antigravity IDE",
    category: "ai",
    exp: "1 Year Experience",
    useCase: "Using agentic IDE pipelines, automated workspace code edits, testing routines, and terminal runs."
  },
  MCP: {
    name: "Model Context Protocol",
    category: "ai",
    exp: "1 Year Experience",
    useCase: "Building and registering MCP servers to supply local files, terminal context, and web searches directly to LLMs."
  },
  "Prompt Eng.": {
    name: "Prompt Engineering",
    category: "ai",
    exp: "1.5 Years Experience",
    useCase: "Orchestrating XML-structured guidelines, few-shot inputs, chain-of-thought logic, and output validation."
  }
};

const categoryColors = {
  frontend: { text: "text-neon-blue", border: "border-neon-blue/20", bg: "bg-neon-blue/10", shadow: "shadow-neon-blue/5" },
  backend: { text: "text-neon-purple", border: "border-neon-purple/20", bg: "bg-neon-purple/10", shadow: "shadow-neon-purple/5" },
  database: { text: "text-neon-pink", border: "border-neon-pink/20", bg: "bg-neon-pink/10", shadow: "shadow-neon-pink/5" },
  cloud: { text: "text-cyber-green", border: "border-cyber-green/20", bg: "bg-cyber-green/10", shadow: "shadow-cyber-green/5" },
  ai: { text: "text-neon-blue", border: "border-neon-blue/20", bg: "bg-neon-blue/10", shadow: "shadow-neon-blue/5" }
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>("React");

  const activeSkillName = hoveredSkill || selectedSkill;
  const activeDetail = skillDetails[activeSkillName] || skillDetails["React"];
  const theme = categoryColors[activeDetail.category];

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Layout className="h-3.5 w-3.5" /> },
    { id: "backend", label: "Backend Core", icon: <Server className="h-3.5 w-3.5" /> },
    { id: "database", label: "Databases", icon: <Database className="h-3.5 w-3.5" /> },
    { id: "cloud", label: "Cloud & Devops", icon: <Cloud className="h-3.5 w-3.5" /> },
    { id: "ai", label: "Generative AI", icon: <Cpu className="h-3.5 w-3.5" /> }
  ] as const;

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-blue px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-3"
        >
          Tech Stack
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          Skills Galaxy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          Spin the interactive 3D universe and hover/click on any skill tag to view my experience duration and direct product application details.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Categories Grid - Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">// Core Competencies</h3>
          <div className="flex flex-col gap-4">
            {categories.map((cat) => {
              const catSkills = Object.values(skillDetails).filter(s => s.category === cat.id);
              const catTheme = categoryColors[cat.id];
              return (
                <div 
                  key={cat.id} 
                  className="p-4.5 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center gap-2 mb-3.5 font-display text-sm font-extrabold text-white">
                    <span className={catTheme.text}>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((sk) => {
                      const isActive = activeSkillName === sk.name;
                      return (
                        <button
                          key={sk.name}
                          onClick={() => setSelectedSkill(sk.name)}
                          onMouseEnter={() => setHoveredSkill(sk.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 font-medium ${
                            isActive
                              ? "bg-white text-black border-white shadow-lg"
                              : "bg-white/[0.03] text-zinc-400 border-white/[0.05] hover:text-white hover:bg-white/[0.08]"
                          }`}
                        >
                          {sk.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Skills Sphere - Center Column */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Ambient matching radial glows behind canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-neon-blue/5 blur-[90px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full bg-neon-purple/5 blur-[70px]" />
            <SkillsGlobe
              onHoverSkill={(name) => {
                setHoveredSkill(name);
                if (name) setSelectedSkill(name);
              }}
              activeSkill={activeSkillName}
            />
          </div>
        </div>

        {/* Dynamic Detail Card - Right Column */}
        <div className="lg:col-span-4 order-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillName}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 rounded-2xl bg-white/[0.02] border ${theme.border} ${theme.shadow} shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] h-[320px] flex flex-col justify-between`}
            >
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${theme.bg} ${theme.text} border ${theme.border}`}>
                  {activeDetail.category}
                </span>
                
                <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight leading-none">
                  {activeDetail.name}
                </h4>
                
                <p className="text-xs font-semibold text-zinc-500 mt-1">
                  {activeDetail.exp}
                </p>
                
                <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
                  {activeDetail.useCase}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider border-t border-white/[0.04] pt-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.bg} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${theme.bg}`}></span>
                </span>
                Active Node Mapping
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
