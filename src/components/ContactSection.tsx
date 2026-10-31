"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold editorial-badge mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[var(--accent-peach)]" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Interested in collaborating on mobile applications, AI agents, or fintech platforms?
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I am open to high-impact software engineering roles, mobile architecture, autonomous AI agent systems, consulting, and fintech projects.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-primary"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="btn-secondary !p-3"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <span className="text-sm font-mono text-[var(--text-secondary)] hidden sm:inline">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              {/* Direct links */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--text-secondary)]">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-peach)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-peach)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Info Card */}
          <div className="lg:col-span-5">
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-3">
                Direct Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-page)] text-[var(--accent-peach)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">Email</div>
                    <div className="font-semibold text-[var(--text-primary)]">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-page)] text-[var(--accent-peach)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">Phone / WhatsApp</div>
                    <div className="font-semibold text-[var(--text-primary)]">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-page)] text-[var(--accent-peach)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">Location & Work Mode</div>
                    <div className="font-semibold text-[var(--text-primary)]">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] text-xs text-[var(--text-secondary)] leading-relaxed flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[var(--accent-peach)] shrink-0" />
                <span><strong>Response time:</strong> Usually within 24 hours. Fluent in English, French, and Arabic.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
