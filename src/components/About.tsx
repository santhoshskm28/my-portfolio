"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, BookOpen } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: string; // Theme color name
}

export default function About() {
  const timelineData: TimelineItem[] = [
    {
      year: "2019 - 2022",
      title: "Diploma in Computer Science",
      subtitle: "Foundational Engineering",
      description: "Discovered the fundamentals of programming, algorithms, operating systems, and object-oriented programming. Built initial web development projects and local desktop applications.",
      icon: <BookOpen className="h-4 w-4" />,
      accent: "text-neon-blue"
    },
    {
      year: "2023 - 2025",
      title: "BE in Information Science",
      subtitle: "Advanced Engineering Studies",
      description: "Focused on database management systems, data structures, network security, software engineering, and modern web application development stacks.",
      icon: <GraduationCap className="h-4 w-4" />,
      accent: "text-neon-purple"
    },
    {
      year: "2025",
      title: "Graduation",
      subtitle: "B.E. Degree Achieved",
      description: "Successfully graduated in Information Science & Engineering, equipped with strong software engineering fundamentals and a passion for advanced systems.",
      icon: <GraduationCap className="h-4 w-4" />,
      accent: "text-neon-pink"
    },
    {
      year: "2025 - 2026",
      title: "Software Developer Intern",
      subtitle: "Shiro Technologies",
      description: "Built scalable production applications using the MERN stack. Designed and integrated secure REST APIs, containerized apps using Docker, set up CI/CD workflows, and integrated AI-assisted software engineering practices.",
      icon: <Briefcase className="h-4 w-4" />,
      accent: "text-cyber-green"
    },
    {
      year: "Today",
      title: "Building AI Products",
      subtitle: "Generative AI Engineering",
      description: "Innovating at the intersection of LLMs, agentic workflows, Model Context Protocol (MCP), and full-stack software. Developing end-to-end production AI applications.",
      icon: <Sparkles className="h-4 w-4" />,
      accent: "text-neon-blue"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-purple px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-3"
        >
          My Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          Timeline of Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          How a passion for systems and software evolved into building production applications and deploying intelligent AI solutions.
        </motion.p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Core Vertical Timeline Track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
        
        {/* Animated Sweep Line */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-[1.5px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink -translate-x-1/2 origin-top"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {timelineData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="relative mb-16 pl-10 md:pl-0 w-full flex flex-col md:flex-row items-start md:justify-between">
              
              {/* Timeline Connector Dot Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-7 w-7 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] group hover:border-white/35 transition-colors cursor-pointer"
              >
                <div className={`transition-transform duration-300 group-hover:scale-115 ${item.accent}`}>
                  {item.icon}
                </div>
              </motion.div>

              {/* Layout spacer for alternating row alignment */}
              <div className={`hidden md:block w-[45%] ${isEven ? "order-1" : "order-2"}`} />

              {/* Milestone Event Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className={`w-full md:w-[45%] ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}
              >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${item.accent}`}>
                    {item.year}
                  </span>
                  
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1.5 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-500 font-semibold mt-0.5">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-zinc-400 mt-3.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
