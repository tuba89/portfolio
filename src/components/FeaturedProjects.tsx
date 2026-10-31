"use client";

import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ExternalLink, CheckCircle2, Layers, Compass, ArrowUpRight } from "lucide-react";
import { ColoredGithubIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section id="featured-projects" className="py-16 sm:py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-2.5">
              <Compass className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
              {t.projects.title}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
          <a
            href="https://github.com/tuba89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-peach)] hover:underline self-start sm:self-auto"
          >
            <span>{t.projects.allRepos}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-card p-5 sm:p-7 md:p-8 relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-peach)] via-amber-500/50 to-sky-500/50 opacity-70" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 pb-4 sm:pb-5 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--accent-peach)] uppercase tracking-wider font-medium">
                      0{idx + 1} - {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium editorial-badge">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Action links */}
                <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-1.5 !px-3 text-xs"
                    >
                      <ColoredGithubIcon size={16} />
                      <span>{t.projects.codeBtn}</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-1.5 !px-3 text-xs"
                    >
                      <span>{t.projects.liveBtn}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                {/* Left */}
                <div className="lg:col-span-8 space-y-3.5">
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {project.longDescription}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-[11px] sm:text-xs font-semibold text-[var(--accent-peach)] uppercase tracking-wider mb-2">
                      {t.projects.deliverablesTitle}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {project.impact.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-4 flex flex-col justify-between p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/40 text-xs">
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="space-y-2.5 mb-4 sm:mb-5">
                      <div className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        {t.projects.archProfile}
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="border-b lg:border-b border-[var(--border-subtle)] pb-1.5 last:border-b-0">
                            <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)]">{metric.label}</div>
                            <div className="text-xs font-medium text-[var(--text-primary)] mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3 h-3" />
                      <span>{t.projects.stackTitle}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-normal border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-surface)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
