"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return;

      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);

      // Determine active section (e.g. 0 to 7) based on scroll position
      // Using window.innerHeight as a standard section unit, or mapping to actual page heights
      const sectionHeight = window.innerHeight;
      const current = window.scrollY / sectionHeight;
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, currentSection };
}
