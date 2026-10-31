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
  const { t, isRtl } = useLanguage();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      {/* Spacious, structured container with increased height (h-20) and wide container (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4 md:gap-6">
        
        {/* Brand: Fixed, never wraps, spacious padding */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2.5 sm:gap-3 shrink-0 py-1"
        >
          <Logo size={40} className="shadow-sm group-hover:scale-105 transition-transform shrink-0" />
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-[var(--text-primary)] whitespace-nowrap leading-snug">
              {t.personal.name}
            </span>
            <span className="text-[10px] sm:text-[11px] md:text-xs text-[var(--text-muted)] font-normal whitespace-nowrap leading-none mt-0.5">
              {t.personal.roleSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation: Centered with generous horizontal spacing */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[var(--text-secondary)]">
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Resume CTA */}
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-peach)] hover:text-[var(--accent-peach)] transition-all whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
            <span>{t.nav.resume}</span>
          </a>

          {/* Social Icons Group with subtle separation */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
              aria-label="Kaggle Profile"
              title="Kaggle: @assiaben"
            >
              <ColoredKaggleIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
              aria-label="GitHub Profile"
              title="GitHub: @tuba89"
            >
              <ColoredGithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Assia Benkedia"
            >
              <ColoredLinkedinIcon size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-[1px] bg-[var(--border-strong)] hidden sm:block mx-0.5 opacity-60" />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3D Modern Subtle Gradient Divider across Bottom of Header */}
      <div className="gradient-divider-bottom" />

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <a
              href="#featured-projects"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.honors}
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href="#education"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.education}
            </a>
            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.credentials}
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors"
            >
              {t.nav.contact}
            </a>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <a
                href="/certificates/Assia_Benkedia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 text-xs font-semibold justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.downloadPdf}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
