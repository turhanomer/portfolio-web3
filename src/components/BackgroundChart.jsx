import React from 'react';
import { motion } from 'framer-motion';

const BackgroundChart = () => {
  const candles = Array.from({ length: 100 }).map((_, i) => {
    const isUp = Math.random() > 0.4;
    // Scale down the candles significantly for a fine texture
    const height = Math.random() * 25 + 5; 
    const yPos = Math.random() * 80 + 5;
    return { id: i, isUp, height, yPos };
  });

  // Generate numerous floating logos, but with much smaller sizes
  const logos = [
    { symbol: '₿', color: 'var(--btc-orange)', baseSize: 1.5, count: 12 },
    { symbol: 'Ξ', color: '#627EEA', baseSize: 1.2, count: 12 },
    { symbol: '💧', color: '#4CAAF5', baseSize: 1.5, count: 10 },
    { symbol: '🔺', color: '#E84142', baseSize: 1.2, count: 10 },
  ];

  const floatingElements = [];
  logos.forEach(logo => {
    for (let i = 0; i < logo.count; i++) {
      const size = logo.baseSize + (Math.random() * 1 - 0.5); // Very small variation
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 10 + Math.random() * 10; // Slow floating
      const opacityBase = 0.05 + Math.random() * 0.1; // Subtle opacity
      const blur = 1 + Math.random() * 3; // Glassmorphism/blur effect
      
      floatingElements.push(
        <motion.div
          key={`${logo.symbol}-${i}`}
          className="float-logo"
          animate={{ 
            y: [0, -20 - Math.random() * 20, 0], 
            rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
            opacity: [opacityBase, opacityBase + 0.1, opacityBase] 
          }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}rem`,
            filter: `blur(${blur}px)`,
            color: logo.color,
            textShadow: `0 0 ${blur * 2}px ${logo.color}40`
          }}
        >
          {logo.symbol}
        </motion.div>
      );
    }
  });

  return (
    <>
      <div className="chart-bg"></div>
      
      {/* Dense Atmosphere of Subtle Crypto Logos */}
      <div style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
        {floatingElements}
      </div>

      {/* Static abstract candles container (Fine Texture) */}
      <div style={{ position: 'fixed', bottom: '2%', left: 0, width: '200vw', height: '30vh', display: 'flex', alignItems: 'flex-end', gap: '10px', zIndex: -2, opacity: 0.15, pointerEvents: 'none', animation: 'scrollBg 120s linear infinite' }}>
        {candles.map(c => (
          <div key={c.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: `${c.yPos}px` }}>
            {/* The Wick */}
            <div style={{ width: '1px', height: '40px', backgroundColor: c.isUp ? 'var(--neon-green)' : 'var(--neon-red)', opacity: 0.4 }} />
            {/* The Body */}
            <div style={{ width: '5px', height: `${c.height}px`, backgroundColor: c.isUp ? 'var(--neon-green)' : 'var(--neon-red)', marginTop: '-30px', borderRadius: '1px', boxShadow: `0 0 5px ${c.isUp ? 'var(--neon-green)' : 'var(--neon-red)'}` }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BackgroundChart;
