'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  Award,
  Sparkles,
  ArrowRight,
  Globe,
  FileText,
  User,
  Zap,
  CheckCircle2,
  ShieldCheck,
  FolderGit2
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function InteractiveBook() {
  // Active Tab: 'narrative' | 'arsenal' | 'experience' | 'education'
  const [activeTab, setActiveTab] = useState<'narrative' | 'arsenal' | 'experience' | 'education'>('narrative');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const navTabs = [
    { id: 'narrative', label: '01. Philosophy & Bio', icon: User, subtitle: 'Mindset & Vision' },
    { id: 'arsenal', label: '02. Technical Arsenal', icon: Cpu, subtitle: 'MERN & Next.js' },
    { id: 'experience', label: '03. Career Track', icon: Briefcase, subtitle: 'SoftvenceAgency' },
    { id: 'education', label: '04. Education & Certs', icon: GraduationCap, subtitle: 'Academics & Dec 2025' },
  ];

  return (
    <div className="w-full">
      {/* Top Interactive Glass Navigation Pills */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative flex items-center gap-2.5 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'text-white shadow-xl shadow-amber-500/15'
                  : 'border border-zinc-200/80 bg-white/70 text-zinc-600 hover:border-amber-500/40 hover:text-zinc-950 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDossierPill"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 shadow-md shadow-amber-500/25"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-amber-500 dark:text-amber-400'}`} />
                <span>{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Glassmorphic Interactive Deck Container */}
      <div className="relative mx-auto w-full max-w-5xl rounded-[32px] border border-zinc-200/90 bg-white/80 p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0c0c0f]/90">
        {/* Ambient Top Rim Glow */}
        <div className="pointer-events-none absolute -top-px left-1/2 -z-10 h-32 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-2xl" />

        <AnimatePresence mode="wait">
          {/* TAB 1: NARRATIVE & BIO */}
          {activeTab === 'narrative' && (
            <motion.div
              key="tab-narrative"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 lg:grid-cols-12"
            >
              {/* Left Column: Bio Narrative */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400 mb-3">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>The Engineering Mindset</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                    Turning ideas into{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                      scalable products.
                    </span>
                  </h3>

                  <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
                    <p>
                      Hello! I&apos;m <strong className="font-semibold text-zinc-900 dark:text-white">Sazzad Shuvo</strong> (Md. Sazzad Hossen Shuvo),
                      a passionate <strong className="text-amber-600 dark:text-amber-400">MERN Stack Developer</strong> with hands-on expertise building responsive, high-performance web applications, eCommerce stores, and CMS websites with clean, maintainable architecture.
                    </p>
                    <p>
                      Having deep hands-on expertise in <strong className="text-zinc-900 dark:text-white">React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js</strong>, and{' '}
                      <strong className="text-zinc-900 dark:text-white">MongoDB</strong>, I specialize in architecting intuitive user interfaces, REST APIs, reusable components, and high-converting platforms.
                    </p>
                    <p>
                      In addition to custom full-stack software, I develop CMS ecosystems across <strong className="text-zinc-900 dark:text-white">WordPress, Shopify, Wix, Squarespace, and Framer</strong>.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Cards */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div
                    onClick={() => handleCopy(siteConfig.email, 'email')}
                    className="group flex cursor-pointer items-center justify-between rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-3.5 transition hover:border-amber-500/40 hover:bg-amber-500/5 dark:border-white/10 dark:bg-zinc-900/40 dark:hover:bg-amber-500/10"
                    title="Click to copy email"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-mono uppercase text-zinc-400">Email Address</div>
                        <div className="text-xs font-bold font-mono text-zinc-800 dark:text-zinc-200 truncate">
                          {siteConfig.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-amber-500">
                      {copiedField === 'email' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </span>
                  </div>

                  <div
                    onClick={() => handleCopy(siteConfig.phone, 'phone')}
                    className="group flex cursor-pointer items-center justify-between rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-3.5 transition hover:border-emerald-500/40 hover:bg-emerald-500/5 dark:border-white/10 dark:bg-zinc-900/40 dark:hover:bg-emerald-500/10"
                    title="Click to copy phone"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-400">Phone / WhatsApp</div>
                        <div className="text-xs font-bold font-mono text-zinc-800 dark:text-zinc-200">
                          {siteConfig.phone}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-emerald-500">
                      {copiedField === 'phone' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Dossier Stats & Quick Badges */}
              <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
                {/* Live Status Card */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4.5 backdrop-blur-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Active Status
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Web Developer at SoftvenceAgency
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Based in Mohakhali, Wireless Gate, Dhaka, Bangladesh
                  </p>
                </div>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-4 text-center dark:border-white/10 dark:bg-zinc-900/40">
                    <div className="text-2xl font-black text-amber-500 dark:text-amber-400">2+</div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Years Exp</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-4 text-center dark:border-white/10 dark:bg-zinc-900/40">
                    <div className="text-2xl font-black text-emerald-500 dark:text-emerald-400">15+</div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Projects</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-4 text-center dark:border-white/10 dark:bg-zinc-900/40">
                    <div className="text-2xl font-black text-indigo-500 dark:text-indigo-400">100%</div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Commitment</div>
                  </div>
                </div>

                {/* Direct Action Hub */}
                <div className="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-zinc-900 to-black p-5 text-white shadow-xl dark:border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Official Resume Document
                  </div>
                  <h4 className="text-sm font-bold">
                    Sazzad Shuvo — MERN Stack Developer
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400">
                    Download complete CV with project links, skills, and certification.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <a
                      href="/shuvos-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Sazzad-Shuvo-CV.pdf"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:scale-105"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Download CV</span>
                    </a>
                    <button
                      onClick={() => setActiveTab('arsenal')}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/20 transition"
                    >
                      <span>Explore Tech Stack</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TECHNICAL ARSENAL */}
          {activeTab === 'arsenal' && (
            <motion.div
              key="tab-arsenal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-200 pb-4 dark:border-white/10">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
                    Skill Categorization // ATS Optimized
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                    Technical Stack &amp; Tools
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Full-Stack MERN + CMS Mastery
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* 1. Frontend */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      <Code2 className="h-4 w-4" />
                      <span>Frontend Engineering</span>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                      React 19 &bull; Next.js
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion'].map((item) => (
                      <span key={item} className="rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Backend */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <Layers className="h-4 w-4" />
                      <span>Backend &amp; Databases</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Node &bull; Express &bull; Mongo
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Node.js', 'Express.js', 'MongoDB', 'Next.js API Routes', 'REST APIs', 'JWT Authentication', 'Bcrypt.js'].map((item) => (
                      <span key={item} className="rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. CMS & eCommerce */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      <Globe className="h-4 w-4" />
                      <span>CMS &amp; eCommerce Systems</span>
                    </div>
                    <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      WordPress &bull; Shopify &bull; Wix
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Framer', 'CMS Development', 'Theme Customization', 'eCommerce Development'].map((item) => (
                      <span key={item} className="rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Tools & Other */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      <Zap className="h-4 w-4" />
                      <span>Tools, Optimization &amp; DevOps</span>
                    </div>
                    <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400">
                      Git &bull; Performance &bull; SEO
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Git', 'GitHub', 'NPM', 'Responsive Web Design', 'API Integration', 'Performance Optimization', 'SEO Optimization'].map((item) => (
                      <span key={item} className="rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CAREER TRACK */}
          {activeTab === 'experience' && (
            <motion.div
              key="tab-experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-200 pb-4 dark:border-white/10">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                    Professional Experience Record
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                    Industry Experience
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  2025 – Present
                </span>
              </div>

              {/* SoftvenceAgency Main Card */}
              <div className="rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 p-6 sm:p-8 dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/60">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                      Web Developer
                    </h4>
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                      SoftvenceAgency
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Full-time &bull; 2025 - Present
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
                  Work on modern websites, web applications, eCommerce stores, and CMS-based projects, focusing on responsive development, clean UI implementation, performance optimization, and scalable digital solutions.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-zinc-200/80 pt-5 dark:border-white/10">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Architecting responsive, conversion-focused web applications with React 19, Next.js, and TypeScript</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Crafting custom CMS themes and headless eCommerce solutions on WordPress, Shopify, Wix, and Framer</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Ensuring high performance, fluid animations with Framer Motion, and robust SEO optimization</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'WordPress', 'Shopify', 'Wix', 'Framer', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="rounded-xl border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: EDUCATION & CERTIFICATIONS */}
          {activeTab === 'education' && (
            <motion.div
              key="tab-education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-200 pb-4 dark:border-white/10">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
                    Academic Foundation &amp; Credentials
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                    Education &amp; Certification
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Uttara University &bull; Bdcalling
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Degree 1 */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400">
                      2025 – Present
                    </span>
                    <GraduationCap className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    B.Sc. in Computer Science &amp; Engineering (CSE)
                  </h4>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mt-0.5">
                    Ongoing — Uttara University
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    Uttara, Dhaka 1230, Bangladesh
                  </p>
                </div>

                {/* Degree 2 */}
                <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded-full bg-zinc-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      2020 – 2024
                    </span>
                    <Award className="h-4 w-4 text-zinc-500" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    Diploma in Computer Technology
                  </h4>
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
                    Completed — Thakurgaon Polytechnic Institute
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    Thakurgaon, Bangladesh
                  </p>
                </div>
              </div>

              {/* Certification Box */}
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent p-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span>Professional Certification</span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  Mastering MERN Stack Web Development
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                  <strong className="text-amber-600 dark:text-amber-400">Bdcalling Academy</strong> &bull; Dec 2025
                </p>
              </div>

              {/* Languages Box */}
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-zinc-900/40">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  Language Proficiency
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="rounded-xl border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200">
                    🇧🇩 Bangla: <span className="text-emerald-500 font-normal">Native / Fluent</span>
                  </span>
                  <span className="rounded-xl border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200">
                    🇬🇧 English: <span className="text-indigo-500 font-normal">Professional / Fluent</span>
                  </span>
                  <span className="rounded-xl border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200">
                    🇮🇳 Hindi: <span className="text-amber-500 font-normal">Basic</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


