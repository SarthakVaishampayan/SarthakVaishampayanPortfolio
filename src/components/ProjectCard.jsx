import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ proj, index }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.a
      ref={ref}
      href={proj.link || '#'}
      target={proj.link ? '_blank' : '_self'}
      rel="noreferrer"
      className="group relative w-full block"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={cardRef}
        className="bg-[#15171f] rounded-[2.5rem] p-8 md:p-16 border border-gray-800/50 hover:border-mint/30 transition-colors duration-500 overflow-hidden relative z-10 shadow-2xl"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none">
          <img src={proj.img} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 blur-sm" />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex-1 lg:max-w-lg" style={{ transform: 'translateZ(30px)' }}>
            <motion.span
              className="text-mint text-xs font-black tracking-widest uppercase mb-4 block bg-mint/10 inline-block px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 229, 186, 0.2)' }}
            >
              {proj.category}
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter leading-tight">
              {proj.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">{proj.desc}</p>

            <div className="flex flex-wrap gap-3">
              {proj.tags.slice(0, 4).map((tag, j) => (
                <motion.span
                  key={j}
                  className="px-5 py-2.5 bg-[#1a1c26] text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-gray-800 text-white"
                  whileHover={{ scale: 1.05, borderColor: '#0be5ba', color: '#0be5ba' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="w-full lg:w-[45%] aspect-[4/3] rounded-3xl overflow-hidden shrink-0 opacity-90 group-hover:opacity-100 transition-all duration-700 shadow-2xl skew-x-1 group-hover:skew-x-0 group-hover:-translate-y-2 border-4 border-[#1a1c26]"
          >
            <motion.img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </div>
      </div>

      {proj.link && (
        <motion.div
          className="absolute top-10 right-10 md:top-16 md:right-16 bg-white text-black p-4 rounded-full z-20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15 }}
        >
          <ArrowUpRight size={28} strokeWidth={3} />
        </motion.div>
      )}
    </motion.a>
  );
}
