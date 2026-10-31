"use client";

import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Wrench, CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-3">
            <Wrench className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Core Technical Expertise
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            A specialized blend of cross-platform mobile engineering, autonomous artificial intelligence, production fintech, and server administration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="editorial-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] pb-3 mb-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-xs font-mono font-normal text-[var(--accent-peach)]">
                    0{idx + 1}
                  </span>
                </h3>

                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0 mt-0.5" />
                      <span>{skill}</span>
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
