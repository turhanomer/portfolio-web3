import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, FileText, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CV_URL } from '../i18n/translations';
import CvModal from './CvModal';

const Footer = () => {
  const { t, lang } = useLanguage();
  const [terminalText, setTerminalText] = useState('');
  const [cvOpen, setCvOpen] = useState(false);
  const fullText = t.footer.terminal;

  useEffect(() => {
    setTerminalText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTerminalText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText, lang]);

  return (
    <>
      <CvModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        downloadLabel={t.footer.downloadCv}
        closeLabel={t.footer.closeCv}
      />

      <footer
        id="contact"
        style={{
          padding: '60px 5% 30px',
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '50px',
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--text-muted)' }}>{t.footer.title}</h2>

          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginBottom: '30px',
              alignItems: 'center',
              textAlign: 'center',
              color: 'var(--text-main)',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mono-text">
              <Phone size={16} color="var(--neon-green)" />
              <span>+90 507 895 13 03</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mono-text">
              <MapPin size={16} color="var(--neon-red)" />
              <span>Esentepe Mahallesi 294. Sokak Bina No: 17 Daire No:7 03030 Afyonkarahisar</span>
            </div>
          </motion.div>

          {/* CV Buttons */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="btn neon-border-orange glass-panel text-btc-orange"
              style={{ padding: '10px 20px', gap: '10px' }}
            >
              <FileText size={18} /> {t.footer.viewCv}
            </button>
            <a
              href={CV_URL}
              download="omer_turhan.pdf"
              className="btn neon-border-green glass-panel"
              style={{ padding: '10px 20px', gap: '10px' }}
            >
              <Download size={18} /> {t.footer.downloadCv}
            </a>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:omerturhan1211@gmail.com" className="btn neon-border-green glass-panel" style={{ padding: '10px 20px', gap: '10px' }}>
              <Mail size={18} /> {t.footer.email}
            </a>
            <a
              href="https://linkedin.com/in/omerturhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass-panel"
              style={{
                padding: '10px 20px',
                gap: '10px',
                borderColor: '#0077b5',
                color: '#0077b5',
                boxShadow: '0 0 10px rgba(0, 119, 181, 0.2)',
              }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/turhanomer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass-panel"
              style={{
                padding: '10px 20px',
                gap: '10px',
                borderColor: '#ffffff',
                color: '#ffffff',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              <Github size={18} /> GitHub
            </a>
          </div>

          <div
            className="mono-text"
            style={{
              width: '100%',
              padding: '15px',
              background: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              color: 'var(--neon-green)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {terminalText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                display: 'inline-block',
                width: '8px',
                height: '1rem',
                backgroundColor: 'var(--neon-green)',
                marginLeft: '4px',
              }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
