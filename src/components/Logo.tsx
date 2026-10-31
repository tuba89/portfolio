import React from "react";

export default function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoPeach" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB703" />
          <stop offset="50%" stopColor="#DD6E42" />
          <stop offset="100%" stopColor="#C2542B" />
        </linearGradient>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A262F" />
          <stop offset="100%" stopColor="#10171C" />
        </linearGradient>
      </defs>

      <rect width="120" height="120" rx="28" fill="url(#logoBg)" stroke="#DD6E42" strokeOpacity="0.3" strokeWidth="2" />

      <g transform="translate(18, 16)">
        <path
          d="M14 74 L38 18 C40 13 44 13 46 18 L70 74"
          stroke="url(#logoPeach)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 50 L64 50"
          stroke="url(#logoPeach)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M44 26 C62 26 74 33 74 44 C74 52 64 54 50 54"
          stroke="url(#logoPeach)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M46 54 C66 54 78 61 78 74 C78 86 64 88 40 88 L34 88"
          stroke="url(#logoPeach)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <circle cx="42" cy="18" r="4" fill="#FFB703" />
        <circle cx="64" cy="50" r="3.5" fill="#DD6E42" />
      </g>
    </svg>
  );
}

