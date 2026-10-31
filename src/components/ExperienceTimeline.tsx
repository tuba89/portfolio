"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceTimeline() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="experience" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.experience.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* RTL-aware timeline container */}
        <div
          className={`relative space-y-10 ${
            isRtl
              ? "border-r border-[var(--border-strong)] mr-3 md:mr-6 pr-6 md:pr-8"
              : "border-l border-[var(--border-strong)] ml-3 md:ml-6 pl-6 md:pl-8"
          }`}
        >
          {t.experience.items.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker with exact RTL mirroring */}
              <div
                className={`absolute top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-page)] border-2 border-[var(--accent-peach)] group-hover:scale-125 transition-transform ${
                  isRtl ? "-right-[31px] md:-right-[39px]" : "-left-[31px] md:-left-[39px]"
                }`}
              />

              <div className="editorial-card p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[var(--accent-peach)] uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      <bdi>{exp.company}</bdi>
                    </p>
                  </div>

                  <div className={`flex flex-col sm:items-end gap-1 text-xs text-[var(--text-muted)] font-normal ${isRtl ? "sm:items-start" : ""}`}>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed mb-4 font-normal">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-normal border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-page)]"
                    >
                      <bdi>{skill}</bdi>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
