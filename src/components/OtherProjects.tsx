"use client";

import Image from "next/image";
import { FolderGit2, Shield, HeartHandshake, CloudSun } from "lucide-react";
import { ColoredGithubIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";
import { OTHER_PROJECT_ASSETS } from "@/data/portfolioAssets";
import TechBadge from "./TechBadge";

export default function OtherProjects() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 border-b border-(--border-subtle)">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-(--accent-peach)" />
            <span>{t.otherProjects.badge}</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-(--text-primary)">
            {t.otherProjects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.otherProjects.items.map((proj) => {
            const assets = OTHER_PROJECT_ASSETS[proj.id];
            const altText = assets ? assets.alt[lang] || assets.alt.en : proj.title;

            return (
              <div
                key={proj.id}
                className="editorial-card p-5 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Cover (Real Screenshot or Branded Gradient Cover) */}
                  <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden mb-4 border border-(--border-subtle) bg-(--bg-page)">
                    {assets?.coverImage ? (
                      <Image
                        src={assets.coverImage}
                        alt={altText}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      /* Branded Gradient Fallback Cover with Project Icon */
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-linear-to-br from-(--bg-surface) via-(--bg-surface-elevated) to-(--accent-peach-light)">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-(--text-muted) font-semibold uppercase">
                            {proj.category}
                          </span>
                          {proj.id === "guardian-ai" ? (
                            <Shield className="w-5 h-5 text-(--accent-peach)" />
                          ) : proj.id === "bloodlink" ? (
                            <HeartHandshake className="w-5 h-5 text-rose-500" />
                          ) : (
                            <CloudSun className="w-5 h-5 text-amber-500" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-(--text-primary)">
                            {proj.title}
                          </div>
                          <div className="text-[11px] text-(--text-muted) truncate">
                            {proj.subtitle}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-(--accent-peach) font-semibold uppercase">
                      {proj.category}
                    </span>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded border border-(--border-subtle) text-(--text-secondary) hover:border-(--accent-peach) hover:scale-105 transition-all"
                        aria-label="View on GitHub"
                      >
                        <ColoredGithubIcon size={16} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-(--text-primary) mb-1">
                    <bdi>{proj.title}</bdi>
                  </h3>
                  <p className="text-xs font-medium text-(--text-secondary) mb-2">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-(--text-secondary) leading-relaxed mb-4 font-normal">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-(--border-subtle)">
                  {proj.tags.map((tag) => (
                    <TechBadge key={tag} tag={tag} variant="chip" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
