'use client';

import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

const navItems = [
  { name: 'About', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
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
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/10 bg-[#edf0f5]/85 backdrop-blur-md dark:border-white/10 dark:bg-[#080808]/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 transition hover:opacity-80 dark:text-white uppercase"
        >
          Shazzed<span className="text-zinc-400 dark:text-white/40">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-white/60">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-zinc-900 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle & Resume */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-700 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white cursor-pointer"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="https://shazzedshuvo.vercel.app/cv2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neumorphic text-xs !px-3 sm:!px-4 !py-1.5 sm:!py-2 inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <Download className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-700 transition hover:bg-black/10 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-[#edf0f5]/95 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-[#080808]/95 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 dark:text-white/80 hover:text-zinc-900 dark:hover:text-white py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
