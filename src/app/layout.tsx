import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assia Benkedia | AI & Full-Stack Developer",
  description:
    "Official Portfolio of Assia Benkedia — AI & Full-Stack Developer, Kaggle Silver Medalist (Deep Past Challenge, 33rd/2,674), and UoPeople High Honors CS Graduate. Building production systems across Fintech, AI Agents, and Web3.",
  keywords: [
    "Assia Benkedia",
    "Full-Stack Developer",
    "AI Engineer",
    "Agentic AI",
    "Kaggle Silver Medalist",
    "DizzitUp",
    "Nibras Legal Hub",
    "LIVORA",
    "Next.js",
    "TypeScript",
    "Fintech",
    "Web3",
  ],
  authors: [{ name: "Assia Benkedia" }],
  openGraph: {
    title: "Assia Benkedia | AI & Full-Stack Developer",
    description:
      "Kaggle Silver Medalist (33rd / 2,674), High Honors CS Graduate (GPA 3.97), and Full-Stack Developer at DizzitUp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#dd6e42]/20 selection:text-[#dd6e42]">
        {children}
      </body>
    </html>
  );
}
