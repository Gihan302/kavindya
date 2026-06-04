import { PERSONAL } from '../../utils/constants';
import { MousePointer2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '120px 24px 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Orbs */}
      <div className="orb" style={{ 
        width: '600px', 
        height: '600px', 
        background: 'rgba(13, 148, 136, 0.15)', 
        top: '-100px', 
        right: '-100px' 
      }} />
      <div className="orb" style={{ 
        width: '400px', 
        height: '400px', 
        background: 'rgba(45, 212, 191, 0.1)', 
        bottom: '-50px', 
        left: '-50px' 
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <div className="section-label animate-fade-up">
            Available for Collaboration
          </div>
          
          <h1 className="animate-fade-up" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            margin: '24px 0',
            animationDelay: '0.1s'
          }}>
            Driving Change Through <br />
            <span className="text-accent text-glow">Health Promotion</span>
          </h1>
          
          <p className="animate-fade-up" style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            animationDelay: '0.2s',
            maxWidth: '600px'
          }}>
            Hi, I'm {PERSONAL.name}. I specialize in community health strategies, 
            behavioral modification, and healthcare research.
          </p>
          
          <div className="animate-fade-up" style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap',
            animationDelay: '0.3s'
          }}>
            <a href="#projects" className="btn-primary">
              View Projects <MousePointer2 size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: '40px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        animation: 'float 2s ease-in-out infinite'
      }}>
        <div style={{ 
          width: '30px', 
          height: '50px', 
          border: '2px solid var(--border)', 
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px'
        }}>
          <div style={{ width: '4px', height: '8px', background: 'var(--accent)', borderRadius: '2px' }} />
        </div>
      </div>
    </section>
  );
};
