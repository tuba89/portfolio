import React from "react";
import Image from "next/image";

export default function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl overflow-hidden shadow-md shrink-0 border border-[var(--accent-peach)]/40 hover:border-[var(--accent-peach)] transition-all ${className}`}
    >
      <Image
        src="/assets/assia-benkedia-logo-3d.jpg"
        alt="Assia Benkedia AB Logo"
        fill
        sizes={`${size}px`}
        priority
        className="object-cover"
      />
    </div>
  );
}

