"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";
import { Language } from "@/data/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; short: string }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "fr", label: "Français", short: "FR" },
    { code: "ar", label: "العربية", short: "عربي" },
  ];

  const current = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all text-xs font-semibold cursor-pointer"
        aria-label="Select language"
        title="Switch Language (EN / FR / العربية)"
      >
        <Globe className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
        <span>{current.short}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 sm:right-auto sm:left-0 mt-1.5 w-32 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-1.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                lang === item.code
                  ? "bg-[var(--accent-peach-light)] text-[var(--accent-peach)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)]"
              }`}
            >
              <span>{item.label}</span>
              {lang === item.code && <Check className="w-3.5 h-3.5 text-[var(--accent-peach)]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

