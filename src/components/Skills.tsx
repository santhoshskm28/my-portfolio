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

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>("React");

  const activeSkillName = hoveredSkill || selectedSkill;
  const activeDetail = skillDetails[activeSkillName] || skillDetails["React"];

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Layout className="h-4 w-4" />, color: "text-neon-blue border-neon-blue/20" },
    { id: "backend", label: "Backend", icon: <Server className="h-4 w-4" />, color: "text-neon-purple border-neon-purple/20" },
    { id: "database", label: "Database", icon: <Database className="h-4 w-4" />, color: "text-neon-pink border-neon-pink/20" },
    { id: "cloud", label: "Cloud", icon: <Cloud className="h-4 w-4" />, color: "text-cyber-green border-cyber-green/20" },
    { id: "ai", label: "Artificial Intelligence", icon: <Cpu className="h-4 w-4" />, color: "text-neon-blue border-neon-blue/20" }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
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
          className="text-3xl sm:text-5xl font-extrabold text-white"
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
          Spin the interactive 3D galaxy and hover/click on any skill tag to view my experience duration and direct product application details.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Category lists - Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-5Order order-2 lg:order-1">
          <h3 className="text-xl font-bold text-zinc-300 mb-2">Core Competencies</h3>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => {
              // Group skills in this category
              const catSkills = Object.values(skillDetails).filter(s => s.category === cat.id);
              return (
                <div key={cat.id} className="p-4 rounded-xl glassmorphism border border-white/5">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-white">
                    {cat.icon}
                    <span>{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {catSkills.map((sk) => (
                      <button
                        key={sk.name}
                        onClick={() => setSelectedSkill(sk.name)}
                        onMouseEnter={() => setHoveredSkill(sk.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 ${
                          activeSkillName === sk.name
                            ? "bg-white text-black border-white"
                            : "bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {sk.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Skills Sphere - Center Column */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Ambient neon radial glows behind canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-neon-blue/10 blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-neon-purple/5 blur-[60px]" />
            <SkillsGlobe
              onHoverSkill={(name) => {
                setHoveredSkill(name);
                if (name) setSelectedSkill(name);
              }}
              activeSkill={activeSkillName}
            />
          </div>
        </div>

        {/* Info Panel - Right Column */}
        <div className="lg:col-span-4 order-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillName}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl glassmorphism-card border border-neon-blue/20 shadow-[0_0_20px_rgba(0,240,255,0.05)] h-[300px] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-neon-blue px-2 py-0.5 rounded-md bg-neon-blue/10 border border-neon-blue/20">
                  {activeDetail.category}
                </span>
                <h4 className="text-3xl font-extrabold text-white mt-3">
                  {activeDetail.name}
                </h4>
                <p className="text-sm font-semibold text-zinc-400 mt-1">
                  {activeDetail.exp}
                </p>
                <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                  {activeDetail.useCase}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold border-t border-white/5 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-blue animate-pulse" />
                Interacting with Galaxy Core
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
