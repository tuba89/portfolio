"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-peach)] text-white font-semibold flex items-center justify-center text-sm shadow-sm group-hover:opacity-90 transition-opacity">
            AB
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-[var(--text-muted)] font-normal hidden sm:inline -mt-0.5">
              Full-Stack & Mobile Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[var(--text-secondary)]">
          <a href="#featured-projects" className="hover:text-[var(--accent-peach)] transition-colors">
            Projects
          </a>
          <a href="#achievements" className="hover:text-[var(--accent-peach)] transition-colors">
            Honors
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
        <div className="flex items-center gap-2.5">
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all"
          >
            <FileText className="w-3 h-3 text-[var(--accent-peach)]" />
            <span>Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
