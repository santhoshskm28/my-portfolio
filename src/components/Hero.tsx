"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const roles = [
  "Software Engineer",
  "MERN Developer",
  "Generative AI Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const metrics = [
    { value: "6 Months", label: "Industry Experience" },
    { value: "4+", label: "Production Projects" },
    { value: "AI-Powered", label: "Applications" },
    { value: "Full Stack", label: "Development" },
    { value: "Cloud Deploy", label: "Railway & Docker" },
    { value: "Stripe", label: "Payment Integration" }
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto z-10"
    >
      {/* Intro Center Text */}
      <div className="flex-1 flex flex-col justify-center items-start gap-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-semibold"
        >
          <span className="h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">Santhosh Kumar</span>
        </motion.h1>

        {/* Dynamic Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-12 text-2xl sm:text-4xl font-bold text-zinc-300"
        >
          <span>Building </span>
          <span className="text-neon-blue cursor-blink">{currentText}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg text-zinc-400 leading-relaxed max-w-2xl"
        >
          Software Engineer building production-ready web applications and agentic AI systems. Experienced in MERN Stack, cloud deployments, and integrating intelligent features with modern web practices.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <a
            href="#about"
            className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View My Journey <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#resumes"
            className="flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white/80 hover:bg-white/5 px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Download Resume <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#0d0d1e] text-neon-blue border border-neon-blue/30 hover:border-neon-blue/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Hero Stats Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full mt-16 p-6 rounded-2xl glassmorphism-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center"
      >
        {metrics.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-2 border-r last:border-0 border-white/5 md:border-r">
            <span className="text-2xl font-extrabold text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
