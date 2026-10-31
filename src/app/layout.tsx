import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assia Benkedia | AI & Full-Stack Developer",
  description:
    "Official Portfolio of Assia Benkedia - AI & Full-Stack Developer, Kaggle Silver Medalist, and UoPeople High Honors CS Graduate.",
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
  ],
  authors: [{ name: "Assia Benkedia" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#dd6e42]/20 selection:text-[#dd6e42] font-sans">
        {children}
      </body>
    </html>
  );
}
