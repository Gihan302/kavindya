import { SectionTitle } from '../common/SectionTitle';
import { Microscope, Activity, Database, MessageSquare, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: <Activity size={32} />,
    title: "Health Education & Campaigns",
    description: "Designing and execution of evidence-based health interventions, workshops, hygiene awareness, and behavioral transformation plans.",
    btnText: "Book Campaign"
  },
  {
    icon: <Microscope size={32} />,
    title: "Community Assessments",
    description: "Structuring needs assessments, health camps, data gathering questionnaires, and focused group interviews for health indicators.",
    btnText: "Inquire Assessment"
  },
  {
    icon: <Database size={32} />,
    title: "Data Entry & SPSS Analysis",
    description: "Executing statistical data sorting, descriptive statistics analysis via SPSS / Excel, and preparing interpretation reports.",
    btnText: "Analyze Data"
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Health Communication",
    description: "Developing targeted communication strategies and materials to facilitate positive health behavior changes.",
    btnText: "Inquire Details"
  }
];

export const Services = () => {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal">
          <SectionTitle 
            label="Capabilities" 
            title="Professional" 
            accent="Services" 
            center={true}
            subtitle="Providing expert solutions in public health, community research, and data-driven interventions."
          />
        </div>
        
        <div 
          className="services-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '30px',
            marginTop: '40px'
          }}
        >
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className={`card reveal reveal-delay-${(index % 5) + 1}`}
              style={{ 
                padding: '40px', 
                display: 'flex', 
                flexDirection: 'column',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px'
              }}
            >
              <div style={{ 
                color: 'var(--accent)', 
                marginBottom: '25px',
                background: 'var(--tag-bg)',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px var(--accent-glow)'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '15px', 
                fontWeight: 700,
                fontFamily: 'var(--font-heading)'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7, 
                marginBottom: '30px', 
                flexGrow: 1,
                fontSize: '1.05rem'
              }}>
                {service.description}
              </p>
              
              <a href="#contact" className="btn-outline" style={{ 
                padding: '12px 24px', 
                fontSize: '0.95rem',
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '12px'
              }}>
                {service.btnText} <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
