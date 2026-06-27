import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileCode2, Wrench, BrainCircuit } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { Parallax } from './Animations';
import NoiseOverlay from './NoiseOverlay';

const iconMap = { Terminal, FileCode2, Wrench, BrainCircuit };

const SkillBar = ({ name, level, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 font-bold text-xs uppercase tracking-widest">{name}</span>
        <motion.span
          className="text-mint text-xs font-bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
        >
          {inView ? level : 0}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-[#15171f] rounded-full overflow-hidden border border-gray-800">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #0be5ba, #4a85ff)',
          }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : { width: '0%' }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="py-32 px-6 lg:px-24 bg-[#15171f] relative overflow-hidden">
      <NoiseOverlay opacity={0.015} />

      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
        <Parallax speed={0.15} className="lg:w-1/3">
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            My <br /><span className="text-accent">Arsenal</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The carefully curated tools and technologies I use to forge robust solutions from the ground up.
          </motion.p>

          {/* Animated decorative element */}
          <motion.div
            className="flex gap-1 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: i % 2 === 0 ? '#0be5ba' : '#4a85ff' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </Parallax>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Terminal;
            return (
              <motion.div
                key={i}
                className="bg-[#1a1c26] p-8 rounded-3xl border border-gray-800 hover:border-accent/50 transition-all duration-300 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="p-4 bg-[#15171f] rounded-2xl text-accent shadow-inner"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {Icon && <Icon size={24} />}
                  </motion.div>
                  <h3 className="text-xl font-black tracking-tight text-white">{cat.title}</h3>
                </div>

                <div className="space-y-1">
                  {cat.items.map((item, j) => (
                    <SkillBar key={j} name={item.name} level={item.level} delay={i * 0.15 + j * 0.1} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
