"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ThemeToggle() {
  const { t } = useLanguage();
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
      <div className="w-9 h-9 rounded-xl border border-(--border-subtle) bg-(--bg-surface) flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-(--border-strong) bg-(--bg-surface) text-(--text-primary) hover:border-(--accent-peach) hover:text-(--accent-peach) transition-all duration-200 shadow-sm flex items-center gap-1.5 group cursor-pointer"
      title={isDark ? t.theme.toggleTitleLight : t.theme.toggleTitleDark}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-semibold hidden sm:inline">{t.theme.light}</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-(--text-secondary) group-hover:-rotate-12 transition-transform" />
          <span className="text-xs font-semibold hidden sm:inline">{t.theme.dark}</span>
        </>
      )}
    </button>
  );
}
