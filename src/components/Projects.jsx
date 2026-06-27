import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import NoiseOverlay from './NoiseOverlay';
import { Reveal } from './Animations';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-24 relative bg-[#1a1c26] overflow-hidden">
      <NoiseOverlay opacity={0.015} />
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
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter">
            Selected <span className="text-mint">Works</span>
          </h2>
        </Reveal>
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

        {/* View All Projects button */}
        <motion.a
          href="https://github.com/SarthakVaishampayan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-gray-800 hover:border-mint/50 text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 group shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: projects.length * 0.15 + 0.2 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 229, 186, 0.1)' }}
        >
          View All Projects
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ExternalLink size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
