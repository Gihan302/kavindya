import { SectionTitle } from '../common/SectionTitle';
import { Layout, Globe, ClipboardList, Info } from 'lucide-react';

const PROJECTS = [
  {
    period: "2024–2026",
    category: "Community Initiative",
    title: "Community-Based Health Promotion Field Practical",
    description: "Designed and implemented interventions, conducted needs assessments, and developed educational programs.",
    status: "Completed",
    icon: <Globe size={28} />
  },
  {
    period: "2025",
    category: "Community Initiative",
    title: "Community Health Promotion Camp Initiative",
    description: "Organized health camps, performed screenings, and provided health education to at-risk individuals.",
    status: "Completed",
    icon: <ClipboardList size={28} />
  },
  {
    period: "2024",
    category: "Academic Research",
    title: "Health Indicator Assessment",
    description: "Systematic data collection and analysis for regional health metrics using quantitative research methods.",
    status: "Completed",
    icon: <Layout size={28} />
  }
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="My Work" 
          title="Academic &" 
          accent="Field Projects" 
          center={true}
          subtitle="A selection of my recent initiatives in community health and academic research."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="card" style={{ 
              padding: '32px', 
              display: 'flex', 
              flexDirection: 'column',
              minHeight: '300px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  color: 'var(--accent)', 
                  background: 'var(--tag-bg)', 
                  padding: '12px', 
                  borderRadius: '12px' 
                }}>
                  {project.icon}
                </div>
                <span className="tag" style={{ fontSize: '0.75rem' }}>{project.period}</span>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--text-muted)', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '8px' }}>{project.title}</h3>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ 
                marginTop: 'auto', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid var(--border)'
              }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--accent)', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                  {project.status}
                </span>
                <a href="#contact" style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }} className="hover-underline">
                  Inquire details <Info size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
