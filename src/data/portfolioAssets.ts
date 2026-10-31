import { Language } from "./translations";

export interface ProjectAssetData {
  coverImage?: string;
  mobileImage?: string;
  diagramSvg?: string;
  isMobileMockup?: boolean;
  alt: Record<Language, string>;
}

export const FEATURED_PROJECT_ASSETS: Record<string, ProjectAssetData> = {
  dizzitup: {
    coverImage: "/images/projects/dizzitup-desktop.webp",
    mobileImage: "/images/projects/dizzitup-mobile.webp",
    alt: {
      en: "DizzitUp live production pan-African marketplace platform interface",
      fr: "Interface de production de la marketplace panafricaine DizzitUp",
      ar: "واجهة منصة وسوق التجارة الإلكترونية لمنصة DizzitUp قيد الإنتاج",
    },
  },
  "cross-platform-mobile-marketplace": {
    isMobileMockup: true,
    coverImage: "/images/mobile-screens/mobile-home-wallet.webp",
    alt: {
      en: "Cross-platform React Native Expo mobile marketplace running in native device frame",
      fr: "Application mobile marketplace React Native Expo dans un cadre mobile",
      ar: "تطبيق سوق التجارة الإلكترونية بالهواتف الذكية React Native Expo ضمن إطار هاتف",
    },
  },
  livora: {
    diagramSvg: "/images/diagrams/livora-architecture.svg",
    coverImage: "/images/projects/livora-desktop.webp",
    alt: {
      en: "LIVORA autonomous multi-agent AI orchestration architecture diagram",
      fr: "Diagramme d'architecture de l'orchestration multi-agents autonomes LIVORA",
      ar: "مخطط معمارية وكلاء الذكاء الاصطناعي المستقلين في نظام LIVORA",
    },
  },
  "deep-past-challenge": {
    diagramSvg: "/images/diagrams/akkadian-t5-pipeline.svg",
    coverImage: "/images/certificates/deep-past-challenge.webp",
    alt: {
      en: "Deep Past Challenge fine-tuned T5 cuneiform translation pipeline diagram",
      fr: "Diagramme du pipeline de traduction de l'akkadien cunéiforme avec T5",
      ar: "مخطط مسار تدريب نماذج T5 لترجمة النصوص المسمارية الأكادية في مسابقة Kaggle",
    },
  },
  "evm-smart-contracts": {
    diagramSvg: "/images/diagrams/smart-contracts-architecture.svg",
    alt: {
      en: "EVM smart contracts multi-chain escrow and decentralized settlement architecture",
      fr: "Diagramme d'architecture des smart contracts EVM et du séquestre multi-chaînes",
      ar: "مخطط معمارية عقود EVM الذكية وحسابات الضمان والتسوية اللامركزية",
    },
  },
  "researchforge-ai": {
    coverImage: "/images/projects/researchforge-desktop.webp",
    alt: {
      en: "ResearchForge-AI academic paper discovery and proposal drafting interface",
      fr: "Interface de la plateforme de recherche académique ResearchForge-AI",
      ar: "واجهة منصة ResearchForge-AI لتسريع الأبحاث وتوليد مقترحات المشاريع",
    },
  },
  "oncoassist-medibridge": {
    coverImage: "/images/projects/medibridge-desktop.webp",
    alt: {
      en: "OncoAssist & MediBridge-AI clinical decision support system notebook on Kaggle",
      fr: "Carnet de support décisionnel clinique OncoAssist sur Kaggle",
      ar: "واجهة نظام دعم القرار السريري OncoAssist و MediBridge-AI على منصة Kaggle",
    },
  },
};

export const OTHER_PROJECT_ASSETS: Record<string, { coverImage?: string; alt: Record<Language, string> }> = {
  "next-weather-app": {
    coverImage: "/images/projects/weather-desktop.webp",
    alt: {
      en: "Next.js modern animated weather application interface",
      fr: "Interface de l'application météo animée Next.js",
      ar: "واجهة تطبيق الطقس التفاعلي الحديث بـ Next.js",
    },
  },
  "guardian-ai": {
    alt: {
      en: "GuardianAI computer vision security alerting architecture",
      fr: "Architecture de surveillance et d'alerte sécurité GuardianAI",
      ar: "معمارية نظام الحماية ورصد الحوادث الذكي GuardianAI",
    },
  },
  bloodlink: {
    alt: {
      en: "BloodLink emergency blood donor platform architecture",
      fr: "Plateforme de coordination des donneurs de sang BloodLink",
      ar: "منصة شبكة التبرع بالدم في حالات الطوارئ BloodLink",
    },
  },
};

export interface CertificateAssetInfo {
  thumbnail: string;
  issuerLogo: "kaggle" | "google" | "cisco" | "deloitte" | "codecademy" | "dizzitup";
}

export const CERTIFICATE_ASSETS: Record<number, CertificateAssetInfo> = {
  0: { thumbnail: "/images/certificates/deep-past-challenge.webp", issuerLogo: "kaggle" },
  1: { thumbnail: "/images/projects/medibridge-desktop.webp", issuerLogo: "google" },
  2: { thumbnail: "/images/certificates/dizzitup-internship.webp", issuerLogo: "dizzitup" },
  3: { thumbnail: "/images/certificates/deloitte-data-analytics.webp", issuerLogo: "deloitte" },
  4: { thumbnail: "/images/certificates/ccna-connecting-networks.webp", issuerLogo: "cisco" },
  5: { thumbnail: "/images/certificates/ccna-scaling-networks.webp", issuerLogo: "cisco" },
  6: { thumbnail: "/images/certificates/ccna-routing-switching.webp", issuerLogo: "cisco" },
  7: { thumbnail: "/images/certificates/ccna-intro-networks.webp", issuerLogo: "cisco" },
  8: { thumbnail: "/images/certificates/codecademy-javascript.webp", issuerLogo: "codecademy" },
  9: { thumbnail: "/images/certificates/codecademy-css.webp", issuerLogo: "codecademy" },
  10: { thumbnail: "/images/certificates/codecademy-html.webp", issuerLogo: "codecademy" },
};

export const EDUCATION_ASSETS: Record<number, { thumbnail: string; logo: "uopeople" | "oran" }> = {
  0: { thumbnail: "/images/certificates/uopeople-degree.webp", logo: "uopeople" },
  1: { thumbnail: "/images/certificates/graduation-diploma.webp", logo: "oran" },
};

export const EXPERIENCE_LOGOS: Record<number, "dizzitup" | "virtual-internships" | "notarial"> = {
  0: "dizzitup",
  1: "virtual-internships",
  2: "notarial",
};

