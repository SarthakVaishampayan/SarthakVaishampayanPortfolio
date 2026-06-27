import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '../data/portfolioData';
import NoiseOverlay from './NoiseOverlay';
import { Reveal } from './Animations';

export default function Insights() {
  return (
    <section id="insights" className="py-32 px-6 lg:px-24 bg-[#1a1c26] relative overflow-hidden">
      <NoiseOverlay opacity={0.02} />
      {/* Background Typography */}
      <motion.div
        className="absolute left-[-5%] top-[10%] text-[15vw] font-black leading-[0.8] text-transparent select-none pointer-events-none hidden lg:block tracking-tighter"
        style={{ WebkitTextStroke: '3px rgba(255,255,255,0.3)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        BLOG<br />BLOG
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter">
              Latest <span className="text-mint">Insights</span>
            </h2>
          </Reveal>
          <p className="text-gray-400 text-xl font-medium">Sharing knowledge and experiences from my journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <motion.div
              key={i}
              className="group bg-[#15171f] rounded-[2rem] p-8 md:p-10 border border-gray-800 hover:border-mint/50 transition-all duration-500 shadow-xl flex flex-col h-full relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
            >
              {/* Subtle hover glow */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                initial={{ background: 'rgba(11, 229, 186, 0.03)' }}
                whileHover={{ background: 'rgba(11, 229, 186, 0.12)', scale: 1.5 }}
                transition={{ duration: 0.7 }}
              />

              <div className="flex justify-between items-center mb-8 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 z-10">
                <motion.span
                  className="text-mint bg-mint/10 px-4 py-2 rounded-lg"
                  whileHover={{ backgroundColor: 'rgba(11, 229, 186, 0.2)' }}
                >
                  {post.category}
                </motion.span>
                <span>{post.date}</span>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-mint transition-colors tracking-tight z-10 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-400 leading-relaxed font-medium mb-10 z-10 flex-grow">
                {post.desc}
              </p>

              <div className="flex justify-between items-center z-10 mt-auto pt-6 border-t border-gray-800/50">
                <span className="text-[10px] md:text-xs font-black text-gray-400 tracking-[0.2em] uppercase">{post.time}</span>
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#1a1c26] border border-gray-800 flex items-center justify-center shadow-xl"
                  whileHover={{ backgroundColor: '#0be5ba', color: '#000', rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={20} strokeWidth={3} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
