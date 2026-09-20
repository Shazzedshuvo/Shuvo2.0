export interface Project {
  _id?: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
}

export interface Skill {
  name: string;
  category:
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'CMS & Platforms'
    | 'CMS & eCommerce'
    | 'Tools & DevOps'
    | 'Tools & Other'
    | 'Tools'
    | 'Languages';
  icon: string;
  color?: string;
  proficiency?: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
  project?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceInterest?: string;
  createdAt?: Date;
}

export interface StatItem {
  number: string;
  label: string;
  suffix?: string;
  iconName: string;
}
