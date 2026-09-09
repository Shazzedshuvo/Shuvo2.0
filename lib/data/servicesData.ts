import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'fullstack-mern',
    title: 'Full-Stack MERN Engineering',
    description: 'End-to-end web applications built with MongoDB, Express, React, and Node.js. Architected for speed, data security, and seamless horizontal scaling.',
    icon: 'Terminal',
    deliverables: [
      'Custom RESTful & GraphQL API design',
      'Secure JWT & OAuth 2.0 authentication systems',
      'Database schema modeling & aggregation optimization',
      'Full deployment on cloud infrastructures (AWS/Vercel/DigitalOcean)'
    ]
  },
  {
    id: 'nextjs-architecture',
    title: 'Next.js & React 19 Frontend',
    description: 'Ultra-fast, SEO-optimized web frontends utilizing Next.js App Router, React Server Components (RSC), TypeScript, and Tailwind CSS.',
    icon: 'Layers',
    deliverables: [
      'Zero-layout-shift responsive design (Mobile to 4K)',
      'Rich micro-interactions & fluid 60fps animations',
      'Server-side rendering (SSR) & static pre-rendering (SSG)',
      'Sub-second load times & 95+ Google PageSpeed benchmarks'
    ]
  },
  {
    id: 'cms-ecommerce',
    title: 'CMS & Headless eCommerce',
    description: 'Custom bespoke themes and headless setups for WordPress, Shopify, Wix, Squarespace, and Framer tailored for client revenue growth.',
    icon: 'ShoppingBag',
    deliverables: [
      'Custom theme and template engineering from scratch',
      'Shopify store setup, Liquid tweaks, and app integrations',
      'WooCommerce and headless payment gateway setup',
      'Framer interactive marketing websites'
    ]
  },
  {
    id: '3d-creative-ui',
    title: '3D Web Experiences & Three.js',
    description: 'Next-level visual websites featuring interactive 3D WebGL scenes, particle physics, spatial typography, and GPU-accelerated canvas effects.',
    icon: 'Sparkles',
    deliverables: [
      'Three.js WebGL canvas interactive scenes',
      'Mouse-responsive particle simulations & geometry shaders',
      'Interactive 3D product previews and tilt cards',
      'GSAP scroll-driven animations & cinema-grade intros'
    ]
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    description: 'Deep dive into project objectives, user personas, tech stack selection, and database schema blueprinting.'
  },
  {
    step: '02',
    title: 'UI/UX & 3D Prototyping',
    description: 'Crafting responsive layouts, glassmorphic design systems, 3D assets, and interactive component prototypes.'
  },
  {
    step: '03',
    title: 'Full-Stack Development',
    description: 'Writing clean, typed, modular code with Next.js, React, Node.js, MongoDB, and fluid GSAP micro-animations.'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous cross-browser testing, accessibility audit, SEO optimization, and high-availability cloud deployment.'
  }
];
