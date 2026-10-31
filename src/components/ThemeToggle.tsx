"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all duration-200 shadow-sm flex items-center gap-2 group cursor-pointer"
      title={isDark ? "Switch to Editorial Light Mode" : "Switch to Deep Dark Mode"}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-semibold hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-[var(--text-secondary)] group-hover:-rotate-12 transition-transform" />
          <span className="text-xs font-semibold hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}
