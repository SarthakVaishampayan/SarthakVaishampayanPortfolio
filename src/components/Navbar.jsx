import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Magnetic from './Magnetic';

const NavLink = ({ href, label, onClick, mobile }) => {
  const base = 'hover:text-mint transition relative group';
  const mobileBase = 'hover:text-mint transition transform hover:translate-x-2';

  return (
    <a
      href={href}
      onClick={onClick}
      className={mobile ? mobileBase : `${base} text-xs font-bold tracking-[0.2em] uppercase`}
    >
      {label}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mint transition-all duration-300 group-hover:w-full" />
      )}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setHidden(current > 200 && current > lastScroll.current);
      lastScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#', label: 'Home', onClick: (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); } },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Project' },
    { href: '#skills', label: 'Skills' },
    { href: '#insights', label: 'Insights' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 px-6 lg:px-12 py-5 flex justify-between items-center border-gray-800/50"
        style={{
          background: scrolled ? 'rgba(26, 28, 38, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div
          className="font-black tracking-tighter text-xl flex items-center gap-2 relative z-[102] group cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <motion.span className="text-mint text-lg inline-block" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
            ◉
          </motion.span>
          Sarthak V.
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          {links.slice(0, 6).map((link, i) => (
            <NavLink key={i} {...link} onClick={() => { setIsOpen(false); if (link.onClick) link.onClick({ preventDefault: () => {} }); }} />
          ))}
          <Magnetic>
            <a
              href="/Resume.pdf"
              download="Sarthak_Vaishampayan_Resume.pdf"
              className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] tracking-widest uppercase hover:bg-mint hover:scale-105 transition-all font-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Download size={14} /> Download CV
            </a>
          </Magnetic>
        </div>

        <button
          className="lg:hidden w-10 h-10 relative z-[102] flex flex-col items-end justify-center gap-[5px] group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] bg-white transition-all duration-300 ease-[0.76,0,0.24,1] origin-center ${isOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-8 group-hover:w-6 group-hover:bg-mint'}`} />
          <span className={`h-[2px] bg-white transition-all duration-300 ease-[0.76,0,0.24,1] ${isOpen ? 'opacity-0 w-6' : 'w-6 group-hover:w-8 group-hover:bg-mint'}`} />
          <span className={`h-[2px] bg-white transition-all duration-300 ease-[0.76,0,0.24,1] origin-center ${isOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-4 group-hover:w-6 group-hover:bg-mint'}`} />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <motion.div
        className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-md"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(false)}
      />

      <motion.div
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#1a1c26] z-[101] border-l border-gray-800 flex flex-col pt-32"
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex flex-col px-8 gap-8 text-sm font-black tracking-[0.2em] uppercase">
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2 }}
            >
              <NavLink {...link} mobile onClick={() => setIsOpen(false)} />
            </motion.div>
          ))}

          <div className="w-full h-px bg-gray-800 my-6" />

          <motion.a
            href="/Resume.pdf"
            download="Sarthak_Vaishampayan_Resume.pdf"
            className="flex justify-center items-center gap-2 bg-white text-black px-6 py-4 rounded-full text-xs uppercase hover:bg-mint transition-colors font-black"
            initial={{ opacity: 0, y: 10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Download size={16} /> Download CV
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
