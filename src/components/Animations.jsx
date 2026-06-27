import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Scroll-triggered text reveal — each word fades in sequentially
 * Usage: <TextReveal text="Hello World" className="text-4xl font-bold" />
 */
export function TextReveal({ text, className, as: Tag = 'h2', delay = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.6'],
  });

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`flex flex-wrap ${className || ''}`}>
      {words.map((word, i) => (
        <Word key={i} word={word} progress={scrollYProgress} index={i} total={words.length} delay={delay} />
      ))}
    </Tag>
  );
}

function Word({ word, progress, index, total, delay }) {
  const start = (index / total) * 0.6 + delay;
  const opacity = useTransform(progress, [start, Math.min(start + 0.3, 1)], [0.08, 1]);
  const y = useTransform(progress, [start, Math.min(start + 0.3, 1)], [20, 0]);

  return (
    <motion.span className="mr-[0.3em] inline-block" style={{ opacity, y }}>
      {word}
    </motion.span>
  );
}

/**
 * Parallax wrapper — content moves at different speed on scroll
 * Usage: <Parallax speed={0.5}><img ... /></Parallax>
 */
export function Parallax({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Reveal on scroll — slides up + fades in when entering viewport
 * Usage: <Reveal><div>Content</div></Reveal>
 */
export function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const variants = {
    hidden: direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
        ? { opacity: 0, x: -40 }
        : { opacity: 0, x: 40 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
