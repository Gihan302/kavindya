import { SectionTitle } from '../common/SectionTitle';
import { Target, Users, BarChart3, Heart } from 'lucide-react';

const IMPACTS = [
  {
    icon: <Target size={32} />,
    title: "Community Outreach",
    value: "500+",
    label: "People Reached",
    description: "Conducted health awareness programs and surveys in rural communities."
  },
  {
    icon: <Users size={32} />,
    title: "Engagement",
    value: "15+",
    label: "Workshops Conducted",
    description: "Organized small group communication programs for local hygiene improvement."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data Analysis",
    value: "95%",
    label: "Accuracy Rate",
    description: "Maintaining high standards in healthcare data collection and SPSS interpretation."
  },
  {
    icon: <Heart size={32} />,
    title: "Wellbeing",
    value: "10+",
    label: "Local Projects",
    description: "Successfully implemented health promotion models in regional sectors."
  }
];

export const Impact = () => {
  return (
    <section id="impact" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="Our Impact" 
          title="Making a" 
          accent="Difference" 
          center={true}
          subtitle="Quantifiable results from community health interventions and research projects."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginTop: '40px'
        }}>
          {IMPACTS.map((item, index) => (
            <div key={index} className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <div className="stat-number" style={{ marginBottom: '10px' }}>{item.value}</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-primary)' }}>{item.label}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
