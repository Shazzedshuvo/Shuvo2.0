'use client';

import React from 'react';
import InteractiveBook from '../ui/InteractiveBook';

export default function AboutMe() {
  return (
    <section id="about" className="relative py-20 sm:py-28 transition-colors duration-300 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-amber-500/[0.04] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            A little about me
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Turning ideas into <span className="text-zinc-400 dark:text-white/40">real products.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base text-zinc-600 dark:text-white/60">
            Flip through the pages of my interactive developer book to explore my development philosophy,
            technical arsenal, industry track record at <strong className="text-zinc-900 dark:text-white">softvence.agency</strong>, and academic milestones.
          </p>
        </div>

        {/* The 3D Interactive Book */}
        <InteractiveBook />
      </div>
    </section>
  );
}
