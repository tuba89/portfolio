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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand with custom vector logo */}
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
            {t.nav.projects}
          </a>
          <a href="#achievements" className="hover:text-[var(--accent-peach)] transition-colors">
            {t.nav.honors}
          </a>
          <a href="#experience" className="hover:text-[var(--accent-peach)] transition-colors">
            {t.nav.experience}
          </a>
          <a href="#education" className="hover:text-[var(--accent-peach)] transition-colors">
            {t.nav.education}
          </a>
          <a href="#certifications" className="hover:text-[var(--accent-peach)] transition-colors">
            {t.nav.credentials}
          </a>
          <a href="#contact" className="hover:text-[var(--accent-peach)] transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions with Colored Brand Icons, Language Switcher, and Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all"
          >
            <FileText className="w-3 h-3 text-[var(--accent-peach)]" />
            <span>{t.nav.resume}</span>
          </a>

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

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
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

      {/* Modern 3D Gradient Divider underneath the Header */}
      <div className="gradient-divider-bottom" />

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
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
              className="px-3 py-2 rounded-lg text-[var(--accent-peach)] font-semibold flex items-center gap-2 border border-[var(--border-subtle)] mt-1"
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
