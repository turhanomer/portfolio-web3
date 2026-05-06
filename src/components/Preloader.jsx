import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [shatter, setShatter] = useState(false);

  useEffect(() => {
    // Start shatter animation after 2.5 seconds
    const timer1 = setTimeout(() => {
      setShatter(true);
    }, 2500);

    // Call onComplete to unmount preloader after animation
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: '#0D0D0D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <div className="coin-container" style={{ position: 'relative' }}>
          <div className={`coin ${shatter ? 'shatter' : 'spin-fast'}`}>
            <div className="coin-face">₿</div>
            <div className="coin-face coin-face-back">₿</div>
            <div className="coin-edge"></div>
          </div>
          {/* Intense Glow effect that triggers during shatter */}
          <div className={`coin-glow ${shatter ? 'glow-burst' : ''}`}></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
