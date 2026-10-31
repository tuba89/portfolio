"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
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

const subscribeLang = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getLangSnapshot = (): Language => {
  const saved = localStorage.getItem("preferred_lang") as Language;
  if (saved === "en" || saved === "fr" || saved === "ar") {
    return saved;
  }
  return "en";
};

const getServerLangSnapshot = (): Language => "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getServerLangSnapshot);

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

  useEffect(() => {
    applyLanguage(lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    localStorage.setItem("preferred_lang", newLang);
    applyLanguage(newLang);
    window.dispatchEvent(new Event("storage"));
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
