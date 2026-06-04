import { SectionTitle } from '../common/SectionTitle';
import { Activity, Microscope, Users, Laptop } from 'lucide-react';

export interface SkillCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'public-health',
    category: 'Public Health & Promotion',
    icon: <Activity size={32} />,
    skills: [
      'Health Promotion Strategies',
      'Community Health Assessment',
      'Health Education',
      'Behavioral Change Communication',
      'Disease Prevention & Control',
    ],
  },
  {
    id: 'research',
    category: 'Research & Methodology',
    icon: <Microscope size={32} />,
    skills: [
      'Research Methodology',
      'Data Collection Techniques',
      'SPSS / Excel Data Analysis',
      'Report Writing & Interpretation',
      'Basic Epidemiology',
    ],
  },
  {
    id: 'fieldwork',
    category: 'Field Work & Organizing',
    icon: <Users size={32} />,
    skills: [
      'Health Campaigns',
      'Community Engagement',
      'Field Data Collection',
      'Workshops Organization',
    ],
  },
  {
    id: 'technical',
    category: 'Technical & Digital',
    icon: <Laptop size={32} />,
    skills: [
      'Microsoft Office Suite',
      'Google Forms',
      'Data Visualization',
      'Social Media for Health',
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle 
          label="My Expertise" 
          title="Skills &" 
          accent="Specializations" 
          center={true}
          subtitle="Specialized competencies in public health, community engagement, and healthcare research."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {skillsData.map((category) => (
            <div key={category.id} className="card" style={{ 
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}>
              <div style={{ 
                color: 'var(--accent)', 
                marginBottom: '20px',
                background: 'var(--tag-bg)',
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {category.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700
              }}>
                {category.category}
              </h3>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px',
                marginTop: 'auto'
              }}>
                {category.skills.map((skill) => (
                  <span key={skill} className="tag" style={{
                    fontSize: '0.85rem',
                    padding: '6px 14px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
