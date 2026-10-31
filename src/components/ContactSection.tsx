"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { ColoredGithubIcon, ColoredLinkedinIcon, ColoredKaggleIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium editorial-badge mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
              <span>{t.contact.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg font-normal">
              {t.contact.desc}
            </p>

            <div className="mt-6 sm:mt-7 space-y-4">
              {/* Email CTA with safe wrapping */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-primary !py-2 !px-4 text-xs font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.contact.sendEmail}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="btn-secondary !p-2 rounded-lg cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <span className="text-xs font-mono text-[var(--text-secondary)] break-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              {/* Direct links */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-secondary)]">
                <a
                  href={PERSONAL_INFO.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-peach)] transition-colors"
                >
                  <ColoredKaggleIcon size={18} />
                  <span>Kaggle (@assiaben)</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-peach)] transition-colors"
                >
                  <ColoredLinkedinIcon size={18} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-peach)] transition-colors"
                >
                  <ColoredGithubIcon size={18} />
                  <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="editorial-card p-5 sm:p-6 space-y-4 sm:space-y-5">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2.5">
                {t.contact.detailsTitle}
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[var(--bg-page)] text-[var(--accent-peach)] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)]">{t.contact.emailLabel}</div>
                    <div className="font-medium text-[var(--text-primary)] break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[var(--bg-page)] text-[var(--accent-peach)] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)]">{t.contact.phoneLabel}</div>
                    <div className="font-medium text-[var(--text-primary)]">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[var(--bg-page)] text-[var(--accent-peach)] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)]">{t.contact.locationLabel}</div>
                    <div className="font-medium text-[var(--text-primary)]">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[11px] text-[var(--text-secondary)] leading-relaxed flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-peach)] shrink-0" />
                <span>{t.contact.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
