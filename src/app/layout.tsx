import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://assiabenkedia.dev"),
  title: {
    default: "Assia Benkedia | AI & Full-Stack Developer",
    template: "%s | Assia Benkedia",
  },
  description:
    "Official Portfolio of Assia Benkedia - AI & Full-Stack Developer, Kaggle Silver Medalist (Deep Past Challenge, 33rd/2,674), and UoPeople High Honors CS Graduate. Building cross-platform mobile apps and production systems across Fintech, AI Agents, and Web3.",
  keywords: [
    "Assia Benkedia",
    "Full-Stack Developer",
    "React Native",
    "Expo",
    "Mobile Developer",
    "AI Engineer",
    "Agentic AI",
    "Kaggle Silver Medalist",
    "DizzitUp",
    "LIVORA",
    "OncoAssist",
    "Next.js",
    "TypeScript",
    "Fintech",
    "EVM Smart Contracts",
    "Prisma",
    "Coolify",
  ],
  authors: [{ name: "Assia Benkedia", url: "https://assiabenkedia.dev" }],
  creator: "Assia Benkedia",
  publisher: "Assia Benkedia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_AR"],
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Assia Benkedia - Full-Stack, Mobile & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assia Benkedia | AI & Full-Stack Developer",
    description: "Kaggle Silver Medalist, CS High Honors, Full-Stack & Mobile Developer.",
    images: ["/og-image.webp"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Assia Benkedia",
  alternateName: ["بن كدية اسيا", "Assia Ben Kedia"],
  url: "https://assiabenkedia.dev",
  image: "https://assiabenkedia.dev/avatar.jpg",
  jobTitle: "Full-Stack, Mobile & AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "DizzitUp",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of the People",
  },
  award: [
    "Kaggle Silver Medalist - Deep Past Challenge (33rd / 2,674 international teams)",
    "Google Gen AI Intensive Capstone Honourable Mention - OncoAssist",
  ],
  sameAs: [
    "https://www.linkedin.com/in/assia-benkedia",
    "https://github.com/tuba89",
    "https://www.kaggle.com/assiaben",
    "https://medium.com/@iiiassia.beniii",
  ],
  knowsAbout: [
    "React Native",
    "Expo",
    "Full-Stack Development",
    "Next.js",
    "Agentic AI",
    "Gemini API",
    "TypeScript",
    "Fintech",
    "EVM Smart Contracts",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable} ${ibmArabic.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");if(s==="light"){document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}else{document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#dd6e42]/20 selection:text-[#dd6e42] font-sans">
        {children}
      </body>
    </html>
  );
}
