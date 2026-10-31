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
  metadataBase: new URL("https://assiabenkedia.com"),
  title: "Assia Benkedia | AI & Full-Stack Developer",
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
    "Next.js",
    "TypeScript",
    "Fintech",
    "EVM Smart Contracts",
    "Prisma",
    "Coolify",
  ],
  authors: [{ name: "Assia Benkedia" }],
  openGraph: {
    title: "Assia Benkedia | AI & Full-Stack Developer",
    description:
      "Kaggle Silver Medalist (33rd / 2,674), High Honors CS Graduate (GPA 3.97), and Full-Stack Developer at DizzitUp.",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${ibmArabic.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#dd6e42]/20 selection:text-[#dd6e42] font-sans">
        {children}
      </body>
    </html>
  );
}
