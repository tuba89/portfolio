"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Wallet,
  Receipt,
  Coins,
  Store,
  Layers,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface ScreenDef {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  src: string;
  originalPng: string;
  labels: Record<
    Language,
    {
      tab: string;
      badge: string;
      title: string;
      desc: string;
    }
  >;
}

const SCREENS: ScreenDef[] = [
  {
    id: "wallet",
    icon: Wallet,
    src: "/assets/mobileApp/1-HomeScreen.webp",
    originalPng: "/assets/mobileApp/1-HomeScreen.png",
    labels: {
      en: {
        tab: "Wallet & POS",
        badge: "57.8 DZY",
        title: "Business Wallet & In-Store POS",
        desc: "Multi-currency balances (DZY, DZD, USD), in-store Point of Sale (POS) checkouts, and instant cash-out.",
      },
      fr: {
        tab: "Portefeuille & TPE",
        badge: "57.8 DZY",
        title: "Portefeuille d'affaires & TPE",
        desc: "Soldes multidevises (DZY, DZD, USD), terminaux de paiement commerçants (TPE) et retraits immédiats.",
      },
      ar: {
        tab: "المحفظة ونقاط البيع",
        badge: "57.8 DZY",
        title: "محفظة الأعمال ونقاط البيع",
        desc: "أرصدة متعددة العملات (DZY، DZD، USD)، نقاط البيع المباشرة للتجار (POS) والسحب النقدي الفوري.",
      },
    },
  },
  {
    id: "marketplace",
    icon: Store,
    src: "/assets/mobileApp/3-StoresScreen.webp",
    originalPng: "/assets/mobileApp/3-StoresScreen.png",
    labels: {
      en: {
        tab: "Marketplace",
        badge: "54 Countries",
        title: "Pan-African Merchant Marketplace",
        desc: "E-commerce directory featuring verified local stores across Ethiopia, Algeria, Togo, and Benin.",
      },
      fr: {
        tab: "Marketplace",
        badge: "54 Pays",
        title: "Marketplace panafricaine",
        desc: "Annuaire e-commerce regroupant des commerces vérifiés en Éthiopie, Algérie, Togo et Bénin.",
      },
      ar: {
        tab: "المتجر والأسواق",
        badge: "54 دولة",
        title: "سوق المتاجر لعموم إفريقيا",
        desc: "دليل تجاري شامل يربط المتاجر المعتمدة في الجزائر وإثيوبيا وتوغو وبنين.",
      },
    },
  },
  {
    id: "crypto",
    icon: Coins,
    src: "/assets/mobileApp/5-Tokens.webp",
    originalPng: "/assets/mobileApp/5-Tokens.png",
    labels: {
      en: {
        tab: "Crypto & Tokens",
        badge: "Multi-Chain",
        title: "Multi-Chain Token Assets",
        desc: "Unified token balances supporting USDT (4 networks), USDC (5 networks), POL, BNB, DAI, ETH, and SOL.",
      },
      fr: {
        tab: "Crypto & Tokens",
        badge: "Multi-Chaînes",
        title: "Actifs cryptos multi-chaînes",
        desc: "Gestion unifiée des soldes USDT (4 réseaux), USDC (5 réseaux), POL, BNB, DAI, ETH et SOL.",
      },
      ar: {
        tab: "العملات الرقمية",
        badge: "متعدد الشبكات",
        title: "أصول وتوكنات العملات المشفرة",
        desc: "إدارة شاملة لأرصدة USDT وUSDC وPOL وBNB وDAI وETH وSOL عبر أكثر من 5 شبكات بلوكتشين.",
      },
    },
  },
  {
    id: "web3",
    icon: Layers,
    src: "/assets/mobileApp/4-Adresses.webp",
    originalPng: "/assets/mobileApp/4-Adresses.png",
    labels: {
      en: {
        tab: "Web3 Addresses",
        badge: "EVM + Solana",
        title: "Non-Custodial Multi-Chain Addresses",
        desc: "Direct Polygon, Base, and BSC (EVM) deposit addresses alongside native Solana and DZY Index tracking.",
      },
      fr: {
        tab: "Adresses Web3",
        badge: "EVM + Solana",
        title: "Adresses multi-chaînes non-hébergées",
        desc: "Adresses de dépôt directes Polygon, Base et BSC (EVM) avec support natif de Solana et de l'indice DZY.",
      },
      ar: {
        tab: "عناوين Web3",
        badge: "EVM وسولانا",
        title: "عناوين المحافظ اللامركزية",
        desc: "عناوين إيداع مباشرة على شبكات Polygon وBase وBSC مع دعم شبكة Solana وتتبع مؤشر DZY.",
      },
    },
  },
  {
    id: "services",
    icon: Receipt,
    src: "/assets/mobileApp/2-ContactScreen.webp",
    originalPng: "/assets/mobileApp/2-ContactScreen.png",
    labels: {
      en: {
        tab: "Bills & Services",
        badge: "Utilities",
        title: "Cross-Border Utilities & Beneficiaries",
        desc: "Mobile airtime top-ups, utility bill payments, gift cards, and cross-border beneficiary management.",
      },
      fr: {
        tab: "Factures & Services",
        badge: "Utilités",
        title: "Services transfrontaliers & Bénéficiaires",
        desc: "Recharges mobiles, paiement de factures locales, cartes cadeaux et gestion des bénéficiaires.",
      },
      ar: {
        tab: "الفواتير والخدمات",
        badge: "خدمات ومدفوعات",
        title: "دفع الفواتير والمستفيدين",
        desc: "شحن رصيد الهواتف، تسديد الفواتير الخدمية، بطاقات الهدايا الرقمية وإدارة المستفيدين عبر الحدود.",
      },
    },
  },
  {
    id: "onboarding",
    icon: ShieldCheck,
    src: "/assets/mobileApp/0-login.webp",
    originalPng: "/assets/mobileApp/0-login.png",
    labels: {
      en: {
        tab: "Onboarding",
        badge: "54 Nations",
        title: "Authentication & Pan-African Reach",
        desc: "Biometric and phone/email onboarding designed for high conversion across all 54 African countries.",
      },
      fr: {
        tab: "Connexion",
        badge: "54 Nations",
        title: "Authentification & Portée panafricaine",
        desc: "Connexion biométrique, email et téléphone conçue pour une adoption fluide dans 54 pays africains.",
      },
      ar: {
        tab: "تسجيل الدخول",
        badge: "54 دولة",
        title: "تسجيل الدخول والانتشار الإفريقي",
        desc: "واجهة دخول بالبريد الإلكتروني ورقم الهاتف مهيأة لتسهيل انضمام المستخدمين في 54 دولة إفريقية.",
      },
    },
  },
];

