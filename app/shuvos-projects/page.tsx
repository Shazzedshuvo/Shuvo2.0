import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowLeft,
  Globe,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Laptop,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: "Shuvo's Projects | Live Portfolio & Project Hub",
  description: "Explore the comprehensive project showcase and web application catalog by MD. Shazzed Hossen Shuvo at shuvos-projects.vercel.app",
};

export default function ShuvosProjectsPage() {
  const portalUrl = 'https://shuvos-projects.vercel.app/';

  const projectCategories = [
    {
      title: 'Full-Stack MERN Platforms',
      description: 'End-to-end production web applications with Next.js, Node.js, Express, and MongoDB.',
      icon: Cpu,
      color: 'from-amber-500 to-amber-600',
      tag: 'MERN & Full-Stack',
    },
    {
      title: 'High-Performance Next.js & React',
      description: 'Ultra-fast web architectures, SSR/SSG rendering, Tailwind CSS v4, and modern TypeScript.',
      icon: Code2,
      color: 'from-amber-500 to-amber-600',
      tag: 'Next.js 16 • React 19',
    },
    {
      title: 'Creative UI & 3D Interactive',
      description: 'Futuristic WebGL, Three.js canvases, GSAP timeline animations, and dynamic micro-interactions.',
      icon: Sparkles,
      color: 'from-amber-500 to-amber-600',
      tag: 'Three.js & GSAP',
    },
    {
      title: 'Bespoke Client Solutions',
      description: 'Commercial client applications, headless eCommerce systems, and agency track records at softvence.agency.',
      icon: Laptop,
      color: 'from-amber-500 to-amber-600',
      tag: 'Commercial & Agency',
    },
  ];

  return (
    <main className="min-h-screen bg-[#edf0f5] text-zinc-900 dark:bg-[#080808] dark:text-white transition-colors duration-300 selection:bg-amber-500 selection:text-white">
      {/* Background radial ambient lights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f59e0b]/10 via-amber-500/5 to-transparent blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/5 blur-[130px]" />
      </div>

      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#edf0f5]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#080808]/80">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 transition hover:border-[#f59e0b] hover:text-[#f59e0b] dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-[#f59e0b]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
              Live Project Hub
            </span>
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b] hover:bg-[#d97706] px-4 py-2 text-xs sm:text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Visit Portal</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-5 shadow-sm">
            <FolderGit2 className="h-3.5 w-3.5 text-[#f59e0b]" />
            <span>Dedicated Projects Hub</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white">
            Shuvo&apos;s{' '}
            <span className="text-[#f59e0b]">
              Projects Portal
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
            Welcome to the dedicated showcase directory of all digital creations, full-stack applications, and commercial work built by <strong className="font-semibold text-zinc-900 dark:text-white">Md. Shazzed Hossen Shuvo</strong>.
          </p>

          {/* Quick Direct Link CTA Card */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-[#0d0d0f]/80 p-5 sm:p-7 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
                    Official Projects Live Domain
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-white break-all">
                    {portalUrl}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] px-6 py-3.5 text-sm font-bold text-black shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-105"
                >
                  <span>Open Shuvo&apos;s Projects</span>
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
                <ShieldCheck className="h-3.5 w-3.5 text-[#f59e0b] shrink-0" />
                <span className="truncate">{portalUrl}</span>
              </div>

              <a
                href={portalUrl}
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
                src={portalUrl}
                title="Shuvo's Projects Live Showcase"
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>

        {/* Category Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              What You&apos;ll Find on <span className="text-[#f59e0b]">Shuvo&apos;s Projects</span>
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A rich compilation of diverse engineering stacks, enterprise applications, and UI experiments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f59e0b]/40 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-mono font-semibold text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
                        {cat.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#f59e0b] transition">
                      {cat.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center text-xs font-semibold text-[#f59e0b]">
                    <span className="flex items-center gap-1">
                      Featured in Catalog <CheckCircle2 className="h-3.5 w-3.5 text-[#f59e0b] ml-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl border border-zinc-300/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-12 text-center text-white shadow-2xl dark:border-white/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Looking to Build a Custom Web Application?
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
              Whether you need an enterprise SaaS dashboard, headless eCommerce store, or interactive 3D portfolio, let&apos;s collaborate to turn your concepts into production reality.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b] hover:bg-[#d97706] px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition hover:scale-105"
              >
                <span>Launch Shuvo&apos;s Projects Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <span>Get In Touch</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
