"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function PrivacyInner() {
  const { lang, isRtl } = useLanguage();

  const labels = {
    en: {
      back: "Back to Portfolio",
      lastUpdated: "Last updated: November 2026",
      title: "Privacy Policy",
      badge: "Data Protection & Privacy",
    },
    fr: {
      back: "Retour au portfolio",
      lastUpdated: "Dernière mise à jour : Novembre 2026",
      title: "Politique de confidentialité",
      badge: "Protection des données",
    },
    ar: {
      back: "العودة إلى المعرض",
      lastUpdated: "آخر تحديث: نوفمبر 2026",
      title: "سياسة الخصوصية",
      badge: "حماية البيانات والخصوصية",
    },
  }[lang];

  return (
    <div className="min-h-screen flex flex-col bg-(--bg-page) text-(--text-primary)">
      {/* Top Header */}
      <header className="sticky top-0 z-40 glass-header border-b border-(--border-subtle)">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href={lang === "en" ? "/" : `/${lang}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-(--text-secondary) hover:text-(--accent-peach) transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            <span>{labels.back}</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        {/* Header Hero */}
        <div className="mb-10 pb-8 border-b border-(--border-subtle)">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-(--accent-peach-light) text-(--accent-peach) mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{labels.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-(--text-primary)">
            {labels.title}
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-(--text-muted)">
            {labels.lastUpdated} · assiabenkedia.dev
          </p>
        </div>

        {/* Localized Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed text-(--text-secondary)">
          {lang === "ar" ? (
            <div className="space-y-6 text-right" dir="rtl">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">١. نظرة عامة والالتزام بالخصوصية</h2>
                <p>
                  نحن نولي خصوصيتك أهمية قصوى. تم تصميم هذا الموقع التعريفي والمهني لـ <strong>بن كدية اسيا</strong> لعرض المشاريع والخبرات دون تتبع عدواني أو بيع للبيانات الشخصية أو تثبيت ملفات تعريف ارتباط إعلانية.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٢. مساعد الذكاء الاصطناعي ومعالجة البيانات</h2>
                <p>
                  يحتوي هذا الموقع على مساعد ذكاء اصطناعي تفاعلي مدعوم بواجهة برمجة تطبيقات Google Gemini API:
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>الرسائل والأسئلة التي ترسلها تُعالج فقط لتوليد إجابات دقيقة حول مهارات اسيا وخبراتها ومشاريعها.</li>
                  <li>يرجى <strong>عدم إرسال أي معلومات شخصية حساسة</strong> مثل كلمات المرور أو الأسرار المصرفية أو البيانات السرية.</li>
                  <li>لا يتم تخزين محادثاتك في قواعد بيانات تسويقية أو بيعها لأي أطراف ثالثة.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٣. التخزين المحلي (Local Storage)</h2>
                <p>
                  يستخدم الموقع التخزين المحلي لمتصفحك فقط لحفظ تفضيلاتك:
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>الوضع المفضل للعرض (الوضع الداكن أو الفاتح).</li>
                  <li>اللغة المختارة (العربية أو الإنجليزية أو الفرنسية).</li>
                </ul>
                <p className="text-xs text-(--text-muted)">
                  لا يحتوي الموقع على أدوات تتبع إعلانية من جهات خارجية أو شبكات إعلانات مجهولة.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٤. سجلات الخادم والأمان</h2>
                <p>
                  تستضيف منصة Vercel هذا الموقع وتقوم تلقائيًا بتسجيل معلومات تقنية محدودة (مثل عنوان IP، نوع المتصفح، وتوقيت الطلب) لأغراض أمان الشبكة ومكافحة الهجمات الإلكترونية وضمان استقرار الخدمة.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٥. التواصل والاستفسارات</h2>
                <p>
                  لأي استفسارات تتعلق بالخصوصية أو البيانات، يمكنك التواصل مباشرة عبر البريد الإلكتروني:{" "}
                  <a
                    href="mailto:assiapro.ai@gmail.com"
                    className="text-(--accent-peach) font-medium hover:underline"
                  >
                    assiapro.ai@gmail.com
                  </a>
                </p>
              </section>
            </div>
          ) : lang === "fr" ? (
            <div className="space-y-6">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">1. Vue d&apos;ensemble et engagement</h2>
                <p>
                  Le respect de votre vie privée est fondamental. Ce portfolio professionnel d&apos;<strong>Assia Benkedia</strong> est conçu pour présenter ses projets et compétences sans suivi publicitaire intrusif ni revente de données personnelles.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">2. Assistant IA et traitement des requêtes</h2>
                <p>
                  Ce site intègre un assistant IA interactif propulsé par l&apos;API Google Gemini :
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>Les messages saisis sont transmis de manière sécurisée afin de générer des réponses pertinentes sur les projets et le parcours d&apos;Assia.</li>
                  <li>Veuillez <strong>ne pas transmettre de données sensibles ou confidentielles</strong> (mots de passe, coordonnées bancaires).</li>
                  <li>Les conversations ne sont ni archivées dans des bases de données marketing ni cédées à des tiers.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">3. Stockage local (Local Storage)</h2>
                <p>
                  Ce site utilise uniquement le stockage local de votre navigateur pour mémoriser :
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>Votre préférence de thème (mode clair ou sombre).</li>
                  <li>Votre langue sélectionnée (français, anglais ou arabe).</li>
                </ul>
                <p className="text-xs text-(--text-muted)">
                  Aucun cookie de ciblage commercial tiers n&apos;est utilisé.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">4. Hébergement et sécurité réseau</h2>
                <p>
                  L&apos;infrastructure d&apos;hébergement (Vercel) enregistre des données techniques usuelles (adresse IP, horodatage, agent utilisateur) à des fins de sécurité réseau, de prévention contre les attaques DDoS et de surveillance de la disponibilité du service.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">5. Contact</h2>
                <p>
                  Pour toute question concernant cette politique ou vos données, contactez directement Assia à :{" "}
                  <a
                    href="mailto:assiapro.ai@gmail.com"
                    className="text-(--accent-peach) font-medium hover:underline"
                  >
                    assiapro.ai@gmail.com
                  </a>
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">1. Overview & Commitment</h2>
                <p>
                  Your privacy is respected. This professional engineering portfolio for <strong>Assia Benkedia</strong> is designed to showcase projects, research, and technical credentials without intrusive tracking, third-party advertising cookies, or data selling.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">2. AI Copilot & Data Processing Notice</h2>
                <p>
                  This portfolio features an interactive AI assistant powered by the Google Gemini API:
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>Visitor questions are transmitted securely to generate helpful answers grounded in Assia&apos;s verified portfolio information.</li>
                  <li>Please <strong>do not submit sensitive personal information</strong> (such as passwords, financial secrets, or proprietary internal keys).</li>
                  <li>Chat sessions are not harvested, stored in marketing databases, or used for commercial profiling.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">3. Local Storage Preferences</h2>
                <p>
                  We use browser local storage solely to retain your UI experience:
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>Theme selection (Dark Mode or Editorial Light Mode).</li>
                  <li>Language selection (English, Français, or العربية).</li>
                </ul>
                <p className="text-xs text-(--text-muted)">
                  No tracking cookies from advertising networks are embedded.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">4. Hosting & Infrastructure Logs</h2>
                <p>
                  The site is hosted globally on Vercel. Standard network logs (such as IP addresses, user-agent strings, and request timestamps) are processed transiently for DDoS defense, rate limiting, and infrastructure uptime.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">5. Contact & Data Inquiries</h2>
                <p>
                  If you have questions regarding this privacy statement, you can reach out directly via email to{" "}
                  <a
                    href="mailto:assiapro.ai@gmail.com"
                    className="text-(--accent-peach) font-medium hover:underline"
                  >
                    assiapro.ai@gmail.com
                  </a>{" "}
                  or via{" "}
                  <a
                    href="https://www.linkedin.com/in/assia-benkedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--accent-peach) font-medium hover:underline"
                  >
                    LinkedIn
                  </a>.
                </p>
              </section>
            </div>
          )}
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-(--border-subtle) py-6 text-center text-xs text-(--text-muted)">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Assia Benkedia · assiabenkedia.dev</span>
          <div className="flex items-center gap-4">
            <span className="text-(--accent-peach) font-medium">
              {lang === "ar" ? "سياسة الخصوصية" : lang === "fr" ? "Confidentialité" : "Privacy Policy"}
            </span>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-(--accent-peach) transition-colors"
            >
              {lang === "ar" ? "شروط الاستخدام" : lang === "fr" ? "Conditions" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PrivacyContent() {
  return (
    <LanguageProvider>
      <PrivacyInner />
    </LanguageProvider>
  );
}
