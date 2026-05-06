import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Algoritma ve Veri Yapıları Temelli',
    skills: [
      { name: 'Java', dominance: 90 },
      { name: 'C#', dominance: 85 },
      { name: 'Spring Boot', dominance: 80 }
    ]
  },
  {
    category: 'Veri Katmanı',
    skills: [
      { name: 'MSSQL', dominance: 85 },
      { name: 'MySQL', dominance: 80 }
    ]
  },
  {
    category: 'Frontend & Akıllı Kontrat',
    skills: [
      { name: 'Flutter', dominance: 80 },
      { name: 'Move (Sui & Avalanche Ağları)', dominance: 75 }
    ]
  },
  {
    category: 'Süreçler & Yetkinlikler',
    skills: [
      { name: 'Agile (SCRUM)', dominance: 90 },
      { name: 'Proje Yönetimi', dominance: 85 },
      { name: 'Linux (VirtualBox)', dominance: 80 },
      { name: 'FinTech & Bankacılık', dominance: 80 },
      { name: 'İç Denetim', dominance: 75 }
    ]
  },
  {
    category: 'İletişim',
    skills: [
      { name: 'Takım Uyumu', dominance: 95 },
      { name: 'İngilizce', dominance: 85 }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="assets" style={{ padding: '100px 5%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'block', marginBottom: '5px' }} className="mono-text">MARKET DEPTH</span>
              Yetenekler / Asset Dominance
            </h2>
            <div className="mono-text" style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>24h Hacim</div>
              <div style={{ color: 'var(--neon-green)', fontSize: '1.2rem' }}>Limitsiz</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {skillCategories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="mono-text" style={{ color: 'var(--btc-orange)', fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--btc-orange)', display: 'inline-block' }}></span>
                  {cat.category}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1rem' }}>{skill.name}</span>
                        <span className="mono-text" style={{ color: 'var(--neon-green)', fontSize: '0.9rem' }}>%{skill.dominance} Dominance</span>
                      </div>
                      
                      {/* Candlestick / Market Depth Bar Visualizer */}
                      <div style={{ position: 'relative', width: '100%', height: '8px', display: 'flex', alignItems: 'center' }}>
                        {/* The Wick (Total Range) */}
                        <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', zIndex: 1 }}></div>
                        
                        {/* The Body (Bullish Candle in Neon Green) */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.dominance}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.2, type: "spring", bounce: 0.2 }}
                          style={{ 
                            position: 'absolute', 
                            height: '8px', 
                            backgroundColor: 'rgba(0, 255, 102, 0.2)', 
                            borderLeft: '2px solid var(--neon-green)',
                            borderRight: '2px solid var(--neon-green)',
                            borderTop: '1px solid rgba(0, 255, 102, 0.5)',
                            borderBottom: '1px solid rgba(0, 255, 102, 0.5)',
                            zIndex: 2,
                            boxShadow: '0 0 10px rgba(0, 255, 102, 0.2), inset 0 0 5px rgba(0, 255, 102, 0.2)'
                          }}
                        >
                          {/* Inner Candle Body Highlight */}
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,102,0.4) 100%)' }}></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
