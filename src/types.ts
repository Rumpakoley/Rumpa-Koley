export type Theme = 'light' | 'dark';

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  technologies: string[];
  contribution: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Backend / API' | 'Cloud & Systems';
  technologies: string[];
  thumbnailUrl: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  level: 'Core Expertise' | 'Production Ready' | 'Proficient';
  iconName?: string;
  experienceYears?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Freelance';
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
  coursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Certification' | 'Award' | 'Coding' | 'Hackathon';
  credentialUrl?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
