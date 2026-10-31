"use client";

import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Career Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            Engineering & Domain Experience
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Combining modern full-stack development with 12+ years of legal and operational rigor.
          </p>
        </div>

        <div className="relative border-l border-[var(--border-strong)] ml-3 md:ml-6 pl-6 md:pl-8 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-page)] border-2 border-[var(--accent-peach)] group-hover:scale-125 transition-transform" />

              <div className="editorial-card p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-mono font-medium text-[var(--accent-peach)] uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--text-muted)] font-normal">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
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
                      {skill}
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
