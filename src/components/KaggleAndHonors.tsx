"use client";

import { Trophy, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function KaggleAndHonors() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.honors.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.honors.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t.honors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Kaggle Deep Past Silver Medal */}
          <div className="editorial-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Trophy className="w-3 h-3" />
                  <span>{t.honors.kaggleCard.tag}</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">March 2026</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-1">
                {t.honors.kaggleCard.title}
              </h3>
              <p className="text-xs font-medium text-[var(--accent-peach)] mb-3">
                {t.honors.kaggleCard.sub}
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-normal">
                {t.honors.kaggleCard.desc}
              </p>

              {/* Certificate Image Thumbnail */}
              <div className="relative rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-page)] p-1.5 mb-5 group-hover:border-[var(--accent-peach)] transition-colors">
                <img
                  src="/certificates/Assia_Benkedia_Deep_Past_Challenge.png"
                  alt="Kaggle Silver Medal Certificate - Assia Benkedia"
                  className="w-full h-auto rounded object-contain"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-muted)]">
                Verified on Kaggle Platform
              </span>
              <a
                href="/certificates/Assia_Benkedia_Deep_Past_Challenge.png"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1 !px-2.5 text-xs font-medium"
              >
                <span>{t.honors.kaggleCard.viewCert}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Google Gen AI Intensive Capstone Honourable Mention */}
          <div className="editorial-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <Award className="w-3 h-3" />
                  <span>{t.honors.googleCard.tag}</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">April 2025</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-1">
                {t.honors.googleCard.title}
              </h3>
              <p className="text-xs font-medium text-[var(--accent-peach)] mb-3">
                {t.honors.googleCard.sub}
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-normal">
                {t.honors.googleCard.desc}
              </p>

              {/* Key Highlights list */}
              <div className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)]/60 mb-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>280,000+ Global Participants in Kaggle x Google Cohort</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Source-cited, medically-grounded RAG architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Multilingual evaluation with French & Arabic RTL</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-muted)]">
                Kaggle x Google AI Initiative
              </span>
              <a
                href="https://github.com/tuba89/medibridge-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1 !px-2.5 text-xs font-medium"
              >
                <span>{t.honors.googleCard.viewCode}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
