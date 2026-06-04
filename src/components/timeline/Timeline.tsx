import { SectionTitle } from '../common/SectionTitle';

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: 'education' | 'experience';
  description: string;
  highlights: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 'bsc',
    period: '2023 – Present',
    title: 'BSc in Health Promotion',
    organization: 'Rajarata University of Sri Lanka',
    type: 'education',
    description: 'Focused on health education, community hygiene, data collection, epidemiology, and behavioral modification models.',
    highlights: [
      'Epidemiology & Biostatistics',
      'Behavioral Change Communication',
      'Community Needs Assessment',
      'Health Education Program Design',
    ],
  },
  {
    id: 'al',
    period: '2020 – 2022',
    title: 'G.C.E. Advanced Level',
    organization: 'Bio Stream',
    type: 'education',
    description: 'Completed Advanced Level examinations in the Biology stream, building foundational knowledge in life sciences.',
    highlights: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    id: 'intern',
    period: '2024 – 2026',
    title: 'Public Health Intern',
    organization: 'Rajarata University Internship Program',
    type: 'experience',
    description: 'Comprehensive field practical training including community engagement, needs assessments, and intervention development.',
    highlights: [
      'Assessed regional health indicators',
      'Mapped local community hygiene issues',
      'Organized small group communication programs',
      'Conducted structured surveys & field analysis',
    ],
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="My Journey" 
          title="Education &" 
          accent="Experience" 
          center={true}
        />
        
        <div style={{ position: 'relative', marginTop: '60px' }}>
          <div className="timeline-line" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {timelineData.map((item) => (
              <div key={item.id} style={{ 
                position: 'relative', 
                paddingLeft: '50px',
                animation: 'fadeUp 0.7s ease forwards'
              }}>
                <div className="timeline-dot" style={{ position: 'absolute', left: '-6px' }} />
                
                <div className="card" style={{ padding: '30px', textAlign: 'left' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1rem' }}>{item.organization}</p>
                    </div>
                    <span className="tag" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>
                      {item.period}
                    </span>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{item.description}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {item.highlights.map((highlight, idx) => (
                      <span key={idx} style={{ 
                        fontSize: '0.85rem', 
                        padding: '4px 12px', 
                        borderRadius: '6px', 
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)'
                      }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
