import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Progressive image with blur-up placeholder effect
 * Usage: <BlurImage src="..." alt="..." className="..." />
 */
export default function BlurImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Low-res blur placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800/50 animate-pulse" />
      )}

      {/* Actual image */}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-105'
          }`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}
