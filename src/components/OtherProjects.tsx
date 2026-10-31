"use client";

import { OTHER_PROJECTS } from "@/data/portfolioData";
import { FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function OtherProjects() {
  return (
    <section className="py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
            <span>Open Source & Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Additional Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[var(--accent-peach)] font-semibold uppercase">
                    {proj.category}
                  </span>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-peach)] hover:border-[var(--accent-peach)] transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                  {proj.subtitle}
                </p>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-medium border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-page)]"
                  >
                    {tag}
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
