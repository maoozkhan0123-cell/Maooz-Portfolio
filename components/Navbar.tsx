import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'resume') => void;
  currentView: 'home' | 'resume';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          MK.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('resume')}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Resume</span>
            <FileText className="w-4 h-4 group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-gray-300 hover:text-white py-2"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                    onNavigate('resume');
                    setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-left"
              >
                <span>View Resume</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;