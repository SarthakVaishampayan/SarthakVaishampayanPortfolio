import React from 'react';

/**
 * Subtle noise/grain texture overlay — adds depth to dark backgrounds
 * Place as a sibling of section content with absolute positioning
 */
export default function NoiseOverlay({ opacity = 0.03, blendMode = 'overlay' }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        opacity,
        mixBlendMode: blendMode,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }}
    />
  );
}
