"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Flame, Cpu, Cloud, Globe } from "lucide-react";

interface AchievementCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  tag: string;
}

export default function Achievements() {
  const achievements: AchievementCard[] = [
    {
      title: "6 Months Industry Exp.",
      icon: <Award className="h-6 w-6 text-neon-blue" />,
      description: "Collaborated in professional developer groups to construct, test, and ship commercial web applications.",
      tag: "Professional"
    },
    {
      title: "Production SaaS",
      icon: <ShieldCheck className="h-6 w-6 text-neon-purple" />,
      description: "Built and deployed a production-grade LMS course platform capable of handling real-world active users.",
      tag: "Software Engineering"
    },
    {
      title: "Payment Integration",
      icon: <Flame className="h-6 w-6 text-neon-pink" />,
      description: "Integrated Stripe payment portals for stateless subcription routing and secure transactions.",
      tag: "Fintech"
    },
    {
      title: "AI Engineering",
      icon: <Cpu className="h-6 w-6 text-cyber-green" />,
      description: "Engineered prompt guidelines, Model Context Protocol (MCP) servers, and autonomous agent loops.",
      tag: "Generative AI"
    },
    {
      title: "Cloud Deployment",
      icon: <Cloud className="h-6 w-6 text-neon-blue" />,
      description: "Engineered Docker container wrappers and pushed nodes into Railway cloud services.",
      tag: "DevOps"
    },
    {
      title: "Full Stack Dev.",
      icon: <Globe className="h-6 w-6 text-neon-purple" />,
      description: "Constructed frontend interfaces, REST API layer logic, NoSQL schemas, and secure token auth models.",
      tag: "Architecture"
    }
  ];

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
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
          className="text-3xl sm:text-5xl font-extrabold text-white"
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

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
            className="p-6 rounded-2xl glassmorphism-card border border-white/5 flex flex-col justify-between h-[210px]"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white mt-4">{item.title}</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{item.description}</p>
            </div>
            
            <div className="text-[10px] text-neon-blue font-bold tracking-widest uppercase">
              // Completed
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
