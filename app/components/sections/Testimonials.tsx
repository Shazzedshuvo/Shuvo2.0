'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '@/lib/data/testimonialsData';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 transition-colors duration-300 scroll-mt-20 gsap-fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[24px] sm:rounded-[28px] border border-black/10 bg-white/70 p-4 sm:p-8 md:p-10 shadow-sm backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-[#0d0d0f]/80">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                TESTIMONIALS
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                What Clients Say
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Previous Testimonial"
                className="flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-full border border-black/[0.06] bg-white/80 text-zinc-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-md active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/[0.1]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Next Testimonial"
                className="flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-full border border-black/[0.06] bg-white/80 text-zinc-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-md active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/[0.1]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cards slider */}
          <div
            ref={scrollRef}
            className="flex w-full gap-4 sm:gap-6 overflow-x-auto px-0.5 py-3 sm:py-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialsData.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[290px] sm:w-[360px] p-6 rounded-2xl border border-black/5 bg-white/90 dark:border-white/5 dark:bg-[#131316] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-white/70 leading-relaxed italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.clientName}
                    className="h-10 w-10 rounded-full object-cover border border-black/10 dark:border-white/10"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                      {review.clientName}
                    </h4>
                    <p className="text-[10px] text-zinc-500 dark:text-white/40">
                      {review.role}, <span className="text-[#f59e0b] font-medium">{review.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
