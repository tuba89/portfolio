"use client";

import { ArrowUp, Mail } from "lucide-react";
import { ColoredGithubIcon, ColoredLinkedinIcon, ColoredKaggleIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--bg-page)] text-xs text-[var(--text-secondary)]">
      {/* 3D Modern Subtle Gradient Divider across Top of Footer */}
      <div className="gradient-divider-top" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <div className="font-semibold text-xs text-[var(--text-primary)]">
            {t.personal.name}
          </div>
          <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">
            {t.footer.rights}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Kaggle Colored */}
          <a
            href={PERSONAL_INFO.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
            aria-label="Kaggle Profile"
            title="Kaggle: @assiaben"
          >
            <ColoredKaggleIcon size={20} />
          </a>

          {/* GitHub Colored */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
            aria-label="GitHub Profile"
            title="GitHub: @tuba89"
          >
            <ColoredGithubIcon size={20} />
          </a>

          {/* LinkedIn Colored */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn: Assia Benkedia"
          >
            <ColoredLinkedinIcon size={20} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="Email"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-all cursor-pointer ml-1"
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
