import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import BackgroundChart from './components/BackgroundChart';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Once loading is complete, we can enable scrolling
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Ensure we start at top
      window.scrollTo(0, 0);
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <BackgroundChart />
      
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Awards />
      </main>

      {!loading && <Footer />}
    </>
  );
}

export default App;
