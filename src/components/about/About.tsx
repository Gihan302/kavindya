import { SectionTitle } from '../common/SectionTitle';
import { PERSONAL } from '../../utils/constants';

export const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div>
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
                <p style={{ fontSize: '0.95rem' }}>BSc (Hons) in Health Promotion</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Location</h4>
                <p style={{ fontSize: '0.95rem' }}>{PERSONAL.location}</p>
              </div>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <a href={PERSONAL.cvPath} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ position: 'relative' }}>
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
              src="/assets/image.jpg" 
              alt={PERSONAL.name} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(0.2) contrast(1.1)'
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
