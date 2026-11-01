"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function TermsInner() {
  const { lang, isRtl } = useLanguage();

  const labels = {
    en: {
      back: "Back to Portfolio",
      lastUpdated: "Last updated: November 2026",
      title: "Terms of Use",
      badge: "Terms & Conditions",
    },
    fr: {
      back: "Retour au portfolio",
      lastUpdated: "Dernière mise à jour : Novembre 2026",
      title: "Conditions d'utilisation",
      badge: "Conditions générales",
    },
    ar: {
      back: "العودة إلى المعرض",
      lastUpdated: "آخر تحديث: نوفمبر 2026",
      title: "شروط الاستخدام",
      badge: "الشروط والأحكام",
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
            <FileText className="w-3.5 h-3.5" />
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
                <h2 className="text-lg font-bold text-(--text-primary)">١. شروط الاستخدام العامة</h2>
                <p>
                  مرحبًا بك في الموقع التعريفي والمهني لـ <strong>بن كدية اسيا</strong>. من خلال تصفح هذا الموقع أو التفاعل مع مساعد الذكاء الاصطناعي، فإنك توافق على الالتزام بشروط الاستخدام الموضحة هنا.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٢. حقوق الملكية الفكرية</h2>
                <p>
                  جميع المواد والنصوص والتصاميم المكتوبة في هذا الموقع هي ملك لـ <strong>بن كدية اسيا</strong> ما لم يُذكر خلاف ذلك. المشاريع مفتوحة المصدر تخضع لتراخيصها الخاصة المحددة على مستودعات GitHub، والعلامات التجارية للجهات الخارجية (مثل Kaggle وGoogle وDizzitUp) تظل ملكًا لأصحابها.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٣. استخدام مساعد الذكاء الاصطناعي</h2>
                <p>
                  تم توفير مساعد الذكاء الاصطناعي كأداة تفاعلية للإجابة عن الأسئلة المتعلقة بمهام اسيا ومشاريعها وخبراتها:
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>الإجابات مولدة بواسطة الذكاء الاصطناعي ومبنية على بيانات المعرض الرسمية.</li>
                  <li>يُحظر تمامًا استخدام المساعد لإجراء هجمات إلكترونية أو محاولات حقن الأوامر (Prompt Injection) أو إساءة استخدام حصة الاستخدام.</li>
                  <li>في حال وجود أي استفسار دقيق حول التوظيف أو العقود الرسمية، يرجى التواصل مباشرة عبر البريد الإلكتروني.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٤. الروابط الخارجية</h2>
                <p>
                  قد يحتوي الموقع على روابط إلى منصات ومواقع خارجية مثل Kaggle وLinkedIn وGitHub وMedium. نحن لسنا مسؤولين عن سياسات أو محتوى هذه المواقع الخارجية المستقلة.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">٥. التواصل</h2>
                <p>
                  لأي أسئلة أو استفسارات مهنية، يرجى مراسلتنا على:{" "}
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
                <h2 className="text-lg font-bold text-(--text-primary)">1. Acceptation des conditions</h2>
                <p>
                  Bienvenue sur le portfolio professionnel d&apos;<strong>Assia Benkedia</strong>. En accédant à ce site ou en interagissant avec l&apos;assistant IA, vous acceptez de respecter les présentes conditions d&apos;utilisation.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">2. Propriété intellectuelle</h2>
                <p>
                  Les contenus, textes, architectures de projets et éléments graphiques présentés sont la propriété d&apos;Assia Benkedia, sauf mention contraire. Les projets open source sont régis par leurs licences respectives sur GitHub. Les marques tierces (Kaggle, Google, DizzitUp) appartiennent à leurs propriétaires respectifs.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">3. Utilisation de l&apos;assistant IA</h2>
                <p>
                  L&apos;assistant IA est mis à disposition à des fins informatives pour explorer le parcours et les compétences techniques d&apos;Assia :
                </p>
                <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                  <li>Les réponses sont générées par intelligence artificielle et basées sur les données vérifiées du portfolio.</li>
                  <li>Toute tentative d&apos;abus de quota, d&apos;injection de requêtes (Prompt Injection) ou d&apos;utilisation malveillante est formellement prohibée.</li>
                  <li>Pour toute proposition formelle de recrutement ou de collaboration, veuillez contacter directement Assia par email.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">4. Liens vers des services tiers</h2>
                <p>
                  Ce site comprend des hyperliens menant vers des plateformes tierces (Kaggle, LinkedIn, GitHub, YouTube). Nous déclinons toute responsabilité quant aux contenus ou pratiques de confidentialité de ces sites externes.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-(--text-primary)">5. Contact</h2>
                <p>
                  Pour toute précision relative à ces conditions, écrivez à :{" "}
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
              <h2 className="text-lg font-bold text-(--text-primary)">1. Acceptance of Terms</h2>
              <p>
                Welcome to the professional portfolio of <strong>Assia Benkedia</strong>. By accessing this website or utilizing the interactive AI Copilot, you acknowledge and agree to comply with these Terms of Use.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-(--text-primary)">2. Intellectual Property Rights</h2>
              <p>
                All text, portfolio writeups, diagrams, and site design are the intellectual property of Assia Benkedia unless otherwise specified. Open-source code repositories are governed by their respective licenses on GitHub. Third-party brand names and trademarks (such as Kaggle, Google, DizzitUp) remain the property of their respective owners.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-(--text-primary)">3. AI Copilot Acceptable Use & Disclaimer</h2>
              <p>
                The integrated AI assistant is provided as an interactive tool to facilitate exploration of Assia&apos;s verified skills, case studies, and engineering background:
              </p>
              <ul className="list-disc list-inside space-y-1 text-(--text-muted)">
                <li>Outputs are generated using the Google Gemini API and are provided for general informational purposes.</li>
                <li>Users agree not to attempt automated denial-of-service, prompt injection attacks, quota abuse, or illegal activities via the assistant interface.</li>
                <li>Official hiring offers, contracts, and scheduling should always be confirmed directly via email or LinkedIn.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-(--text-primary)">4. External Links & Third-Party Platforms</h2>
              <p>
                This portfolio provides links to external services including Kaggle, GitHub, LinkedIn, Medium, and YouTube. Assia Benkedia does not endorse or bear responsibility for third-party terms, content, or privacy practices.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-(--text-primary)">5. Inquiries & Contact</h2>
              <p>
                If you have questions regarding these Terms, please reach out via{" "}
                <a
                  href="mailto:assiapro.ai@gmail.com"
                  className="text-(--accent-peach) font-medium hover:underline"
                >
                  assiapro.ai@gmail.com
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
            <Link
              href="/privacy"
              className="hover:text-(--accent-peach) transition-colors"
            >
              {lang === "ar" ? "سياسة الخصوصية" : lang === "fr" ? "Confidentialité" : "Privacy Policy"}
            </Link>
            <span>•</span>
            <span className="text-(--accent-peach) font-medium">
              {lang === "ar" ? "شروط الاستخدام" : lang === "fr" ? "Conditions" : "Terms of Use"}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function TermsContent() {
  return (
    <LanguageProvider>
      <TermsInner />
    </LanguageProvider>
  );
}
