"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Trophy, GraduationCap, Globe, Award, Download, Mail, Smartphone, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent-peach-light)] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold editorial-badge mb-6 border border-[var(--border-subtle)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
          <span>Full-Stack & Mobile Developer · AI Systems & Fintech Engineer</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] max-w-4xl">
          Architecting{" "}
          <span className="text-[var(--accent-peach)] relative inline-block">
            Autonomous AI Agents
          </span>
          , Cross-Platform Mobile Apps, and Production Fintech.
        </h1>

        {/* Subtitle / Bio */}
        <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Hi, I&apos;m <strong className="text-[var(--text-primary)]">Assia Benkedia</strong>. I build high-throughput web and mobile applications (React Native Expo, Next.js, Node.js, Prisma, Coolify) and agentic AI systems. Currently contributing to <strong className="text-[var(--text-primary)]">DizzitUp</strong> across 54 African countries. Kaggle Silver Medalist (33rd / 2,674) and University of the People CS Graduate with High Honors (3.97 GPA).
        </p>

        {/* Proven Highlights Pill Bar */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Kaggle Silver Medalist (Top 1.2% - Deep Past)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium">
            <GraduationCap className="w-4 h-4 text-[var(--accent-peach)]" />
            <span>UoPeople High Honors Graduate (GPA 3.97 / 4.00)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium">
            <Globe className="w-4 h-4 text-emerald-500" />
            <span>Fintech & Marketplace Engineering (54 Countries)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium">
            <Smartphone className="w-4 h-4 text-sky-500" />
            <span>Mobile Engineering (React Native Expo iOS / Android)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#featured-projects" className="btn-primary">
            <span>Explore Flagship Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/certificates/Assia_Benkedia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Download className="w-4 h-4" />
            <span>Download Verified CV</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="mt-14 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-[var(--accent-peach)] tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)] mt-1">
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
