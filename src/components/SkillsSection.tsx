"use client";

import { Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TechBadge from "./TechBadge";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <Wrench className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.skills.categories.map((category, idx) => (
            <div key={idx} className="editorial-card p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] pb-2.5 mb-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-[11px] font-mono text-[var(--accent-peach)]">
                    0{idx + 1}
                  </span>
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="min-w-0">
                      <TechBadge tag={skill} variant="list" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
