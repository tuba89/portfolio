"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DizzitUpLogo } from "./BrandLogos";
import { EXPERIENCE_LOGOS } from "@/data/portfolioAssets";
import TechBadge from "./TechBadge";

export default function ExperienceTimeline() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="experience" className="py-20 border-b border-(--border-subtle)">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Briefcase className="w-3.5 h-3.5 text-(--accent-peach)" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-primary)">
            {t.experience.title}
          </h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            {t.experience.subtitle}
          </p>
        </div>

        {/* RTL-aware timeline container */}
        <div
          className={`relative space-y-10 ${
            isRtl
              ? "border-r border-(--border-strong) mr-3 md:mr-6 pr-6 md:pr-8"
              : "border-l border-(--border-strong) ml-3 md:ml-6 pl-6 md:pl-8"
          }`}
        >
          {t.experience.items.map((exp, idx) => {
            const logoType = EXPERIENCE_LOGOS[idx];

            return (
              <div key={idx} className="relative group">
                {/* Timeline marker with exact RTL mirroring */}
                <div
                  className={`absolute top-1.5 w-3.5 h-3.5 rounded-full bg-(--bg-page) border-2 border-(--accent-peach) group-hover:scale-125 transition-transform ${
                    isRtl ? "-right-7.75 md:-right-9.75" : "-left-7.75 md:-left-9.75"
                  }`}
                />

                <div className="editorial-card p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {/* Company Logo Badge: Grayscale to color on hover */}
                      <div className="w-10 h-10 rounded-xl p-1.5 border border-(--border-subtle) bg-(--bg-page) flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-200">
                        {logoType === "dizzitup" || logoType === "virtual-internships" ? (
                          <DizzitUpLogo size={26} />
                        ) : (
                          <Building2 className="w-5 h-5 text-(--accent-peach)" />
                        )}
                      </div>

                      <div>
                        <span className="text-[11px] font-mono font-semibold text-(--accent-peach) uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-(--text-primary)">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-(--text-secondary)">
                          <bdi>{exp.company}</bdi>
                        </p>
                      </div>
                    </div>

                    <div className={`flex flex-col sm:items-end gap-1 text-xs text-(--text-muted) font-normal shrink-0 ${isRtl ? "sm:items-start" : ""}`}>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-(--accent-peach) shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-(--text-primary) leading-relaxed mb-4 font-normal">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-(--border-subtle)">
                    {exp.skills.map((skill) => (
                      <TechBadge key={skill} tag={skill} variant="chip" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
