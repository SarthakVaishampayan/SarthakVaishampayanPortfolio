import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return pos;
}
