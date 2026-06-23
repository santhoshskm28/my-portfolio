"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, Database, Server, ChevronDown } from "lucide-react";

interface Layer {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  points: string[];
  tech: string;
  color: string;
}

export default function Architecture() {
  const layers: Layer[] = [
    {
      title: "Frontend Layer",
      subtitle: "Presentation & Interactivity",
      icon: <Laptop className="h-6 w-6 text-neon-blue" />,
      points: [
        "Render static layouts using Next.js Server Components (RSC) for fast loading speeds.",
        "Add client state interactive components using React hooks and Tailwind UI templates.",
        "Perform accessibility testing (WCAG compliant semantic structures) and mobile responsive styling."
      ],
      tech: "React • Next.js 15 • Tailwind CSS",
      color: "border-neon-blue/20 hover:border-neon-blue/40"
    },
    {
      title: "API Layer",
      subtitle: "Server Routing & Logic",
      icon: <Cpu className="h-6 w-6 text-neon-purple" />,
      points: [
        "Create microservices and REST endpoints using Node.js and Express.",
        "Handle stateless user authentication securely via JSON Web Token (JWT).",
        "Implement parameter sanitization middlewares to validate query variables and protect paths."
      ],
      tech: "Node.js • Express.js • REST APIs • JWT",
      color: "border-neon-purple/20 hover:border-neon-purple/40"
    },
    {
      title: "Database Layer",
      subtitle: "NoSQL Schema & Storage",
      icon: <Database className="h-6 w-6 text-neon-pink" />,
      points: [
        "Design flexible NoSQL database schemas with indexes for rapid retrieval rates.",
        "Write complex data aggregation queries to aggregate statistics.",
        "Establish secure Atlas connection rules and schema check middlewares."
      ],
      tech: "MongoDB Atlas • Mongoose ORM • SQL",
      color: "border-neon-pink/20 hover:border-neon-pink/40"
    },
    {
      title: "Infrastructure Layer",
      subtitle: "Deployment & Orchestration",
      icon: <Server className="h-6 w-6 text-cyber-green" />,
      points: [
        "Containerize full-stack modules inside Docker images to assure parity across dev and prod.",
        "Deploy Docker files into Railway cloud servers linked with automatic build pipelines.",
        "Set up GitHub Actions to manage static assets, deploy branches, and check compiler rules."
      ],
      tech: "Docker • Railway • Netlify • GitHub Actions",
      color: "border-cyber-green/20 hover:border-cyber-green/40"
    }
  ];

  return (
    <section id="architecture" className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-purple px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-3"
        >
          System Stack
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white"
        >
          Full Stack Architecture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          An inside look at how I partition application logic to build scalable, secure, and maintainable software systems.
        </motion.p>
      </div>

      {/* Vertical Stack with Connectors */}
      <div className="flex flex-col gap-6">
        {layers.map((layer, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className={`w-full p-6 sm:p-8 rounded-3xl glassmorphism-card border ${layer.color} grid grid-cols-1 md:grid-cols-12 gap-6 items-center`}
            >
              {/* Icon & Title (4 cols) */}
              <div className="md:col-span-4 flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                  {layer.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{layer.title}</h3>
                  <p className="text-xs text-zinc-500 font-semibold mt-0.5">{layer.subtitle}</p>
                  
                  <span className="inline-block text-[10px] font-bold text-neon-blue bg-neon-blue/15 px-2 py-0.5 rounded border border-neon-blue/20 mt-3">
                    {layer.tech}
                  </span>
                </div>
              </div>

              {/* Bullet details (8 cols) */}
              <div className="md:col-span-8">
                <ul className="flex flex-col gap-2.5">
                  {layer.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-zinc-400 leading-relaxed list-disc list-inside">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Connecting Chevron (except last) */}
            {idx < layers.length - 1 && (
              <ChevronDown className="h-6 w-6 text-zinc-700 animate-bounce mt-3" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
