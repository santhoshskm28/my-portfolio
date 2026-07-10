"use client";

import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";

interface ResumeVariant {
  title: string;
  role: string;
  file: string;
  focus: string[];
  color: string;
}

export default function ResumeSection() {
  const resumeVariants: ResumeVariant[] = [
    {
      title: "MERN Resume",
      role: "MERN Stack Developer",
      file: "https://drive.google.com/file/d/1CsjN4QtLEHTqMDwbaT4roQ__3xz60Lz7/view?usp=sharing",
      focus: ["React & Next.js", "Node.js & Express", "MongoDB Schema Design", "REST API Development"],
      color: "hover:border-neon-blue/40"
    },
    {
      title: "Frontend Resume",
      role: "React & UI Engineer",
      file: "https://drive.google.com/file/d/12wNRSkQ-SOoanUU0tiO54QpBlVFenaCW/view?usp=sharing",
      focus: ["Tailwind & CSS Animations", "Framer Motion & GSAP", "Responsive Layout Architecture", "Performance Optimization"],
      color: "hover:border-neon-purple/40"
    },
    {
      title: "Generative AI Resume",
      role: "Generative AI Engineer",
      file: "https://drive.google.com/file/d/1sjKsQCKn9y2es-MkBVglezSg_BMQNNQ4/view",
      focus: ["LLM API Integrations", "Agentic Decision Loops", "Model Context Protocol", "Prompt Engineering & XML"],
      color: "hover:border-neon-pink/40"
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
    <section id="resumes" className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-blue px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-3"
        >
          Documentation
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
        >
          ATS-Optimized Resumes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          Select and view the exact resume variant that aligns with your tech stack and open opportunities.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeVariants.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 * idx }}
            onMouseMove={handleMouseMove}
            className={`spotlight-card p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] transition-all duration-300 flex flex-col justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.3)] relative overflow-hidden ${item.color}`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  ATS Verified
                </span>
              </div>

              <h3 className="font-display text-xl font-extrabold text-white mt-1 leading-none">{item.title}</h3>
              <p className="text-xs text-neon-blue mt-1.5 font-bold uppercase tracking-wider">{item.role}</p>

              <div className="mt-6">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-3">
                  Key Skills Highlighted:
                </span>
                <ul className="flex flex-col gap-2">
                  {item.focus.map((f, fIdx) => (
                    <li key={fIdx} className="text-xs text-zinc-400 flex items-center gap-2 font-sans">
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-700 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white hover:text-black hover:border-white text-white text-xs font-bold transition-all duration-300 transform active:scale-98"
            >
              View PDF <Download className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
