'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Set initial offscreen position
    gsap.set([cursor, follower], { x: -100, y: -100, opacity: 0 });

    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
      }

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.28,
        ease: 'power2.out',
      });
    };

    const addHover = () => {
      gsap.to(follower, {
        scale: 1.7,
        backgroundColor: 'rgba(99, 102, 241, 0.12)',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        duration: 0.25,
      });
    };

    const removeHover = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(150, 150, 150, 0.3)',
        duration: 0.25,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const attachListeners = () => {
      const interactives = document.querySelectorAll<HTMLElement>('a, button, input, textarea, .cursor-pointer');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    attachListeners();
    const timer = setTimeout(attachListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[99999] h-2 w-2 rounded-full bg-[#f59e0b] hidden md:block"
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[99998] h-8 w-8 rounded-full border border-black/20 dark:border-white/20 transition-colors duration-200 hidden md:block"
      />
    </>
  );
}
