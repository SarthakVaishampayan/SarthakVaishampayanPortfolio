import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollDownIndicator() {
  return (
    <motion.div
      className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.span
        className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll
      </motion.span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-mint/60"
      >
        <ChevronDown size={20} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}
