"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import KaggleAndHonors from "@/components/KaggleAndHonors";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import SkillsSection from "@/components/SkillsSection";
import OtherProjects from "@/components/OtherProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import { Language } from "@/data/translations";

export default function PortfolioHome({ initialLang }: { initialLang?: Language }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <HeroSection />
          <FeaturedProjects />
          <KaggleAndHonors />
          <ExperienceTimeline />
          <EducationSection />
          <CertificationsGrid />
          <SkillsSection />
          <OtherProjects />
          <ContactSection />
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </LanguageProvider>
  );
}

