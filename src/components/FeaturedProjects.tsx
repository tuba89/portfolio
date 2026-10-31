"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2, Layers, Compass, ArrowUpRight, Maximize2 } from "lucide-react";
import { ColoredGithubIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";
import { FEATURED_PROJECT_ASSETS } from "@/data/portfolioAssets";
import PhoneMockup from "./PhoneMockup";
import TechBadge from "./TechBadge";

export default function FeaturedProjects() {
  const { t, isRtl, lang } = useLanguage();

  return (
    <section id="featured-projects" className="py-16 sm:py-20 border-b border-(--border-subtle)">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-2.5">
              <Compass className="w-3.5 h-3.5 text-(--accent-peach)" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-primary)">
              {t.projects.title}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-(--text-secondary) max-w-xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
          <a
            href="https://github.com/tuba89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-(--accent-peach) hover:underline self-start sm:self-auto"
          >
            <span>{t.projects.allRepos}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-[-90deg]" : ""}`} />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {t.featuredProjects.map((project, idx) => {
            const assets = FEATURED_PROJECT_ASSETS[project.id];
            const altText = assets ? assets.alt[lang] || assets.alt.en : project.title;

            return (
              <div
                key={project.id}
                className="editorial-card p-3.5 sm:p-7 md:p-8 relative overflow-hidden"
              >
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-(--accent-peach) via-amber-500/50 to-sky-500/50 opacity-70" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 pb-4 sm:pb-5 border-b border-(--border-subtle)">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-mono text-(--accent-peach) uppercase tracking-wider font-semibold">
                        0{idx + 1} - {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium editorial-badge">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-(--text-primary) tracking-tight">
                      <bdi>{project.title}</bdi>
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-(--text-secondary) mt-0.5">
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

                {/* Visual Asset Slot (Real Screenshot / Architecture Diagram / Mobile Frame) */}
                <div className="my-5 sm:my-6 max-w-full overflow-hidden">
                  {assets?.isMobileMockup ? (
                    /* React Native Expo Phone Frame */
                    <div className="p-2 sm:p-6 md:p-8 rounded-2xl bg-(--bg-page)/70 border border-(--border-subtle) flex items-center justify-center max-w-full overflow-hidden">
                      <PhoneMockup />
                    </div>
                  ) : assets?.coverImage ? (
                    /* Real Desktop Production Screenshot */
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-(--border-subtle) shadow-md bg-(--bg-page) group">
                      {/* Browser mock top chrome bar */}
                      <div className="h-6 sm:h-7 px-3 bg-(--bg-surface-elevated) border-b border-(--border-subtle) flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-(--text-muted) truncate max-w-[200px] sm:max-w-xs">
                          {project.liveUrl ? project.liveUrl.replace("https://", "") : project.id}
                        </span>
                        {assets.diagramSvg ? (
                          <a
                            href={assets.diagramSvg}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-(--accent-peach) hover:underline flex items-center gap-1 font-mono"
                          >
                            <span>Arch Diagram</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ) : (
                          <div className="w-8" />
                        )}
                      </div>
                      <div className="relative w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-1.75rem)]">
                        <Image
                          src={assets.coverImage}
                          alt={altText}
                          fill
                          sizes="(max-width: 1024px) 100vw, 900px"
                          className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : assets?.diagramSvg ? (
                    /* High-Fidelity SVG Architecture Diagram */
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-(--border-subtle) shadow-md group">
                      <img
                        src={assets.diagramSvg}
                        alt={altText}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <a
                        href={assets.diagramSvg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 text-white/80 hover:text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity text-[11px] flex items-center gap-1.5"
                        title="View Full Diagram"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Full Diagram</span>
                      </a>
                    </div>
                  ) : null}
                </div>

                {/* Body Content */}
                <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                  {/* Left Column: Descriptions & Deliverables */}
                  <div className="lg:col-span-8 space-y-3.5">
                    <p className="text-xs sm:text-sm text-(--text-primary) leading-relaxed font-normal">
                      {project.description}
                    </p>
                    <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed font-normal">
                      {project.longDescription}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-[11px] sm:text-xs font-semibold text-(--accent-peach) uppercase tracking-wider mb-2">
                        {t.projects.deliverablesTitle}
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.impact.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Spec Metrics & Stack */}
                  <div className="lg:col-span-4 flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border border-(--border-subtle) bg-(--bg-page)/40 text-xs min-w-0">
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="space-y-2.5 mb-4 sm:mb-5 min-w-0">
                        <div className="text-[10px] sm:text-[11px] font-semibold text-(--text-muted) uppercase tracking-wider">
                          {t.projects.archProfile}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="border-b lg:border-b border-(--border-subtle) pb-1.5 last:border-b-0 min-w-0">
                              <div className="text-[10px] sm:text-[11px] text-(--text-muted) truncate">{metric.label}</div>
                              <div className="text-xs font-medium text-(--text-primary) mt-0.5 break-words">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-(--text-muted) uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Layers className="w-3 h-3" />
                        <span>{t.projects.stackTitle}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <TechBadge key={tag} tag={tag} variant="chip" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
