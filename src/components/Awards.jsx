import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { awardMeta } from '../i18n/translations';

const Awards = () => {
  const { t } = useLanguage();
  const awards = t.awards.items.map((award, idx) => ({ ...award, ...awardMeta[idx] }));

  return (
    <section id="awards" style={{ padding: '80px 5%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px', justifyContent: 'flex-end' }}>
          <div
            style={{ height: '1px', flex: 1, background: 'linear-gradient(270deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}
          />
          <h2 style={{ fontSize: '2rem', margin: 0, textAlign: 'right' }}>
            {t.awards.title}{' '}
            <span className="mono-text" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              {t.awards.subtitle}
            </span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                borderLeft: `4px solid ${award.color}`,
                position: 'relative',
                overflow: 'hidden',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', fontSize: '8rem', opacity: 0.05, pointerEvents: 'none' }}>
                {award.icon}
              </div>

              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${award.color}40 0%, transparent 70%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  flexShrink: 0,
                  boxShadow: `0 0 20px ${award.color}30`,
                }}
              >
                {award.icon}
              </div>

              <div style={{ flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{award.title}</h3>
                  <span
                    className="mono-text"
                    style={{
                      padding: '2px 8px',
                      background: `${award.color}20`,
                      color: award.color,
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                    }}
                  >
                    {award.place}
                  </span>
                </div>
                {award.issuer && <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{award.issuer}</div>}
              </div>

              <div className="mono-text" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right', minWidth: '100px' }}>
                {award.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
