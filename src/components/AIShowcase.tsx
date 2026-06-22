"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Settings, Wrench, MessageSquareCode } from "lucide-react";

interface PipelineStage {
  title: string;
  icon: React.ReactNode;
  description: string;
  badge: string;
}

export default function AIShowcase() {
  const stages: PipelineStage[] = [
    {
      title: "Prompt",
      icon: <Terminal className="h-5 w-5 text-neon-blue" />,
      description: "Structured inputs using XML constraints and context boundaries.",
      badge: "Few-Shot"
    },
    {
      title: "LLM",
      icon: <Cpu className="h-5 w-5 text-neon-purple" />,
      description: "State-of-the-art models translating intent and formatting schemas.",
      badge: "Gemini / Claude"
    },
    {
      title: "Agent",
      icon: <Settings className="h-5 w-5 text-neon-pink" />,
      description: "Autonomous reasoning loop coordinating tool call branches.",
      badge: "AGY SDK / ReAct"
    },
    {
      title: "Tool",
      icon: <Wrench className="h-5 w-5 text-cyber-green" />,
      description: "System commands, database writes, and MCP-supported resources.",
      badge: "MCP Servers"
    },
    {
      title: "Response",
      icon: <MessageSquareCode className="h-5 w-5 text-neon-blue" />,
      description: "Compiled code files, verified terminal outputs, or JSON formats.",
      badge: "Final Output"
    }
  ];

  const aiSkills = [
    { name: "Prompt Engineering", detail: "XML boundaries, system prompt templates, few-shot inputs, context optimization." },
    { name: "Model Context Protocol", detail: "Configuring and exposing local terminal execution and file context endpoints to LLMs." },
    { name: "AI Agents", detail: "Building autonomous feedback loops (Plan → Execute → Verify) using structured schemas." },
    { name: "Claude & Gemini", detail: "Deep API integrations, JSON structured mode execution, and multimodal model calls." },
    { name: "Antigravity & Cursor", detail: "Maximizing agentic workspace flows, semantic code indexing, and terminal automation." }
  ];

  return (
    <section id="ai-showcase" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-blue px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-3"
        >
          Specialized Domain
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white"
        >
          AI Engineering Pipeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          How I construct automated, agentic systems that interface reasoning models with physical file, database, and browser tools.
        </motion.p>
      </div>

      {/* Animated Pipeline Pipeline */}
      <div className="relative mb-16 p-8 rounded-3xl glassmorphism border border-white/5 overflow-hidden">
        {/* Pulsing pipeline line behind elements (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 -translate-y-1/2 -z-10" />

        {/* Traveling glowing particle (desktop only) */}
        <motion.div
          className="hidden md:block absolute top-[52%] left-10 h-3 w-3 rounded-full bg-neon-blue shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff] -translate-y-1/2 -z-10"
          animate={{
            left: ["6%", "91%"]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="p-5 rounded-2xl bg-black/50 border border-white/5 flex flex-col items-center text-center gap-3 relative"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                {stage.icon}
              </div>
              <h3 className="text-lg font-extrabold text-white mt-1">{stage.title}</h3>
              <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider bg-neon-purple/10 px-2 py-0.5 rounded border border-neon-purple/20">
                {stage.badge}
              </span>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                {stage.description}
              </p>

              {/* Mobile Arrow down spacer */}
              {idx < stages.length - 1 && (
                <div className="md:hidden text-zinc-700 text-lg font-bold my-1">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI skills display grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {aiSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * idx }}
            className="p-5 rounded-2xl glassmorphism-card border border-white/5 hover:border-neon-blue/30"
          >
            <h3 className="font-extrabold text-white text-sm tracking-wide">{skill.name}</h3>
            <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">{skill.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
