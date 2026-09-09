'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initAnimations = () => {
      // 1. ScrollTrigger for .gsap-fade-up sections
      const fadeElements = document.querySelectorAll<HTMLElement>('.gsap-fade-up');
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. ScrollTrigger for Stagger groups
      const staggerGroups = document.querySelectorAll<HTMLElement>('.gsap-stagger-group');
      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 3. Stat Number Counting Animation
      const statBoxes = document.querySelectorAll<HTMLElement>('.stat-num-val');
      statBoxes.forEach((stat) => {
        const target = parseFloat(stat.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            stat.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      // 4. Magnetic hover effect on .btn-neumorphic
      const magneticButtons = document.querySelectorAll<HTMLElement>('.btn-neumorphic');
      magneticButtons.forEach((btn) => {
        const onMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.3,
            ease: 'power1.out',
          });
        };

        const onMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)',
          });
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);
      });

      ScrollTrigger.refresh();
    };

    window.addEventListener('portfolio-loaded', initAnimations);
    const fallbackTimer = setTimeout(initAnimations, 1400);

    return () => {
      window.removeEventListener('portfolio-loaded', initAnimations);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return <>{children}</>;
}
