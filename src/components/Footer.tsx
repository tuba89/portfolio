"use client";

import Link from "next/link";
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
    <footer className="relative bg-(--bg-page) text-xs text-(--text-secondary)">
      {/* 3D Modern Subtle Gradient Divider across Top of Footer */}
      <div className="gradient-divider-top" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <div className="font-semibold text-xs text-(--text-primary)">
            {t.personal.name}
          </div>
          <div className="mt-0.5 text-[11px] text-(--text-muted)">
            {t.footer.rights}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-(--text-muted)">
            <Link
              href="/privacy"
              className="hover:text-(--accent-peach) transition-colors underline-offset-2 hover:underline"
            >
              {t.footer.privacy}
            </Link>
            <span aria-hidden="true">•</span>
            <Link
              href="/terms"
              className="hover:text-(--accent-peach) transition-colors underline-offset-2 hover:underline"
            >
              {t.footer.terms}
            </Link>
            <span aria-hidden="true">•</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--accent-peach) transition-colors underline-offset-2 hover:underline"
            >
              {t.footer.sitemap}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Kaggle Colored */}
          <a
            href={PERSONAL_INFO.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
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
            className="p-1 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
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
            className="p-1 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn: Assia Benkedia"
          >
            <ColoredLinkedinIcon size={20} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-1.5 rounded-lg border border-(--border-strong) text-(--text-secondary) hover:text-(--accent-peach) hover:border-(--accent-peach) transition-all"
            aria-label="Email"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-(--border-strong) text-(--text-secondary) hover:text-(--accent-peach) hover:border-(--accent-peach) transition-all cursor-pointer ml-1"
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
