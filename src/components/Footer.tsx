"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-[var(--border-subtle)] bg-[var(--bg-page)] text-xs text-[var(--text-secondary)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <div className="font-semibold text-xs text-[var(--text-primary)]">
            {PERSONAL_INFO.name}
          </div>
          <div className="mt-0.5 text-[11px] text-[var(--text-muted)]">
            Full-Stack & Mobile Developer - Oran, Algeria - © 2026 All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--accent-peach)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--accent-peach)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--accent-peach)] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-all cursor-pointer ml-1"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
