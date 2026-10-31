"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { FileText, Menu, X } from "lucide-react";
import { ColoredGithubIcon, ColoredLinkedinIcon, ColoredKaggleIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      {/* Spacious, structured container with increased height (h-20) and wide container (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        
        {/* Brand: Fixed, never wraps, spacious padding */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3 shrink-0 py-1"
        >
          <Logo size={40} className="shadow-sm group-hover:scale-105 transition-transform shrink-0" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-base sm:text-lg tracking-tight text-[var(--text-primary)] whitespace-nowrap leading-snug">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-normal whitespace-nowrap leading-none mt-0.5">
              Full-Stack & Mobile Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation: Centered with generous horizontal spacing */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-[var(--text-secondary)]">
          <a
            href="#featured-projects"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.projects}
          </a>
          <a
            href="#achievements"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.honors}
          </a>
          <a
            href="#experience"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.experience}
          </a>
          <a
            href="#education"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.education}
          </a>
          <a
            href="#certifications"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.credentials}
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--accent-peach)] transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions Cluster: Structured, spaced, non-collapsible */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Resume CTA */}
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
            <span>{t.nav.resume}</span>
          </a>

          {/* Social Icons Group with subtle separation */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all shrink-0 bg-[var(--bg-surface)]"
              aria-label="Kaggle Profile"
              title="Kaggle: @assiaben"
            >
              <ColoredKaggleIcon size={20} />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all shrink-0 bg-[var(--bg-surface)]"
              aria-label="GitHub Profile"
              title="GitHub: @tuba89"
            >
              <ColoredGithubIcon size={20} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all shrink-0 bg-[var(--bg-surface)]"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Assia Benkedia"
            >
              <ColoredLinkedinIcon size={20} />
            </a>
          </div>

          {/* Thin subtle vertical separator */}
          <div className="hidden sm:block w-px h-6 bg-[var(--border-subtle)] mx-0.5" />

          {/* Utility Group: Language Switcher & Dark/Light Mode */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-xl border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Modern 3D Gradient Divider underneath the Header */}
      <div className="gradient-divider-bottom" />

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[var(--text-secondary)]">
            <a
              href="#featured-projects"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.honors}
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href="#education"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.education}
            </a>
            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.credentials}
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] hover:text-[var(--accent-peach)] transition-colors"
            >
              {t.nav.contact}
            </a>
            <a
              href="/certificates/Assia_Benkedia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="px-3 py-2.5 rounded-lg text-[var(--accent-peach)] font-semibold flex items-center gap-2 border border-[var(--border-subtle)] mt-2 bg-[var(--bg-page)]"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.downloadPdf}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
