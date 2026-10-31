"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand with new custom vector logo */}
        <Link href="/" onClick={closeMobileMenu} className="group flex items-center gap-2.5">
          <Logo size={34} className="shadow-sm group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-[var(--text-muted)] font-normal -mt-0.5">
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

        {/* Actions Desktop & Mobile */}
        <div className="flex items-center gap-2 sm:gap-2.5">
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
            className="p-1.5 sm:p-2 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <ThemeToggle />

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-all cursor-pointer ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[var(--text-secondary)]">
            <a
              href="#featured-projects"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Projects
            </a>
            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Honors & Benchmarks
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Education
            </a>
            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Credentials & Licenses
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              Contact
            </a>
            <a
              href="/certificates/Assia_Benkedia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg text-[var(--accent-peach)] font-semibold flex items-center gap-2 border border-[var(--border-subtle)] mt-1"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
