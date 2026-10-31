"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, Calendar, MapPin, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { UoPeopleLogo } from "./BrandLogos";
import { EDUCATION_ASSETS } from "@/data/portfolioAssets";
import CertificateLightbox, { LightboxDoc } from "./CertificateLightbox";

export default function EducationSection() {
  const { t } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<LightboxDoc | null>(null);

  return (
    <section id="education" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.education.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.education.items.map((edu, idx) => {
            const asset = EDUCATION_ASSETS[idx];

            return (
              <div key={idx} className="editorial-card p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      {/* University Logo: Grayscale to color on hover */}
                      <div className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-200">
                        {asset?.logo === "uopeople" ? (
                          <UoPeopleLogo size={22} />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold editorial-badge">
                        {edu.grade}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-normal">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-medium text-[var(--accent-peach)] mb-1">
                    <bdi>{edu.institution}</bdi>
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] mb-3">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Thumbnail slot */}
                  {asset?.thumbnail && (
                    <div
                      onClick={() =>
                        setActiveDoc({
                          name: edu.degree,
                          issuer: edu.institution,
                          date: edu.period,
                          assetPath:
                            idx === 0
                              ? "/certificates/Assia_Benkedia_Graduation_Document.pdf"
                              : "/certificates/graduation_diploma.png",
                          thumbnail: asset.thumbnail,
                        })
                      }
                      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-[var(--border-subtle)] bg-white/5 cursor-pointer group shadow-sm"
                    >
                      <Image
                        src={asset.thumbnail}
                        alt={edu.degree}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium backdrop-blur-[2px]">
                        <span>Click to view document</span>
                      </div>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed mb-4 font-normal">
                    {edu.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {edu.credentialUrl && (
                  <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        setActiveDoc({
                          name: "Graduation Diploma (Bac+3)",
                          issuer: "University of Oran",
                          date: "2011",
                          assetPath: "/certificates/graduation_diploma.png",
                          thumbnail: "/images/certificates/graduation-diploma.webp",
                        })
                      }
                      className="btn-secondary !py-1 !px-2.5 text-xs font-medium cursor-pointer"
                    >
                      <Award className="w-3 h-3 text-amber-500" />
                      <span>{t.education.diplomaBtn}</span>
                    </button>
                    <button
                      onClick={() =>
                        setActiveDoc({
                          name: "Associate of Science Degree & Official Transcript",
                          issuer: "University of the People",
                          date: "January 14, 2026",
                          assetPath: "/certificates/Assia_Benkedia_Graduation_Document.pdf",
                          thumbnail: "/images/certificates/uopeople-degree.webp",
                        })
                      }
                      className="btn-secondary !py-1 !px-2.5 text-xs font-medium cursor-pointer"
                    >
                      <FileText className="w-3 h-3 text-[var(--accent-peach)]" />
                      <span>{t.education.transcriptBtn}</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </section>
  );
}
