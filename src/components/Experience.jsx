import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experience" style={{ padding: '80px 5%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>
              {t.experience.title}{' '}
              <span className="mono-text" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                {t.experience.subtitle}
              </span>
            </h2>
            <div
              style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}
            />
          </motion.div>

          <div className="glass-panel" style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '800px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1.5fr 3fr 2fr',
                  padding: '15px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                }}
                className="mono-text"
              >
                <div style={{ color: 'var(--text-muted)' }}>{t.experience.cols.date}</div>
                <div style={{ color: 'var(--text-muted)' }}>{t.experience.cols.status}</div>
                <div style={{ color: 'var(--text-muted)' }}>{t.experience.cols.company}</div>
                <div style={{ color: 'var(--text-muted)' }}>{t.experience.cols.role}</div>
              </div>

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1.5fr 3fr 2fr',
                    padding: '20px',
                    borderBottom: idx !== experiences.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div className="mono-text" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    {exp.date}
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                      }}
                      className="mono-text"
                    >
                      <CheckCircle2 size={14} /> {t.experience.completed}
                    </span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{exp.company}</div>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1rem' }}>{exp.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
