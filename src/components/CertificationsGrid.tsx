"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FileText, ShieldCheck, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CERTIFICATE_ASSETS } from "@/data/portfolioAssets";
import CertificateLightbox, { LightboxDoc } from "./CertificateLightbox";
import { IssuerChip } from "./TechBadge";

export default function CertificationsGrid() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDoc, setActiveDoc] = useState<LightboxDoc | null>(null);

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
    <section id="certifications" className="py-20 border-b border-(--border-subtle)">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.credentials.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-primary)">
            {t.credentials.title}
          </h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
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
                  ? "bg-(--accent-peach) text-white shadow-sm"
                  : "bg-(--bg-surface) text-(--text-secondary) border border-(--border-subtle) hover:border-(--accent-peach)"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, idx) => {
            const originalIdx = t.credentials.items.findIndex((c) => c.name === cert.name);
            const asset = CERTIFICATE_ASSETS[originalIdx >= 0 ? originalIdx : idx];

            return (
              <div
                key={idx}
                className="editorial-card p-5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* WebP Thumbnail with Lightbox Trigger */}
                  {asset?.thumbnail && (
                    <div
                      onClick={() =>
                        setActiveDoc({
                          name: cert.name,
                          issuer: cert.issuer,
                          date: cert.date,
                          assetPath: cert.assetPath,
                          verifyUrl: cert.verifyUrl,
                          thumbnail: asset.thumbnail,
                          credentialId: cert.credentialId,
                        })
                      }
                      className="relative w-full aspect-16/10 rounded-xl overflow-hidden mb-3.5 border border-(--border-subtle) bg-white/5 cursor-pointer group shadow-sm"
                    >
                      <Image
                        src={asset.thumbnail}
                        alt={cert.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium backdrop-blur-xs gap-1.5">
                        <Eye className="w-4 h-4" />
                        <span>View Document</span>
                      </div>
                    </div>
                  )}

                  {/* Top Bar with Category, Date, and Issuer Logo */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium editorial-badge">
                      {cert.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-(--text-muted) font-normal">
                        {cert.date}
                      </span>
                      {asset?.issuerLogo && (
                        <IssuerChip
                          issuerKey={asset.issuerLogo}
                          displayName={
                            asset.issuerLogo === "kaggle"
                              ? "Kaggle"
                              : asset.issuerLogo === "google"
                              ? "Google"
                              : asset.issuerLogo === "cisco"
                              ? "Cisco"
                              : asset.issuerLogo === "deloitte"
                              ? "Deloitte"
                              : asset.issuerLogo === "codecademy"
                              ? "Codecademy"
                              : asset.issuerLogo === "dizzitup"
                              ? "DizzitUp"
                              : asset.issuerLogo
                          }
                        />
                      )}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-(--text-primary) line-clamp-2 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-(--accent-peach) mb-2 font-normal">
                    <bdi>{cert.issuer}</bdi>
                  </p>

                  {cert.credentialId && (
                    <p className="text-[11px] font-mono text-(--text-muted) mb-3 truncate">
                      <bdi>{cert.credentialId}</bdi>
                    </p>
                  )}
                </div>

                <div className="pt-2.5 border-t border-(--border-subtle) flex items-center justify-between">
                  {cert.assetPath ? (
                    <button
                      onClick={() =>
                        setActiveDoc({
                          name: cert.name,
                          issuer: cert.issuer,
                          date: cert.date,
                          assetPath: cert.assetPath,
                          verifyUrl: cert.verifyUrl,
                          thumbnail: asset?.thumbnail,
                          credentialId: cert.credentialId,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-(--accent-peach) hover:underline font-medium cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.credentials.viewDoc}</span>
                    </button>
                  ) : cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-(--accent-peach) hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.credentials.verify}</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-(--text-muted)">
                      {t.credentials.verifiedFallback}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </section>
  );
}
