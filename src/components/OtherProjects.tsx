"use client";

import { FolderGit2 } from "lucide-react";
import { ColoredGithubIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function OtherProjects() {
  const { t } = useLanguage();

  return (
    <section className="py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>{t.otherProjects.badge}</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.otherProjects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.otherProjects.items.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-[var(--accent-peach)] font-semibold uppercase">
                    {proj.category}
                  </span>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-peach)] hover:scale-105 transition-all"
                      aria-label="View on GitHub"
                    >
                      <ColoredGithubIcon size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                  <bdi>{proj.title}</bdi>
                </h3>
                <p className="text-xs font-medium text-[var(--text-secondary)] mb-2">
                  {proj.subtitle}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-normal border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-page)]"
                  >
                    <bdi>{tag}</bdi>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
