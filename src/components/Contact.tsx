"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:santhoshskm28@gmail.com?subject=${subject}&body=${body}`;
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const socials = [
    {
      label: "Email",
      icon: <Mail className="h-4 w-4" />,
      val: "santhoshskm28@gmail.com",
      href: "mailto:santhoshskm28@gmail.com",
      accentClass: "group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 group-hover:text-neon-blue",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="h-4 w-4" />,
      val: "linkedin.com/in/santhosh-kumar-skm28",
      href: "https://linkedin.com/in/santhosh-kumar-skm28",
      accentClass: "group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 group-hover:text-neon-blue",
    },
    {
      label: "GitHub",
      icon: <FaGithub className="h-4 w-4" />,
      val: "github.com/santhoshskm28",
      href: "https://github.com/santhoshskm28",
      accentClass: "group-hover:border-neon-purple/40 group-hover:bg-neon-purple/5 group-hover:text-neon-purple",
    },
    {
      label: "Resumes",
      icon: <FileText className="h-4 w-4" />,
      val: "View All Resumes",
      href: "#resumes",
      accentClass: "group-hover:border-cyber-green/40 group-hover:bg-cyber-green/5 group-hover:text-cyber-green",
    },
  ];

  const isFloating = (field: string) =>
    focused[field] || (formData as Record<string, string>)[field] !== "";

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-neon-purple/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-neon-blue/5 blur-3xl" />
      </div>

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
          className="font-display text-3xl sm:text-5xl font-extrabold text-white"
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
        {/* Left: Social Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col gap-6"
        >
          <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex-1 flex flex-col justify-between relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            {/* Subtle top-right glow */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-neon-blue/10 blur-2xl pointer-events-none" />
            {/* Faint grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold text-neon-blue tracking-widest uppercase">
                // System Connectivity
              </span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-3">
                Santhosh Kumar
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin className="h-3.5 w-3.5 text-zinc-600" />
                <p className="text-xs text-zinc-500 font-semibold">Bangalore, Karnataka, India</p>
              </div>
              <p className="text-sm text-zinc-400 mt-5 leading-relaxed">
                Feel free to contact me via email or social links. I respond quickly and am open to discussing software architecture, MERN services, and Generative AI workflows.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3 mt-8">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <div
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 text-white ${soc.accentClass}`}
                  >
                    {soc.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
                      {soc.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                      {soc.val}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="md:col-span-7"
        >
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            className="spotlight-card p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/[0.06] h-full relative shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
          >
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between h-full gap-6"
                  exit={{ opacity: 0, scale: 0.97 }}
                >
                  <div className="flex flex-col gap-5">
                    {/* Floating Label: Name */}
                    <div className="relative">
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocused((f) => ({ ...f, name: true }))}
                        onBlur={() => setFocused((f) => ({ ...f, name: false }))}
                        disabled={status === "sending"}
                        placeholder=" "
                        className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/60 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.08)] transition-all duration-300 disabled:opacity-50"
                      />
                      <label
                        htmlFor="form-name"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans font-medium ${
                          isFloating("name")
                            ? "top-1.5 text-[10px] text-neon-blue tracking-widest uppercase"
                            : "top-3.5 text-sm text-zinc-500"
                        }`}
                      >
                        Your Name
                      </label>
                    </div>

                    {/* Floating Label: Email */}
                    <div className="relative">
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocused((f) => ({ ...f, email: true }))}
                        onBlur={() => setFocused((f) => ({ ...f, email: false }))}
                        disabled={status === "sending"}
                        placeholder=" "
                        className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/60 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.08)] transition-all duration-300 disabled:opacity-50"
                      />
                      <label
                        htmlFor="form-email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans font-medium ${
                          isFloating("email")
                            ? "top-1.5 text-[10px] text-neon-blue tracking-widest uppercase"
                            : "top-3.5 text-sm text-zinc-500"
                        }`}
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Floating Label: Message */}
                    <div className="relative">
                      <textarea
                        id="form-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocused((f) => ({ ...f, message: true }))}
                        onBlur={() => setFocused((f) => ({ ...f, message: false }))}
                        disabled={status === "sending"}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-blue/60 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.08)] transition-all duration-300 resize-none disabled:opacity-50"
                      />
                      <label
                        htmlFor="form-message"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans font-medium ${
                          isFloating("message")
                            ? "top-1.5 text-[10px] text-neon-blue tracking-widest uppercase"
                            : "top-3.5 text-sm text-zinc-500"
                        }`}
                      >
                        Your Message
                      </label>
                    </div>
                  </div>

                  {/* Gradient Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white overflow-hidden transition-all duration-300 disabled:opacity-50 group"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    {/* Hover shimmer overlay */}
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-xl" />
                    {/* Active press scale */}
                    <span className="relative flex items-center gap-2">
                      {status === "sending" ? (
                        <span className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                      ) : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[360px] gap-5"
                >
                  <div className="p-4 rounded-full bg-cyber-green/10 border border-cyber-green/20 text-cyber-green">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      Transmission Successful
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mt-2">
                      Thank you! Your message has been compiled. Opening your email client to complete transmission...
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-neon-blue font-bold tracking-wider uppercase hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
