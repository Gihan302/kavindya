import { SectionTitle } from '../common/SectionTitle';

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'public-health',
    category: 'Public Health & Promotion',
    icon: '🏥',
    skills: [
      { name: 'Health Promotion Strategies', level: 90 },
      { name: 'Community Health Assessment', level: 88 },
      { name: 'Health Education', level: 85 },
      { name: 'Behavioral Change Communication', level: 82 },
      { name: 'Disease Prevention & Control', level: 80 },
    ],
  },
  {
    id: 'research',
    category: 'Research & Methodology',
    icon: '🔬',
    skills: [
      { name: 'Research Methodology', level: 85 },
      { name: 'Data Collection Techniques', level: 88 },
      { name: 'SPSS / Excel Data Analysis', level: 82 },
      { name: 'Report Writing & Interpretation', level: 84 },
      { name: 'Basic Epidemiology', level: 78 },
    ],
  },
  {
    id: 'fieldwork',
    category: 'Field Work & Organizing',
    icon: '🌍',
    skills: [
      { name: 'Health Campaigns', level: 90 },
      { name: 'Community Engagement', level: 92 },
      { name: 'Field Data Collection', level: 88 },
      { name: 'Workshops Organization', level: 85 },
    ],
  },
  {
    id: 'technical',
    category: 'Technical & Digital',
    icon: '💻',
    skills: [
      { name: 'Microsoft Office', level: 88 },
      { name: 'Google Forms', level: 90 },
      { name: 'Data Visualization', level: 78 },
      { name: 'Social Media for Health', level: 82 },
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
          subtitle="A comprehensive overview of my professional competencies in health promotion and research."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {skillsData.map((category) => (
            <div key={category.id} className="card" style={{ padding: '30px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{category.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '25px' }}>{category.category}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent)' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
