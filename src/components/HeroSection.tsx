"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, Trophy, GraduationCap, Globe, Smartphone, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, isRtl } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Delicate background aura */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[var(--accent-peach-light)] rounded-full blur-[100px] -z-10 pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Profile / Status Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          {/* Subtle availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium editorial-badge border border-[var(--border-subtle)] max-w-full self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">{t.hero.statusBadge}</span>
          </div>

          {/* Profile Photo Slot with Graceful Fallback */}
          <div className="flex items-center gap-3.5 self-start sm:self-auto">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-[var(--accent-peach)] via-amber-400 to-sky-400 shadow-md shrink-0">
              <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden bg-[var(--bg-surface-elevated)] flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/images/profile.webp"
                    alt={t.personal.name}
                    fill
                    sizes="64px"
                    priority
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Graceful AB Initials Fallback */
                  <div className="w-full h-full bg-gradient-to-br from-[#1A262F] to-[#10171C] flex items-center justify-center text-white font-bold text-base sm:text-lg tracking-wider">
                    <span className="text-[var(--accent-peach)]">A</span>
                    <span className="text-amber-400">B</span>
                  </div>
                )}
              </div>
              {/* Online pulse dot */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-page)]" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                {t.personal.name}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-normal">
                {t.personal.roleSubtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Headline with breathing room and refined weight */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] leading-[1.3] max-w-3xl">
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
              {t.personal.stats.kaggle.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.personal.stats.kaggle.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.personal.stats.kaggle.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              {t.personal.stats.uopeople.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.personal.stats.uopeople.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.personal.stats.uopeople.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              {t.personal.stats.fintech.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.personal.stats.fintech.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.personal.stats.fintech.note}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
              {t.personal.stats.genai.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
              {t.personal.stats.genai.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">
              {t.personal.stats.genai.note}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
