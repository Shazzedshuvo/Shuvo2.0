'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';
import { Project } from '@/lib/types';

const galleryItems: Project[] = [
  {
    id: 'img-1',
    title: 'Collaborative Study Platform',
    tagline: 'EdTech & Multi-Role MERN Application',
    description: 'Three-role ecosystem for Students, Tutors, and Admins with real-time session booking and interactive dashboards.',
    category: 'EdTech & MERN',
    image: '/gellary/mockup-1.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    features: ['Real-time session booking', 'Interactive student & tutor dashboards'],
    liveUrl: 'https://collaborative-study-website-9ehf.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-2',
    title: 'Volunteer for Bangladesh',
    tagline: 'Social Impact & Community Portal',
    description: 'Community volunteering portal where organizations post volunteer needs and coordinate initiatives seamlessly.',
    category: 'Social Impact',
    image: '/gellary/mockup-2.png',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    features: ['Volunteer request workflow', 'Event coordinator tools'],
    liveUrl: 'https://assignment-11-eabb3.web.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-3',
    title: 'Game Reviews Hub',
    tagline: 'Interactive Gaming & Review Platform',
    description: 'Interactive gaming platform where gamers explore curated game reviews, submit ratings, and manage wishlists.',
    category: 'Gaming & Web App',
    image: '/gellary/mockup-3.png',
    tags: ['React.js', 'Firebase', 'Tailwind CSS'],
    features: ['Curated review explorer', 'Personalized watchlist dashboard'],
    liveUrl: 'https://assignment-game-review.web.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-4',
    title: 'SaaS Analytics & Cloud Dashboard',
    tagline: 'Telemetry & Metric Intelligence Suite',
    description: 'Real-time analytics dashboard with live metrics, data telemetry, and refined dark-mode aesthetics.',
    category: 'Dashboard & SaaS',
    image: '/gellary/mockup-4.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    features: ['Live telemetry feeds', 'Custom charts and export pipelines'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-5',
    title: 'Mobile-First Commerce Suite',
    tagline: 'High-Conversion E-Commerce App',
    description: 'Optimized cross-device commerce experience with touch-friendly interactions and swift screen transitions.',
    category: 'E-Commerce',
    image: '/gellary/mockup-5.png',
    tags: ['React.js', 'Redux', 'Stripe API'],
    features: ['Instant mobile checkout', 'Filter and category drilldowns'],
    liveUrl: 'https://elatronix-store420.netlify.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-6',
    title: 'Interactive Services Portal',
    tagline: 'Full-Stack Client Portal System',
    description: 'Dynamic service portal offering seamless user authentication, role management, and streamlined workflows.',
    category: 'Full-Stack Portal',
    image: '/gellary/mockup-6.png',
    tags: ['Node.js', 'Express', 'MongoDB'],
    features: ['Role-based authorization', 'Automated ticketing queue'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-7',
    title: 'Full-Stack Cloud Architecture',
    tagline: 'Scalable Infrastructure & Microservices',
    description: 'End-to-end full-stack application structure combining robust backend Node.js APIs and modern frontend UI.',
    category: 'MERN Stack',
    image: '/gellary/mockup-7.png',
    tags: ['MERN Stack', 'Docker', 'AWS'],
    features: ['Microservices architecture', 'Zero downtime deployment'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-8',
    title: 'Enterprise Software Interface',
    tagline: 'Modular Business Operations Suite',
    description: 'Clean enterprise software mockup highlighting usability, modular components, and scalable frontend design.',
    category: 'Enterprise UI',
    image: '/gellary/mockup-8.png',
    tags: ['Next.js', 'Tailwind CSS'],
    features: ['Design tokens system', 'Accessible component library'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-9',
    title: 'High-Impact Digital Showcase',
    tagline: 'Creative Brand Experience & Micro-Interactions',
    description: 'High-impact landing page experience with sleek micro-interactions, dark aesthetic, and engaging layout.',
    category: 'Creative & Brand',
    image: '/gellary/mockup-9.png',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    features: ['Smooth kinetic typography', 'Physics-driven particle animations'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  },
  {
    id: 'img-10',
    title: 'Modern Product Design System',
    tagline: 'Design System & Component Library',
    description: 'Thoughtfully crafted product interface emphasizing clean aesthetics, seamless navigation, and visual clarity.',
    category: 'Product Design',
    image: '/gellary/mockup-10.jpg',
    tags: ['Figma', 'UI/UX', 'Tailwind CSS'],
    features: ['Comprehensive component tokens', 'Adaptive dark/light color palette'],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo'
  }
];

export default function ProjectGallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = direction === 'left' ? -360 : 360;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      id="gallery"
      className="relative w-full border-t border-black/10 bg-black/[0.015] py-16 sm:py-24 lg:py-28 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.015] scroll-mt-20 gsap-fade-up"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400 mb-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Interactive Gallery Carousel
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
              Project <span className="text-zinc-400 dark:text-white/35">Showcase.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-white/50 max-w-xl">
              Explore high-fidelity mockups and visual designs across web, mobile, and full-stack projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 ${isAutoPlaying ? '' : 'hidden'}`} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span>{isAutoPlaying ? 'Auto Playing' : 'Paused'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Previous Slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black/[0.02] hover:shadow-md active:translate-y-0 dark:border-white/15 dark:bg-[#121216] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Next Slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black/[0.02] hover:shadow-md active:translate-y-0 dark:border-white/15 dark:bg-[#121216] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div
          ref={sliderRef}
          className="flex gap-4 py-4 overflow-x-auto scrollbar-none select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveProject(item);
                setIsModalOpen(true);
              }}
              className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[420px] rounded-2xl overflow-hidden border border-black/10 bg-white dark:border-white/10 dark:bg-[#121216] cursor-pointer group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10 dark:bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" /> Quick View
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-white/50">
                    {item.category}
                  </p>
                </div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        projects={galleryItems}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProject={(p) => setActiveProject(p)}
      />
    </section>
  );
}
