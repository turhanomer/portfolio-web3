import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className="mono-text" style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ display: 'inline-block', width: '8px', height: '1.1rem', backgroundColor: 'var(--neon-green)', marginLeft: '4px', verticalAlign: 'middle' }}
      />
    </span>
  );
};

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('assets');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10 }}>
      
      <div style={{ display: 'flex', flex: 1, width: '100%', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center', padding: '0 5%' }}>
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 500px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ padding: '4px 8px', background: 'rgba(0, 255, 102, 0.1)', color: 'var(--neon-green)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }} className="mono-text border border-[var(--neon-green)]">
              TICKER: OMER
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--neon-green)', fontSize: '0.9rem' }} className="mono-text">
              <span style={{ marginRight: '5px' }}>▲</span> +24.5%
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase', lineHeight: 1 }} className="glow-orange">
            Ömer Turhan
          </h1>
          
          <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--text-main)', marginBottom: '30px', fontWeight: 500 }}>
            4. Sınıf Yönetim Bilişim Sistemleri (YBS) Öğrencisi <span style={{ color: 'var(--text-muted)' }}>|</span> Yazılım & Web3 Geliştirici
          </h2>

          <div style={{ marginBottom: '40px', minHeight: '80px', maxWidth: '600px' }}>
            <Typewriter 
              text="Yazılım alanında proje odaklı çalışmalarla kendimi geliştirmeye devam ediyorum. Sürekli değişen teknoloji dünyasında öğrenmeye açık ve yenilikçi çözümler üretmeye hevesliyim." 
              delay={800} 
            />
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn neon-border-orange glass-panel text-btc-orange">
              Cüzdanı Bağla (İletişim)
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '280px', 
            aspectRatio: '1/1',
            borderRadius: '20px',
            padding: '10px',
            background: 'linear-gradient(135deg, var(--neon-green) 0%, var(--btc-orange) 100%)',
            boxShadow: '0 0 40px rgba(0, 255, 102, 0.2), inset 0 0 20px rgba(247, 147, 26, 0.3)'
          }}>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'var(--bg-secondary)', 
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 2
            }}>
              <img 
                src="/src/images/aa.jpg" 
                alt="Ömer Turhan" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(0.9)' }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-family: var(--font-mono); text-align: center; padding: 20px;">/src/images/aa.jpg<br/><br/>Resim Bulunamadı</div>';
                }}
              />
            </div>
            {/* Tech Decoration Elements */}
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '30px', height: '30px', borderTop: '3px solid var(--neon-green)', borderRight: '3px solid var(--neon-green)', zIndex: 3 }}></div>
            <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '30px', height: '30px', borderBottom: '3px solid var(--btc-orange)', borderLeft: '3px solid var(--btc-orange)', zIndex: 3 }}></div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={scrollToNext}
      >
        <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '2px' }}>
          SCROLL
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} color="var(--neon-green)" style={{ filter: 'drop-shadow(0 0 5px var(--neon-green))' }} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
