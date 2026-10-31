"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, Trophy, GraduationCap, Globe, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TechBadge from "./TechBadge";

export default function HeroSection() {
  const { t, isRtl } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 border-b border-(--border-subtle) overflow-hidden">
      {/* Delicate background aura - contained inside overflow-hidden parent wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-(--accent-peach-light) rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Profile / Status Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Subtle availability pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium editorial-badge border border-(--border-subtle) max-w-full self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="wrap-break-word text-start">{t.hero.statusBadge}</span>
          </div>

          {/* Profile Photo Slot with Graceful Fallback */}
          <div className="flex items-center gap-3 self-start sm:self-auto min-w-0">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-linear-to-tr from-(--accent-peach) via-amber-400 to-sky-400 shadow-md shrink-0">
              <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden bg-(--bg-surface-elevated) flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/assets/assia-benkedia-logo-3d.jpg"
                    alt={t.personal.name}
                    fill
                    sizes="64px"
                    priority
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Graceful AB Initials Fallback */
                  <div className="w-full h-full bg-linear-to-br from-[#1A262F] to-[#10171C] flex items-center justify-center text-white font-bold text-sm sm:text-lg tracking-wider">
                    <span className="text-(--accent-peach)">A</span>
                    <span className="text-amber-400">B</span>
                  </div>
                )}
              </div>
              {/* Online pulse dot */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 border-2 border-(--bg-page)" />
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <span className="font-bold text-sm sm:text-base text-(--text-primary) truncate">
                {t.personal.name}
              </span>
              <span className="text-xs text-(--text-muted) font-normal truncate">
                {t.personal.roleSubtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Headline with breathing room and refined mobile-first size */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-(--text-primary) leading-tight max-w-3xl wrap-break-word">
          {t.hero.headlineStart}
          <span className="text-(--accent-peach) font-bold">{t.hero.headlineAccent}</span>
          {t.hero.headlineEnd}
        </h1>

        {/* Refined, airy intro paragraph */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-(--text-secondary) max-w-2xl font-normal leading-relaxed wrap-break-word">
          {t.hero.bio}
        </p>

        {/* Minimal, elegant credentials row */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-(--text-secondary)">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-(--border-subtle) bg-(--bg-surface)/70 max-w-full">
            <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="wrap-break-word">{t.hero.kaggleBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-(--border-subtle) bg-(--bg-surface)/70 max-w-full">
            <GraduationCap className="w-3.5 h-3.5 text-(--accent-peach) shrink-0" />
            <span className="wrap-break-word">{t.hero.uopeopleBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-(--border-subtle) bg-(--bg-surface)/70 max-w-full">
            <Globe className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="wrap-break-word">{t.hero.fintechBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-(--border-subtle) bg-(--bg-surface)/70 max-w-full">
            <Smartphone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span className="wrap-break-word">{t.hero.mobileBadge}</span>
          </div>
        </div>

        {/* CTA Buttons - Full-width stacked on mobile */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
          <a href="#featured-projects" className="btn-primary px-5! py-2.5! text-xs sm:text-sm font-medium w-full sm:w-auto justify-center">
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-4! py-2.5! text-xs sm:text-sm font-medium w-full sm:w-auto justify-center"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.hero.downloadCvBtn}</span>
          </a>
          <a href="#contact" className="btn-secondary px-4! py-2.5! text-xs sm:text-sm font-medium w-full sm:w-auto justify-center">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.hero.contactBtn}</span>
          </a>
        </div>

        {/* Clean, spacious metrics in 2 cols on mobile */}
        <div className="mt-10 sm:mt-16 pt-7 sm:pt-10 border-t border-(--border-subtle) grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="flex flex-col min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-(--accent-peach) tracking-tight truncate">
              {t.personal.stats.kaggle.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-(--text-primary) mt-1 truncate">
              {t.personal.stats.kaggle.label}
            </span>
            <span className="text-[10px] sm:text-xs text-(--text-muted) mt-0.5 truncate">
              {t.personal.stats.kaggle.note}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-(--accent-peach) tracking-tight truncate">
              {t.personal.stats.uopeople.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-(--text-primary) mt-1 truncate">
              {t.personal.stats.uopeople.label}
            </span>
            <span className="text-[10px] sm:text-xs text-(--text-muted) mt-0.5 truncate">
              {t.personal.stats.uopeople.note}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-(--accent-peach) tracking-tight truncate">
              {t.personal.stats.fintech.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-(--text-primary) mt-1 truncate">
              {t.personal.stats.fintech.label}
            </span>
            <span className="text-[10px] sm:text-xs text-(--text-muted) mt-0.5 truncate">
              {t.personal.stats.fintech.note}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-(--accent-peach) tracking-tight truncate">
              {t.personal.stats.genai.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-(--text-primary) mt-1 truncate">
              {t.personal.stats.genai.label}
            </span>
            <span className="text-[10px] sm:text-xs text-(--text-muted) mt-0.5 truncate">
              {t.personal.stats.genai.note}
            </span>
          </div>
        </div>

        {/* Slim "Technologies I use" strip under hero stats */}
        <div className="mt-8 pt-6 border-t border-(--border-subtle)">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-(--accent-peach) animate-pulse shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-(--text-primary)">
                {t.hero.techStripBadge}
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-(--text-muted) font-normal">
              {t.hero.techStripTitle}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "Next.js",
              "React Native",
              "Expo",
              "TypeScript",
              "Node.js",
              "Python",
              "Supabase",
              "PostgreSQL",
              "Prisma",
              "Tailwind CSS",
              "PyTorch",
              "Docker",
            ].map((tech) => (
              <TechBadge key={tech} tag={tech} variant="hero-strip" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
