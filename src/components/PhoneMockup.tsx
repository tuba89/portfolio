"use client";

import { useState } from "react";
import Image from "next/image";
import { Wallet, Receipt, Coins, Store } from "lucide-react";

interface ScreenTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  src: string;
}

const SCREENS: ScreenTab[] = [
  {
    id: "wallet",
    label: "Wallet",
    icon: Wallet,
    src: "/images/mobile-screens/mobile-home-wallet.webp",
  },
  {
    id: "bills",
    label: "Bills & Vouchers",
    icon: Receipt,
    src: "/images/mobile-screens/mobile-pay-bills.webp",
  },
  {
    id: "crypto",
    label: "Crypto & DZY",
    icon: Coins,
    src: "/images/mobile-screens/mobile-crypto-assets.webp",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: Store,
    src: "/images/mobile-screens/mobile-marketplace.webp",
  },
];

export default function PhoneMockup({ className = "" }: { className?: string }) {
  const [activeScreen, setActiveScreen] = useState<string>("wallet");

  const current = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Screen Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-(--bg-page)/80 border border-(--border-subtle) max-w-full">
        {SCREENS.map((s) => {
          const Icon = s.icon;
          const isActive = s.id === activeScreen;
          return (
            <button
              key={s.id}
              onClick={() => setActiveScreen(s.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-(--accent-peach) text-white shadow-sm"
                  : "text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface)"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Phone Hardware Bezel Frame */}
      <div className="relative mx-auto w-55 xs:w-62.5 sm:w-70 max-w-[85vw] aspect-9/19 rounded-[2.5rem] sm:rounded-[2.8rem] p-2 sm:p-2.5 bg-linear-to-b from-[#243540] via-[#141E25] to-[#0D1418] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Dynamic Island / Speaker Slit */}
        <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20 w-16 sm:w-20 h-3.5 sm:h-4 bg-black rounded-full flex items-center justify-end px-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1A262F] border border-[#364E5C]" />
        </div>

        {/* Screen Display Glass */}
        <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.3rem] overflow-hidden bg-black border border-white/5">
          <Image
            key={current.id}
            src={current.src}
            alt={`Real mobile app screenshot: ${current.label}`}
            fill
            sizes="(max-width: 640px) 250px, 280px"
            className="object-cover object-top transition-opacity duration-300"
            priority={activeScreen === "wallet"}
          />
        </div>
      </div>
      <span className="text-[10px] text-(--text-muted) font-mono">
        Authentic Android Emulator &amp; Expo Native Build
      </span>
    </div>
  );
}

