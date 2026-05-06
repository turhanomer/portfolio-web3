import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    date: 'Şub 2026 - Şub 2026',
    status: 'Tamamlandı',
    role: 'Stajyer',
    company: 'QNB (QNB 101 Online Staj Programı)'
  },
  {
    date: 'Tem 2025 - Ağu 2025',
    status: 'Tamamlandı',
    role: 'IT Teknisyeni',
    company: 'Afyon Kocatepe Üniversitesi'
  },
  {
    date: 'Haz 2024 - Nis 2025',
    status: 'Tamamlandı',
    role: 'Yönetim Kurulu Üyesi',
    company: 'Uludağ Yönetim Bilişim Sistemleri Topluluğu'
  },
  {
    date: 'Kas 2023 - Haz 2024',
    status: 'Tamamlandı',
    role: 'Organizasyon Komite Üyesi',
    company: 'Uludağ Yönetim Bilişim Sistemleri Topluluğu'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '80px 5%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>
              İşlem Geçmişi <span className="mono-text" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>(Deneyimler & Gönüllü Çalışmalar)</span>
            </h2>
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}></div>
          </div>

          <div className="glass-panel" style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '800px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 3fr 2fr', padding: '15px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.2)' }} className="mono-text">
                <div style={{ color: 'var(--text-muted)' }}>Tarih</div>
                <div style={{ color: 'var(--text-muted)' }}>Durum</div>
                <div style={{ color: 'var(--text-muted)' }}>Kurum</div>
                <div style={{ color: 'var(--text-muted)' }}>Rol</div>
              </div>

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, background: 'rgba(255,255,255,0)' }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1.5fr 1.5fr 3fr 2fr', 
                    padding: '20px', 
                    borderBottom: idx !== experiences.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div className="mono-text" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{exp.date}</div>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.85rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)' }} className="mono-text">
                      <CheckCircle2 size={14} /> TAMAMLANDI
                    </span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1rem' }}>
                    {exp.role}
                  </div>
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
