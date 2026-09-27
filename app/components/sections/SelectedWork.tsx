'use client';

import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import ProjectModal from '../ui/ProjectModal';
import { Project } from '@/lib/types';
import { siteConfig } from '@/lib/data/siteConfig';
import { projectsData as projects } from '@/lib/data/projectsData';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (p: Project) => {
    setActiveProject(p);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 transition-colors duration-300 scroll-mt-20 gsap-fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-[#0d0d0f]/80 sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b] mb-3">
                <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
                Featured Projects
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                Selected Work
              </h2>
            </div>
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neumorphic self-start text-xs !px-4 !py-2 sm:self-auto inline-flex items-center gap-1.5"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Projects 3-Column Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 gsap-stagger-group">
            {projects.map((project) => (
              <div
                key={project.id}
                className="gsap-stagger-item group relative overflow-hidden rounded-[24px] border border-black/10 bg-white/90 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-xl dark:border-white/10 dark:bg-[#121215] dark:hover:border-white/25 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div>
                  <div
                    onClick={() => handleOpen(project)}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer bg-black/5 dark:bg-white/5"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full border border-black/10 bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-4">
                    <h3
                      onClick={() => handleOpen(project)}
                      className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-[#f59e0b] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-white/50 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badges & Actions */}
                <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/5 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                        className="h-8 w-8 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center hover:opacity-85 transition-opacity"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Portals Banner */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02] p-6 backdrop-blur-xl transition hover:border-black/20 dark:hover:border-white/20">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#f59e0b]">
                  Featured Portal
                </span>
                <span className="flex h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
              </div>
              <h4 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
                Shuvo&apos;s Projects Catalog
              </h4>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Explore the dedicated project portal featuring full-stack applications &amp; experiments at shuvos-projects.vercel.app.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="/shuvos-projects"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-black dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <span>Open Page</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://shuvos-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#f59e0b] hover:underline"
                >
                  shuvos-projects.vercel.app ↗
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02] p-6 backdrop-blur-xl transition hover:border-black/20 dark:hover:border-white/20">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#f59e0b]">
                  Classic Archive
                </span>
                <span className="flex h-2 w-2 rounded-full bg-[#f59e0b]" />
              </div>
              <h4 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
                Portfolio 1.0 (Original Edition)
              </h4>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Take a look back at Portfolio 1.0 and where the engineering journey began at shazzedshuvo.vercel.app.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="/portfolio-1"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-black dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <span>Open Page</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://shazzedshuvo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#f59e0b] hover:underline"
                >
                  shazzedshuvo.vercel.app ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        projects={projects}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProject={(p) => setActiveProject(p)}
      />
    </section>
  );
}
