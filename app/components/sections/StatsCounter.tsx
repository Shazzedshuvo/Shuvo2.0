'use client';

import React from 'react';

const stats = [
  { value: '2', suffix: '+', label: 'Years Experience' },
  { value: '8', suffix: '+', label: 'Projects Completed' },
  { value: '20', suffix: '+', label: 'Technologies' },
  { value: '100', suffix: '%', label: 'Commitment' },
];

export default function StatsCounter() {
  return (
    <section className="border-y border-black/10 transition-colors duration-300 dark:border-white/10 gsap-fade-up">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`stat-box px-3 sm:px-5 py-8 sm:py-10 lg:py-14 text-center ${
              idx % 2 === 0 ? 'border-r border-black/10 dark:border-white/10 lg:border-r-0' : ''
            } ${
              idx < 2 ? 'border-b border-black/10 dark:border-white/10 lg:border-b-0' : ''
            } ${
              idx > 0 ? 'lg:border-l lg:border-black/10 dark:lg:border-white/10' : ''
            }`}
          >
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl xl:text-5xl dark:text-white">
              <span className="stat-num-val" data-target={stat.value}>0</span>
              <span className="text-zinc-400 dark:text-white/40">{stat.suffix}</span>
            </div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 dark:text-white/35 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
