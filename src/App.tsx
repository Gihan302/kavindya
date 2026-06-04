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
        padding: '60px 24px', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-card)'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Rusiru Lakshan. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
