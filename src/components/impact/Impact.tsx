import { SectionTitle } from '../common/SectionTitle';
import { Leaf, Users, Heart, Award, Zap } from 'lucide-react';

export const Impact = () => {
  const impacts = [
    {
      title: "Zero Plastic Club Volunteer",
      org: "Rajarata University",
      desc: "Actively organizing environmental cleanup, micro-plastics awareness campaigns, and plastic reduction drives.",
      icon: <Leaf size={24} />
    },
    {
      title: "Committee Member, Health Promotion Society",
      org: "Department of Health Promotion",
      desc: "Contributing to student health advocacy, organizing awareness campaigns on communicable diseases, and planning department seminars.",
      icon: <Award size={24} />
    },
    {
      title: "Community Wellness Campaigns",
      org: "Local Initiatives",
      desc: "Participates actively in all local societal wellness campaigns and health education programs.",
      icon: <Heart size={24} />
    }
  ];

  const activities = [
    "Committee Member, Health Promotion Society",
    "Volunteer, Zero Plastic Club, Rajarata University",
    "Member, RUSL Hiking Club",
    "Athletics (Long-distance running & Marathon participation)"
  ];

  return (
    <section id="impact" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal">
          <SectionTitle 
            label="Involvement" 
            title="Impact &" 
            accent="Volunteering" 
            center={true}
            subtitle="Contributing to community well-being and environmental sustainability."
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr', 
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Main Impacts */}
          <div className="reveal reveal-delay-1">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Users size={28} className="text-accent" /> Community & Social Impact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {impacts.map((item, i) => (
                <div key={i} className="card" style={{ padding: '24px', display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--accent)', background: 'var(--tag-bg)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px' }}>{item.org}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular & Sports */}
          <div className="reveal reveal-delay-2">
            <div style={{ marginBottom: '50px' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '30px' }}>Extracurricular Activities</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activities.map((act, i) => (
                  <div key={i} style={{ 
                    padding: '12px 16px', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                    {act}
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '30px', background: 'var(--tag-bg)', border: '1px solid var(--accent-border)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={22} className="text-accent" /> Sports & Discipline
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                As an athletics member involved in <strong>long-distance running & marathon participation</strong>, 
                I have cultivated physical resilience, long-term focus, and target-driven self-discipline, 
                which I directly apply to my field surveys and research objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          section#impact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: 1.5fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
