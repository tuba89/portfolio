"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Mail, Trophy, GraduationCap, Globe, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Delicate background aura */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[var(--accent-peach-light)] rounded-full blur-[100px] -z-10 pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium editorial-badge mb-6 sm:mb-8 border border-[var(--border-subtle)] max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="truncate">{t.hero.statusBadge}</span>
        </div>

        {/* Headline with breathing room and refined weight */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] leading-[1.25] max-w-3xl">
          {t.hero.headlineStart}
          <span className="text-[var(--accent-peach)] font-bold">{t.hero.headlineAccent}</span>
          {t.hero.headlineEnd}
        </h1>

        {/* Refined, airy intro paragraph */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
          {t.hero.bio}
        </p>

        {/* Minimal, elegant credentials row */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[var(--text-secondary)]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{t.hero.kaggleBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
            <span>{t.hero.uopeopleBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Globe className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{t.hero.fintechBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Smartphone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span>{t.hero.mobileBadge}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-9 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <a href="#featured-projects" className="btn-primary !px-5 !py-2.5 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center">
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2.5 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.hero.downloadCvBtn}</span>
          </a>
          <a href="#contact" className="btn-secondary !px-4 !py-2.5 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.hero.contactBtn}</span>
          </a>
        </div>

        {/* Clean, spacious metrics */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              33rd / 2,674
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.hero.stats.kaggle.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.hero.stats.kaggle.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              GPA 3.97 / 4.00
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.hero.stats.uopeople.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.hero.stats.uopeople.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              54 Countries
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.hero.stats.fintech.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.hero.stats.fintech.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              Honourable Mention
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.hero.stats.genai.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.hero.stats.genai.note}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
