"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Download, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface LightboxDoc {
  name: string;
  issuer: string;
  date: string;
  assetPath?: string;
  verifyUrl?: string;
  thumbnail?: string;
  credentialId?: string;
}

interface CertificateLightboxProps {
  doc: LightboxDoc | null;
  onClose: () => void;
}

export default function CertificateLightbox({ doc, onClose }: CertificateLightboxProps) {
  const { isRtl } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (doc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const isPdf = doc.assetPath?.toLowerCase().endsWith(".pdf");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-[11px] font-mono text-[var(--accent-peach)] font-semibold uppercase tracking-wider">
                {doc.date}
              </span>
            </div>
            <h3
              id="lightbox-title"
              className="text-base sm:text-lg font-bold text-[var(--text-primary)] truncate"
            >
              {doc.name}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              <bdi>{doc.issuer}</bdi>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)] transition-colors cursor-pointer shrink-0"
            aria-label="Close document preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Content Viewport */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-[var(--bg-page)]/60 flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
          {isPdf ? (
            <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 max-w-lg">
              {doc.thumbnail ? (
                <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[var(--border-strong)] bg-white">
                  <Image
                    src={doc.thumbnail}
                    alt={doc.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-[var(--accent-peach-light)] flex items-center justify-center text-[var(--accent-peach)]">
                  <FileText className="w-10 h-10" />
                </div>
              )}
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Official Verified PDF Document
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {doc.credentialId ? `Identifier: ${doc.credentialId}` : "Digitally authenticated certificate"}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={doc.assetPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2 !px-4 text-xs font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full PDF in New Tab</span>
                </a>
                <a
                  href={doc.assetPath}
                  download
                  className="btn-secondary !py-2 !px-4 text-xs font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Original Document</span>
                </a>
              </div>
            </div>
          ) : doc.assetPath ? (
            <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center">
              <img
                src={doc.assetPath}
                alt={doc.name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-md border border-[var(--border-subtle)]"
              />
            </div>
          ) : (
            <div className="text-center p-8 space-y-3">
              <FileText className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
              <p className="text-sm text-[var(--text-secondary)]">
                Online verified credential
              </p>
              {doc.verifyUrl && (
                <a
                  href={doc.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2 !px-4 text-xs font-semibold inline-flex"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Record Online</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between text-xs">
          <span className="text-[11px] text-[var(--text-muted)] truncate max-w-[240px] sm:max-w-md">
            {doc.credentialId && `Verification ID: ${doc.credentialId}`}
          </span>
          <div className="flex items-center gap-2">
            {doc.verifyUrl && (
              <a
                href={doc.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-peach)] hover:underline font-semibold"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-colors cursor-pointer text-xs font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

