"use client";

import { useState } from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { ExternalLink, FileText, ShieldCheck } from "lucide-react";

export default function CertificationsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ML", "Software & Cloud", "Networking & IT"];

  const filtered =
    selectedCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Professional Licenses & Validations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            Verified Certifications
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Industry credentials across enterprise data analytics, Cisco network engineering, and frontend systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[var(--accent-peach)] text-white shadow-sm"
                  : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-peach)]"
              }`}
            >
              {cat}
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
                    {cert.category}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] font-normal">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2 mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[var(--accent-peach)] mb-2 font-normal">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mb-3 truncate">
                    ID: {cert.credentialId}
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
                    <span>View Document</span>
                  </a>
                ) : cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-peach)] hover:underline font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify Record</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-[var(--text-muted)]">Verified Record</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
