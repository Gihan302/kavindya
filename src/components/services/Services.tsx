import { SectionTitle } from '../common/SectionTitle';
import { Microscope, Activity, MessageSquare, ClipboardCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: <Microscope size={36} />,
    title: "Health Research",
    description: "Conducting systematic studies to identify community needs and health trends using scientific methodologies."
  },
  {
    icon: <Activity size={36} />,
    title: "Health Promotion",
    description: "Designing and implementing behavioral change communication models to improve public health standards."
  },
  {
    icon: <MessageSquare size={36} />,
    title: "Awareness Campaigns",
    description: "Organizing and conducting community outreach programs on hygiene, nutrition, and disease prevention."
  },
  {
    icon: <ClipboardCheck size={36} />,
    title: "Data Analysis",
    description: "Expert data collection and statistical analysis using tools like SPSS and Excel for healthcare projects."
  }
];

export const Services = () => {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="What I Offer" 
          title="Professional" 
          accent="Services" 
          center={true}
          subtitle="Specialized services in the public health sector tailored for community and research needs."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          marginTop: '40px'
        }}>
          {SERVICES.map((service, index) => (
            <div key={index} className="card" style={{ padding: '40px', textAlign: 'left' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '25px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {service.description}
              </p>
              <div style={{ 
                marginTop: '25px', 
                height: '2px', 
                width: '40px', 
                background: 'var(--accent)',
                borderRadius: '2px'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
