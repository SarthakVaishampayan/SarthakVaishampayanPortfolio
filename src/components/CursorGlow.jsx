import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[9998]"
      style={{
        background: 'radial-gradient(circle at center, rgba(11, 229, 186, 0.08) 0%, rgba(11, 229, 186, 0.03) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 50, damping: 25, mass: 0.5 }}
    />
  );
}
