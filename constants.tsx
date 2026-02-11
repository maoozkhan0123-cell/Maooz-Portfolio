import React from 'react';
import { Brain, Code, Database, Globe, Layout, Server, Cpu } from 'lucide-react';
import { Project, Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Maooz Khan",
  title: "AI/ML Engineer",
  company: "BytechSol LLC",
  tagline: "Building the future with Automation & Intelligence",
  location: "Karachi, Sindh, Pakistan",
  email: "maooz.khan@example.com", // Placeholder
  linkedin: "https://linkedin.com/in/maoozkhan", // Placeholder
  github: "https://github.com/maoozkhan", // Placeholder
  roles: [
    "Automation Engineer",
    "ODOO Developer",
    "Web Application Developer",
    "CRM Specialist"
  ],
  bio: "I am currently pursuing a BS in Computer Science with a strong focus on software development, data analysis, and AI/ML. I am passionate about building real-world solutions using modern technologies and automation. Open to internships, frontend developer roles, and networking opportunities."
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "BytechSol LLC",
    period: "July 2025 – Present",
    location: "Karachi, Pakistan",
    description: [
      "Leading automation initiatives and developing AI-driven solutions.",
      "Customizing ODOO ERP modules to streamline business processes.",
      "Developing scalable web applications and integrating CRM systems."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "Dawood University of Engineering & Technology",
    year: "In Progress"
  }
];

export const VOLUNTEERING = [
  {
    role: "Director of Event Management",
    organization: "Dawood University",
    year: "2023 - Present"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 75 },
      { name: "Pandas", level: 95 }
    ],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ],
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Enterprise Solutions",
    skills: [
      { name: "ODOO Development", level: 88 },
      { name: "CRM Integration", level: 85 },
      { name: "Business Automation", level: 90 },
      { name: "ERP Customization", level: 85 }
    ],
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 }
    ],
    icon: <Cpu className="w-6 h-6" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Intelligent CRM Automation",
    category: "AI & Automation",
    description: "An automated CRM system that uses NLP to categorize leads and predict conversion probability.",
    tech: ["Python", "ODOO", "Scikit-learn", "PostgreSQL"],
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    id: 2,
    title: "Predictive Analytics Dashboard",
    category: "Data Science",
    description: "Real-time dashboard for visualizing sales data with predictive forecasting models.",
    tech: ["React", "Python", "D3.js", "FastAPI"],
    image: "https://picsum.photos/seed/analytics/800/600"
  },
  {
    id: 3,
    title: "Smart Inventory Management",
    category: "Web Application",
    description: "A comprehensive inventory system with automated restocking alerts and demand prediction.",
    tech: ["Django", "React", "Redis", "Docker"],
    image: "https://picsum.photos/seed/inventory/800/600"
  }
];