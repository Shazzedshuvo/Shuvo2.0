'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  FileText,
  Mail,
  Phone,
  Check,
  Copy,
  Layers,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Globe,
  Zap,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function AboutMe() {
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 transition-colors duration-300 scroll-mt-20 overflow-visible"
    >
      {/* Subtle ambient light matching the Hero section */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: Minimalist, sophisticated, consistent with Hero Section */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            {/* Top Badge (Consistent with Image 1 Hero badge) */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive Developer Dossier</span>
            </div>

            {/* Small Subtitle Tag in Image 2 Amber/Gold Color */}
            <p className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
              <span>MD. SHAZZED HOSSEN SHUVO &bull; DOSSIER</span>
            </p>

            {/* Main Headline (Exact match to Image 1: Bold White + Muted Gray) */}
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:tracking-[-0.04em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white leading-[1.1]">
              Turning vision into{' '}
              <span className="text-zinc-400 dark:text-white/40">real products.</span>
            </h2>

            {/* Subtitle (Image 1 style muted copy) */}
            <p className="mt-4 text-sm leading-relaxed sm:text-base text-zinc-600 dark:text-white/55 font-normal max-w-xl">
              Pinned cards that stack, turn, and dissolve as you scroll — explore my engineering philosophy, full-stack MERN &amp; Next.js arsenal, professional footprint at <strong className="font-semibold text-zinc-900 dark:text-white">SoftvenceAgency</strong>, and academic credentials.
            </p>
          </div>

          {/* Controls: Stack / Grid Switcher + Let's Talk (Image 1 Neumorphic dark button style) */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-1 p-1 rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] backdrop-blur-md">
              <button
                type="button"
                id="stackBtn"
                onClick={() => setViewMode('stack')}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  viewMode === 'stack'
                    ? 'border border-black/15 bg-white text-zinc-900 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white'
                    : 'text-zinc-600 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                ◫ Scroll Stack
              </button>

              <button
                type="button"
                id="gridBtn"
                onClick={() => setViewMode('grid')}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'border border-black/15 bg-white text-zinc-900 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white'
                    : 'text-zinc-600 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                ▦ Grid View
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10 dark:hover:border-white/25"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* STACK VIEW (Pinned Cards that Stack as you scroll) */}
        {viewMode === 'stack' && (
          <div id="stackView" className="relative">
            
            {/* CARD 1: PHILOSOPHY & BIO */}
            <div
              className="project-stack-card group transition-all duration-300"
              style={{
                position: 'sticky',
                top: '90px',
                width: '100%',
                marginBottom: '70px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#09090b',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="relative w-full p-6 sm:p-9 lg:p-10 box-border overflow-hidden">
                {/* Subtle dark background image */}
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                  alt="Philosophy"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-[#09090b]/80 pointer-events-none" />

                {/* Card Top Header */}
                <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap mb-6">
                  <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f59e0b] font-mono text-[11px] font-bold tracking-[1.5px] uppercase">
                    01. PHILOSOPHY &amp; BIO
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/40 font-mono text-xs font-semibold">
                    01/04
                  </span>
                </div>

                {/* Card Main Body: 2 Columns */}
                <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-start">
                  
                  {/* Left Column: Narrative Bio & Contacts */}
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      {/* Image 2 style tag: ✨ THE ENGINEERING MINDSET */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-3">
                        <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
                        <span>THE ENGINEERING MINDSET</span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                        Turning ideas into{' '}
                        <span className="text-white/40">scalable products.</span>
                      </h3>

                      <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-white/65 font-normal">
                        <p>
                          Hello! I&apos;m <strong className="font-semibold text-white">Sazzad Shuvo</strong> (Md. Sazzad Hossen Shuvo),
                          a passionate <strong className="text-white">MERN Stack Developer</strong> with hands-on expertise building responsive, high-performance web applications, eCommerce stores, and CMS websites with clean, maintainable architecture.
                        </p>
                        <p>
                          Having deep hands-on expertise in <strong className="text-white">React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js</strong>, and{' '}
                          <strong className="text-white">MongoDB</strong>, I specialize in architecting intuitive user interfaces, REST APIs, reusable components, and high-converting platforms.
                        </p>
                        <p>
                          In addition to custom full-stack software, I develop CMS ecosystems across <strong className="text-white">WordPress, Shopify, Wix, Squarespace, and Framer</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Direct Contact Cards with copy */}
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <div
                        onClick={() => handleCopy(siteConfig.email, 'email')}
                        className="group/mail flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 transition hover:border-white/20 hover:bg-white/[0.05]"
                        title="Click to copy email"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-[#f59e0b]">
                            <Mail className="h-4 w-4" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-[10px] font-mono uppercase text-white/40">Email Address</div>
                            <div className="text-xs font-bold font-mono text-white/90 truncate">
                              {siteConfig.email}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-white/40 group-hover/mail:text-white">
                          {copiedField === 'email' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                        </span>
                      </div>

                      <div
                        onClick={() => handleCopy(siteConfig.phone, 'phone')}
                        className="group/phone flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 transition hover:border-white/20 hover:bg-white/[0.05]"
                        title="Click to copy phone"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-emerald-400">
                            <Phone className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono uppercase text-white/40">Phone / WhatsApp</div>
                            <div className="text-xs font-bold font-mono text-white/90">
                              {siteConfig.phone}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-white/40 group-hover/phone:text-emerald-400">
                          {copiedField === 'phone' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Status, Metrics Matrix & Resume Hub */}
                  <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
                    {/* Live Status Card */}
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-4 backdrop-blur-xl">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                          Active Status
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm font-semibold text-white">
                        Web Developer at SoftvenceAgency
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        Based in Mohakhali, Wireless Gate, Dhaka, Bangladesh
                      </p>
                    </div>

                    {/* Metrics Matrix (Clean obsidian boxes) */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-center">
                        <div className="text-2xl font-black text-white">2+</div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40">Years Exp</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-center">
                        <div className="text-2xl font-black text-white">15+</div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40">Projects</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-center">
                        <div className="text-2xl font-black text-white">100%</div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40">Commitment</div>
                      </div>
                    </div>

                    {/* Official Resume Hub (Clean monochrome style) */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-white">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#f59e0b] mb-1">
                        Official Resume Document
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        Sazzad Shuvo — MERN Stack Developer
                      </h4>
                      <p className="mt-1 text-xs text-white/50">
                        Download complete CV with project links, skills, and certification.
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2.5">
                        <a
                          href="/shuvos-cv.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          download="Sazzad-Shuvo-CV.pdf"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20 hover:border-white/30"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Download CV</span>
                        </a>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/60 hover:text-white hover:bg-white/[0.06] transition"
                        >
                          <span>Let&apos;s Talk</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 2: TECHNICAL ARSENAL */}
            <div
              className="project-stack-card group transition-all duration-300"
              style={{
                position: 'sticky',
                top: '115px',
                width: '100%',
                marginBottom: '70px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#09090b',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="relative w-full p-6 sm:p-9 lg:p-10 box-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="Arsenal"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-[#09090b]/80 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap mb-6">
                  <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f59e0b] font-mono text-[11px] font-bold tracking-[1.5px] uppercase">
                    02. TECHNICAL ARSENAL
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/40 font-mono text-xs font-semibold">
                    02/04
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <div>
                      {/* Image 2 style tag */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-1">
                        <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
                        <span>SKILL CATEGORIZATION // ATS OPTIMIZED</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Technical Stack &amp; Tools
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/40">
                      Full-Stack MERN + CMS Mastery
                    </span>
                  </div>

                  {/* 4 Skill Categories Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* 1. Frontend */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                          <Code2 className="h-4 w-4 text-[#f59e0b]" />
                          <span>Frontend Engineering</span>
                        </div>
                        <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white/60">
                          React 19 &bull; Next.js
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion'].map((item) => (
                          <span key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 2. Backend */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                          <Layers className="h-4 w-4 text-[#f59e0b]" />
                          <span>Backend &amp; Databases</span>
                        </div>
                        <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white/60">
                          Node &bull; Express &bull; Mongo
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['Node.js', 'Express.js', 'MongoDB', 'Next.js API Routes', 'REST APIs', 'JWT Authentication', 'Bcrypt.js'].map((item) => (
                          <span key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3. CMS & eCommerce */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                          <Globe className="h-4 w-4 text-[#f59e0b]" />
                          <span>CMS &amp; eCommerce Systems</span>
                        </div>
                        <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white/60">
                          WordPress &bull; Shopify &bull; Wix
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Framer', 'CMS Development', 'Theme Customization', 'eCommerce Development'].map((item) => (
                          <span key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 4. Tools & DevOps */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                          <Zap className="h-4 w-4 text-[#f59e0b]" />
                          <span>Tools, Optimization &amp; DevOps</span>
                        </div>
                        <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white/60">
                          Git &bull; Performance &bull; SEO
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['Git', 'GitHub', 'NPM', 'Responsive Web Design', 'API Integration', 'Performance Optimization', 'SEO Optimization'].map((item) => (
                          <span key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/80">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <a
                      href="/shuvos-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20 hover:border-white/30"
                    >
                      <span>Download Technical CV</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 3: CAREER TRACK */}
            <div
              className="project-stack-card group transition-all duration-300"
              style={{
                position: 'sticky',
                top: '140px',
                width: '100%',
                marginBottom: '70px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#09090b',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="relative w-full p-6 sm:p-9 lg:p-10 box-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
                  alt="Career"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-[#09090b]/80 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap mb-6">
                  <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f59e0b] font-mono text-[11px] font-bold tracking-[1.5px] uppercase">
                    03. CAREER TRACK
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/40 font-mono text-xs font-semibold">
                    03/04
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <div>
                      {/* Image 2 style tag */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-1">
                        <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
                        <span>PROFESSIONAL FOOTPRINT RECORD</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Industry Experience
                      </h3>
                    </div>
                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-white/60 self-start sm:self-auto">
                      2025 – Present
                    </span>
                  </div>

                  {/* SoftvenceAgency Main Showcase */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Web Developer
                        </h4>
                        <p className="text-sm font-semibold text-white/60 font-mono mt-0.5">
                          SoftvenceAgency
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.04] px-3 py-1 text-xs font-mono text-emerald-400 self-start sm:self-auto">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Full-time &bull; 2025 - Present
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65 font-normal">
                      Work on modern websites, web applications, eCommerce stores, and CMS-based projects, focusing on responsive development, clean UI implementation, performance optimization, and scalable digital solutions.
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Architecting responsive, conversion-focused web applications with React 19, Next.js, and TypeScript</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Crafting custom CMS themes and headless eCommerce solutions on WordPress, Shopify, Wix, and Framer</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Ensuring high performance, fluid animations with Framer Motion, and robust SEO optimization</span>
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="mt-5 flex flex-wrap gap-2 pt-2">
                      {['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'WordPress', 'Shopify', 'Wix', 'Framer', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono font-medium text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20 hover:border-white/30"
                    >
                      <span>Let&apos;s Work Together</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 4: EDUCATION & CERTS */}
            <div
              className="project-stack-card group transition-all duration-300"
              style={{
                position: 'sticky',
                top: '165px',
                width: '100%',
                marginBottom: '40px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#09090b',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="relative w-full p-6 sm:p-9 lg:p-10 box-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Education"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-[#09090b]/80 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap mb-6">
                  <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f59e0b] font-mono text-[11px] font-bold tracking-[1.5px] uppercase">
                    04. EDUCATION &amp; CERTS
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/40 font-mono text-xs font-semibold">
                    04/04
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <div>
                      {/* Image 2 style tag */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-1">
                        <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
                        <span>ACADEMIC FOUNDATION &amp; CREDENTIALS</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Education &amp; Certification
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/40">
                      Uttara University &bull; Bdcalling
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Degree 1 */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-mono text-white/60">
                          2025 – Present
                        </span>
                        <GraduationCap className="h-4 w-4 text-[#f59e0b]" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        B.Sc. in Computer Science &amp; Engineering (CSE)
                      </h4>
                      <p className="text-xs font-medium text-white/60 mt-0.5">
                        Ongoing — Uttara University
                      </p>
                      <p className="text-xs text-white/40 mt-2">
                        Uttara, Dhaka 1230, Bangladesh
                      </p>
                    </div>

                    {/* Degree 2 */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-mono text-white/60">
                          2020 – 2024
                        </span>
                        <Award className="h-4 w-4 text-white/50" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        Diploma in Computer Technology
                      </h4>
                      <p className="text-xs font-medium text-white/60 mt-0.5">
                        Completed — Thakurgaon Polytechnic Institute
                      </p>
                      <p className="text-xs text-white/40 mt-2">
                        Thakurgaon, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Professional Certification Card */}
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b] mb-1">
                      <Award className="h-4 w-4 text-[#f59e0b]" />
                      <span>Professional Certification</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Mastering MERN Stack Web Development
                    </h4>
                    <p className="text-xs text-white/60 mt-1">
                      <strong className="text-white">Bdcalling Academy</strong> &bull; Dec 2025
                    </p>
                  </div>

                  {/* Languages Box */}
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4.5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2">
                      Language Proficiency
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80">
                        🇧🇩 Bangla: <span className="text-emerald-400 font-normal">Native / Fluent</span>
                      </span>
                      <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80">
                        🇬🇧 English: <span className="text-white/60 font-normal">Professional / Fluent</span>
                      </span>
                      <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80">
                        🇮🇳 Hindi: <span className="text-white/40 font-normal">Basic</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <a
                      href="/shuvos-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20 hover:border-white/30"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Download Certified Resume</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div id="gridView" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grid Card 1 */}
            <div className="p-6 rounded-[28px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#09090b] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                  01. Philosophy &amp; Bio
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Turning ideas into scalable products.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/60">
                  MERN Stack Developer with hands-on expertise building responsive, high-performance web applications, eCommerce stores, and CMS websites with clean architecture.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Shopify', 'WordPress'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-500">2+ Years Exp &bull; 15+ Projects</span>
                <a href="#contact" className="text-xs font-bold text-[#f59e0b] hover:underline">Contact →</a>
              </div>
            </div>

            {/* Grid Card 2 */}
            <div className="p-6 rounded-[28px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#09090b] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                  02. Technical Arsenal
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Technical Stack &amp; Tools
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/60">
                  Full-stack MERN &amp; Next.js ecosystem, categorized for ATS optimization across Frontend, Backend, CMS platforms, and DevOps.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['Frontend', 'Backend', 'Databases', 'CMS & eCommerce', 'DevOps & SEO'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400">React 19 &bull; Next.js &bull; Node</span>
                <a href="#skills" className="text-xs font-bold text-[#f59e0b] hover:underline">Skills →</a>
              </div>
            </div>

            {/* Grid Card 3 */}
            <div className="p-6 rounded-[28px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#09090b] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500">
                  03. Career Track
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Web Developer at SoftvenceAgency
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/60">
                  Developing conversion-focused web applications, custom CMS themes, and headless eCommerce platforms with fluid animations and optimal performance.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['Full-time', '2025 – Present', 'SoftvenceAgency', 'Mohakhali, Dhaka'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-500">● Active Status</span>
                <a href="#projects" className="text-xs font-bold text-[#f59e0b] hover:underline">Works →</a>
              </div>
            </div>

            {/* Grid Card 4 */}
            <div className="p-6 rounded-[28px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#09090b] shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                  04. Education &amp; Certs
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Academic Foundation &amp; Credentials
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/60">
                  B.Sc. in CSE at Uttara University, Diploma in Computer Technology, and professional MERN certification from Bdcalling Academy.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['Uttara University', 'CSE', 'Diploma', 'Bdcalling Academy'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/5 border border-white/10 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400">Bangla &bull; English &bull; Hindi</span>
                <a href="/shuvos-cv.pdf" target="_blank" className="text-xs font-bold text-[#f59e0b] hover:underline">Resume ↗</a>
              </div>
            </div>
          </div>
        )}

        {/* CTA BANNER: Minimalist & Consistent with Website */}
        <div className="mt-14 rounded-[28px] border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#f59e0b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                <span>Let&apos;s Discuss</span>
              </div>
              <h4 className="mt-3 text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Ready to build something amazing?
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-white/55 leading-relaxed">
                Let&apos;s turn your ideas into a high-converting digital product. Contact me today to get started.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-zinc-900 px-6 py-3 text-xs font-medium text-white shadow-sm transition hover:bg-black dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                <span>Get in touch →</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
