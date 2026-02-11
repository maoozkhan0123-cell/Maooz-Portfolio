import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Layers, Code, Zap } from 'lucide-react';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  // Smooth rotation
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || active) return; // Disable tilt if active (zoomed)

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (active) return;
    x.set(0);
    y.set(0);
  };

  const toggleActive = () => {
    setActive(!active);
    // Reset tilt when activating to avoid weird angles
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 h-[450px] w-full flex items-center justify-center">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleActive}
        style={{
          rotateX: active ? 0 : springRotateX,
          rotateY: active ? 0 : springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: active ? 1.1 : 1,
          z: active ? 50 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm h-[400px] cursor-pointer group"
      >
        {/* Floating Layers */}
        
        {/* Layer 1: Back Glow/Shadow */}
        <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl transform translate-z-[-50px] transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
        />

        {/* Layer 2: Base Card - Dark Glass */}
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ transform: "translateZ(0px)" }}>
           {/* Image Background */}
           <div className="h-1/2 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
             <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
           </div>
           
           {/* Content Base */}
           <div className="p-6 flex-1 flex flex-col relative z-20">
             <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
             <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
           </div>
        </div>

        {/* Layer 3: Floating Details (Description) */}
        <motion.div 
          className="absolute top-1/2 left-6 right-6 p-4 bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
        >
           <p className="text-sm text-gray-300 line-clamp-3">
             {project.description}
           </p>
        </motion.div>

        {/* Layer 4: Tech Stack Floating Badges */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2" style={{ transform: "translateZ(60px)" }}>
            {project.tech.map((t, i) => (
                <span 
                    key={t} 
                    className="px-2 py-1 text-xs font-medium bg-black/60 border border-primary/30 text-primary rounded-md shadow-lg backdrop-blur-sm"
                >
                    {t}
                </span>
            ))}
        </div>

        {/* Layer 5: Interactive Elements (Only visible on hover/active) */}
        <div className="absolute -right-4 -top-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black shadow-lg shadow-accent/50" style={{ transform: "translateZ(80px)" }}>
            <Zap className="w-6 h-6 fill-current" />
        </div>

        {/* Overlay for instructions */}
        {!active && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ transform: "translateZ(100px)" }}>
                <span className="bg-black/80 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    Click to Inspect
                </span>
            </div>
        )}

      </motion.div>
    </div>
  );
};

export default ProjectShowcase;