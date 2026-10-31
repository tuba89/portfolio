"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Mail, Trophy, GraduationCap, Globe, Smartphone, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Delicate background aura */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[var(--accent-peach-light)] rounded-full blur-[100px] -z-10 pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-8 border border-[var(--border-subtle)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Full-Stack, Mobile & AI Engineering</span>
        </div>

        {/* Headline with breathing room and refined weight */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] leading-[1.2] max-w-3xl">
          Building <span className="text-[var(--accent-peach)] font-bold">autonomous AI agents</span>, cross-platform mobile apps, and resilient fintech.
        </h1>

        {/* Refined, airy intro paragraph */}
        <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
          I am a Full-Stack & Mobile Developer specializing in intelligent agent workflows, React Native applications, and production payment architecture. Currently contributing to <span className="text-[var(--text-primary)] font-medium">DizzitUp</span> across 54 African countries.
        </p>

        {/* Minimal, elegant credentials row */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Kaggle Silver Medalist (33rd / 2,674)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>UoPeople High Honors (GPA 3.97)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>Fintech (54 African Nations)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70">
            <Smartphone className="w-3.5 h-3.5 text-sky-500" />
            <span>React Native & Expo</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#featured-projects" className="btn-primary !px-5 !py-2.5 text-sm font-medium">
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2.5 text-sm font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
          <a href="#contact" className="btn-secondary !px-4 !py-2.5 text-sm font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Clean, spacious metrics */}
        <div className="mt-16 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[var(--accent-peach)] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-[var(--text-muted)] mt-0.5">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
