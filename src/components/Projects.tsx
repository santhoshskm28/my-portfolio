"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor, Laptop, HelpCircle, UserCheck, CreditCard, Mail, ShieldAlert, Award, FileSpreadsheet, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
      liveLink: "https://orcastudios.netlify.app/",
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

  // Helper to handle mouse coordinates for spotlight cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
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
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
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
        {/* Project 1 - Flagship (GenAI Course Platform) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          className="spotlight-card p-6 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden"
        >
          {/* Card Info Left (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neon-blue px-2.5 py-1 rounded-md bg-neon-blue/10 border border-neon-blue/20">
                  {projects[0].tag}
                </span>
                <span className="text-[10px] font-bold text-cyber-green flex items-center gap-1.5 uppercase tracking-wide">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-green"></span>
                  </span>
                  Live SaaS
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-none">
                {projects[0].title}
              </h3>

              <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
                {projects[0].description}
              </p>
            </div>

            {/* Icons Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs">
                <UserCheck className="h-4 w-4 text-neon-blue shrink-0" />
                <span>JWT Authentication Layer</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs">
                <CreditCard className="h-4 w-4 text-neon-blue shrink-0" />
                <span>Stripe Subscription System</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs">
                <Mail className="h-4 w-4 text-neon-blue shrink-0" />
                <span>Resend Email Automation</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs">
                <Award className="h-4 w-4 text-neon-blue shrink-0" />
                <span>PDF Certificate Generation</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5">
              {projects[0].tech.map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-medium">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 mt-2">
              <a
                href={projects[0].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300"
              >
                Live Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={projects[0].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent text-white border border-white/10 hover:border-white/30 hover:bg-white/5 px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300"
              >
                GitHub <FaGithub className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Card Schematic Right (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-black/45 rounded-2xl border border-white/[0.04] p-6 relative overflow-hidden z-10">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-blue"></span>
              </span>
              Pipeline Architecture
            </h4>

            <div className="flex flex-col gap-3.5 items-center w-full">
              {/* Frontend Node */}
              <div className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl border border-neon-blue/15 bg-neon-blue/5 text-neon-blue font-bold text-xs tracking-wider uppercase">
                Frontend (React & Tailwind)
              </div>

              {/* Line connector */}
              <div className="h-4 w-px border-l border-dashed border-zinc-700" />

              {/* API Layer */}
              <div className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl border border-neon-purple/15 bg-neon-purple/5 text-neon-purple font-bold text-xs tracking-wider uppercase">
                Express API Gateway
              </div>

              {/* Line connector */}
              <div className="h-4 w-px border-l border-dashed border-zinc-700" />

              {/* Database and Infrastructure Nodes */}
              <div className="grid grid-cols-3 gap-2.5 w-full">
                <div className="py-2 text-center rounded-xl border border-neon-pink/15 bg-neon-pink/5 text-neon-pink font-bold text-[9px] uppercase tracking-wider">
                  MongoDB
                </div>
                <div className="py-2 text-center rounded-xl border border-cyber-green/15 bg-cyber-green/5 text-cyber-green font-bold text-[9px] uppercase tracking-wider">
                  Stripe
                </div>
                <div className="py-2 text-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-400 font-bold text-[9px] uppercase tracking-wider">
                  Railway
                </div>
              </div>
            </div>

            <div className="text-[9px] text-zinc-600 text-center mt-5 font-bold uppercase tracking-wider">
              Containerized deployment workflows
            </div>
          </div>
        </motion.div>

        {/* Projects 2, 3, 4 - Bento Secondary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(1).map((proj, idx) => {
            const isOrca = proj.id === "orca-studios";
            const isAI = proj.id === "ai-question";
            const icon = isOrca ? (
              <Laptop className="h-6 w-6 text-neon-purple" />
            ) : isAI ? (
              <Cpu className="h-6 w-6 text-neon-blue" />
            ) : (
              <FileSpreadsheet className="h-6 w-6 text-neon-pink" />
            );

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 * idx }}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-white/15 transition-all duration-300 flex flex-col justify-between gap-6 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                      {icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                      {proj.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-5 leading-none">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  {/* Bullet achievements */}
                  <ul className="mt-4 flex flex-col gap-2">
                    {proj.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-[10px] text-zinc-500 list-disc list-inside leading-relaxed font-medium">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                    {proj.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors font-bold"
                    >
                      <FaGithub className="h-3.5 w-3.5" /> Repository
                    </a>
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neon-blue hover:underline flex items-center gap-1 transition-all font-bold"
                    >
                      Demo <ExternalLink className="h-3 w-3" />
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
