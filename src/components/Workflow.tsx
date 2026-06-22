"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, Compass, Hammer, CloudLightning, Activity, RefreshCw } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export default function Workflow() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Problem",
      icon: <HelpCircle className="h-5 w-5 text-neon-blue" />,
      description: "Deconstruct requirements, outline technical limits, and identify end-user requirements.",
      color: "border-neon-blue/20 text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.05)]"
    },
    {
      num: "02",
      title: "Research",
      icon: <Search className="h-5 w-5 text-neon-purple" />,
      description: "Analyze documentation, run sandbox tests on APIs, and establish database modeling patterns.",
      color: "border-neon-purple/20 text-neon-purple shadow-[0_0_15px_rgba(189,0,255,0.05)]"
    },
    {
      num: "03",
      title: "Design",
      icon: <Compass className="h-5 w-5 text-neon-pink" />,
      description: "Layout user experience hierarchies, design relational database structures, and map API boundaries.",
      color: "border-neon-pink/20 text-neon-pink shadow-[0_0_15px_rgba(255,0,122,0.05)]"
    },
    {
      num: "04",
      title: "Build",
      icon: <Hammer className="h-5 w-5 text-cyber-green" />,
      description: "Write clean TypeScript logic, integrate AI interfaces, and build secure stateless authorization checks.",
      color: "border-cyber-green/20 text-cyber-green shadow-[0_0_15px_rgba(57,255,20,0.05)]"
    },
    {
      num: "05",
      title: "Deploy",
      icon: <CloudLightning className="h-5 w-5 text-neon-blue" />,
      description: "Containerize modules with Docker and ship to scalable cloud infrastructure.",
      color: "border-neon-blue/20 text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.05)]"
    },
    {
      num: "06",
      title: "Monitor",
      icon: <Activity className="h-5 w-5 text-neon-purple" />,
      description: "Track system usage, analyze query logs, and monitor database read performance.",
      color: "border-neon-purple/20 text-neon-purple shadow-[0_0_15px_rgba(189,0,255,0.05)]"
    },
    {
      num: "07",
      title: "Improve",
      icon: <RefreshCw className="h-5 w-5 text-neon-pink" />,
      description: "Refactor bottlenecks, prune dependencies, and iterate based on telemetry metrics.",
      color: "border-neon-pink/20 text-neon-pink shadow-[0_0_15px_rgba(255,0,122,0.05)]"
    }
  ];

  return (
    <section id="workflow" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
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
          className="text-3xl sm:text-5xl font-extrabold text-white"
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

      {/* Horizontal Scroll / Vertical Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
        {/* Pulsing pipeline connector line behind cards (desktop only) */}
        <div className="hidden md:block absolute top-[52px] left-8 right-8 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 -z-10" />

        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * idx }}
            className={`p-5 rounded-2xl glassmorphism border ${step.color} flex flex-col justify-between h-[210px]`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-zinc-600 tracking-wider">
                  {step.num}
                </span>
              </div>
              <h3 className="font-extrabold text-white text-base">{step.title}</h3>
              <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
            
            <div className="text-[9px] text-zinc-600 uppercase font-semibold tracking-wider flex items-center gap-1 mt-3">
              <span className="h-1 w-1 rounded-full bg-current animate-ping" />
              Stage Active
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
