'use client';

import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import ProjectModal from '../ui/ProjectModal';
import { Project } from '@/lib/types';
import { siteConfig } from '@/lib/data/siteConfig';

const projects: Project[] = [
  {
    id: 'techlearning-platform',
    title: 'TechLearning Platform',
    tagline: 'Modern Developer Learning & Portfolio Hub',
    description: 'A high-performance modern web application built with Next.js 15, React 19, and Tailwind CSS. Features course tracks, interactive challenges, smooth page transitions, and optimized server-side rendering.',
    category: 'Next.js Apps',
    image: '/gellary/mockup-1.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Interactive curriculum roadmap with progress tracking',
      'Dynamic dark/light mode with custom CSS tokens',
      'Lightning-fast compilation and 99+ Lighthouse performance'
    ],
    liveUrl: 'https://techlearning-website.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2026'
  },
  {
    id: 'elatronix-store',
    title: 'ElectroShop E-Commerce',
    tagline: 'Full-Stack MERN Electronics Store',
    description: 'Full-featured eCommerce web application built with React, Redux, Node.js, Express, and MongoDB. Includes shopping cart, secure Stripe payment gateway, product filtering, and order management.',
    category: 'Full-Stack MERN',
    image: '/gellary/mockup-2.png',
    tags: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'JWT-authenticated user registration, login, and profile dashboard',
      'MongoDB Atlas cluster with optimized aggregation pipelines',
      'Instant search, multi-attribute filtering, and stock level alerts'
    ],
    liveUrl: 'https://elatronix-store420.netlify.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2025'
  },
  {
    id: 'nova-ai-saas',
    title: 'NovaAI - 3D Generative Platform',
    tagline: 'Next-Gen 3D SaaS with WebGL & Three.js',
    description: 'Futuristic 3D WebGL SaaS landing page featuring real-time Three.js mesh distortions, interactive prompt generator interfaces, and responsive pricing matrices.',
    category: 'Creative UI',
    image: '/gellary/mockup-3.png',
    tags: ['Three.js', 'WebGL', 'Next.js', 'Tailwind CSS'],
    features: [
      'Interactive 3D particle sphere responding to cursor velocity and scroll depth',
      'Glassmorphic dashboard with live telemetry indicators',
      'Dark obsidian cyber aesthetic with neon emerald and cyan highlights'
    ],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2026'
  }
];

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
                      className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
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
