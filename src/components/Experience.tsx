"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, Cpu, Cloud, CheckCircle } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    {
      icon: <Layers className="h-5 w-5 text-neon-blue" />,
      title: "MERN Development",
      description: "Built scalable full-stack applications with React, Node.js, Express, and MongoDB. Handled state architectures and custom UI views."
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-neon-purple" />,
      title: "REST APIs & Security",
      description: "Designed, tested, and optimized REST endpoints. Secured applications with JWT authentication and stateless session routing."
    },
    {
      icon: <Cpu className="h-5 w-5 text-neon-pink" />,
      title: "AI-Assisted Engineering",
      description: "Integrated Claude, Gemini, and OpenAI APIs. Developed agentic workflows, prompt configurations, and automated generation features."
    },
    {
      icon: <Cloud className="h-5 w-5 text-cyber-green" />,
      title: "Deployment & DevOps",
      description: "Containerized code bases with Docker. Set up automated environment workflows, Railway cloud servers, and CI/CD parameters."
    }
  ];

  const metrics = [
    { value: "6 Months", label: "Experience Duration" },
    { value: "Production", label: "Deployments Done" },
    { value: "Real-World", label: "Active Users" }
  ];

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Experience Details - Left 7 columns */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex text-xs font-bold uppercase tracking-widest text-cyber-green px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/20 mb-3"
            >
              Professional Experience
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold text-white"
            >
              Shiro Technologies
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl font-bold text-neon-blue mt-2"
            >
              Software Developer Intern
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xs sm:text-sm text-zinc-500 font-semibold mt-1"
            >
              Nov 2025 – May 2026 (6 Months)
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Contributed to the engineering team by building responsive user interfaces, designing secure backend API architectures, and implementing containerized cloud builds. Pioneered the integration of agentic AI features in MERN platforms.
          </motion.p>

          {/* Responsibilities list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="p-4 rounded-xl glassmorphism border border-white/5 flex gap-3 items-start"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {resp.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{resp.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{resp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + 0.1 * idx }}
                className="p-4 rounded-xl glassmorphism-card text-center border-glow-blue bg-neon-blue/5"
              >
                <div className="text-xl font-extrabold text-white">{m.value}</div>
                <div className="text-[10px] text-zinc-500 uppercase font-semibold mt-1 tracking-wider">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Space for the 3D building - Right 5 columns */}
        <div className="md:col-span-5 h-[300px] md:h-[450px] flex items-center justify-center pointer-events-none">
          {/* Transparent container. R3F canvas is behind this, displaying the skyscraper rotating */}
          <div className="text-center px-4 py-8 rounded-xl glassmorphism border border-white/5 opacity-80 md:hidden">
            <span className="text-xs font-bold text-neon-purple tracking-widest uppercase block mb-2">3D Space Visual</span>
            <span className="text-sm text-zinc-400">Cyber skyscraper rendering in background</span>
          </div>
        </div>
      </div>
    </section>
  );
}
