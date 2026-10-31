"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Award, ExternalLink, CheckCircle2, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { KaggleLogo, GoogleLogo } from "./BrandLogos";
import CertificateLightbox, { LightboxDoc } from "./CertificateLightbox";

export default function KaggleAndHonors() {
  const { t } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<LightboxDoc | null>(null);

  return (
    <section id="achievements" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {t.honors.kaggleCard.date}
                  </span>
                  <div className="grayscale group-hover:grayscale-0 transition-all duration-200">
                    <KaggleLogo size={18} />
                  </div>
                </div>
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

              {/* Certificate Image Thumbnail with Lightbox */}
              <div
                onClick={() =>
                  setActiveDoc({
                    name: t.honors.kaggleCard.title,
                    issuer: "Kaggle (Awarded by Will Cukierski, Head of Competitions)",
                    date: t.honors.kaggleCard.date,
                    assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
                    thumbnail: "/images/certificates/deep-past-challenge.webp",
                    credentialId: "Rank 33 / 2,674 Teams (Top 1.2%)",
                  })
                }
                className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-page)] p-1.5 mb-5 group-hover:border-[var(--accent-peach)] transition-colors cursor-pointer group/thumb"
              >
                <Image
                  src="/images/certificates/deep-past-challenge.webp"
                  alt="Kaggle Silver Medal Certificate - Assia Benkedia"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain p-1 group-hover/thumb:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium backdrop-blur-[2px] gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>{t.honors.kaggleCard.viewCert}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-muted)]">
                {t.honors.kaggleCard.verifiedText}
              </span>
              <button
                onClick={() =>
                  setActiveDoc({
                    name: t.honors.kaggleCard.title,
                    issuer: "Kaggle (Awarded by Will Cukierski, Head of Competitions)",
                    date: t.honors.kaggleCard.date,
                    assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
                    thumbnail: "/images/certificates/deep-past-challenge.webp",
                    credentialId: "Rank 33 / 2,674 Teams (Top 1.2%)",
                  })
                }
                className="btn-secondary !py-1 !px-2.5 text-xs font-medium cursor-pointer"
              >
                <span>{t.honors.kaggleCard.viewCert}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {t.honors.googleCard.date}
                  </span>
                  <div className="grayscale group-hover:grayscale-0 transition-all duration-200">
                    <GoogleLogo size={18} />
                  </div>
                </div>
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

              {/* Real OncoAssist Interface Thumbnail */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-page)] mb-5 group-hover:border-[var(--accent-peach)] transition-colors">
                <Image
                  src="/assets/oncoAssist.png"
                  alt="OncoAssist: AI-Powered Cancer Recovery Advisor"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>

              {/* Key Highlights list */}
              <div className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)]/60 mb-5 space-y-2">
                {t.honors.googleCard.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-muted)]">
                {t.honors.googleCard.initiativeText}
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

      {/* Lightbox Modal */}
      <CertificateLightbox doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </section>
  );
}
