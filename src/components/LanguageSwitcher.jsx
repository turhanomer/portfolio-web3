import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
      }}
      className="glass-panel"
    >
      <Languages size={16} color="var(--btc-orange)" style={{ marginRight: '4px' }} />
      {(['tr', 'en']).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className="mono-text"
          style={{
            padding: '6px 12px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '4px',
            background: lang === code ? 'rgba(247, 147, 26, 0.25)' : 'transparent',
            color: lang === code ? 'var(--btc-orange)' : 'var(--text-muted)',
            transition: 'all 0.2s ease',
          }}
          aria-label={code === 'tr' ? 'Türkçe' : 'English'}
          aria-pressed={lang === code}
        >
          {t.lang[code]}
        </button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
