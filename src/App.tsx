import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid" style={{ position: 'fixed', inset: 0, zIndex: -1, opacity: 0.4 }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
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
