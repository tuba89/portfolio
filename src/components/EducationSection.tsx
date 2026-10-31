"use client";

import { EDUCATION_LIST } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Accredited Education & Honors
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            Rigorous foundation in computer science, software engineering, and financial economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="editorial-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold editorial-badge">
                    {edu.grade}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-[var(--accent-peach)] mb-1">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {edu.credentialUrl && (
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                  <a
                    href="/certificates/graduation_diploma.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-1.5 !px-3 text-xs"
                  >
                    <Award className="w-3 h-3 text-amber-500" />
                    <span>View Diploma Image</span>
                  </a>
                  <a
                    href="/certificates/Assia_Benkedia_Graduation_Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-1.5 !px-3 text-xs"
                  >
                    <FileText className="w-3 h-3 text-[var(--accent-peach)]" />
                    <span>Official Transcript & Letter</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
