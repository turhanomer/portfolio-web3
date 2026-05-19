import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { CV_URL } from '../i18n/translations';

const CvModal = ({ isOpen, onClose, downloadLabel, closeLabel }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '900px',
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid rgba(247, 147, 26, 0.3)',
            }}
          >
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <span className="mono-text" style={{ color: 'var(--btc-orange)', fontSize: '0.9rem' }}>
                CV / omer_turhan.pdf
              </span>
              <motion.div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={CV_URL}
                  download="omer_turhan.pdf"
                  className="btn neon-border-green"
                  style={{ padding: '8px 16px', fontSize: '0.75rem', gap: '6px' }}
                >
                  <Download size={16} /> {downloadLabel}
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn glass-panel"
                  style={{ padding: '8px 16px', fontSize: '0.75rem', gap: '6px', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <X size={16} /> {closeLabel}
                </button>
              </motion.div>
            </motion.div>
            <iframe
              title="CV Preview"
              src={`${CV_URL}#toolbar=1`}
              style={{ flex: 1, width: '100%', border: 'none', background: '#1a1a2e' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
