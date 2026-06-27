import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Database } from 'lucide-react';
import { services } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { Parallax } from './Animations';
import NoiseOverlay from './NoiseOverlay';
import Marquee from './Marquee';

const iconMap = { Code, PenTool, Database };

const ServiceCard = ({ srv, i }) => {
  const Icon = iconMap[srv.icon] || Code;
  return (
    <motion.div
      className={`bg-[#15171f] p-8 rounded-3xl border border-gray-800 hover:border-mint transition-all duration-500 shadow-xl group ${i === 1 ? 'lg:-translate-y-8' : ''} ${i === 2 ? 'lg:translate-y-8' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, borderColor: 'rgba(11, 229, 186, 0.5)', transition: { duration: 0.3 } }}
    >
      <motion.div
        className="text-mint mb-8"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        {Icon && <Icon size={36} strokeWidth={1.5} />}
      </motion.div>
      <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{srv.title}</h3>
      <p className="text-gray-400 text-sm leading-loose">{srv.desc}</p>

      {/* Hover glow line */}
      <motion.div
        className="w-0 h-[2px] bg-mint mt-6 rounded-full"
        whileHover={{ width: '40%' }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-32 px-6 lg:px-24 bg-[#1a1c26] border-t border-gray-800 relative overflow-hidden">
      <NoiseOverlay opacity={0.02} />
      <Marquee />
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10 mt-20">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <motion.h2
            className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            I create{' '}
            <motion.span
              className="text-accent italic font-serif inline-block"
              whileHover={{ scale: 1.05, color: '#0be5ba' }}
            >
              unconventional
            </motion.span>{' '}
            yet functional &amp; visually pleasing interfaces for the mobile and web.
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-mint mt-10 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="lg:w-2/3">
          <Parallax speed={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((srv, i) => (
                <ServiceCard key={i} srv={srv} i={i} />
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
