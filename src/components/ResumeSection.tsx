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
      color: "border-neon-blue/20 hover:border-neon-blue/40"
    },
    {
      title: "Frontend Resume",
      role: "React & UI Engineer",
      file: "https://drive.google.com/file/d/1EfVdN3UUnu9ZVwg5U4cW4nhNIAkafywp/view",
      focus: ["Tailwind & CSS Animations", "Framer Motion & GSAP", "Responsive Layout Architecture", "Performance Optimization"],
      color: "border-neon-purple/20 hover:border-neon-purple/40"
    },
    {
      title: "Generative AI Resume",
      role: "Generative AI Engineer",
      file: "https://drive.google.com/file/d/1sjKsQCKn9y2es-MkBVglezSg_BMQNNQ4/view",
      focus: ["LLM API Integrations", "Agentic Decision Loops", "Model Context Protocol", "Prompt Engineering & XML"],
      color: "border-neon-pink/20 hover:border-neon-pink/40"
    }
  ];

  return (
    <section id="resumes" className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
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
          className="text-3xl sm:text-5xl font-extrabold text-white"
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
          Select and download the exact resume variant that aligns with your tech stack and open opportunities.
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
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className={`p-6 rounded-2xl glassmorphism-card border flex flex-col justify-between gap-6 ${item.color}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  ATS Verified
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
              <p className="text-xs text-neon-blue mt-0.5 font-semibold">{item.role}</p>

              <div className="mt-5">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
                  Key Skills Highlighted:
                </span>
                <ul className="flex flex-col gap-1.5">
                  {item.focus.map((f, fIdx) => (
                    <li key={fIdx} className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <ArrowRight className="h-3 w-3 text-zinc-600 shrink-0" />
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
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white text-white text-xs font-bold transition-all duration-300"
            >
              View PDF <Download className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
