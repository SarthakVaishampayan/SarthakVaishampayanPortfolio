import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import ScrollDownIndicator from './ScrollDownIndicator';

const StatItem = ({ end, label, suffix = '+' }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const count = useCountUp(end, 2000, inView);

  return (
    <div ref={ref} className="pointer-events-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white leading-none">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.span>
        <span className="text-mint text-3xl">{suffix}</span>
      </h2>
      <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2">{label}</p>
    </div>
  );
};

const PillTag = ({ bg, text, label, className, animateConfig }) => {
  if (!animateConfig) animateConfig = { y: [0, -10, 0], duration: 3.2, delay: 0 };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: animateConfig.y }}
      transition={{
        opacity: { duration: 0.8, ease: 'easeOut' },
        scale: { duration: 0.8, ease: 'easeOut' },
        y: { duration: animateConfig.duration, repeat: Infinity, ease: 'easeInOut', delay: animateConfig.delay },
      }}
      className={`${className} hidden lg:block`}
    >
      <div
        className="text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl relative"
        style={{ backgroundColor: bg, color: text }}
      >
        {label}
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-end overflow-hidden pt-20 bg-[#15171f]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(26,28,38,0)_0%,_#15171f_100%)] z-10 pointer-events-none" />

      {/* Massive Typography */}
      <div className="absolute inset-x-0 top-[42%] -translate-y-1/2 flex flex-col items-center justify-center z-10 w-full text-center pointer-events-none">
        <motion.h1
          className="text-[16.5vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-white uppercase"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          FULL STACK
        </motion.h1>
        <motion.h1
          className="text-[16.5vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-transparent uppercase mt-2 lg:mt-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          DEVELOPER
        </motion.h1>
      </div>

      {/* Floating Pill Tags */}
      <PillTag
        bg="#ff5f4a"
        text="white"
        label="Frontend Engineer"
        className="absolute left-[5%] top-[27%] z-30"
        animateConfig={{ y: [0, -10, 0], duration: 3.2, delay: 0 }}
      />
      <PillTag
        bg="#0be5ba"
        text="#1a1c26"
        label="Backend Systems"
        className="absolute right-[15%] top-[22%] z-30"
        animateConfig={{ y: [0, 15, 0], duration: 4.1, delay: 0.5 }}
      />
      <PillTag
        bg="#4a85ff"
        text="white"
        label="UI / UX Design"
        className="absolute right-[17%] bottom-[30%] z-30"
        animateConfig={{ y: [0, -15, 0], duration: 3.8, delay: 1 }}
      />

      {/* Central Focus Portrait */}
      <motion.div
        className="relative z-20 w-[95vw] md:w-[60vw] max-w-[800px] h-[65vh] md:h-[75vh] mx-auto flex items-end justify-center pointer-events-none"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/profile.png"
          alt="Sarthak"
          className="w-full h-full object-contain object-bottom filter drop-shadow-[0_-5px_50px_rgba(255,255,255,0.05)]"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
            e.target.style.maskImage = 'linear-gradient(to top, black 80%, transparent)';
          }}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#15171f] via-[#15171f]/60 to-transparent" />
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        className="absolute bottom-8 w-full px-8 lg:px-24 flex justify-between items-end z-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <StatItem end={2} label="Internships" />
        <motion.div
          className="hidden lg:block text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3">
            <span className="text-gray-400 text-xs tracking-[0.2em] font-bold">
              <span className="text-mint">✦</span> Open for opportunities
            </span>
          </div>
        </motion.div>
        <StatItem end={5} label="Projects Done" />
      </motion.div>

      {/* Scroll Down Indicator */}
      <ScrollDownIndicator />
    </section>
  );
}
