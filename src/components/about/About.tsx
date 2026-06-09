import { SectionTitle } from '../common/SectionTitle';
import { PERSONAL } from '../../utils/constants';
import aboutImg from '../../assets/image.jpg';
import { Link } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div 
        className="reveal"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}
      >
        <div className="reveal reveal-delay-1">
          <SectionTitle 
            label="About Me" 
            title="Professional Background" 
            accent="& Education"
          />
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              I am {PERSONAL.name}, a passionate {PERSONAL.title} at {PERSONAL.university}. 
              My journey is driven by a commitment to improving community health and well-being 
              through innovative health promotion strategies and evidence-based practices.
            </p>
            <p style={{ marginBottom: '30px' }}>
              With a strong foundation in health education, community engagement, and data-driven 
              decision-making, I strive to make a tangible impact in the healthcare sector.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Degree</h4>
                <p style={{ fontSize: '0.95rem' }}>BSc in Health Promotion</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Location</h4>
                <p style={{ fontSize: '0.95rem' }}>{PERSONAL.location}</p>
              </div>
            </div>
            
            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a 
                href={`${import.meta.env.BASE_URL}${PERSONAL.cvPath}`} 
                className="btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
                download="Kavindya_Lakshani_CV.pdf"
              >
                Download CV
              </a>
              <a 
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
                className="hover-accent"
              >
                <Link size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '500px',
            background: 'var(--accent)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            position: 'relative',
            zIndex: 1
          }}>
            <img 
              src={aboutImg} 
              alt={PERSONAL.name} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100%',
            height: '100%',
            border: '2px solid var(--accent)',
            borderRadius: '24px',
            zIndex: 0
          }} />
        </div>
      </div>
      
      <style>{`
        @media (max-width: 968px) {
          section#about > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="height: 500px"] {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};
