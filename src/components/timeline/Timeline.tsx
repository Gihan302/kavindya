import { SectionTitle } from '../common/SectionTitle';
import { GraduationCap, Briefcase } from 'lucide-react';

export const Timeline = () => {
  const academic = [
    {
      period: '2023 – Present',
      title: 'BSc in Health Promotion',
      org: 'Rajarata University of Sri Lanka',
      desc: 'Focused on health education, community hygiene, data collection, and behavioral modification.'
    },
    {
      period: '2020 – 2022',
      title: 'G.C.E. Advanced Level',
      org: 'Bio Stream',
      desc: 'Foundation in life sciences including Biology, Chemistry, and Physics.'
    }
  ];

  const field = [
    {
      period: '2024 – 2026',
      title: 'Public Health Intern',
      org: 'University Internship Program',
      desc: 'Hands-on training in community engagement, needs assessment, and intervention development.'
    },
    {
      period: '2024',
      title: 'Community Field Researcher',
      org: 'Regional Health Sector',
      desc: 'Conducted field surveys and structured interviews for regional health indicators.'
    }
  ];

  return (
    <section id="timeline" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal">
          <SectionTitle 
            label="My Journey" 
            title="Education &" 
            accent="Experience" 
            center={true}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px',
          marginTop: '60px'
        }}>
          {/* Academic Column */}
          <div className="reveal reveal-delay-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
              <div style={{ color: 'var(--accent)', background: 'var(--tag-bg)', padding: '10px', borderRadius: '12px' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Academic Journey</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {academic.map((item, i) => (
                <div key={i} className="card" style={{ padding: '24px' }}>
                  <span className="tag" style={{ marginBottom: '12px' }}>{item.period}</span>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>{item.org}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Field Column */}
          <div className="reveal reveal-delay-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
              <div style={{ color: 'var(--accent)', background: 'var(--tag-bg)', padding: '10px', borderRadius: '12px' }}>
                <Briefcase size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Field Experience</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {field.map((item, i) => (
                <div key={i} className="card" style={{ padding: '24px' }}>
                  <span className="tag" style={{ marginBottom: '12px' }}>{item.period}</span>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>{item.org}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
