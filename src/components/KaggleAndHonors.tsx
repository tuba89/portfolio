"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Award, ExternalLink, CheckCircle2, Eye, FileText } from "lucide-react";
import { SiKaggle, SiMedium, SiYoutube } from "react-icons/si";
import { ColoredGithubIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";
import CertificateLightbox, { LightboxDoc } from "./CertificateLightbox";
import { IssuerChip } from "./TechBadge";

export default function KaggleAndHonors() {
  const { t } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<LightboxDoc | null>(null);

  return (
    <section id="achievements" className="py-20 border-b border-(--border-subtle) bg-(--bg-surface)/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.honors.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-primary)">
            {t.honors.title}
          </h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
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
                  <span className="text-xs font-mono text-(--text-muted)">
                    {t.honors.kaggleCard.date}
                  </span>
                  <IssuerChip issuerKey="kaggle" displayName="Kaggle" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-(--text-primary) mb-1">
                {t.honors.kaggleCard.title}
              </h3>
              <p className="text-xs font-medium text-(--accent-peach) mb-3">
                {t.honors.kaggleCard.sub}
              </p>
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed mb-5 font-normal">
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
                className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-(--border-subtle) bg-(--bg-page) p-1.5 mb-5 group-hover:border-(--accent-peach) transition-colors cursor-pointer group/thumb"
              >
                <Image
                  src="/images/certificates/deep-past-challenge.webp"
                  alt="Kaggle Silver Medal Certificate - Assia Benkedia"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain p-1 group-hover/thumb:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium backdrop-blur-xs gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>{t.honors.kaggleCard.viewCert}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-(--border-subtle) flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-(--text-muted)">
                {t.honors.kaggleCard.verifiedText}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1! px-2.5! text-xs font-medium inline-flex items-center gap-1.5"
                  title="Read Kaggle Solution Writeup"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.honors.kaggleCard.writeupBtn || "Solution Writeup"}</span>
                </a>
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
                  className="btn-secondary py-1! px-2.5! text-xs font-medium cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-(--accent-peach)" />
                  <span>{t.honors.kaggleCard.viewCert}</span>
                </button>
              </div>
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
                  <span className="text-xs font-mono text-(--text-muted)">
                    {t.honors.googleCard.date}
                  </span>
                  <IssuerChip issuerKey="google" displayName="Google" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-(--text-primary) mb-1">
                {t.honors.googleCard.title}
              </h3>
              <p className="text-xs font-medium text-(--accent-peach) mb-3">
                {t.honors.googleCard.sub}
              </p>
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed mb-5 font-normal">
                {t.honors.googleCard.desc}
              </p>

              {/* Real OncoAssist Interface Thumbnail */}
              <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-(--border-subtle) bg-(--bg-page) mb-5 group-hover:border-(--accent-peach) transition-colors">
                <Image
                  src="/assets/oncoAssist.png"
                  alt="OncoAssist: AI-Powered Cancer Recovery Advisor"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>

              {/* Key Highlights list */}
              <div className="p-3.5 rounded-lg border border-(--border-subtle) bg-(--bg-page)/60 mb-5 space-y-2">
                {t.honors.googleCard.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-(--text-secondary)">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Links Grid: Winners table, Notebook, Medium blog, YouTube demo, Code */}
            <div className="pt-3 border-t border-(--border-subtle) flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-(--text-muted)">
                  {t.honors.googleCard.initiativeText}
                </span>
                <a
                  href="https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-500 hover:underline"
                >
                  <Trophy className="w-3 h-3 text-amber-500" />
                  <span>{t.honors.googleCard.winnersBtn || "Winners Announcement"}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <a
                  href="https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1! px-2! text-xs font-medium inline-flex items-center gap-1"
                  title="View Kaggle Notebook"
                >
                  <SiKaggle className="w-3 h-3 text-sky-500" />
                  <span>{t.honors.googleCard.notebookBtn || "Notebook"}</span>
                </a>
                <a
                  href="https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1! px-2! text-xs font-medium inline-flex items-center gap-1"
                  title="Read Medium Blogpost"
                >
                  <SiMedium className="w-3 h-3 text-emerald-500" />
                  <span>{t.honors.googleCard.blogBtn || "Article"}</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=gKRmSPRP5NQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1! px-2! text-xs font-medium inline-flex items-center gap-1"
                  title="Watch Video Demo on YouTube"
                >
                  <SiYoutube className="w-3 h-3 text-rose-500" />
                  <span>{t.honors.googleCard.videoBtn || "Demo"}</span>
                </a>
                <a
                  href="https://github.com/tuba89/medibridge-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-1! px-2! text-xs font-medium inline-flex items-center gap-1"
                  title="View GitHub Code"
                >
                  <ColoredGithubIcon size={14} />
                  <span>{t.honors.googleCard.viewCode}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </section>
  );
}
