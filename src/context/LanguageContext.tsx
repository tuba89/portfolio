"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
      setLangState(saved);
      applyLanguage(saved);
    } else {
      applyLanguage("en");
    }
  }, []);

  const applyLanguage = (newLang: Language) => {
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (newLang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.title = "بن كدية اسيا | مطورة أنظمة متكاملة وتطبيقات هواتف وذكاء اصطناعي";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "الموقع التعريفي الرسمي لبن كدية اسيا - مطورة أنظمة متكاملة وتطبيقات هواتف ذكية وذكاء اصطناعي، حاصلة على ميدالية فضية في Kaggle وتخرج بمرتبة الشرف العالية في علوم الحاسوب."
        );
      }
    } else if (newLang === "fr") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "fr");
      document.title = "Assia Benkedia | Développeuse Full-Stack & Mobile · IA & Fintech";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Portfolio officiel d'Assia Benkedia - Développeuse Full-Stack & Mobile, médaillée d'argent Kaggle et diplômée avec Haute Mention en informatique."
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

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
    applyLanguage(newLang);
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
