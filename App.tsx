import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './views/Home';
import Resume from './views/Resume';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'resume'>('home');

  return (
    <div className="min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white">
      {/* Dynamic Background only on Home */}
      {currentView === 'home' && <AnimatedBackground />}
      
      {/* Navigation (Only visible on Home for scroll links, Resume has its own header) */}
      <AnimatePresence>
        {currentView === 'home' && (
          <Navbar onNavigate={setCurrentView} currentView={currentView} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Home onNavigate={setCurrentView} />
          </motion.div>
        ) : (
          <motion.div
            key="resume"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Resume onNavigate={setCurrentView} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;