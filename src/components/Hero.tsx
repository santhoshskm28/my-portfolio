"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "Generative AI Engineer",
  "SaaS Product Builder"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "6 Months", label: "Shiro Tech Intern" },
    { value: "4+", label: "Completed SaaS" },
    { value: "MERN", label: "Stack Expert" },
    { value: "LLMs", label: "Agentic Flows" },
    { value: "Docker", label: "Railway Deploy" },
    { value: "95+", label: "Lighthouse Speed" }
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between pt-36 pb-12 px-4 md:px-8 max-w-6xl mx-auto z-10"
    >
      {/* Dynamic Intro Frame */}
      <div className="flex-1 flex flex-col justify-center items-start gap-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs font-semibold backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
          </span>
          Open to Global Internships & Roles
        </motion.div>

        {/* Large Cinematic Title */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">Santhosh Kumar</span>
          </motion.h1>
        </div>

        {/* Cinematic Slide-up Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="h-10 sm:h-12 relative w-full flex items-center"
        >
          <span className="text-xl sm:text-3xl text-zinc-400 font-medium mr-2 sm:mr-3">
            Building
          </span>
          <div className="relative h-full flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 text-xl sm:text-3xl text-neon-blue font-extrabold tracking-wide"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Editorial Subdescription */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl font-sans"
        >
          Specialized in MERN stack engineering, cloud infrastructure containment, and Generative AI pipelines. I engineer production-grade platforms with optimized rendering paths and state validation checks.
        </motion.p>

        {/* Call to Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 w-full"
        >
          {/* Main Action Call */}
          <a
            href="#projects"
            className="light-sweep-container flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 transform active:scale-95"
          >
            View Projects <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#resumes"
            className="flex items-center gap-2 bg-[#0f172a]/60 text-white border border-white/[0.08] hover:border-white/20 hover:bg-[#0f172a] px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 transform active:scale-95"
          >
            Download Resume <ArrowDown className="h-4 w-4" />
          </a>

          {/* Socials Divider & Icons */}
          <div className="hidden sm:block h-6 w-px bg-white/10 mx-2" />
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/santhoshskm28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all transform active:scale-90"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/santhosh-kumar-skm28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all transform active:scale-90"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="#contact"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all transform active:scale-90"
              aria-label="Mail Contact"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Elegant Stat Bento Cards */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="w-full mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/[0.02] transition-colors border-r last:border-0 border-white/[0.04] md:border-r"
          >
            <span className="font-display text-xl sm:text-2xl font-extrabold text-white">
              {stat.value}
            </span>
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1.5 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
