import { SectionTitle } from '../common/SectionTitle';
import { PERSONAL } from '../../utils/constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal">
          <SectionTitle 
            label="Get In Touch" 
            title="Let's Start a" 
            accent="Conversation" 
            center={true}
            subtitle="Whether you have a question or want to collaborate, my inbox is always open."
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr', 
          gap: '60px',
          marginTop: '40px'
        }}>
          {/* Contact Info */}
          <div className="reveal reveal-delay-1">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  background: 'var(--tag-bg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</p>
                  <p style={{ fontWeight: 600 }}>{PERSONAL.email}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  background: 'var(--tag-bg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</p>
                  <p style={{ fontWeight: 600 }}>{PERSONAL.phone}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  background: 'var(--tag-bg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</p>
                  <p style={{ fontWeight: 600 }}>{PERSONAL.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card reveal reveal-delay-2" style={{ padding: '40px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                  <input type="text" className="form-field" placeholder="Your Name" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                  <input type="email" className="form-field" placeholder="Your Email" />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Subject</label>
                <input type="text" className="form-field" placeholder="Project Inquiry" />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                <textarea className="form-field" style={{ minHeight: '150px', resize: 'vertical' }} placeholder="How can I help you?"></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 968px) {
          section#contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
