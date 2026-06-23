"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Mock network request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Open mailto as secondary action to actually deliver the email
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:santhoshskm28@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  const socials = [
    { label: "Email", icon: <Mail className="h-5 w-5" />, val: "santhoshskm28@gmail.com", href: "mailto:santhoshskm28@gmail.com" },
    { label: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" />, val: "linkedin.com/in/santhoshkumar", href: "https://linkedin.com/in/santhosh-kumar-skm28" },
    { label: "GitHub", icon: <FaGithub className="h-5 w-5" />, val: "github.com/santhoshskm28", href: "https://github.com/santhoshskm28" },
    { label: "Resumes", icon: <FileText className="h-5 w-5" />, val: "Download Resume", href: "#resumes" }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-neon-blue px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-3"
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white"
        >
          Let&apos;s Build Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          Have an exciting project, full-time position, or AI consultation? Reach out and let&apos;s connect.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Info & Hologram Social Card */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl glassmorphism-card border border-white/5 flex-1 flex flex-col justify-between relative overflow-hidden">
            {/* Hologram aesthetic grid backgrounds */}
            <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-neon-blue/10 blur-2xl" />

            <div>
              <span className="text-[10px] font-bold text-neon-blue tracking-wider uppercase">
                // System Connectivity
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-3">
                Santhosh Kumar
              </h3>
              <p className="text-xs text-zinc-500 font-semibold mt-0.5">
                Bangalore, Karnataka, India
              </p>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                Feel free to contact me via email or social links. I respond quickly and am open to discussing software architecture, MERN services, and Generative AI workflows.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 mt-8">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-blue/30 group-hover:bg-neon-blue/5 transition-all text-white">
                    {soc.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
                      {soc.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      {soc.val}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl glassmorphism-card border border-white/5 h-full relative">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between h-full gap-5"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Hiring Manager"
                        disabled={status === "sending"}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-blue transition-all disabled:opacity-55"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        disabled={status === "sending"}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-blue transition-all disabled:opacity-55"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Santhosh, I saw your portfolio and would love to talk about..."
                        disabled={status === "sending"}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-neon-blue transition-all resize-none disabled:opacity-55"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-bold transition-all duration-300 disabled:opacity-55"
                  >
                    {status === "sending" ? (
                      <span className="h-4.5 w-4.5 rounded-full border-2 border-t-transparent border-black animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4"
                >
                  <div className="p-4 rounded-full bg-cyber-green/10 border border-cyber-green/20 text-cyber-green">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Transmission Successful</h3>
                  <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                    Thank you! Your message packet has been compiled. opening your email client to complete transmission...
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-neon-blue font-bold tracking-wider uppercase hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
