import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'techlearning-platform',
    title: 'TechLearning Platform',
    tagline: 'Interactive Developer Learning & Portfolio Hub',
    description: 'A high-performance modern web application built with Next.js 15, React 19, and Tailwind CSS. Features course tracks, interactive coding challenges, smooth page transitions, and optimized server-side rendering.',
    category: 'Next.js Apps',
    image: '/gellary/mockup-1.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    features: [
      'Interactive curriculum roadmap with progress tracking',
      'Dynamic dark/light mode with custom CSS tokens',
      'Lightning-fast Turbopack compilation and 99+ Lighthouse performance',
      'Fully responsive UI designed for mobile, tablet, and ultra-wide screens'
    ],
    liveUrl: 'https://techlearning-website.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2026'
  },
  {
    id: 'elatronix-store',
    title: 'Elatronix Electronics Store',
    tagline: 'Full-Stack MERN E-Commerce Ecosystem',
    description: 'A robust, scalable eCommerce web application powered by the MERN stack (MongoDB, Express, React, Node.js). Features product catalog filtering, real-time cart persistence, secure Stripe checkout, and admin order analytics.',
    category: 'Full-Stack MERN',
    image: '/gellary/mockup-2.png',
    tags: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    features: [
      'JWT-authenticated user registration, login, and profile dashboard',
      'MongoDB Atlas cluster with optimized aggregation pipelines',
      'Instant search, multi-attribute filtering, and stock level alerts',
      'Admin portal for inventory tracking, order status updates, and revenue metrics'
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
    description: 'A futuristic SaaS landing page and interactive platform featuring real-time 3D WebGL scenes, interactive mesh distortions, dynamic subscription tiers, and seamless prompt generator interfaces.',
    category: 'Creative UI',
    image: '/gellary/mockup-3.png',
    tags: ['Three.js', 'WebGL', 'Next.js', 'Tailwind CSS', 'GSAP'],
    features: [
      'Interactive 3D particle sphere responding to cursor velocity and scroll depth',
      'Glassmorphic dashboard with live telemetry indicators',
      'Micro-animations powered by GSAP and custom shaders',
      'Dark obsidian cyber aesthetic with neon emerald and cyan highlights'
    ],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2026'
  },
  {
    id: 'softvence-agency',
    title: 'Softvence Studio Showcase',
    tagline: 'Digital Agency Portfolio & Case Study Hub',
    description: 'High-impact creative agency portfolio highlighting bespoke web development, eCommerce solutions, and brand transformation case studies with kinetic typography and smooth scroll physics.',
    category: 'Creative UI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Figma'],
    features: [
      'Smooth scroll experience with progress indicator bars',
      'Interactive project showcase carousel with fullscreen lightbox zoom',
      'Direct lead qualification funnel and booking integration',
      'Flawless cross-browser rendering with zero layout shift'
    ],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: true,
    year: '2026'
  },
  {
    id: 'urbancraft-cms',
    title: 'UrbanCraft Living CMS',
    tagline: 'High-Converting Headless eCommerce & CMS',
    description: 'Custom headless architecture combining Shopify Liquid APIs and WordPress REST endpoints for a luxury architectural furniture brand, enabling blazing speeds and rich editorial control.',
    category: 'CMS & eCommerce',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    tags: ['Shopify', 'WordPress', 'Headless CMS', 'Tailwind CSS', 'REST API'],
    features: [
      'Custom theme templates tailored for conversion optimization',
      'Synchronized multi-currency checkout and localized shipping calculation',
      'Dynamic blog & lookbook powered by custom CMS custom post types',
      'SEO-optimized microdata schemas for rich Google search snippets'
    ],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: false,
    year: '2025'
  },
  {
    id: 'documed-portal',
    title: 'DocuMed Health Cloud',
    tagline: 'Telemedicine & Clinical Appointment System',
    description: 'Full-stack MERN healthcare portal allowing patients to browse medical specialists, schedule telehealth appointments, review diagnostic reports, and manage electronic health records.',
    category: 'Full-Stack MERN',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth'],
    features: [
      'Role-based access control (Doctor, Patient, Clinic Administrator)',
      'Real-time appointment slot calendar with conflict prevention logic',
      'Secure encrypted medical record upload with file verification',
      'Automated email notifications and SMS appointment reminders'
    ],
    liveUrl: 'https://shazzedshuvo.vercel.app/',
    githubUrl: 'https://github.com/Shazzedshuvo',
    featured: false,
    year: '2025'
  }
];
