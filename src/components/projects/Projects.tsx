import { SectionTitle } from '../common/SectionTitle';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: "Community Health Assessment",
    category: "Research",
    description: "A comprehensive study on community health indicators and promotion strategies in rural areas.",
    tags: ["Health Promotion", "Research", "Community"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Nutrition Education Campaign",
    category: "Campaign",
    description: "Designed and implemented a nutrition awareness program for school children.",
    tags: ["Nutrition", "Education", "Campaign"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Healthcare Data Analysis",
    category: "Data Science",
    description: "Analyzing regional healthcare data to identify trends and service gaps.",
    tags: ["Data Analysis", "Health Tech", "Statistics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  }
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="My Work" 
          title="Featured" 
          accent="Projects" 
          center={true}
          subtitle="A selection of my recent work in health promotion and research."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </div>
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {project.category}
                  </span>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <ExternalLink size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(auto-fill"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
