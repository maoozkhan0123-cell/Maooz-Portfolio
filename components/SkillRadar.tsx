import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

interface SkillRadarProps {
  categories: SkillCategory[];
}

const SkillRadar: React.FC<SkillRadarProps> = ({ categories }) => {
  // Aggregate data for the radar chart (Average level per category)
  const radarData = useMemo(() => {
    return categories.map(cat => {
      const avg = cat.skills.reduce((acc, curr) => acc + curr.level, 0) / cat.skills.length;
      return { label: cat.title, value: avg };
    });
  }, [categories]);

  // Radar Chart dimensions
  const size = 300;
  const center = size / 2;
  const radius = (size / 2) - 40;
  const angleSlice = (Math.PI * 2) / radarData.length;

  // Helper to calculate points
  const getPoint = (index: number, value: number, max: number = 100) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / max) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  };

  const pathData = radarData.map((d, i) => getPoint(i, d.value)).join(' ');
  const bgPathData = radarData.map((d, i) => getPoint(i, 100)).join(' ');

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Interactive Radar Chart */}
      <div className="flex flex-col items-center justify-center relative">
        <h3 className="text-xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Competency Overview
        </h3>
        
        <div className="relative w-[300px] h-[300px]">
          {/* Rotating background ring */}
          <div className="absolute inset-0 border-2 border-white/5 rounded-full animate-spin-slow" />
          
          <svg width={size} height={size} className="overflow-visible transform hover:scale-105 transition-transform duration-500">
            {/* Background Polygon */}
            <polygon points={bgPathData} fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Axis Lines */}
            {radarData.map((d, i) => {
              const point = getPoint(i, 100);
              return (
                <line 
                  key={i} 
                  x1={center} 
                  y1={center} 
                  x2={point.split(',')[0]} 
                  y2={point.split(',')[1]} 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeDasharray="4 4" 
                />
              );
            })}

            {/* Data Polygon */}
            <motion.polygon
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              points={pathData}
              fill="rgba(99, 102, 241, 0.2)"
              stroke="#6366f1"
              strokeWidth="2"
            />

            {/* Data Points */}
            {radarData.map((d, i) => {
              const [x, y] = getPoint(i, d.value).split(',').map(Number);
              return (
                <g key={i} className="group cursor-pointer">
                  <motion.circle
                    initial={{ r: 0 }}
                    whileInView={{ r: 4 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    cx={x}
                    cy={y}
                    fill="#a855f7"
                  />
                  {/* Label Tooltip */}
                  <text 
                    x={x} 
                    y={y - 15} 
                    textAnchor="middle" 
                    fill="white" 
                    fontSize="12" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity font-medium bg-black/50"
                  >
                    {Math.round(d.value)}%
                  </text>
                  {/* Category Label */}
                  <text
                    x={center + (radius + 20) * Math.cos(i * angleSlice - Math.PI / 2)}
                    y={center + (radius + 20) * Math.sin(i * angleSlice - Math.PI / 2)}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="text-[10px] md:text-xs fill-gray-400 font-display uppercase tracking-widest"
                  >
                    {d.label.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Detail Bars */}
      <div className="space-y-6">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-widest font-bold">
              <span className="text-secondary">{cat.icon}</span>
              {cat.title}
            </h4>
            <div className="grid gap-3">
              {cat.skills.slice(0, 4).map((skill, i) => ( // Show top 4 per category to save space
                <div key={i} className="group">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-gray-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                    {/* Shimmer effect */}
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillRadar;