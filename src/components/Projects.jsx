import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectLinks, projectColors } from '../i18n/translations';

const Projects = () => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((proj, idx) => ({
    ...proj,
    color: projectColors[idx],
    link: projectLinks[idx],
  }));

  return (
    <section id="projects" style={{ padding: '80px 5%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', margin: 0 }}>
            {t.projects.title}{' '}
            <span className="mono-text" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              {t.projects.subtitle}
            </span>
          </h2>
          <motion.div
            style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: `0 10px 30px -10px ${proj.color}40, inset 0 0 10px ${proj.color}10`,
                borderColor: `${proj.color}50`,
              }}
              className="glass-panel"
              style={{
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', backgroundColor: proj.color }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${proj.color}20, transparent)`,
                      border: `1px solid ${proj.color}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      color: proj.color,
                    }}
                  >
                    {proj.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{proj.name}</h3>
                    <div className="mono-text" style={{ color: proj.color, fontSize: '0.8rem' }}>
                      ${proj.ticker}
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>{proj.desc}</p>

              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  paddingTop: '15px',
                }}
              >
                <motion.div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {t.projects.status} <span style={{ color: 'var(--neon-green)' }}>{t.projects.deployed}</span>
                </motion.div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.75rem',
                    border: `1px solid ${proj.color}50`,
                    color: proj.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Github size={14} /> {t.projects.viewGithub}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
