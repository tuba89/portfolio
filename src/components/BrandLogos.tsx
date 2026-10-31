import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Kaggle Logo (from Simple Icons)
 */
export function KaggleLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="Kaggle logo"
      className={`text-[#20BEFF] transition-all duration-200 ${className}`}
    >
      <path d="M18.825 23.859c-.022.016-.045.041-.067.064-.022.016-.045.032-.068.048-.067.049-.135.081-.225.081-.112 0-.225-.048-.315-.129l-6.848-6.196-2.585 2.457v3.528c0 .18-.158.34-.338.34H5.975c-.18 0-.338-.16-.338-.34V.34c0-.18.158-.34.338-.34h2.404c.18 0 .338.16.338.34v13.568l8.95-8.814c.09-.09.202-.135.315-.135.09 0 .157.032.225.081.022.016.045.032.068.048.022.023.045.048.067.064.068.081.113.194.113.307 0 .113-.045.226-.113.307l-8.477 8.34 8.882 8.04c.09.08.135.193.135.306s-.045.226-.135.307z" />
    </svg>
  );
}

/**
 * Official Google Logo (Multi-Color)
 */
export function GoogleLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label="Google logo"
      className={`transition-all duration-200 ${className}`}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Official Cisco Logo (from Simple Icons)
 */
export function CiscoLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="Cisco logo"
      className={`text-[#1BA0D7] transition-all duration-200 ${className}`}
    >
      <path d="M12.002 9.07a.972.972 0 0 0-.968.969v3.916a.968.968 0 1 0 1.936 0V10.04a.971.971 0 0 0-.968-.97zm-5.748.97a.97.97 0 0 0-.968.968v1.98a.968.968 0 1 0 1.936 0v-1.98a.97.97 0 0 0-.968-.968zm11.496 0a.97.97 0 0 0-.968.968v1.98a.968.968 0 1 0 1.936 0v-1.98a.97.97 0 0 0-.968-.968zM2.43 12.015a.97.97 0 0 0-.968.97v.041a.968.968 0 1 0 1.936 0v-.042a.97.97 0 0 0-.968-.97zm19.138 0a.97.97 0 0 0-.968.97v.041a.968.968 0 1 0 1.936 0v-.042a.97.97 0 0 0-.968-.97zM8.17 6.126a.97.97 0 0 0-.968.968v9.804a.968.968 0 1 0 1.936 0V7.094a.97.97 0 0 0-.968-.968zm7.658 0a.97.97 0 0 0-.968.968v9.804a.968.968 0 1 0 1.936 0V7.094a.97.97 0 0 0-.968-.968zM4.302 3.18a.972.972 0 0 0-.968.969v15.696a.968.968 0 1 0 1.936 0V4.15a.972.972 0 0 0-.968-.969zm15.394 0a.972.972 0 0 0-.968.969v15.696a.968.968 0 1 0 1.936 0V4.15a.972.972 0 0 0-.968-.969zm-7.695 0a.97.97 0 0 0-.968.969v15.696a.968.968 0 1 0 1.936 0V4.15a.97.97 0 0 0-.968-.969z" />
    </svg>
  );
}

/**
 * Official Codecademy Logo (from Simple Icons)
 */
export function CodecademyLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="Codecademy logo"
      className={`text-[#1F4056] dark:text-[#3B82F6] transition-all duration-200 ${className}`}
    >
      <path d="M12.015 0C5.38 0 0 5.378 0 12.015s5.38 12.015 12.015 12.015c6.636 0 12.015-5.378 12.015-12.015S18.651 0 12.015 0zm.019 4.148c4.34 0 7.865 3.524 7.865 7.867 0 4.34-3.525 7.866-7.865 7.866-4.342 0-7.866-3.525-7.866-7.866 0-4.343 3.524-7.867 7.866-7.867zm-1.85 3.327c-2.478 0-4.49 2.012-4.49 4.54 0 2.528 2.012 4.54 4.49 4.54 1.547 0 2.915-.778 3.73-1.968l-1.92-1.127c-.433.626-1.076 1.018-1.81 1.018-1.332 0-2.41-1.077-2.41-2.463 0-1.385 1.078-2.463 2.41-2.463.734 0 1.377.392 1.81 1.018l1.92-1.127c-.815-1.19-2.183-1.968-3.73-1.968z" />
    </svg>
  );
}

/**
 * Official Deloitte Logo (Wordmark with Signature Green Dot #86BC25)
 */
export function DeloitteLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size * 2.8}
      height={size}
      viewBox="0 0 120 32"
      role="img"
      aria-label="Deloitte logo"
      className={`transition-all duration-200 ${className}`}
    >
      <text
        x="2"
        y="23"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="800"
        letterSpacing="-0.03em"
      >
        Deloitte
      </text>
      <circle cx="82" cy="22" r="3.2" fill="#86BC25" />
    </svg>
  );
}

/**
 * Official University of the People Seal / Emblem
 */
export function UoPeopleLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="University of the People logo"
      className={`transition-all duration-200 ${className}`}
    >
      <rect width="32" height="32" rx="6" fill="#0D2C54" />
      {/* Book pages / diploma ribbon */}
      <path
        d="M8 12 C11 10.5 15 11 16 13 C17 11 21 10.5 24 12 L24 21 C21 19.5 17 20 16 22 C15 20 11 19.5 8 21 Z"
        fill="#DDA835"
      />
      <path
        d="M16 13 L16 22"
        stroke="#0D2C54"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7.5" r="2" fill="#DDA835" />
    </svg>
  );
}

/**
 * Official DizzitUp Brandmark
 */
export function DizzitUpLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logos/dizzitup.png"
        alt="DizzitUp official logo"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        unoptimized
      />
    </div>
  );
}
