import React from 'react';
import { motion } from 'framer-motion';

const orbs = [
  { size: 500, x: '10%', y: '20%', color: 'rgba(11, 229, 186, 0.04)', duration: 20, delay: 0 },
  { size: 400, x: '70%', y: '30%', color: 'rgba(74, 133, 255, 0.04)', duration: 25, delay: 2 },
  { size: 350, x: '50%', y: '60%', color: 'rgba(255, 95, 74, 0.03)', duration: 22, delay: 4 },
  { size: 600, x: '85%', y: '70%', color: 'rgba(11, 229, 186, 0.03)', duration: 28, delay: 1 },
  { size: 300, x: '25%', y: '80%', color: 'rgba(74, 133, 255, 0.03)', duration: 18, delay: 3 },
];

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
