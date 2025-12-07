export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
}