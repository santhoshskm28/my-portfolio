"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Laptop, HelpCircle, UserCheck, CreditCard, Mail, ShieldAlert, Award, FileSpreadsheet } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  achievements: string[];
  tech: string[];
  liveLink: string;
  githubLink: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "genai-course",
      title: "GenAI Course Platform",
      tag: "Production SaaS LMS",
      description: "An end-to-end Learning Management System (LMS) with full course building, assessment verification, payment models, and automated reporting.",
      achievements: [
        "Production-ready deployment with active real users.",
        "Secure stateless user sessions with JWT auth and validation rules.",
        "Fully automated assessment engine and dynamic PDF certificate generation.",
        "Seamless Stripe subscription and payment model integrations."
      ],
      tech: [
        "React", "Node.js", "Express.js", "MongoDB", "Stripe", "Resend Email", "Docker", "Railway", "JWT", "REST API"
      ],
      liveLink: "https://genai-course-platform.example.com",
      githubLink: "https://github.com/santhoshskm28/genai-course-platform"
    },
    {
      id: "orca-studios",
      title: "Orca Studios",
      tag: "Creative Frontend Experience",
      description: "A fast, modern Single Page Application (SPA) designed with immersive visual designs, smooth scrolling parameters, and page layout optimization.",
      achievements: [
        "Modern aesthetic with high performance loading scores.",
        "Full screen responsive styling and custom glassmorphism layers.",
        "Smooth page layout optimization using modern CSS variables."
      ],
      tech: [
        "React", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion", "Vite"
      ],
      liveLink: "https://orcastudios.example.com",
      githubLink: "https://github.com/santhoshskm28/orca-studios"
    },
    {
      id: "ai-question",
      title: "AI Question Generator",
      tag: "Generative AI Platform",
      description: "An automated test generation engine that takes prompt guidelines and produces standard academic test papers based on selected difficulty settings.",
      achievements: [
        "Integrated Gemini API to generate structured questions in JSON format.",
        "Configured precise prompt guidelines to prevent prompt leakage.",
        "Added granular difficulty control and subject filter inputs."
      ],
      tech: [
        "Node.js", "Express", "Gemini API", "Prompt Engineering", "Bootstrap", "REST API"
      ],
      liveLink: "https://ai-generator.example.com",
      githubLink: "https://github.com/santhoshskm28/ai-question-generator"
    },
    {
      id: "feedback-system",
      title: "Student Teacher Feedback System",
      tag: "Full-Stack Portal",
      description: "A web platform where students can securely submit feedback about teaching metrics. Features detailed admin analytical dashboards and charts.",
      achievements: [
        "Constructed a secure portal with roles (Student, Teacher, Admin).",
        "Generates responsive analytical reports on teacher performance.",
        "Engineered with clean model validation checks on database collections."
      ],
      tech: [
        "React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"
      ],
      liveLink: "https://feedback-portal.example.com",
      githubLink: "https://github.com/santhoshskm28/student-teacher-feedback"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-pink px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-3"
        >
          Selected Works
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          An inspection of full-stack production software, creative frontends, and AI engineering platforms built with modern architectures.
        </motion.p>
      </div>

      <div className="flex flex-col gap-16">
        {/* Project 1 - GenAI Course Platform (Production Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl glassmorphism-card border border-neon-blue/20 shadow-[0_0_30px_rgba(0,240,255,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Card left side info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-neon-blue px-2.5 py-1 rounded-md bg-neon-blue/10 border border-neon-blue/20">
                  {projects[0].tag}
                </span>
                <span className="text-xs font-semibold text-cyber-green flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-green animate-pulse" />
                  Live in Production
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                {projects[0].title}
              </h3>
              <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
                {projects[0].description}
              </p>
            </div>

            {/* Platform features icons list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <UserCheck className="h-4.5 w-4.5 text-neon-blue shrink-0" />
                <span>JWT Authentication Layer</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <CreditCard className="h-4.5 w-4.5 text-neon-blue shrink-0" />
                <span>Stripe Subscription System</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Mail className="h-4.5 w-4.5 text-neon-blue shrink-0" />
                <span>Resend Email Automation</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Award className="h-4.5 w-4.5 text-neon-blue shrink-0" />
                <span>PDF Certificate Generation</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {projects[0].tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={projects[0].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neon-blue text-black hover:bg-neon-blue/80 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
              >
                Live Demo <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={projects[0].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white/80 hover:bg-white/5 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
              >
                GitHub <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card right side (5 cols) - Interactive Architecture flow */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-black/40 rounded-2xl border border-white/5 p-6 relative overflow-hidden">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
              System Architecture Flow
            </h4>
            
            <div className="flex flex-col gap-4 items-center">
              {/* Frontend Node */}
              <div className="w-full flex items-center justify-center p-3 rounded-xl border border-neon-blue/20 bg-neon-blue/5 text-neon-blue font-bold text-sm shadow-[0_0_10px_rgba(0,240,255,0.05)]">
                Frontend (React & Tailwind)
              </div>
              
              {/* Pulse line */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple animate-pulse" />
              
              {/* Backend Node */}
              <div className="w-full flex items-center justify-center p-3 rounded-xl border border-neon-purple/20 bg-neon-purple/5 text-neon-purple font-bold text-sm shadow-[0_0_10px_rgba(189,0,255,0.05)]">
                API Layer (Node.js & Express)
              </div>

              {/* Pulse line */}
              <div className="h-6 w-0.5 bg-gradient-to-b from-neon-purple to-neon-pink animate-pulse" />

              {/* DB, Stripe, Resend Row */}
              <div className="grid grid-cols-3 gap-2 w-full">
                <div className="p-2 text-center rounded-xl border border-neon-pink/20 bg-neon-pink/5 text-neon-pink font-bold text-xs">
                  MongoDB
                </div>
                <div className="p-2 text-center rounded-xl border border-cyber-green/20 bg-cyber-green/5 text-cyber-green font-bold text-xs">
                  Stripe
                </div>
                <div className="p-2 text-center rounded-xl border border-neon-blue/20 bg-neon-blue/5 text-neon-blue font-bold text-xs">
                  Railway
                </div>
              </div>
            </div>

            <div className="text-[10px] text-zinc-600 text-center mt-6">
              Dockerized container builds deployed to cloud pipelines.
            </div>
          </div>
        </motion.div>

        {/* Project 2, 3, 4 - Secondary project layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(1).map((proj, idx) => {
            const isOrca = proj.id === "orca-studios";
            const isAI = proj.id === "ai-question";
            const icon = isOrca ? (
              <Laptop className="h-8 w-8 text-neon-purple" />
            ) : isAI ? (
              <Cpu className="h-8 w-8 text-neon-blue" />
            ) : (
              <FileSpreadsheet className="h-8 w-8 text-neon-pink" />
            );

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="p-6 rounded-2xl glassmorphism-card border border-white/5 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {proj.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mt-4">{proj.title}</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{proj.description}</p>
                  
                  {/* Key points */}
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {proj.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-[11px] text-zinc-500 list-disc list-inside">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <Github className="h-3.5 w-3.5" /> Repository
                    </a>
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neon-blue hover:underline flex items-center gap-1"
                    >
                      Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
