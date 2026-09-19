'use client';

import React from 'react';
import InteractiveBook from '../ui/InteractiveBook';
import { Sparkles, BookOpen } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="relative py-20 sm:py-28 transition-colors duration-300 scroll-mt-20 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-10 top-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-amber-500/[0.04] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-400 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Developer Dossier</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Turning vision into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
              real products.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base text-zinc-600 dark:text-zinc-400 font-light">
            Explore my engineering philosophy, full-stack MERN &amp; Next.js arsenal, professional footprint at <strong className="font-semibold text-zinc-900 dark:text-white">SoftvenceAgency</strong>, and academic credentials.
          </p>
        </div>

        {/* The Interactive Dossier */}
        <InteractiveBook />
      </div>
    </section>
  );
}

