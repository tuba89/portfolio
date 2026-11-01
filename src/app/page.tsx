import type { Metadata } from "next";
import PortfolioHome from "@/components/PortfolioHome";

export const metadata: Metadata = {
  title: "Assia Benkedia | AI & Full-Stack Developer",
  description:
    "Official Portfolio of Assia Benkedia - AI & Full-Stack Developer, Kaggle Silver Medalist (Deep Past Challenge, 33rd/2,674), and UoPeople High Honors CS Graduate. Building cross-platform mobile apps and production systems across Fintech, AI Agents, and Web3.",
  alternates: {
    canonical: "https://assiabenkedia.dev",
    languages: {
      en: "https://assiabenkedia.dev",
      fr: "https://assiabenkedia.dev/fr",
      ar: "https://assiabenkedia.dev/ar",
      "x-default": "https://assiabenkedia.dev",
    },
  },
  openGraph: {
    title: "Assia Benkedia | AI & Full-Stack Developer",
    description:
      "Kaggle Silver Medalist (33rd / 2,674), High Honors CS Graduate (GPA 3.97), and Full-Stack Developer at DizzitUp.",
    url: "https://assiabenkedia.dev",
    siteName: "Assia Benkedia Portfolio",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_AR"],
    type: "website",
  },
};

export default function Home() {
  return <PortfolioHome initialLang="en" />;
}
