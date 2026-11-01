import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PortfolioHome from "@/components/PortfolioHome";
import { Language } from "@/data/translations";

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "fr" }, { lang: "en" }];
}

type Props = {
  params: Promise<{ lang: string }>;
};

const METADATA_BY_LANG: Record<
  Language,
  { title: string; description: string; locale: string }
> = {
  ar: {
    title: "بن كدية اسيا | مطورة أنظمة متكاملة وتطبيقات هواتف وذكاء اصطناعي",
    description:
      "الموقع التعريفي الرسمي لبن كدية اسيا - مطورة أنظمة متكاملة وتطبيقات هواتف ذكية وذكاء اصطناعي، حاصلة على ميدالية فضية في كاجل وتخرج بمرتبة الشرف العالية من جامعة الشعب.",
    locale: "ar_AR",
  },
  fr: {
    title: "Assia Benkedia | Développeuse Full-Stack & Mobile · IA & Fintech",
    description:
      "Portfolio officiel d'Assia Benkedia - Développeuse Full-Stack & Mobile, médaillée d'argent Kaggle (33e / 2 674) et diplômée avec Haute Mention de University of the People (GPA 3.97).",
    locale: "fr_FR",
  },
  en: {
    title: "Assia Benkedia | AI & Full-Stack Developer",
    description:
      "Official Portfolio of Assia Benkedia - AI & Full-Stack Developer, Kaggle Silver Medalist (Deep Past Challenge, 33rd/2,674), and UoPeople High Honors CS Graduate.",
    locale: "en_US",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "fr" && lang !== "en") {
    return {};
  }

  const meta = METADATA_BY_LANG[lang as Language];
  const canonicalUrl =
    lang === "en" ? "https://assiabenkedia.dev" : `https://assiabenkedia.dev/${lang}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://assiabenkedia.dev",
        fr: "https://assiabenkedia.dev/fr",
        ar: "https://assiabenkedia.dev/ar",
        "x-default": "https://assiabenkedia.dev",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "Assia Benkedia Portfolio",
      locale: meta.locale,
      alternateLocale: ["en_US", "fr_FR", "ar_AR"].filter((l) => l !== meta.locale),
      type: "website",
    },
  };
}

export default async function LocalizedPage({ params }: Props) {
  const { lang } = await params;

  if (lang !== "ar" && lang !== "fr" && lang !== "en") {
    notFound();
  }

  return <PortfolioHome initialLang={lang as Language} />;
}

