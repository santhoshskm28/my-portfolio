"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Flame, Cpu, Cloud, Globe } from "lucide-react";

interface AchievementCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  tag: string;
  colSpanClass: string; // Dynamic bento sizing
}

export default function Achievements() {
  const achievements: AchievementCard[] = [
    {
      title: "6 Months Industry Exp.",
      icon: <Award className="h-5 w-5 text-neon-blue" />,
      description: "Collaborated in professional developer groups at Shiro Technologies to construct, test, and ship commercial web applications.",
      tag: "Professional Practice",
      colSpanClass: "md:col-span-2"
    },
    {
      title: "Production SaaS",
      icon: <ShieldCheck className="h-5 w-5 text-neon-purple" />,
      description: "Built and deployed a production-grade LMS course platform capable of handling real-world active users.",
      tag: "Software Engineering",
      colSpanClass: "md:col-span-1"
    },
    {
      title: "Fintech Gateways",
      icon: <Flame className="h-5 w-5 text-neon-pink" />,
      description: "Integrated Stripe payment portals for stateless subscription routing and secure transactions.",
      tag: "Integrations",
      colSpanClass: "md:col-span-1"
    },
    {
      title: "Generative AI Labs",
      icon: <Cpu className="h-5 w-5 text-cyber-green" />,
      description: "Engineered prompt guidelines, Model Context Protocol (MCP) servers, and autonomous agent loops using Claude and Gemini.",
      tag: "Generative AI",
      colSpanClass: "md:col-span-2"
    },
    {
      title: "Cloud & Container DevOps",
      icon: <Cloud className="h-5 w-5 text-neon-blue" />,
      description: "Engineered Docker container wrappers and pushed nodes into Railway cloud services linked to continuous build branches.",
      tag: "Devops & Infrastructure",
      colSpanClass: "md:col-span-2"
    },
    {
      title: "Architectural Design",
      icon: <Globe className="h-5 w-5 text-neon-purple" />,
      description: "Constructed frontends, API layer logic, NoSQL schemas, and secure token auth models.",
      tag: "Full Stack Systems",
      colSpanClass: "md:col-span-1"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-pink px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-3"
        >
          Track Record
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          Core Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          A summary of key competencies and engineering achievements reflecting commercial readiness and software capabilities.
        </motion.p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 * idx }}
            onMouseMove={handleMouseMove}
            className={`spotlight-card p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-white/15 transition-all duration-300 flex flex-col justify-between h-[215px] shadow-[0_10px_35px_rgba(0,0,0,0.3)] relative overflow-hidden ${item.colSpanClass}`}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-extrabold text-white mt-5 tracking-tight leading-none">
                {item.title}
              </h3>
              
              <p className="text-xs text-zinc-400 mt-3.5 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
            
            <div className="text-[10px] text-neon-blue font-bold tracking-widest uppercase relative z-10 flex items-center gap-1.5 mt-2">
              <span className="h-1 w-1 rounded-full bg-neon-blue animate-pulse" />
              Verified Metric
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
