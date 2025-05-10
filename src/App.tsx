import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <CustomCursor />
      <div className="noise-bg" />
      
      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen relative"
          >
            <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
            
            <main>
              <section id="hero">
                <Hero />
              </section>
              
              <section id="projects">
                <Projects />
              </section>
              
              <section id="skills">
                <Skills />
              </section>
              
              <section id="about">
                <About />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;