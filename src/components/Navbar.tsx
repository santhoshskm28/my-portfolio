"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI Engineering", href: "#ai-showcase" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full glassmorphism px-6 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-wider text-white group-hover:text-neon-blue transition-colors">
            SANTHOSH
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-neon-blue/15 text-neon-blue border border-neon-blue/20">
            AI & Full Stack
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#resumes"
            className="flex items-center gap-1 text-sm bg-neon-blue text-black px-4 py-1.5 rounded-full font-medium hover:bg-neon-blue/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            Resume <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-zinc-400 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 pb-2 md:hidden">
          <div className="h-px bg-white/5 my-1" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-zinc-300 hover:text-neon-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#resumes"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-neon-blue text-black py-2 rounded-full font-medium hover:bg-neon-blue/80 transition-colors"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
