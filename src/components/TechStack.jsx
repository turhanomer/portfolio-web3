import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CANDLE_HEIGHT = 140;

const SkillCandle = ({ skill, idx, dominanceLabel }) => {
  const isBullish = idx % 2 === 0;
  const bodyColor = isBullish ? 'var(--neon-green)' : 'var(--neon-red)';
  const bodyBg = isBullish ? 'rgba(0, 255, 102, 0.25)' : 'rgba(255, 51, 102, 0.25)';
  const wickColor = isBullish ? 'var(--neon-green)' : 'var(--neon-red)';
  const remaining = 100 - skill.dominance;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '56px',
        flex: '1 1 56px',
        maxWidth: '80px',
      }}
    >
      <span
        className="mono-text"
        style={{
          fontSize: '0.75rem',
          color: isBullish ? 'var(--neon-green)' : 'var(--neon-red)',
          fontWeight: 'bold',
        }}
      >
        %{skill.dominance}
      </span>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring', bounce: 0.15 }}
        style={{
          position: 'relative',
          width: '28px',
          height: CANDLE_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transformOrigin: 'bottom',
        }}
      >
        {/* Upper wick (bearish / remaining range) */}
        {remaining > 0 && (
          <div
            style={{
              width: '2px',
              height: `${(remaining / 100) * CANDLE_HEIGHT * 0.35}px`,
              minHeight: remaining > 5 ? '4px' : 0,
              background: `linear-gradient(180deg, ${wickColor}80 0%, ${wickColor} 100%)`,
              boxShadow: `0 0 6px ${isBullish ? 'rgba(0,255,102,0.4)' : 'rgba(255,51,102,0.4)'}`,
            }}
          />
        )}

        {/* Candle body */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${(skill.dominance / 100) * CANDLE_HEIGHT * 0.75}px` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.08 + 0.15 }}
          style={{
            width: '22px',
            minHeight: '20px',
            background: bodyBg,
            border: `2px solid ${bodyColor}`,
            borderRadius: '2px',
            boxShadow: `0 0 12px ${isBullish ? 'rgba(0,255,102,0.35)' : 'rgba(255,51,102,0.35)'}, inset 0 0 8px ${isBullish ? 'rgba(0,255,102,0.15)' : 'rgba(255,51,102,0.15)'}`,
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: `linear-gradient(180deg, ${bodyColor}40 0%, transparent 100%)`,
            }}
          />
        </motion.div>

        {/* Lower wick */}
        <motion.div
          style={{
            width: '2px',
            height: '8px',
            background: wickColor,
            boxShadow: `0 0 4px ${isBullish ? 'rgba(0,255,102,0.5)' : 'rgba(255,51,102,0.5)'}`,
          }}
        />
      </motion.div>

      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--text-main)',
          textAlign: 'center',
          lineHeight: 1.2,
          wordBreak: 'break-word',
        }}
      >
        {skill.name}
      </span>
      <span className="mono-text" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
        {dominanceLabel}
      </span>
    </div>
  );
};

const TechStack = () => {
  const { t } = useLanguage();
  const skillCategories = t.techStack.categories;

  return (
    <section id="assets" style={{ padding: '100px 5%', position: 'relative', zIndex: 10 }}>
      <motion.div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '15px',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <h2 style={{ fontSize: '2rem', margin: 0 }}>
              <span
                style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'block', marginBottom: '5px' }}
                className="mono-text"
              >
                {t.techStack.marketDepth}
              </span>
              {t.techStack.title}
            </h2>
            <div className="mono-text" style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.techStack.volume24h}</div>
              <div style={{ color: 'var(--neon-green)', fontSize: '1.2rem' }}>{t.techStack.unlimited}</div>
            </div>
          </div>

          {/* Chart legend */}
          <div
            className="mono-text"
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '30px',
              fontSize: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 12, height: 12, background: 'var(--neon-green)', borderRadius: 2 }} />
              <span style={{ color: 'var(--neon-green)' }}>{t.techStack.legendGreen}</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 12, height: 12, background: 'var(--neon-red)', borderRadius: 2 }} />
              <span style={{ color: 'var(--neon-red)' }}>{t.techStack.legendRed}</span>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {skillCategories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3
                  className="mono-text"
                  style={{
                    color: 'var(--btc-orange)',
                    fontSize: '1.1rem',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{ width: '8px', height: '8px', backgroundColor: 'var(--btc-orange)', display: 'inline-block' }}
                  />
                  {cat.category}
                </h3>

                <div
                  className="glass-panel skill-chart-panel"
                  style={{
                    padding: '24px 16px 16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    position: 'relative',
                    borderBottom: '2px solid rgba(255,255,255,0.05)',
                    background:
                      'linear-gradient(180deg, rgba(0,255,102,0.02) 0%, rgba(255,51,102,0.02) 50%, transparent 100%)',
                  }}
                >
                  {cat.skills.map((skill, idx) => (
                    <SkillCandle
                      key={skill.name}
                      skill={skill}
                      idx={idx}
                      dominanceLabel={t.techStack.dominance}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;
