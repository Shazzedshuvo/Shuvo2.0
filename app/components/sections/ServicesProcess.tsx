'use client';

import React from 'react';

const services = [
  {
    num: '/ 01',
    title: 'Full-Stack Development',
    description: 'Complete web applications using the MERN stack with clean architecture and scalable backend systems.'
  },
  {
    num: '/ 02',
    title: 'Frontend Development',
    description: 'Modern, responsive and high-performance interfaces using React, Next.js and Tailwind CSS.'
  },
  {
    num: '/ 03',
    title: 'Backend & API',
    description: 'Secure REST APIs, authentication, database architecture and backend development using Node.js and Express.'
  },
  {
    num: '/ 04',
    title: 'Website & CMS Development',
    description: 'Professional websites for startups, businesses and eCommerce with Shopify, WordPress, and Framer.'
  }
];

const process = [
  {
    num: '01',
    title: 'Discover',
    description: 'Understand your goals, audience and technical requirements.'
  },
  {
    num: '02',
    title: 'Plan',
    description: 'Create the project structure, user flow and development roadmap.'
  },
  {
    num: '03',
    title: 'Develop',
    description: 'Build the frontend, backend, APIs and database with clean code.'
  },
  {
    num: '04',
    title: 'Launch',
    description: 'Test, optimize and deploy the final product for real users.'
  }
];

export default function ServicesProcess() {
  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="border-y border-black/10 bg-black/[0.015] transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.015] scroll-mt-20 gsap-fade-up"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="mb-12 sm:mb-16">
            <p className="mb-3 sm:mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
              WHAT I DO
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
              Services built around <span className="text-zinc-400 dark:text-white/35">your goals.</span>
            </h2>
          </div>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 gsap-stagger-group">
            {services.map((service) => (
              <div
                key={service.num}
                className="gsap-stagger-item rounded-2xl border border-black/10 bg-[#fdfdfd] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/25 hover:shadow-lg dark:border-white/10 dark:bg-[#080808] dark:hover:border-white/25 dark:hover:shadow-none"
              >
                <div className="mb-6 sm:mb-10 font-mono text-xs text-zinc-400 dark:text-white/25">
                  {service.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 sm:mt-4 max-w-lg text-xs sm:text-sm leading-relaxed sm:leading-7 text-zinc-600 dark:text-white/40">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 gsap-fade-up">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-3 sm:mb-5 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
              MY PROCESS
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
              Simple.<br />
              <span className="text-zinc-400 dark:text-white/35">Transparent.</span><br />
              Effective.
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10 gsap-stagger-group">
            {process.map((step) => (
              <div
                key={step.num}
                className="gsap-stagger-item grid gap-2 sm:gap-4 py-5 sm:py-7 grid-cols-1 sm:grid-cols-[60px_180px_1fr] transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-2 rounded-xl"
              >
                <span className="font-mono text-xs text-zinc-400 dark:text-white/25">
                  {step.num}
                </span>
                <h3 className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed sm:leading-6 text-zinc-600 dark:text-white/40">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
