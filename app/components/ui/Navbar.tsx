'use client';

import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: "Shuvo's Projects", href: '/shuvos-projects' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Services', href: '/#services' },
  { name: 'Reviews', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Default dark
    const savedTheme = localStorage.getItem('shazzed-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('shazzed-theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('shazzed-theme', 'dark');
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 ${
          mobileMenuOpen ? '!rounded-3xl' : 'rounded-full'
        } ${
          scrolled
            ? 'border border-black/10 bg-white/80 shadow-xl shadow-black/5 backdrop-blur-2xl dark:border-white/15 dark:bg-[#09090b]/80 dark:shadow-black/50 py-2 sm:py-2.5 px-4 sm:px-6'
            : 'border border-black/10 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-[#09090b]/70 dark:shadow-black/35 py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 transition hover:opacity-80 dark:text-white uppercase shrink-0"
          >
            Shazzed<span className="text-[#f59e0b]">.</span>
          </a>

          {/* Desktop Nav Items (Full for Extra Large) */}
          <div className="hidden xl:flex items-center gap-1 text-xs font-medium text-zinc-600 dark:text-white/70">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2.5 py-1.5 rounded-full transition-all hover:text-zinc-950 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Medium/Large Screens (Condensed list so it never overflows) */}
          <div className="hidden md:flex xl:hidden items-center gap-1 text-xs font-medium text-zinc-600 dark:text-white/70">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 py-1 rounded-full transition-all hover:text-zinc-950 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Actions: Theme Toggle & Resume Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-700 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white cursor-pointer"
            >
              {isDark ? <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </button>

            <a
              href="/shuvos-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sazzad-Shuvo-CV.pdf"
              className="btn-neumorphic text-xs !px-3 sm:!px-4 !py-1 sm:!py-1.5 inline-flex items-center gap-1.5 rounded-full"
            >
              <span>Resume</span>
              <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-700 transition hover:bg-black/10 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Glass Effect) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col space-y-1 pb-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-700 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
