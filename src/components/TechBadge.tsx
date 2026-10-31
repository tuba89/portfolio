"use client";

import React, { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiDocker,
  SiTailwindcss,
  SiVercel,
  SiSolidity,
  SiEthereum,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
  SiRedux,
  SiFastapi,
  SiRedis,
  SiLinux,
  SiPostman,
  SiJest,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGooglegemini,
  SiOpencv,
  SiKaggle,
  SiGoogle,
  SiCisco,
  SiCodecademy,
  SiCoolify,
  SiEthers,
  SiLeaflet,
  SiGradio,
  SiWeb3Dotjs,
  SiAnthropic,
  SiApple,
  SiGooglecloud,
} from "react-icons/si";
import { UoPeopleLogo, DeloitteLogo, DizzitUpLogo } from "./BrandLogos";

export interface TechMeta {
  Icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  brandColor: string;
  isCurrentColor?: boolean;
}

/**
 * Maps a technology name/tag to its official Simple Icon or SVG metadata
 */
export function getTechMeta(rawTag: string): TechMeta | null {
  const tag = rawTag.toLowerCase().trim();

  // Next.js (black in light, white in dark)
  if (tag.includes("next.js") || tag.includes("nextjs") || tag === "next") {
    return { Icon: SiNextdotjs, brandColor: "currentColor", isCurrentColor: true };
  }

  // React Native / Expo
  if (tag.includes("expo")) {
    return { Icon: SiExpo, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("react native") || tag.includes("react-native")) {
    return { Icon: SiReact, brandColor: "#61DAFB" };
  }
  if (tag.includes("react")) {
    return { Icon: SiReact, brandColor: "#61DAFB" };
  }

  // TypeScript / JavaScript
  if (tag.includes("typescript") || tag === "ts") {
    return { Icon: SiTypescript, brandColor: "#3178C6" };
  }
  if (tag.includes("javascript") || tag === "js") {
    return { Icon: SiJavascript, brandColor: "#F7DF1E" };
  }

  // Node & Express
  if (tag.includes("node.js") || tag.includes("nodejs") || tag === "node") {
    return { Icon: SiNodedotjs, brandColor: "#5FA04E" };
  }
  if (tag.includes("express")) {
    return { Icon: SiExpress, brandColor: "currentColor", isCurrentColor: true };
  }

  // Databases & ORM
  if (tag.includes("supabase")) {
    return { Icon: SiSupabase, brandColor: "#3ECF8E" };
  }
  if (tag.includes("postgres") || tag.includes("sql") || tag.includes("postgresql")) {
    return { Icon: SiPostgresql, brandColor: "#4169E1" };
  }
  if (tag.includes("prisma")) {
    return { Icon: SiPrisma, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("redis")) {
    return { Icon: SiRedis, brandColor: "#DC382D" };
  }

  // Python & AI / ML
  if (tag.includes("python")) {
    return { Icon: SiPython, brandColor: "#3776AB" };
  }
  if (tag.includes("pytorch")) {
    return { Icon: SiPytorch, brandColor: "#EE4C2C" };
  }
  if (tag.includes("hugging face") || tag.includes("huggingface") || tag.includes("transformers") || tag.includes("t5")) {
    return { Icon: SiHuggingface, brandColor: "#FFD21E" };
  }
  if (tag.includes("gemini")) {
    return { Icon: SiGooglegemini, brandColor: "#8E75FF" };
  }
  if (tag.includes("mcp") || tag.includes("model context protocol")) {
    return { Icon: SiAnthropic, brandColor: "#D97706" };
  }
  if (tag.includes("gradio")) {
    return { Icon: SiGradio, brandColor: "#FF7C00" };
  }
  if (tag.includes("opencv") || tag.includes("computer vision")) {
    return { Icon: SiOpencv, brandColor: "#5C3EE8" };
  }
  if (tag.includes("scikit-learn")) {
    return { Icon: SiScikitlearn, brandColor: "#F7931E" };
  }
  if (tag.includes("pandas")) {
    return { Icon: SiPandas, brandColor: "#150458" };
  }
  if (tag.includes("numpy")) {
    return { Icon: SiNumpy, brandColor: "#4DABCF" };
  }

  // Web3 & Solidity
  if (tag.includes("solidity")) {
    return { Icon: SiSolidity, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("ethereum") || tag.includes("evm")) {
    return { Icon: SiEthereum, brandColor: "#627EEA" };
  }
  if (tag.includes("ethers")) {
    return { Icon: SiEthers, brandColor: "#2656C6" };
  }
  if (tag.includes("web3")) {
    return { Icon: SiWeb3Dotjs, brandColor: "#F16822" };
  }

  // Styling & Tools
  if (tag.includes("tailwind")) {
    return { Icon: SiTailwindcss, brandColor: "#06B6D4" };
  }
  if (tag.includes("docker")) {
    return { Icon: SiDocker, brandColor: "#2496ED" };
  }
  if (tag.includes("coolify")) {
    return { Icon: SiCoolify, brandColor: "#5B68DF" };
  }
  if (tag.includes("vercel")) {
    return { Icon: SiVercel, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("github")) {
    return { Icon: SiGithub, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("git")) {
    return { Icon: SiGit, brandColor: "#F05032" };
  }
  if (tag.includes("html")) {
    return { Icon: SiHtml5, brandColor: "#E34F26" };
  }
  if (tag.includes("css")) {
    return { Icon: SiCss, brandColor: "#1572B6" };
  }
  if (tag.includes("redux")) {
    return { Icon: SiRedux, brandColor: "#764ABC" };
  }
  if (tag.includes("fastapi")) {
    return { Icon: SiFastapi, brandColor: "#009688" };
  }
  if (tag.includes("linux") || tag.includes("vps") || tag.includes("server")) {
    return { Icon: SiLinux, brandColor: "#FCC624" };
  }
  if (tag.includes("postman")) {
    return { Icon: SiPostman, brandColor: "#FF6C37" };
  }
  if (tag.includes("jest")) {
    return { Icon: SiJest, brandColor: "#C21325" };
  }
  if (tag.includes("leaflet")) {
    return { Icon: SiLeaflet, brandColor: "#199900" };
  }
  if (tag.includes("apple")) {
    return { Icon: SiApple, brandColor: "currentColor", isCurrentColor: true };
  }
  if (tag.includes("google cloud")) {
    return { Icon: SiGooglecloud, brandColor: "#4285F4" };
  }
  if (tag.includes("kaggle")) {
    return { Icon: SiKaggle, brandColor: "#20BEFF" };
  }
  if (tag.includes("google")) {
    return { Icon: SiGoogle, brandColor: "#4285F4" };
  }
  if (tag.includes("cisco")) {
    return { Icon: SiCisco, brandColor: "#1BA0D7" };
  }
  if (tag.includes("codecademy")) {
    return { Icon: SiCodecademy, brandColor: "currentColor", isCurrentColor: true };
  }

  return null;
}

interface TechBadgeProps {
  tag: string;
  variant?: "chip" | "list" | "hero-strip";
  className?: string;
  iconSize?: number;
}

/**
 * Standardized Technology & Stack Chip
 * Always renders icon + name (or clean text chip if no icon exists)
 * Monochrome default -> brand color on hover
 * Dark mode: black logos (Next.js, Prisma, Expo, Vercel) use currentColor so they turn white
 */
export default function TechBadge({
  tag,
  variant = "chip",
  className = "",
  iconSize,
}: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const meta = getTechMeta(tag);

  // If brand has no icon, show clean text chip (as per user instruction)
  if (!meta) {
    if (variant === "list") {
      return (
        <span className={`inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] font-normal leading-relaxed ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-peach)] shrink-0" />
          <bdi>{tag}</bdi>
        </span>
      );
    }
    return (
      <span
        className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-normal border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-surface)] ${className}`}
      >
        <bdi>{tag}</bdi>
      </span>
    );
  }

  const { Icon, brandColor, isCurrentColor } = meta;
  const size = iconSize || (variant === "hero-strip" ? 14 : variant === "list" ? 14 : 12);

  const getIconColor = () => {
    if (isCurrentColor) {
      return isHovered ? "var(--text-primary)" : "var(--text-secondary)";
    }
    return isHovered ? brandColor : "var(--text-muted)";
  };

  if (variant === "hero-strip") {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 hover:bg-[var(--bg-surface-elevated)] hover:border-[var(--accent-peach)]/50 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-default shrink-0 group ${className}`}
      >
        <span
          className="shrink-0 transition-colors duration-200"
          style={{ color: getIconColor() }}
        >
          <Icon size={size} />
        </span>
        <span className="truncate">
          <bdi>{tag}</bdi>
        </span>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-normal leading-relaxed transition-colors group cursor-default ${className}`}
      >
        <span
          className="w-4 h-4 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)]/80 flex items-center justify-center shrink-0 transition-colors duration-200"
          style={{ color: getIconColor() }}
        >
          <Icon size={size} />
        </span>
        <span>
          <bdi>{tag}</bdi>
        </span>
      </div>
    );
  }

  // Default: "chip" for project cards
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-normal border border-[var(--border-strong)] text-[var(--text-secondary)] bg-[var(--bg-surface)] hover:border-[var(--accent-peach)]/60 hover:text-[var(--text-primary)] transition-all cursor-default ${className}`}
    >
      <span
        className="shrink-0 transition-colors duration-200"
        style={{ color: getIconColor() }}
      >
        <Icon size={size} />
      </span>
      <span>
        <bdi>{tag}</bdi>
      </span>
    </span>
  );
}

/**
 * Standardized Issuer Badge (Kaggle, Google, Cisco, Deloitte, Codecademy, University of the People)
 * Always shows the name beside the icon.
 * Monochrome default -> brand color on hover.
 */
export function IssuerChip({
  issuerKey,
  displayName,
  className = "",
}: {
  issuerKey: "kaggle" | "google" | "cisco" | "deloitte" | "codecademy" | "uopeople" | "dizzitup" | string;
  displayName: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const renderLogo = () => {
    switch (issuerKey) {
      case "kaggle":
        return <SiKaggle size={13} style={{ color: isHovered ? "#20BEFF" : "var(--text-muted)" }} />;
      case "google":
        return <SiGoogle size={13} style={{ color: isHovered ? "#4285F4" : "var(--text-muted)" }} />;
      case "cisco":
        return <SiCisco size={13} style={{ color: isHovered ? "#1BA0D7" : "var(--text-muted)" }} />;
      case "deloitte":
        return <DeloitteLogo size={12} className={isHovered ? "" : "grayscale"} />;
      case "codecademy":
        return <SiCodecademy size={13} style={{ color: isHovered ? "var(--text-primary)" : "var(--text-muted)" }} />;
      case "uopeople":
        return <UoPeopleLogo size={14} className={isHovered ? "" : "grayscale"} />;
      case "dizzitup":
        return <DizzitUpLogo size={14} className={isHovered ? "" : "grayscale"} />;
      default:
        return null;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-page)]/70 text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-peach)]/40 transition-all cursor-default shrink-0 ${className}`}
    >
      <span className="shrink-0 transition-all duration-200">{renderLogo()}</span>
      <span className="truncate">
        <bdi>{displayName}</bdi>
      </span>
    </div>
  );
}
