"use client";

import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-3">
              <Cpu className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
              <span>Flagship Engineering & AI Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-base text-[var(--text-secondary)] max-w-2xl">
              Production systems, autonomous agentic architectures, and competitive machine learning models delivered with verifiable impact.
            </p>
          </div>
          <a
            href="https://github.com/tuba89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-peach)] hover:underline"
          >
            <span>View all repositories on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-card p-6 sm:p-8 md:p-10 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-peach)] via-amber-500 to-sky-500 opacity-80" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-xs font-mono font-bold text-[var(--accent-peach)] uppercase tracking-wider">
                      Case Study {String(idx + 1).padStart(2, "0")} · {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold editorial-badge">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base font-medium text-[var(--text-secondary)] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-2 !px-3.5 text-xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 !px-3.5 text-xs"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Body */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Description & Impact */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base text-[var(--text-primary)] leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-peach)] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Key Architectural Contributions & Impact</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Metrics & Tech Stack */}
                <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/50">
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="space-y-4 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                        Key Dimensions
                      </h4>
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="border-b border-[var(--border-subtle)] pb-2 last:border-b-0">
                          <div className="text-xs text-[var(--text-muted)]">{metric.label}</div>
                          <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-surface)]"
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
