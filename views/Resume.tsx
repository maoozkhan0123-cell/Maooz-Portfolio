import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, VOLUNTEERING } from '../constants';

interface ResumeProps {
  onNavigate: (view: 'home' | 'resume') => void;
}

const Resume: React.FC<ResumeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 pb-12">
      {/* Back Button Header */}
      <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 py-4 px-6 print:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-[21cm] bg-white shadow-xl p-8 md:p-12 my-8 print:shadow-none print:my-0 print:p-0"
      >
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{PERSONAL_INFO.name}</h1>
          <h2 className="text-xl text-primary font-medium mb-6">{PERSONAL_INFO.title}</h2>
          
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/maoozkhan
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              github.com/maoozkhan
            </div>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Summary */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Profile Summary</h3>
              <p className="text-slate-700 leading-relaxed text-sm text-justify">
                {PERSONAL_INFO.bio}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Professional Experience</h3>
              <div className="space-y-6">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{exp.role}</h4>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{exp.company}, {exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Volunteering */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Volunteering & Leadership</h3>
              <div className="space-y-4">
                {VOLUNTEERING.map((vol, idx) => (
                   <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{vol.role}</h4>
                      <span className="text-xs font-medium text-slate-500">{vol.year}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{vol.organization}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Education */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Education</h3>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                  <p className="text-sm text-slate-700">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.year}</p>
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Technical Skills</h3>
              <div className="space-y-4">
                {SKILLS.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-xs text-slate-500 mb-2 uppercase">{cat.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(skill => (
                        <span key={skill.name} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills/Interests */}
            <section>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Roles</h3>
              <ul className="space-y-2">
                {PERSONAL_INFO.roles.map(role => (
                   <li key={role} className="text-sm text-slate-700 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                     {role}
                   </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;