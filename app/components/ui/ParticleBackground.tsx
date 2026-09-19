'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition: Rain droplets & cyber particles
    interface RainDrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      baseVy: number;
      opacity: number;
      radius: number;
      color: string;
    }

    const count = Math.min(Math.floor((width * height) / 8000), 160);
    const drops: RainDrop[] = [];

    const colors = ['rgba(245, 158, 11, ', 'rgba(56, 189, 248, ', 'rgba(168, 85, 247, ', 'rgba(255, 255, 255, '];

    for (let i = 0; i < count; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 16 + 8,
        speed: Math.random() * 1.5 + 0.8,
        baseVy: -(Math.random() * 1.2 + 0.6), // default gentle upward float
        opacity: Math.random() * 0.5 + 0.15,
        radius: Math.random() * 1.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Interactive state
    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0, targetX: -1000, targetY: -1000 };
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let targetScrollVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      // Gentle, subtle upward force when scrolling
      targetScrollVelocity = Math.max(-15, Math.min(15, delta * 0.22));
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll velocity damping
      scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.08;
      targetScrollVelocity *= 0.90; // smooth gentle decay to resting state

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const isDark = document.documentElement.classList.contains('dark');
      const rainStreakColor = isDark ? '255, 255, 255' : '15, 23, 42';

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        // Total upward vertical velocity: gentle float + subtle scroll boost
        const currentVy = d.baseVy - scrollVelocity * (d.speed * 0.45);

        d.y += currentVy;

        // Subtle horizontal breeze based on mouse distance
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 150) {
          const force = (1 - dist / 150) * 2;
          d.x -= (dx / dist) * force;
        }

        // Screen boundary wrap
        if (d.y < -50) {
          d.y = height + Math.random() * 30;
          d.x = Math.random() * width;
        } else if (d.y > height + 50) {
          d.y = -30;
          d.x = Math.random() * width;
        }

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;

        // Dynamic streak length based on upward speed
        const currentLength = Math.max(d.length, Math.abs(currentVy) * 3.5);

        // Draw glowing rain streak
        const gradient = ctx.createLinearGradient(d.x, d.y, d.x, d.y + (currentVy < 0 ? currentLength : -currentLength));
        gradient.addColorStop(0, `rgba(${rainStreakColor}, ${d.opacity * (isDark ? 0.9 : 0.6)})`);
        gradient.addColorStop(1, `rgba(${rainStreakColor}, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = d.radius;
        ctx.lineCap = 'round';
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + (currentVy < 0 ? currentLength : -currentLength));
        ctx.stroke();

        // Draw glowing head of droplet
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rainStreakColor}, ${d.opacity * 0.9})`;
        ctx.fill();
      }

      // Mouse interactive radial glow aura
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
        mouseGradient.addColorStop(0, isDark ? 'rgba(245, 158, 11, 0.07)' : 'rgba(245, 158, 11, 0.04)');
        mouseGradient.addColorStop(1, 'rgba(245, 158, 11, 0)');

        ctx.beginPath();
        ctx.fillStyle = mouseGradient;
        ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-500" aria-hidden="true">
      {/* Ambient background glowing auras */}
      <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.035] blur-[170px] dark:bg-amber-500/[0.03]" />
      <div className="absolute right-10 bottom-24 h-[700px] w-[700px] rounded-full bg-orange-500/[0.03] blur-[160px] dark:bg-orange-500/[0.02]" />

      {/* Modern Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045] transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px),
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px',
          color: 'rgba(255, 255, 255, 0.95)'
        }}
      />

      {/* Upward Interactive Rain Canvas */}
      <canvas ref={canvasRef} className="block h-full w-full" />

      {/* Smooth vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)] dark:block hidden" />
    </div>
  );
}

