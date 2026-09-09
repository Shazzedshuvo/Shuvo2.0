'use client';

import React from 'react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 transition-colors duration-300 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 py-8 text-xs sm:text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8 dark:text-white/30">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 font-medium">
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://shazzedshuvo.vercel.app/cv2.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
