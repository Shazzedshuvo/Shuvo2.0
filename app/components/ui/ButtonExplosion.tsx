'use client';

import React from 'react';
import confetti from 'canvas-confetti';

interface ButtonExplosionProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glass';
  href?: string;
  download?: boolean;
}

export default function ButtonExplosion({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  download
}: ButtonExplosionProps) {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 40,
      spread: 70,
      startVelocity: 25,
      colors: ['#00bf8f', '#1cd8d2', '#00f5a0', '#ffffff'],
      disableForReducedMotion: true,
      zIndex: 99999
    });

    if (onClick) {
      onClick();
    }
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-95 cursor-pointer select-none overflow-hidden group";

  const variantStyles = {
    primary: "bg-[#00bf8f] text-[#03100c] hover:bg-[#13d9a7] shadow-[0_10px_35px_rgba(0,191,143,0.22)] hover:shadow-[0_14px_45px_rgba(0,191,143,0.38)] px-6 py-3.5 text-sm sm:text-base",
    secondary: "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[#00bf8f]/60 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f] px-6 py-3.5 text-sm sm:text-base backdrop-blur-md",
    glass: "glass-panel text-[var(--foreground)] hover:text-[#00bf8f] px-5 py-2.5 text-sm"
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={triggerConfetti}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={triggerConfetti}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