export default function PhoneMockup({ className = "" }: { className?: string }) {
  const { lang, isRtl } = useLanguage();
  const [activeScreen, setActiveScreen] = useState<string>("wallet");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentIndex = SCREENS.findIndex((s) => s.id === activeScreen);
  const current = currentIndex !== -1 ? SCREENS[currentIndex] : SCREENS[0];
  const localized = current.labels[lang] || current.labels.en;

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % SCREENS.length;
    setActiveScreen(SCREENS[nextIdx].id);
  };

  const goToPrev = () => {
    const prevIdx = (currentIndex - 1 + SCREENS.length) % SCREENS.length;
    setActiveScreen(SCREENS[prevIdx].id);
  };

  return (
    <div className={`flex flex-col items-center gap-5 w-full ${className}`}>
      {/* Screen Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-(--bg-surface) border border-(--border-subtle) max-w-full shadow-xs">
        {SCREENS.map((s) => {
          const Icon = s.icon;
          const isActive = s.id === activeScreen;
          const sLabel = (s.labels[lang] || s.labels.en).tab;
          return (
            <button
              key={s.id}
              onClick={() => setActiveScreen(s.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-(--accent-peach) text-white shadow-sm scale-102"
                  : "text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-page)"
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{sLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Device Showcase Card */}
      <div className="relative flex items-center justify-center w-full max-w-md mx-auto group">
        {/* Navigation Arrows for fast cycling */}
        <button
          onClick={goToPrev}
          aria-label="Previous mobile screen"
          className={`absolute ${
            isRtl ? "-right-3 sm:-right-6" : "-left-3 sm:-left-6"
          } z-20 p-2 sm:p-2.5 rounded-full bg-(--bg-surface-elevated)/90 hover:bg-(--accent-peach) text-(--text-secondary) hover:text-white border border-(--border-strong) shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95`}
        >
          <ChevronLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${isRtl ? "rotate-180" : ""}`} />
        </button>

        {/* 3D Realistic Phone Showcase Frame */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative mx-auto w-58 xs:w-66 sm:w-76 md:w-82 max-w-[85vw] aspect-[1284/2778] rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] bg-[#10171C] border border-(--border-subtle) cursor-zoom-in group/phone transition-transform duration-300 hover:scale-[1.015]"
          title="Click to zoom and view full resolution screenshot"
        >
          <Image
            key={current.id}
            src={current.src}
            alt={`DizzitUp React Native App: ${localized.title}`}
            fill
            sizes="(max-width: 640px) 280px, 350px"
            className="object-cover transition-opacity duration-300"
            priority={current.id === "wallet"}
          />

          {/* Hover Zoom Overlay Pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md pointer-events-none">
            <Maximize2 className="w-3.5 h-3.5 text-(--accent-peach)" />
            <span>Click to zoom</span>
          </div>
        </div>

        <button
          onClick={goToNext}
          aria-label="Next mobile screen"
          className={`absolute ${
            isRtl ? "-left-3 sm:-left-6" : "-right-3 sm:-right-6"
          } z-20 p-2 sm:p-2.5 rounded-full bg-(--bg-surface-elevated)/90 hover:bg-(--accent-peach) text-(--text-secondary) hover:text-white border border-(--border-strong) shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95`}
        >
          <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRtl ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Screen Pertinent Description & Meta Details */}
      <div className="flex flex-col items-center text-center max-w-md px-4 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-(--accent-peach-light) text-(--accent-peach) border border-(--accent-peach)/30">
            {localized.badge}
          </span>
          <h4 className="text-sm sm:text-base font-semibold text-(--text-primary)">
            {localized.title}
          </h4>
        </div>
        <p className="text-xs text-(--text-secondary) leading-relaxed">
          {localized.desc}
        </p>
        <span className="text-[10px] text-(--text-muted) font-mono pt-1">
          React Native (Expo) · Android Production Build · DizzitUp Platform
        </span>
      </div>

      {/* Full Resolution Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close zoom modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Container */}
            <div className="relative w-full aspect-[1284/2778] max-h-[82vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={current.src}
                alt={localized.title}
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-3 text-xs text-white/80 font-medium text-center">
              {localized.title} · {localized.badge}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
