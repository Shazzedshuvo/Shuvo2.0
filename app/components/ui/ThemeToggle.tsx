'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('shazzed-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('shazzed-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full glass-panel text-[var(--foreground)] transition-all duration-300 hover:border-[#00bf8f]/60 hover:bg-[#00bf8f]/10 hover:text-[#00bf8f] hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-[#00bf8f] transition-transform duration-500 group-hover:rotate-90" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-[#009e76] transition-transform duration-500 group-hover:-rotate-45" />
      )}
    </button>
  );
}
