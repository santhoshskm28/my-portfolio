"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Settings, Wrench, MessageSquareCode } from "lucide-react";

interface PipelineStage {
  title: string;
  icon: React.ReactNode;
  description: string;
  badge: string;
  accent: string;
  bg: string;
  border: string;
}

export default function AIShowcase() {
  const stages: PipelineStage[] = [
    {
      title: "Prompt",
      icon: <Terminal className="h-4.5 w-4.5" />,
      description: "Structured inputs using XML constraints and context boundaries.",
      badge: "Few-Shot",
      accent: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    },
    {
      title: "LLM Orchestration",
      icon: <Cpu className="h-4.5 w-4.5" />,
      description: "State-of-the-art models translating intent and formatting schemas.",
      badge: "Gemini & Claude",
      accent: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20"
    },
    {
      title: "Agent Loop",
      icon: <Settings className="h-4.5 w-4.5" />,
      description: "Autonomous reasoning loop coordinating tool call branches.",
      badge: "ReAct Pattern",
      accent: "text-neon-pink",
      bg: "bg-neon-pink/10",
      border: "border-neon-pink/20"
    },
    {
      title: "Tool Execution",
      icon: <Wrench className="h-4.5 w-4.5" />,
      description: "System commands, database writes, and MCP-supported resources.",
      badge: "MCP Servers",
      accent: "text-cyber-green",
      bg: "bg-cyber-green/10",
      border: "border-cyber-green/20"
    },
    {
      title: "Response Output",
      icon: <MessageSquareCode className="h-4.5 w-4.5" />,
      description: "Compiled code files, verified terminal outputs, or JSON formats.",
      badge: "State Verification",
      accent: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20"
    }
  ];

  const aiSkills = [
    { name: "Prompt Engineering", detail: "XML boundaries, system prompt templates, few-shot inputs, context optimization." },
    { name: "Model Context Protocol", detail: "Configuring and exposing local terminal execution and file context endpoints to LLMs." },
    { name: "AI Agent Design", detail: "Building autonomous feedback loops (Plan → Execute → Verify) using structured schemas." },
    { name: "Deep API Integrations", detail: "API setups, JSON structured mode execution, and multimodal model calls." },
    { name: "IDE Automation", detail: "Maximizing agentic workspace flows, semantic code indexing, and terminal execution." }
  ];

  return (
    <section id="ai-showcase" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
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
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          AI Engineering Labs
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

      {/* Animated Pipeline Tray Dashboard */}
      <div className="relative mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/[0.05] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
        {/* Glowing pipeline line behind elements (desktop only) */}
        <div className="hidden md:block absolute top-[90px] left-12 right-12 h-[1px] bg-white/5 -z-10" />

        {/* Traveling glowing particle packet (desktop only) */}
        <motion.div
          className="hidden md:block absolute top-[89.5px] left-10 h-2 w-2 rounded-full bg-neon-blue shadow-[0_0_12px_#00f0ff,0_0_24px_#00f0ff] -translate-y-1/2 -z-10"
          animate={{
            left: ["5%", "93%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              className="p-5 rounded-2xl bg-[#0f172a]/40 border border-white/[0.04] flex flex-col items-center text-center gap-3.5 relative hover:border-white/15 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
            >
              <div className={`p-2.5 rounded-xl border flex items-center justify-center ${stage.accent} ${stage.bg} ${stage.border}`}>
                {stage.icon}
              </div>
              
              <h3 className="font-display text-base font-extrabold text-white mt-1 leading-tight">{stage.title}</h3>
              
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${stage.accent} ${stage.bg} ${stage.border}`}>
                {stage.badge}
              </span>
              
              <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed font-sans">
                {stage.description}
              </p>

              {/* Mobile Separator */}
              {idx < stages.length - 1 && (
                <div className="md:hidden text-zinc-700 text-sm font-bold my-1">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Skills Bento Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {aiSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * idx, duration: 0.5 }}
            className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-neon-blue/30 hover:bg-white/[0.03] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between"
          >
            <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase">{skill.name}</h3>
            <p className="text-[10px] text-zinc-500 mt-3.5 leading-relaxed font-sans">{skill.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
