'use client';

import React, { useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiShopify,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiPostman,
  SiFramer,
  SiRedux,
  SiHtml5,
  SiWix,
  SiSquarespace,
  SiJsonwebtokens
} from 'react-icons/si';

const coreStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#808080' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Shopify', icon: SiShopify, color: '#7AB55C' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' }
];

const allSkillsList = [
  { name: 'JavaScript', category: 'Languages', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', category: 'Languages', icon: SiHtml5, color: '#E34F26' },
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js 15', category: 'Frontend', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', category: 'Frontend', icon: SiFramer, color: '#FF0080' },
  { name: 'Redux Toolkit', category: 'Frontend', icon: SiRedux, color: '#764ABC' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, color: '#808080' },
  { name: 'REST APIs', category: 'Backend', icon: SiPostman, color: '#FF6C37' },
  { name: 'JWT Auth', category: 'Backend', icon: SiJsonwebtokens, color: '#D63AFF' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', category: 'Tools', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', category: 'Tools', icon: SiGithub, color: '#181717' },
  { name: 'Postman', category: 'Tools', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', category: 'Tools', icon: SiVercel, color: '#000000' },
  { name: 'Figma', category: 'Tools', icon: SiFigma, color: '#F24E1E' },
  { name: 'WordPress', category: 'CMS & Platforms', icon: SiWordpress, color: '#21759B' },
  { name: 'Shopify', category: 'CMS & Platforms', icon: SiShopify, color: '#7AB55C' },
  { name: 'Wix Studio', category: 'CMS & Platforms', icon: SiWix, color: '#0C0C0C' },
  { name: 'Squarespace', category: 'CMS & Platforms', icon: SiSquarespace, color: '#000000' },
];

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'CMS & Platforms'];

export default function TechSkills() {
  const [expanded, setExpanded] = useState(false);
  const [selectedCat, setSelectedCat] = useState('All');

  const filtered =
    selectedCat === 'All'
      ? allSkillsList
      : allSkillsList.filter((s) => s.category === selectedCat);

  return (
    <section
      id="skills"
      className="border-b border-black/10 bg-black/[0.015] py-16 sm:py-20 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.015] scroll-mt-20 gsap-fade-up"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-[#0d0d0f]/80 sm:p-8 md:p-10">
          {/* Section Header */}
          <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                TOOLS &amp; SKILLS
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                Technologies I Use
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/5 dark:bg-white/[0.04] dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Stack Mastery</span>
            </div>
          </div>

          {/* Single-Row Core Stack (9 columns on desktop) */}
          <div className="mt-6">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-3 gsap-stagger-group">
              {coreStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="gsap-stagger-item group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02] transition-all duration-300 hover:scale-105 hover:border-black/15 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-[#151518]"
                  >
                    <div
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      <Icon />
                    </div>
                    <span className="mt-2 text-xs font-semibold text-zinc-800 dark:text-white/80 text-center">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expandable Skills Section */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-t border-black/5 pt-6 pb-4 dark:border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCat === cat
                      ? 'border border-black/15 bg-zinc-900 text-white shadow-sm dark:border-white/20 dark:bg-white/15 dark:text-white'
                      : 'bg-black/5 text-zinc-600 hover:bg-black/10 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filtered Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
              {filtered.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]"
                  >
                    <div className="text-xl" style={{ color: skill.color }}>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                        {skill.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 dark:text-white/40 font-mono">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar with Expand/Collapse */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-black/5 pt-4 dark:border-white/5">
            <div className="flex items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Hover over any tech icon or click &ldquo;More&rdquo; to expand the full stack</span>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-semibold text-[#f59e0b] hover:underline cursor-pointer"
            >
              {expanded ? 'Collapse skills ↑' : `View all ${allSkillsList.length} skills ↓`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
