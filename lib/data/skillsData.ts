import { Skill } from '../types';

export const featuredSkills: Skill[] = [
  { name: 'React', category: 'Frontend', icon: 'SiReact', color: '#61DAFB', featured: true },
  { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#FFFFFF', featured: true },
  { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', color: '#3178C6', featured: true },
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs', color: '#339933', featured: true },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', color: '#EEEEEE', featured: true },
  { name: 'MongoDB', category: 'Database', icon: 'SiMongodb', color: '#47A248', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4', featured: true },
  { name: 'Three.js', category: 'Frontend', icon: 'SiThreedotjs', color: '#00bf8f', featured: true },
];

export const allSkills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', icon: 'SiReact', color: '#61DAFB', proficiency: 95 },
  { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#FFFFFF', proficiency: 92 },
  { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', color: '#3178C6', proficiency: 88 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'SiJavascript', color: '#F7DF1E', proficiency: 94 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4', proficiency: 96 },
  { name: 'Three.js / WebGL', category: 'Frontend', icon: 'SiThreedotjs', color: '#00bf8f', proficiency: 82 },
  { name: 'Framer Motion', category: 'Frontend', icon: 'SiFramer', color: '#FF0080', proficiency: 90 },
  { name: 'Redux Toolkit', category: 'Frontend', icon: 'SiRedux', color: '#764ABC', proficiency: 85 },
  { name: 'HTML5 & CSS3', category: 'Frontend', icon: 'SiHtml5', color: '#E34F26', proficiency: 98 },
  { name: 'Shadcn UI', category: 'Frontend', icon: 'SiShadcnui', color: '#FFFFFF', proficiency: 92 },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs', color: '#339933', proficiency: 90 },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', color: '#EEEEEE', proficiency: 88 },
  { name: 'REST APIs', category: 'Backend', icon: 'SiPostman', color: '#FF6C37', proficiency: 94 },
  { name: 'JWT Auth', category: 'Backend', icon: 'SiJsonwebtokens', color: '#D63AFF', proficiency: 90 },
  { name: 'Bcrypt.js', category: 'Backend', icon: 'SiShield', color: '#00bf8f', proficiency: 88 },
  { name: 'Next.js Server Actions', category: 'Backend', icon: 'SiNextdotjs', color: '#FFFFFF', proficiency: 92 },

  // Database
  { name: 'MongoDB', category: 'Database', icon: 'SiMongodb', color: '#47A248', proficiency: 92 },
  { name: 'Mongoose ORM', category: 'Database', icon: 'SiMongodb', color: '#880000', proficiency: 90 },
  { name: 'MongoDB Atlas', category: 'Database', icon: 'SiMongodb', color: '#47A248', proficiency: 92 },

  // CMS & Platforms
  { name: 'WordPress', category: 'CMS & Platforms', icon: 'SiWordpress', color: '#21759B', proficiency: 92 },
  { name: 'Shopify', category: 'CMS & Platforms', icon: 'SiShopify', color: '#7AB55C', proficiency: 88 },
  { name: 'Wix Studio', category: 'CMS & Platforms', icon: 'SiWix', color: '#FAFAFA', proficiency: 85 },
  { name: 'Squarespace', category: 'CMS & Platforms', icon: 'SiSquarespace', color: '#FFFFFF', proficiency: 84 },
  { name: 'Framer CMS', category: 'CMS & Platforms', icon: 'SiFramer', color: '#0055FF', proficiency: 89 },

  // Tools & DevOps
  { name: 'Git', category: 'Tools & DevOps', icon: 'SiGit', color: '#F05032', proficiency: 94 },
  { name: 'GitHub', category: 'Tools & DevOps', icon: 'SiGithub', color: '#FFFFFF', proficiency: 94 },
  { name: 'Vercel', category: 'Tools & DevOps', icon: 'SiVercel', color: '#FFFFFF', proficiency: 95 },
  { name: 'Postman', category: 'Tools & DevOps', icon: 'SiPostman', color: '#FF6C37', proficiency: 90 },
  { name: 'Figma', category: 'Tools & DevOps', icon: 'SiFigma', color: '#F24E1E', proficiency: 86 },
  { name: 'NPM / PNPM', category: 'Tools & DevOps', icon: 'SiNpm', color: '#CB3837', proficiency: 92 },
];
