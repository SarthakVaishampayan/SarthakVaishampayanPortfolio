import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-700'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 + 0.3 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

const AvatarCircle = ({ initials, name }) => (
  <div className="relative">
    <motion.div
      className="w-14 h-14 rounded-full bg-gradient-to-br from-mint to-blue-400 flex items-center justify-center text-black font-black text-sm"
      whileHover={{ scale: 1.1, rotate: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {initials}
    </motion.div>
    <motion.div
      className="absolute -bottom-1 -right-1 w-5 h-5 bg-mint rounded-full flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
    >
      <Quote size={10} className="text-black" />
    </motion.div>
  </div>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const containerRef = useRef(null);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setAutoplay(false);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoplay, next]);

  const handlePause = useCallback(() => setAutoplay(false), []);
  const handleResume = useCallback(() => setAutoplay(true), []);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') { prev(); setAutoplay(false); }
      if (e.key === 'ArrowRight') { next(); setAutoplay(false); }
    };
    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ x: direction > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-24 bg-[#15171f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(11, 229, 186, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(74, 133, 255, 0.3) 0%, transparent 50%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter">
            What <span className="text-mint">People Say</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium">Kind words from colleagues and collaborators.</p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
        >
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full"
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
                aria-live="polite"
              >
                <div className="bg-[#1a1c26] rounded-[2.5rem] p-10 md:p-14 border border-gray-800 hover:border-mint/30 transition-all duration-500 shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <AvatarCircle initials={testimonials[current].avatar} name={testimonials[current].name} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-black text-white">{testimonials[current].name}</h3>
                        <span className="text-gray-600 hidden md:inline">—</span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{testimonials[current].role}</span>
                      </div>
                      <StarRating rating={testimonials[current].rating} />
                      <div className="mt-6 relative">
                        <Quote size={24} className="text-mint/20 absolute -top-2 -left-1" />
                        <p className="text-gray-300 text-lg leading-relaxed pl-6 italic font-medium">
                          &ldquo;{testimonials[current].text}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <motion.button
              onClick={() => { prev(); setAutoplay(false); }}
              className="w-12 h-12 rounded-full bg-[#1a1c26] border border-gray-800 flex items-center justify-center text-white hover:bg-mint hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative focus:outline-none"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-mint scale-125' : 'bg-gray-700 hover:bg-gray-500'}`} />
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-mint"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => { next(); setAutoplay(false); }}
              className="w-12 h-12 rounded-full bg-[#1a1c26] border border-gray-800 flex items-center justify-center text-white hover:bg-mint hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
