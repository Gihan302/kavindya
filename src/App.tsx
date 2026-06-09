import { useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/about/About';
import { Timeline } from './components/timeline/Timeline';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Impact } from './components/impact/Impact';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { PERSONAL } from './utils/constants';

function App() {
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="bg-grid" style={{ position: 'fixed', inset: 0, zIndex: -1, opacity: 0.4 }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Impact />
        <Services />
        <Contact />
      </main>
      
      <footer style={{ 
        padding: '80px 24px 40px', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-card)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.8rem', 
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            {PERSONAL.name}
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            maxWidth: '500px', 
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontSize: '0.95rem'
          }}>
            Designed for academic and community public health campaigns.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <a href="#about" className="nav-link" style={{ fontSize: '0.85rem' }}>About</a>
            <a href="#timeline" className="nav-link" style={{ fontSize: '0.85rem' }}>Timeline</a>
            <a href="#skills" className="nav-link" style={{ fontSize: '0.85rem' }}>Skills</a>
            <a href="#projects" className="nav-link" style={{ fontSize: '0.85rem' }}>Projects</a>
            <a href={PERSONAL.cvPath} target="_blank" rel="noopener noreferrer" download="Kavindya_Lakshani_CV.pdf" className="nav-link" style={{ fontSize: '0.85rem' }}>CV {PERSONAL.name}</a>
          </div>
          
          <div className="section-divider" style={{ marginBottom: '40px', opacity: 0.5 }} />
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © 2026 {PERSONAL.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
