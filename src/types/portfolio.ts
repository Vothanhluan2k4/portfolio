export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectDetail {
  description: string;
  currentStatus: string;
  objectives: string[];
  features: string[];
  technologies: string[];
  challenges?: string;
  outcomes?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[];
  tags: string[];
  videoUrl?: string;
  details?: ProjectDetail;
}

export interface Experience {
  id: number;
  type: 'education' | 'work';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  logo: string;
  percentage: number;
}

export interface BlogContent {
  type: 'text' | 'heading' | 'subheading' | 'code' | 'list' | 'table';
  content: string;
  language?: string;
  items?: string[];
  columns?: string[];
  rows?: string[][];
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content?: BlogContent[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  skills: string[];
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface PortfolioData {
  services: Service[];
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  blogs: Blog[];
  certificates: Certificate[];
  stats: Stat[];
}
