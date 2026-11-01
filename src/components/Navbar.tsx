"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { FileText, Menu, X, Sparkles } from "lucide-react";
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
      {/* Spacious, structured container with responsive padding and height */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
        
        {/* Brand: Flexible, never overflows, shrinkable on small mobile */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2 sm:gap-2.5 min-w-0 shrink py-1"
        >
          <Logo size={32} className="sm:hidden shadow-sm shrink-0" />
          <Logo size={40} className="hidden sm:block shadow-sm group-hover:scale-105 transition-transform shrink-0" />
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-bold text-xs sm:text-base md:text-lg tracking-tight text-(--text-primary) truncate leading-snug">
              {t.personal.name}
            </span>
            <span className="text-[9px] sm:text-[11px] md:text-xs text-(--text-muted) font-normal truncate leading-none mt-0.5">
              {t.personal.roleSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation: Centered, displays on xl screens to avoid 1024px collision */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-medium text-(--text-secondary)">
          <a
            href="#featured-projects"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.projects}
          </a>
          <a
            href="#achievements"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.honors}
          </a>
          <a
            href="#experience"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.experience}
          </a>
          <a
            href="#education"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.education}
          </a>
          <a
            href="#certifications"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.credentials}
          </a>
          <a
            href="#contact"
            className="hover:text-(--accent-peach) transition-colors py-1 whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions Cluster: Responsive, compact on mobile, non-collapsible */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          {/* Resume CTA */}
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-(--border-strong) text-(--text-primary) hover:border-(--accent-peach) hover:text-(--accent-peach) transition-all whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-(--accent-peach) shrink-0" />
            <span>{t.nav.resume}</span>
          </a>

          {/* Social Icons Group with subtle separation - show on md+ */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
              aria-label="Kaggle Profile"
              title="Kaggle: @assiaben"
            >
              <ColoredKaggleIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
              aria-label="GitHub Profile"
              title="GitHub: @tuba89"
            >
              <ColoredGithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-(--border-subtle) hover:border-(--accent-peach) hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Assia Benkedia"
            >
              <ColoredLinkedinIcon size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-(--border-strong) hidden md:block mx-0.5 opacity-60" />

          {/* Ask AI Trigger Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-ai-assistant"))}
            className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-(--accent-peach)/40 bg-(--accent-peach-light) text-(--accent-peach) hover:bg-(--accent-peach) hover:text-white transition-all text-xs font-semibold cursor-pointer shadow-xs"
            title="Ask Assia's AI Copilot"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg border border-(--border-strong) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--accent-peach) transition-colors cursor-pointer"
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
        <div className="xl:hidden border-b border-(--border-subtle) bg-(--bg-surface-elevated) px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium">
            <a
              href="#featured-projects"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.honors}
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href="#education"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.education}
            </a>
            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.credentials}
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-(--bg-page) text-(--text-primary) transition-colors"
            >
              {t.nav.contact}
            </a>

            <div className="pt-3 border-t border-(--border-subtle) flex flex-col gap-2.5">
              {/* Mobile Ask AI Trigger */}
              <button
                onClick={() => {
                  closeMobileMenu();
                  window.dispatchEvent(new CustomEvent("open-ai-assistant"));
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-(--accent-peach)/40 bg-(--accent-peach-light) text-(--accent-peach) font-semibold text-xs transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-(--accent-peach)" />
                <span>Ask Assia&apos;s AI Copilot (Gemini)</span>
              </button>

              <a
                href="/certificates/Assia_Benkedia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5! text-xs font-semibold justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.downloadPdf}</span>
              </a>

              {/* Social Links on Mobile */}
              <div className="flex items-center justify-around py-1 border-t border-(--border-subtle)/50 pt-3">
                <a
                  href={PERSONAL_INFO.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-(--accent-peach)"
                >
                  <ColoredKaggleIcon size={16} />
                  <span>Kaggle</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-(--accent-peach)"
                >
                  <ColoredGithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-(--accent-peach)"
                >
                  <ColoredLinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
