import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS',
  'Express.js', 'Socket.io', 'Figma', 'TypeScript',
  'PostgreSQL', 'Redis', 'Docker', 'GraphQL',
];

export default function Marquee() {
  return (
    <div className="py-6 overflow-hidden bg-[#15171f] border-y border-gray-800 relative">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-gray-500"
            >
              <span className="w-2 h-2 rounded-full bg-mint/40 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
