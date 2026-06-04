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
        <SectionTitle 
          label="Capabilities" 
          title="Professional" 
          accent="Services" 
          center={true}
          subtitle="Providing expert solutions in public health, community research, and data-driven interventions."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          marginTop: '40px'
        }}>
          {SERVICES.map((service, index) => (
            <div key={index} className="card" style={{ 
              padding: '40px', 
              display: 'flex', 
              flexDirection: 'column',
              textAlign: 'left',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                color: 'var(--accent)', 
                marginBottom: '25px',
                background: 'var(--tag-bg)',
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', minHeight: '3.5rem', display: 'flex', alignItems: 'center' }}>
                {service.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '30px', flexGrow: 1 }}>
                {service.description}
              </p>
              
              <a href="#contact" className="btn-outline" style={{ 
                padding: '10px 20px', 
                fontSize: '0.9rem',
                width: 'fit-content',
                justifyContent: 'center'
              }}>
                {service.btnText} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
