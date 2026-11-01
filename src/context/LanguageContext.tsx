"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, TRANSLATIONS } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: TRANSLATIONS.en,
  isRtl: false,
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(() => {
    if (initialLang) return initialLang;
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/ar" || path.startsWith("/ar/")) return "ar";
      if (path === "/fr" || path.startsWith("/fr/")) return "fr";
      if (path === "/en" || path.startsWith("/en/")) return "en";
      const saved = localStorage.getItem("preferred_lang") as Language;
      if (saved === "en" || saved === "fr" || saved === "ar") {
        return saved;
      }
    }
    return "en";
  });

  const applyLanguage = (newLang: Language) => {
    if (typeof document === "undefined") return;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (newLang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.title = "بن كدية اسيا | مطورة أنظمة متكاملة وتطبيقات هواتف وذكاء اصطناعي";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "الموقع التعريفي الرسمي لبن كدية اسيا - مطورة أنظمة متكاملة وتطبيقات هواتف ذكية وذكاء اصطناعي، حاصلة على ميدالية فضية في كاجل وتخرج بمرتبة الشرف العالية في علوم الحاسوب."
        );
      }
    } else if (newLang === "fr") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "fr");
      document.title = "Assia Benkedia | Développeuse Full-Stack & Mobile · IA & Fintech";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Portfolio officiel d'Assia Benkedia - Développeuse Full-Stack & Mobile, médaillée d'argent Kaggle et diplômée avec Haute Mention de University of the People."
        );
      }
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      document.title = "Assia Benkedia | Full-Stack & Mobile Developer · AI & Fintech";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Official Portfolio of Assia Benkedia - Full-Stack & Mobile Developer, Kaggle Silver Medalist, and UoPeople High Honors CS Graduate."
        );
      }
    }
  };

  useEffect(() => {
    applyLanguage(lang);
    if (initialLang) {
      try {
        localStorage.setItem("preferred_lang", initialLang);
      } catch {
        // ignore localStorage access errors
      }
    }
  }, [lang, initialLang]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/ar" || path.startsWith("/ar/")) {
        setLangState("ar");
        applyLanguage("ar");
      } else if (path === "/fr" || path.startsWith("/fr/")) {
        setLangState("fr");
        applyLanguage("fr");
      } else if (path === "/en" || path.startsWith("/en/")) {
        setLangState("en");
        applyLanguage("en");
      } else if (path === "/") {
        const saved = localStorage.getItem("preferred_lang") as Language;
        const fallback = saved === "en" || saved === "fr" || saved === "ar" ? saved : "en";
        setLangState(fallback);
        applyLanguage(fallback);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem("preferred_lang", newLang);
    } catch {
      // ignore
    }
    setLangState(newLang);
    applyLanguage(newLang);

    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (
        currentPath === "/" ||
        currentPath === "/en" ||
        currentPath === "/fr" ||
        currentPath === "/ar"
      ) {
        const targetPath = newLang === "en" ? "/" : `/${newLang}`;
        if (currentPath !== targetPath) {
          window.history.pushState(null, "", targetPath);
        }
      }
    }
  };

  const t = TRANSLATIONS[lang];
  const isRtl = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
