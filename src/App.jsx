import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Preloader from './components/Preloader';
import BackgroundChart from './components/BackgroundChart';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <LanguageProvider>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <BackgroundChart />

      {!loading && <LanguageSwitcher />}

      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Awards />
      </main>

      {!loading && <Footer />}
    </LanguageProvider>
  );
}

export default App;
