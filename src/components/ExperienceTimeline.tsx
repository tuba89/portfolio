"use client";

import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, FileCheck } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Engineering & Domain Experience
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            A track record combining modern software engineering with 12+ years of legal and operational rigor.
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--border-strong)] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-page)] border-4 border-[var(--accent-peach)] group-hover:scale-125 transition-transform" />

              <div className="editorial-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-peach)]">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[var(--text-secondary)]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--text-muted)] font-medium">
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

                <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-page)]"
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
