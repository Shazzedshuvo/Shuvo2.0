'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '@/lib/data/siteConfig';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const techBadges = [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'TypeScript',
    'Tailwind CSS',
    'WordPress',
    'Shopify',
    'Three.js'
  ];

  useEffect(() => {
    const playHeroAnimation = () => {
      if (!heroRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          '.hero-badge',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 }
        )
          .fromTo(
            '.hero-subtitle',
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.4'
          )
          .fromTo(
            '.hero-title span',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
            '-=0.3'
          )
          .fromTo(
            '.hero-description',
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.7 },
            '-=0.5'
          )
          .fromTo(
            '.hero-buttons a',
            { opacity: 0, y: 25, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
            '-=0.4'
          )
          .fromTo(
            '.tech-badge',
            { opacity: 0, y: 20, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04 },
            '-=0.4'
          )
          .fromTo(
            '.hero-image',
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 1 },
            '-=0.6'
          );
      }, heroRef);

      return () => ctx.revert();
    };

    window.addEventListener('portfolio-loaded', playHeroAnimation);
    const timer = setTimeout(playHeroAnimation, 800);

    return () => {
      window.removeEventListener('portfolio-loaded', playHeroAnimation);
      clearTimeout(timer);
    };
  }, []);

  // 3D subtle mouse tilt effect on desktop portrait
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapRef.current) return;
    const card = imageWrapRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x * 0.02,
      rotateX: -y * 0.02,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    if (!imageWrapRef.current) return;
    gsap.to(imageWrapRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <section ref={heroRef} id="hero" className="relative overflow-hidden pt-24 sm:pt-28 scroll-mt-20">
      {/* Ambient background light circle (exact match to Arafat) */}
      <div className="absolute left-1/2 top-20 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] dark:bg-white/[0.04] blur-3xl pointer-events-none" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-start gap-12 sm:gap-16 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 lg:grid-cols-[1.15fr_.85fr]">
        
        {/* Left Column: Headline & Bio Copy */}
        <div className="hero-copy relative z-10">
          
          {/* Availability Status Badge */}
          <div className="hero-badge mb-5 sm:mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for freelance projects
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle mb-4 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 dark:text-white/40">
            MD. SHAZZED HOSSEN SHUVO • MERN STACK DEVELOPER
          </p>

          {/* Main 3-Line Heading */}
          <h1 className="hero-title max-w-4xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:tracking-[-0.04em] text-zinc-900 sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-white">
            <span className="block">I build</span>
            <span className="block text-zinc-400 dark:text-white/40">digital products</span>
            <span className="block">that work.</span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-6 sm:mt-8 max-w-2xl text-sm leading-relaxed sm:text-lg sm:leading-7 text-zinc-600 dark:text-white/55">
            Analytical, self-motivating and confident Full-Stack Developer specializing in React.js, Next.js, Node.js, Express.js and MongoDB. Web Developer at{' '}
            <span className="text-zinc-900 dark:text-white font-semibold">softvence.agency</span>.
            I thrive on building beautiful, robust and conversion-focused web experiences.
          </p>

          {/* Neumorphic Action Buttons */}
          <div className="hero-buttons mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#projects" className="btn-neumorphic text-sm !py-3 sm:!py-3.5">
              <span>View My Work</span>
              <span>→</span>
            </a>
            <a href="#contact" className="btn-neumorphic text-sm !py-3 sm:!py-3.5">
              <span>Start a Project</span>
            </a>
          </div>

          {/* Tech Badges Row */}
          <div className="mt-12 flex flex-wrap gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="tech-badge rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs font-medium text-zinc-700 transition hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:text-white/60 dark:hover:border-white/30"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Mobile Portrait (Shown under tech badges on mobile screens like Arafat's) */}
          <div className="relative mt-10 flex items-center justify-center overflow-hidden rounded-3xl lg:hidden">
            <img
              src="/shuvo.png"
              alt="MD. SHAZZED HOSSEN SHUVO"
              className="h-auto max-h-[460px] sm:max-h-[520px] w-auto max-w-full object-contain object-top drop-shadow-xl"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#edf0f5] via-[#edf0f5]/60 to-transparent dark:from-[#080808] dark:via-[#080808]/60 dark:to-transparent" />
          </div>
        </div>

        {/* Right Column: Desktop Portrait (Exact layout matching Arafat 2.0) */}
        <div
          ref={imageWrapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:block hero-image-wrap relative mb-0"
        >
          <div className="relative overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
            <img
              src="/shuvo.png"
              alt="MD. SHAZZED HOSSEN SHUVO"
              className="hero-image block aspect-[920/640] h-[520px] lg:h-[560px] xl:h-[600px] w-full object-cover object-top drop-shadow-2xl"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#edf0f5] via-[#edf0f5]/70 to-transparent dark:from-[#080808] dark:via-[#080808]/70 dark:to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
