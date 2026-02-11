import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}