"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, BookOpen } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function About() {
  const timelineData: TimelineItem[] = [
    {
      year: "2019 - 2022",
      title: "Diploma in Computer Science",
      subtitle: "Foundational Engineering",
      description: "Discovered the fundamentals of programming, algorithms, operating systems, and object-oriented programming. Built initial web development projects and local desktop applications.",
      icon: <BookOpen className="h-5 w-5" />,
      color: "border-neon-blue text-neon-blue bg-neon-blue/10"
    },
    {
      year: "2023 - 2025",
      title: "BE in Information Science",
      subtitle: "Advanced Engineering Studies",
      description: "Focused on database management systems, data structures, network security, software engineering, and modern web application development stacks.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "border-neon-purple text-neon-purple bg-neon-purple/10"
    },
    {
      year: "2025",
      title: "Graduation",
      subtitle: "B.E. Degree Achieved",
      description: "Successfully graduated in Information Science & Engineering, equipped with strong software engineering fundamentals and a passion for advanced systems.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "border-neon-pink text-neon-pink bg-neon-pink/10"
    },
    {
      year: "2025 - 2026",
      title: "Software Developer Intern",
      subtitle: "Shiro Technologies",
      description: "Built scalable production applications using the MERN stack. Designed and integrated secure REST APIs, containerized apps using Docker, set up CI/CD workflows, and integrated AI-assisted software engineering practices.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "border-cyber-green text-cyber-green bg-cyber-green/10"
    },
    {
      year: "Today",
      title: "Building AI Products",
      subtitle: "Generative AI Engineering",
      description: "Innovating at the intersection of LLMs, agentic workflows, Model Context Protocol (MCP), and full-stack software. Developing end-to-end production AI applications.",
      icon: <Sparkles className="h-5 w-5" />,
      color: "border-neon-blue text-neon-blue bg-neon-blue/10"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs font-bold uppercase tracking-widest text-neon-purple px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-3"
        >
          My Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white"
        >
          Timeline of Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          How a passion for systems and software evolved into building production applications and deploying intelligent AI solutions.
        </motion.p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-zinc-800 ml-4 md:ml-1/2">
        {timelineData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="relative mb-12 pl-8 md:pl-0 md:w-full">
              {/* Timeline Connector Dot */}
              <div
                className={`absolute -left-[17px] top-1.5 h-8 w-8 rounded-full border-2 flex items-center justify-center ${item.color} z-20`}
              >
                {item.icon}
              </div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`md:w-[45%] md:relative ${
                  isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl glassmorphism-card text-left ${
                    isEven ? "md:border-r-neon-purple/20" : "md:border-l-neon-blue/20"
                  }`}
                >
                  <span className="text-xs font-bold text-neon-blue tracking-wide uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-zinc-400 mt-0.5">
                    {item.subtitle}
                  </h4>
                  <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
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
