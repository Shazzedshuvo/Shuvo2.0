'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  Phone,
  Bookmark,
  ExternalLink,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function InteractiveBook() {
  // 0: Cover, 1: Spread 1 (Chapter 1 & 2), 2: Spread 2 (Chapter 3 & 4)
  const [currentSpread, setCurrentSpread] = useState<number>(1);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalSpreads = 3; // 0: Cover, 1: Spread 1 (Ch 1 & 2), 2: Spread 2 (Ch 3 & 4)

  const goToSpread = (index: number) => {
    if (index === currentSpread) return;
    setFlipDirection(index > currentSpread ? 'next' : 'prev');
    setCurrentSpread(index);
  };

  const nextPage = () => {
    if (currentSpread < totalSpreads - 1) {
      setFlipDirection('next');
      setCurrentSpread((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentSpread > 0) {
      setFlipDirection('prev');
      setCurrentSpread((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full select-none">
      {/* Book Title Banner & Chapter Navigator */}
      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Book Badge & Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500 shadow-sm dark:border-amber-400/20 dark:bg-amber-400/10">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
              Interactive Chronicle • বই এর থিম
            </span>
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
              The Journey of Shazzed Shuvo
            </h3>
          </div>
        </div>

        {/* Chapter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-black/10 bg-black/[0.03] p-1.5 dark:border-white/10 dark:bg-white/[0.04]">
          <button
            onClick={() => goToSpread(0)}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentSpread === 0
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white'
            }`}
          >
            📕 Cover
          </button>
          <button
            onClick={() => goToSpread(1)}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentSpread === 1
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white'
            }`}
          >
            Ch. 1 &amp; 2: Bio &amp; Stack
          </button>
          <button
            onClick={() => goToSpread(2)}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentSpread === 2
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white'
            }`}
          >
            Ch. 3 &amp; 4: Career &amp; Edu
          </button>
        </div>
      </div>

      {/* 3D Book Container */}
      <div className="relative mx-auto w-full max-w-5xl [perspective:2000px]">
        {/* Book Hardcover Outer Shadow & Thickness */}
        <div className="relative rounded-[26px] bg-gradient-to-r from-amber-950 via-zinc-900 to-amber-950 p-2.5 sm:p-4 md:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_30px_rgba(245,158,11,0.08)] ring-1 ring-white/10 dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.12)]">
          {/* Embossed Border on Cover */}
          <div className="relative overflow-hidden rounded-[20px] border border-amber-500/30 bg-[#fbf9f4] shadow-inner dark:bg-[#111114]">
            
            {/* Hanging Satin Ribbon Bookmark */}
            <div className="absolute -top-1 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center pointer-events-none">
              <div className="h-10 w-4 bg-gradient-to-b from-rose-600 to-rose-700 shadow-md" />
              <div className="w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-rose-700" />
            </div>

            {/* SPREAD 0: COVER VIEW */}
            {currentSpread === 0 && (
              <motion.div
                key="cover"
                initial={{ opacity: 0, rotateY: flipDirection === 'next' ? 45 : -45 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -45 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative flex min-h-[460px] sm:min-h-[520px] flex-col items-center justify-center p-8 text-center sm:p-14 bg-gradient-to-br from-[#18181b] via-[#09090b] to-[#1c1917] text-white"
              >
                {/* Ornamental Gold Corner Accents */}
                <div className="absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-amber-500/50" />
                <div className="absolute right-6 top-6 h-12 w-12 border-r-2 border-t-2 border-amber-500/50" />
                <div className="absolute bottom-6 left-6 h-12 w-12 border-b-2 border-l-2 border-amber-500/50" />
                <div className="absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-amber-500/50" />

                {/* Cover Emblem */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-500/40 bg-amber-500/10 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                  <BookOpen className="h-10 w-10 text-amber-400" />
                </div>

                <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.35em] text-amber-400/90">
                  Volume I • The Engineering Chronicle
                </span>

                <h2 className="max-w-2xl font-serif text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
                  A LITTLE ABOUT ME
                </h2>
                <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                  The Story, Architectural Philosophy, and Proven Milestones of{' '}
                  <span className="font-semibold text-amber-300">Md. Shazzed Hossen Shuvo</span>
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-300">
                    Full-Stack MERN
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-zinc-300">
                    softvence.agency
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-zinc-300">
                    Next.js 16 • React 19
                  </span>
                </div>

                <div className="mt-8">
                  <button
                    onClick={nextPage}
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:from-amber-500 hover:to-amber-400"
                  >
                    <span>Open Chronicle &amp; Turn Page</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <p className="mt-4 text-[11px] font-mono text-zinc-500">
                  Click button or right edge to flip pages • পৃষ্ঠা উল্টান
                </p>
              </motion.div>
            )}

            {/* SPREAD 1: CHAPTER 1 (ORIGIN) & CHAPTER 2 (STACK) */}
            {currentSpread === 1 && (
              <motion.div
                key="spread1"
                initial={{ opacity: 0, rotateY: flipDirection === 'next' ? 40 : -40 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: flipDirection === 'next' ? -40 : 40 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative grid min-h-[520px] md:grid-cols-2"
              >
                {/* Center Book Spine Stitch & Shadow (Desktop) */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-12 -translate-x-1/2 bg-gradient-to-r from-black/15 via-black/5 to-black/15 md:block dark:from-black/40 dark:via-black/10 dark:to-black/40" />

                {/* LEFT PAGE: CHAPTER 1 */}
                <div
                  onClick={prevPage}
                  className="group relative flex flex-col justify-between border-b border-black/10 p-6 sm:p-8 md:border-b-0 md:border-r dark:border-white/10 hover:bg-black/[0.01] transition-colors cursor-pointer"
                  title="Click to flip to Cover"
                >
                  <div>
                    {/* Page Header */}
                    <div className="flex items-center justify-between border-b border-black/5 pb-3 dark:border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                        Chapter I • The Philosophy
                      </span>
                      <span className="font-mono text-xs text-zinc-400">Page 01</span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                      Turning ideas into <span className="text-zinc-400 dark:text-white/40">real products.</span>
                    </h3>

                    {/* Content with Decorative Dropcap */}
                    <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-white/70">
                      <p>
                        <span className="float-left mr-3 font-serif text-4xl font-black leading-none text-amber-600 dark:text-amber-400">
                          H
                        </span>
                        ello, I&apos;m{' '}
                        <strong className="text-zinc-900 dark:text-white">MD. Shazzed Hossen Shuvo</strong>,
                        a dedicated Full-Stack Developer specializing in crafting robust, conversion-focused web
                        applications with high aesthetic standards and bulletproof reliability.
                      </p>
                      <p>
                        Having deep hands-on expertise in <strong>React.js, Next.js, Node.js, Express.js</strong>, and{' '}
                        <strong>MongoDB</strong>, I thrive on translating abstract concepts into high-speed,
                        user-centric digital realities that solve real-world problems.
                      </p>
                      <p>
                        I work collaboratively by nature, believing that thoughtful design systems and clean code
                        architecture form the backbone of any scalable digital platform.
                      </p>
                    </div>

                    {/* Direct Contact Inset */}
                    <div className="mt-5 rounded-xl border border-black/5 bg-black/[0.02] p-3.5 text-xs dark:border-white/5 dark:bg-white/[0.02]">
                      <div className="font-semibold text-zinc-800 dark:text-white/90 mb-1.5">
                        Author Contact &amp; Reach:
                      </div>
                      <div className="flex flex-col gap-1.5 font-mono text-zinc-600 dark:text-white/60">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                          <span>{siteConfig.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-emerald-500" />
                          <span>{siteConfig.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                    <span className="flex items-center gap-1 group-hover:text-amber-600 transition-colors">
                      <ChevronLeft className="h-3.5 w-3.5" /> ⟵ Flip Back to Cover
                    </span>
                    <span>MD. SHAZZED HOSSEN SHUVO</span>
                  </div>
                </div>

                {/* RIGHT PAGE: CHAPTER 2 */}
                <div
                  onClick={nextPage}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 hover:bg-black/[0.01] transition-colors cursor-pointer"
                  title="Click to flip to Chapter 3 & 4"
                >
                  <div>
                    {/* Page Header */}
                    <div className="flex items-center justify-between border-b border-black/5 pb-3 dark:border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                        Chapter II • Technical Arsenal
                      </span>
                      <span className="font-mono text-xs text-zinc-400">Page 02</span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                      The Modern <span className="text-zinc-400 dark:text-white/40">Tooling Stack.</span>
                    </h3>

                    {/* Stack Highlights */}
                    <div className="mt-4 space-y-3">
                      {/* Box 1: Frontend */}
                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3.5 dark:border-white/5 dark:bg-white/[0.02]">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          <Code2 className="h-3.5 w-3.5" />
                          <span>Design &amp; Frontend</span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP micro-animations &amp; Three.js
                        </p>
                      </div>

                      {/* Box 2: Backend */}
                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3.5 dark:border-white/5 dark:bg-white/[0.02]">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          <Layers className="h-3.5 w-3.5" />
                          <span>Backend &amp; Cloud</span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          Node.js, Express.js, MongoDB Atlas, RESTful APIs, JWT Auth &amp; Cloudinary CDN
                        </p>
                      </div>

                      {/* Key Stats Chips */}
                      <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                        <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2 dark:border-white/5 dark:bg-white/[0.02]">
                          <div className="text-base font-black text-amber-600 dark:text-amber-400">2+</div>
                          <div className="text-[10px] uppercase font-bold text-zinc-500">Years Exp</div>
                        </div>
                        <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2 dark:border-white/5 dark:bg-white/[0.02]">
                          <div className="text-base font-black text-emerald-600 dark:text-emerald-400">15+</div>
                          <div className="text-[10px] uppercase font-bold text-zinc-500">Projects</div>
                        </div>
                        <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2 dark:border-white/5 dark:bg-white/[0.02]">
                          <div className="text-base font-black text-indigo-600 dark:text-indigo-400">100%</div>
                          <div className="text-[10px] uppercase font-bold text-zinc-500">Commitment</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                    <span>THE DEVELOPER&apos;S CHRONICLE</span>
                    <span className="flex items-center gap-1 font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                      Turn to Ch. 3 &amp; 4 <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SPREAD 2: CHAPTER 3 (EXPERIENCE) & CHAPTER 4 (EDUCATION) */}
            {currentSpread === 2 && (
              <motion.div
                key="spread2"
                initial={{ opacity: 0, rotateY: flipDirection === 'next' ? 40 : -40 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: flipDirection === 'next' ? -40 : 40 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative grid min-h-[520px] md:grid-cols-2"
              >
                {/* Center Book Spine Stitch & Shadow (Desktop) */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-12 -translate-x-1/2 bg-gradient-to-r from-black/15 via-black/5 to-black/15 md:block dark:from-black/40 dark:via-black/10 dark:to-black/40" />

                {/* LEFT PAGE: CHAPTER 3 */}
                <div
                  onClick={prevPage}
                  className="group relative flex flex-col justify-between border-b border-black/10 p-6 sm:p-8 md:border-b-0 md:border-r dark:border-white/10 hover:bg-black/[0.01] transition-colors cursor-pointer"
                  title="Click to flip to Chapter 1 & 2"
                >
                  <div>
                    {/* Page Header */}
                    <div className="flex items-center justify-between border-b border-black/5 pb-3 dark:border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                        Chapter III • Professional Footprint
                      </span>
                      <span className="font-mono text-xs text-zinc-400">Page 03</span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                      softvence.agency <span className="text-zinc-400 dark:text-white/40">&amp; Beyond.</span>
                    </h3>

                    {/* Role Details */}
                    <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-white/70">
                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-4 dark:border-white/5 dark:bg-white/[0.02]">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-zinc-900 dark:text-white">
                            Web Developer (Full-Stack)
                          </span>
                          <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                            Present
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          softvence.agency
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/70">
                          Delivering bespoke enterprise client web applications, headless commerce systems, and interactive
                          landing experiences with sub-second response times.
                        </p>
                      </div>

                      {/* Pillars */}
                      <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span> Clean, modular, and maintainable architecture
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span> Fluid micro-animations with GSAP and CSS transforms
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span> 95+ Google Lighthouse speed &amp; SEO score compliance
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                    <span className="flex items-center gap-1 group-hover:text-amber-600 transition-colors">
                      <ChevronLeft className="h-3.5 w-3.5" /> ⟵ Turn Back to Ch. 1 &amp; 2
                    </span>
                    <span>EXPERIENCE RECORD</span>
                  </div>
                </div>

                {/* RIGHT PAGE: CHAPTER 4 */}
                <div className="relative flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    {/* Page Header */}
                    <div className="flex items-center justify-between border-b border-black/5 pb-3 dark:border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                        Chapter IV • Academic Foundation
                      </span>
                      <span className="font-mono text-xs text-zinc-400">Page 04</span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                      Education &amp; <span className="text-zinc-400 dark:text-white/40">The Next Chapter.</span>
                    </h3>

                    {/* Academic Timeline Cards */}
                    <div className="mt-4 space-y-2.5">
                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3 dark:border-white/5 dark:bg-white/[0.02]">
                        <span className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400">
                          B.Sc in CSE • Ongoing
                        </span>
                        <h5 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                          Computer Science &amp; Engineering
                        </h5>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Uttara University</p>
                      </div>

                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3 dark:border-white/5 dark:bg-white/[0.02]">
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-500">
                          Diploma • Completed
                        </span>
                        <h5 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                          Computer Technology
                        </h5>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Thakurgaon Polytechnic Institute</p>
                      </div>

                      <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3 dark:border-white/5 dark:bg-white/[0.02]">
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-500">
                          SSC • Completed
                        </span>
                        <h5 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                          Science (Vocational)
                        </h5>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Panchagarh Technical School &amp; College</p>
                      </div>
                    </div>

                    {/* Next Chapter CTA Box */}
                    <div className="mt-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-indigo-500/10 p-3.5 border border-amber-500/20 text-center">
                      <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                        Ready to write the next chapter together?
                      </p>
                      <a
                        href="#contact"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-400"
                      >
                        <span>Start a Project With Shuvo</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                    <span>THE END OF VOLUME I</span>
                    <button
                      onClick={() => goToSpread(0)}
                      className="font-bold text-amber-600 hover:underline"
                    >
                      Close Book ⟲
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Turn Page Navigation Controls at Bottom */}
        <div className="mt-6 flex items-center justify-between px-2 sm:px-6">
          <button
            onClick={prevPage}
            disabled={currentSpread === 0}
            className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md transition-all dark:border-white/10 dark:bg-zinc-900/80 ${
              currentSpread === 0
                ? 'opacity-40 cursor-not-allowed text-zinc-400'
                : 'text-zinc-800 hover:border-amber-500 hover:text-amber-600 dark:text-zinc-200 dark:hover:text-amber-400'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous Page</span>
          </button>

          {/* Indicator text */}
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <span>
              Spread {currentSpread + 1} of {totalSpreads} (পৃষ্ঠা উল্টান)
            </span>
          </div>

          <button
            onClick={nextPage}
            disabled={currentSpread === totalSpreads - 1}
            className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md transition-all dark:border-white/10 dark:bg-zinc-900/80 ${
              currentSpread === totalSpreads - 1
                ? 'opacity-40 cursor-not-allowed text-zinc-400'
                : 'text-zinc-800 hover:border-amber-500 hover:text-amber-600 dark:text-zinc-200 dark:hover:text-amber-400'
            }`}
          >
            <span>Next Page</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
