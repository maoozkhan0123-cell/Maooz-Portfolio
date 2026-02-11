import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION, PROJECTS } from '../constants';
import SkillRadar from '../components/SkillRadar';
import ProjectShowcase from '../components/ProjectShowcase';

interface HomeProps {
  onNavigate: (view: 'home' | 'resume') => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-20">

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-wider"
          >
            AVAILABLE FOR HIRE
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-400 mb-8 font-light h-[40px] flex justify-center items-center gap-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium">
              {PERSONAL_INFO.title}
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline text-gray-400">{PERSONAL_INFO.roles[0]}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Resume
              <Download className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                About Me
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                {PERSONAL_INFO.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.roles.map((role) => (
                  <span key={role} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Dummy) */}
      <section id="services" className="py-24 px-6 bg-dark/50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Services</h2>
            <p className="text-gray-400">Specialized solutions for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Strategy", desc: "Developing comprehensive AI roadmaps for enterprises." },
              { title: "Custom Development", desc: "End-to-end development of bespoke AI models." },
              { title: "Data Analysis", desc: "Turning raw data into actionable insights." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                  <div className="w-6 h-6 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section (Updated) */}
      <section id="skills" className="py-24 px-6 bg-white/5 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Proficiency</h2>
            <p className="text-gray-400">Visualizing my expertise across different domains</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SkillRadar categories={SKILLS} />
          </motion.div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Experience */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-10 flex items-center gap-3">
                Experience
              </h2>
              <div className="space-y-12 border-l-2 border-white/10 pl-8 relative">
                {EXPERIENCE.map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark border-4 border-primary" />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period} | {exp.location}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-10 flex items-center gap-3">
                Education
              </h2>
              <div className="space-y-12 border-l-2 border-white/10 pl-8 relative">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark border-4 border-secondary" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Updated) */}
      <section id="projects" className="py-24 px-6 bg-dark relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Interactive Project Lab</h2>
            <p className="text-gray-400">Explore my work in 3D. Hover to tilt, Click to focus.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project) => (
              <ProjectShowcase key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Dummy) */}
      <section id="testimonials" className="py-24 px-6 bg-white/5 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400">What people say about my work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "John Doe", role: "CEO, TechCorp", text: "Maooz delivered exceptional results on our AI project. His expertise is unmatched." },
              { name: "Jane Smith", role: "CTO, DataFlow", text: "Professional, skilled, and easy to work with. The automation solution saved us hours of work." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-dark/50 border border-white/10"
              >
                <p className="text-lg text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-display font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;