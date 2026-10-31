import React from "react";

// Official Colored LinkedIn Icon
export function ColoredLinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        d="M8.5 19H5.5V9.5H8.5V19ZM7 8.2C6.06 8.2 5.3 7.44 5.3 6.5C5.3 5.56 6.06 4.8 7 4.8C7.94 4.8 8.7 5.56 8.7 6.5C8.7 7.44 7.94 8.2 7 8.2ZM19 19H16V14.2C16 13.05 15.98 11.58 14.4 11.58C12.8 11.58 12.55 12.83 12.55 14.12V19H9.55V9.5H12.43V10.8H12.47C12.87 10.04 13.85 9.24 15.31 9.24C18.35 9.24 18.91 11.24 18.91 13.85V19H19Z"
        fill="white"
      />
    </svg>
  );
}

// Official Colored Kaggle Icon
export function ColoredKaggleIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5" fill="#20BEFF" fillOpacity="0.15" stroke="#20BEFF" strokeWidth="1.2" />
      <path
        d="M17.2 18.5H14.1L10.3 13.2L8.9 14.5V18.5H6.2V5.5H8.9V12.7L13.8 5.5H16.9L11.8 12.2L17.2 18.5Z"
        fill="#20BEFF"
      />
    </svg>
  );
}

// Official Colored GitHub Icon
export function ColoredGithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5" fill="#181717" className="dark:fill-[#24292E] border border-white/10" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.29 18.53 9.47 19.59C9.87 19.66 10.02 19.42 10.02 19.21C10.02 19.02 10.01 18.39 10.01 17.65C7.79 18.13 7.32 16.7 7.32 16.7C6.96 15.78 6.44 15.54 6.44 15.54C5.71 15.04 6.49 15.05 6.49 15.05C7.3 15.11 7.73 15.88 7.73 15.88C8.45 17.11 9.61 16.76 10.07 16.55C10.14 16.03 10.35 15.67 10.58 15.47C8.81 15.27 6.94 14.59 6.94 11.53C6.94 10.66 7.25 9.95 7.77 9.39C7.69 9.19 7.41 8.38 7.85 7.28C7.85 7.28 8.52 7.07 10.04 8.1C10.68 7.92 11.36 7.83 12.04 7.83C12.72 7.83 13.4 7.92 14.04 8.1C15.56 7.07 16.23 7.28 16.23 7.28C16.67 8.38 16.39 9.19 16.31 9.39C16.83 9.95 17.14 10.66 17.14 11.53C17.14 14.6 15.26 15.27 13.48 15.47C13.77 15.72 14.03 16.22 14.03 16.98C14.03 18.06 14.02 18.94 14.02 19.21C14.02 19.42 14.16 19.67 14.57 19.59C17.74 18.52 20.03 15.54 20.03 12C20.03 7.58 16.45 4 12 4Z"
        fill="white"
      />
    </svg>
  );
}

// Fallback outline icons if needed
export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <ColoredGithubIcon size={18} className={className} />;
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <ColoredLinkedinIcon size={18} className={className} />;
}

export function KaggleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <ColoredKaggleIcon size={18} className={className} />;
}
