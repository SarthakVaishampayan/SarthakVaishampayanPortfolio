import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-24 relative bg-[#1a1c26] overflow-hidden">
      {/* Background 'WORK' typography */}
      <motion.div
        className="absolute right-[-5%] top-[5%] text-[15vw] font-black leading-[0.8] text-transparent select-none pointer-events-none hidden lg:block tracking-tighter"
        style={{ WebkitTextStroke: '3px rgba(255,255,255,1)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        WORK<br />WORK<br />WORK
      </motion.div>

      <div className="mb-24 relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected <span className="text-mint">Works</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Interactive showcases of my best technical builds
        </motion.p>
      </div>

      <div className="space-y-12 flex flex-col items-center w-full max-w-7xl mx-auto relative z-10">
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} index={i} />
        ))}
      </div>
    </section>
  );
}
