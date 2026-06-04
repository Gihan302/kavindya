import { PERSONAL } from '../../utils/constants';
import { MousePointer2, Sparkles } from 'lucide-react';

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
      {/* Dynamic Background Orbs */}
      <div className="orb orb-animate" style={{ 
        width: '600px', 
        height: '600px', 
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.2) 0%, transparent 70%)', 
        top: '-100px', 
        right: '-100px' 
      }} />
      <div className="orb orb-animate" style={{ 
        width: '400px', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)', 
        bottom: '-50px', 
        left: '-50px',
        animationDelay: '-2s'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px' }}>
          <div className="section-label animate-fade-up" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={14} className="text-accent" /> Available for Collaboration
          </div>
          
          <h1 className="animate-fade-up" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
            fontWeight: 800, 
            lineHeight: 1, 
            margin: '24px 0',
            animationDelay: '0.1s',
            letterSpacing: '-0.04em'
          }}>
            <span className="text-shimmer">Driving Change</span> <br />
            Through <span className="text-accent spell-glow">Health Promotion</span>
          </h1>
          
          <p className="animate-fade-up" style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            animationDelay: '0.2s',
            maxWidth: '650px',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Hi, I'm <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{PERSONAL.name}</span>. 
            I specialize in community health strategies, behavioral modification, 
            and healthcare research to build a healthier future.
          </p>
          
          <div className="animate-fade-up" style={{ 
            display: 'flex', 
            gap: '24px', 
            flexWrap: 'wrap',
            animationDelay: '0.3s'
          }}>
            <a href="#projects" className="btn-primary" style={{ 
              borderRadius: '16px', 
              padding: '18px 36px',
              fontSize: '1.05rem',
              boxShadow: '0 10px 30px var(--accent-glow)'
            }}>
              View My Work <MousePointer2 size={18} />
            </a>
            <a href="#contact" className="btn-outline" style={{ 
              borderRadius: '16px', 
              padding: '18px 36px',
              fontSize: '1.05rem'
            }}>
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: '40px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        animation: 'float 2s ease-in-out infinite'
      }}>
        <div style={{ 
          width: '32px', 
          height: '54px', 
          border: '2px solid var(--border)', 
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{ 
            width: '4px', 
            height: '10px', 
            background: 'var(--accent)', 
            borderRadius: '2px',
            animation: 'scanLine 2s linear infinite'
          }} />
        </div>
      </div>
    </section>
  );
};
