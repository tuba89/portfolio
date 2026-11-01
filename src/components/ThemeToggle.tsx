"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const emptySubscribe = () => () => {};

const subscribeTheme = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getThemeSnapshot = () => {
  if (typeof window === "undefined") return true;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") return false;
  return true; // Default dark
};

const getServerSnapshot = () => true; // Default dark on server

export default function ThemeToggle() {
  const { t } = useLanguage();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = () => {
    // Enable smooth transition only upon user-initiated toggle
    document.documentElement.classList.add("theme-transitioning");
    const nextDark = !isDark;
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.style.colorScheme = nextDark ? "dark" : "light";
    window.dispatchEvent(new Event("storage"));

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 300);
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
      className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-(--border-strong) bg-(--bg-surface) text-(--text-primary) hover:border-(--accent-peach) hover:text-(--accent-peach) transition-colors duration-200 shadow-sm flex items-center gap-1.5 group cursor-pointer"
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
