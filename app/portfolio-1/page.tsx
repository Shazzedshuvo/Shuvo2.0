import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowLeft,
  Globe,
  Sparkles,
  Layers,
  History,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  BookmarkCheck,
  Terminal,
  Award
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: "Portfolio 1.0 | Classic Edition - MD. Shazzed Hossen Shuvo",
  description: "Explore Portfolio 1.0 (Classic Edition) by MD. Shazzed Hossen Shuvo at https://shazzedshuvo.vercel.app/",
};

export default function Portfolio1Page() {
  const portfolio1Url = 'https://shazzedshuvo.vercel.app/';

  const milestoneHighlights = [
    {
      title: 'The Origin Edition',
      description: 'The foundation portfolio establishing Shuvo\'s early full-stack projects, design experiments, and core identity.',
      icon: History,
      tag: 'Genesis 1.0',
    },
    {
      title: 'Classic Project Portfolio',
      description: 'Contains foundational MERN stack apps, initial client works, and engineering case studies.',
      icon: Layers,
      tag: 'Classic Showcase',
    },
    {
      title: 'Evolution into 2.0',
      description: 'The stepping stone that paved the way for Next.js 16, React 19, 3D WebGL, and modern agency leadership.',
      icon: Sparkles,
      tag: 'Growth Milestone',
    },
    {
      title: 'Verified Live Archive',
      description: 'Permanently hosted on Vercel as a live historical showcase of engineering progression.',
      icon: Award,
      tag: 'Live Vercel Hub',
    },
  ];

  return (
    <main className="min-h-screen bg-[#edf0f5] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300 selection:bg-amber-500 selection:text-white">
      {/* Background radial ambient lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#edf0f5]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#080808]/80">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 transition hover:border-amber-500 hover:text-amber-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-amber-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio 2.0</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Classic Edition 1.0
            </span>
            <a
              href={portfolio1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:from-indigo-500 hover:to-purple-500"
            >
              <span>Visit 1.0 Live</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 mb-5 shadow-sm">
            <History className="h-3.5 w-3.5" />
            <span>Archive • Portfolio 1.0</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white">
            Portfolio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500">
              1.0 Edition
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
            Experience the original version of <strong className="font-semibold text-zinc-900 dark:text-white">MD. Shazzed Hossen Shuvo&apos;s</strong> portfolio. Explore where the engineering journey began before the upgrade to Portfolio 2.0.
          </p>

          {/* Quick Direct Link CTA Card */}
          <div className="mt-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-amber-500/10 p-5 sm:p-7 backdrop-blur-xl shadow-xl shadow-indigo-500/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-500 border border-indigo-500/30">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Official Portfolio 1.0 Domain
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-white break-all">
                    {portfolio1Url}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={portfolio1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500"
                >
                  <span>Open Portfolio 1.0</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Browser Mockup / Embedded Preview Card */}
        <div className="mb-16">
          <div className="overflow-hidden rounded-3xl border border-zinc-300/80 bg-zinc-900 shadow-2xl dark:border-white/10 dark:bg-zinc-950">
            {/* Browser Header Chrome */}
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Address Bar */}
              <div className="flex max-w-md flex-1 items-center justify-center gap-2 rounded-xl bg-black/40 px-4 py-1.5 text-xs font-mono text-zinc-300 border border-white/5 mx-4 truncate">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">{portfolio1Url}</span>
              </div>

              <a
                href={portfolio1Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition"
              >
                <span className="hidden sm:inline">Open in new tab</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Embedded Live Iframe */}
            <div className="relative w-full aspect-[16/10] min-h-[500px] sm:min-h-[640px] bg-[#0c0c0e]">
              <iframe
                src={portfolio1Url}
                title="Portfolio 1.0 Live Preview"
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>

        {/* Milestone Highlights Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              The Evolution of <span className="text-indigo-500">Shuvo&apos;s Web Architecture</span>
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Comparing milestones from Portfolio 1.0 to the current high-octane 2.0 ecosystem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestoneHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-mono font-semibold text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-500 transition">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <span className="flex items-center gap-1">
                      Version 1.0 Milestone <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 ml-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Switcher Card */}
        <div className="rounded-3xl border border-zinc-300/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-12 text-center text-white shadow-2xl dark:border-white/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Explore All Portfolio Ecosystems
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
              Switch between Portfolio 1.0, Shuvo&apos;s Projects Catalog, and the new 2.0 Experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={portfolio1Url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
              >
                <span>Launch Portfolio 1.0</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/shuvos-projects"
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-7 py-3.5 text-sm font-bold text-amber-400 backdrop-blur-md transition hover:bg-amber-500/20"
              >
                <span>Shuvo&apos;s Projects Hub</span>
                <Sparkles className="h-4 w-4" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <span>Portfolio 2.0 Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
