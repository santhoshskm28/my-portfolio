"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI Labs", href: "#ai-showcase" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-5 left-1/2 z-50 rounded-full border transition-all duration-500 ease-out ${
        scrolled
          ? "w-[90%] md:w-[75%] max-w-4xl py-2 px-5 bg-[#0f172a]/75 backdrop-blur-md border-[rgba(255,255,255,0.08)] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)]"
          : "w-[94%] md:w-[90%] max-w-6xl py-4 px-6 bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors">
            SANTHOSH
          </span>
          <span className="text-[10px] tracking-widest font-bold px-2 py-0.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 uppercase">
            AI ENG
          </span>
        </a>

        {/* Desktop Links (Linear style sliding hover backgrounds) */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300"
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/[0.06] rounded-full -z-10 border border-white/[0.04]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a
            href="#resumes"
            className="flex items-center gap-1.5 text-xs bg-white text-black hover:bg-zinc-200 px-3.5 py-1.5 rounded-full font-bold transition-all duration-300 transform active:scale-95"
          >
            Resume <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-zinc-400 hover:text-white md:hidden rounded-full hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Links Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col gap-2 pb-2 md:hidden overflow-hidden"
          >
            <div className="h-px bg-white/5 my-1" />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resumes"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center bg-white text-black py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-colors"
            >
              View Resumes
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
