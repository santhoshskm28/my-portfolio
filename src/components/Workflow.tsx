"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, Compass, Hammer, CloudLightning, Activity, RefreshCw } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  colorClass: string; // Dynamic icon color
}

export default function Workflow() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Deconstruct",
      icon: <HelpCircle className="h-4.5 w-4.5" />,
      description: "Deconstruct requirements, outline technical limits, and identify end-user requirements.",
      colorClass: "text-neon-blue bg-neon-blue/10 border-neon-blue/20"
    },
    {
      num: "02",
      title: "Research",
      icon: <Search className="h-4.5 w-4.5" />,
      description: "Analyze documentation, run sandbox tests on APIs, and establish database modeling patterns.",
      colorClass: "text-neon-purple bg-neon-purple/10 border-neon-purple/20"
    },
    {
      num: "03",
      title: "Design",
      icon: <Compass className="h-4.5 w-4.5" />,
      description: "Layout user experience hierarchies, design relational database structures, and map API boundaries.",
      colorClass: "text-neon-pink bg-neon-pink/10 border-neon-pink/20"
    },
    {
      num: "04",
      title: "Build",
      icon: <Hammer className="h-4.5 w-4.5" />,
      description: "Write clean TypeScript logic, integrate AI interfaces, and build secure stateless authorization checks.",
      colorClass: "text-cyber-green bg-cyber-green/10 border-cyber-green/20"
    },
    {
      num: "05",
      title: "Deploy",
      icon: <CloudLightning className="h-4.5 w-4.5" />,
      description: "Containerize modules with Docker and ship to scalable cloud infrastructure.",
      colorClass: "text-neon-blue bg-neon-blue/10 border-neon-blue/20"
    },
    {
      num: "06",
      title: "Monitor",
      icon: <Activity className="h-4.5 w-4.5" />,
      description: "Track system usage, analyze query logs, and monitor database read performance.",
      colorClass: "text-neon-purple bg-neon-purple/10 border-neon-purple/20"
    },
    {
      num: "07",
      title: "Refactor",
      icon: <RefreshCw className="h-4.5 w-4.5" />,
      description: "Refactor bottlenecks, prune dependencies, and iterate based on telemetry metrics.",
      colorClass: "text-neon-pink bg-neon-pink/10 border-neon-pink/20"
    }
  ];

  return (
    <section id="workflow" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-cyber-green px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/20 mb-3"
        >
          Engineering Philosophy
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          How I Build Software
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          A methodical, cycle-based roadmap focused on writing production-ready, performant, and maintainable software.
        </motion.p>
      </div>

      {/* Horizontal Scroll / Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
        {/* Animated gradient pipeline tracking line (desktop only) */}
        <div className="hidden md:block absolute top-[52px] left-[6%] right-[6%] h-[1px] bg-white/5 -z-10" />
        <motion.div
          className="hidden md:block absolute top-[52px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink origin-left -z-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 * idx }}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-white/15 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.25)] flex flex-col justify-between h-[215px] relative"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className={`p-2 rounded-lg border flex items-center justify-center ${step.colorClass}`}>
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
                  {step.num}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-white text-sm">{step.title}</h3>
              
              <p className="text-[11px] text-zinc-400 mt-2.5 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
            
            <div className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest flex items-center gap-1.5 mt-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-600"></span>
              </span>
              Pipeline Node
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
