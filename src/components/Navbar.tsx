"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-peach)] text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform">
            AB
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-peach)] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-[var(--text-secondary)] hidden sm:inline">
                Full-Stack & AI Engineer
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#featured-projects" className="hover:text-[var(--accent-peach)] transition-colors">
            Featured Projects
          </a>
          <a href="#achievements" className="hover:text-[var(--accent-peach)] transition-colors">
            Kaggle & Honors
          </a>
          <a href="#experience" className="hover:text-[var(--accent-peach)] transition-colors">
            Experience
          </a>
          <a href="#education" className="hover:text-[var(--accent-peach)] transition-colors">
            Education
          </a>
          <a href="#certifications" className="hover:text-[var(--accent-peach)] transition-colors">
            Credentials
          </a>
          <a href="#contact" className="hover:text-[var(--accent-peach)] transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
