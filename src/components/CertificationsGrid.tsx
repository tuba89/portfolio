"use client";

import { useState } from "react";
import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificationsGrid() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { key: "All", label: t.credentials.all },
    { key: "AI & ML", label: t.credentials.aiMl },
    { key: "Software & Cloud", label: t.credentials.softwareCloud },
    { key: "Networking & IT", label: t.credentials.networkingIt },
  ];

  const filtered =
    selectedCategory === "All"
      ? t.credentials.items
      : t.credentials.items.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.credentials.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            {t.credentials.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t.credentials.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-[var(--accent-peach)] text-white shadow-sm"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-peach)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              className="editorial-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium editorial-badge">
                    {cert.categoryLabel}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] font-normal">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2 mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[var(--accent-peach)] mb-2 font-normal">
                  <bdi>{cert.issuer}</bdi>
                </p>

                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mb-3 truncate">
                    <bdi>{cert.credentialId}</bdi>
                  </p>
                )}
              </div>

              <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                {cert.assetPath ? (
                  <a
                    href={cert.assetPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-peach)] hover:underline font-medium"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t.credentials.viewDoc}</span>
                  </a>
                ) : cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-peach)] hover:underline font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.credentials.verify}</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-[var(--text-muted)]">
                    {t.credentials.verifiedFallback}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
