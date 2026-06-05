import { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { PERSONAL } from '../../utils/constants';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // EmailJS Configuration
    // Replace placeholders with your actual IDs from the EmailJS dashboard
    const SERVICE_ID = 'service_nviqgrw'; 
    const TEMPLATE_ID = 'template_placeholder'; // Replace this
    const PUBLIC_KEY = 'public_key_placeholder'; // Replace this

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: PERSONAL.name,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

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
            {status === 'sent' ? (
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                gap: '20px'
              }}>
                <div style={{ color: 'var(--accent)', background: 'var(--tag-bg)', padding: '20px', borderRadius: '50%' }}>
                  <CheckCircle size={48} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div style={{ 
                    padding: '12px 16px', 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    border: '1px solid rgba(239, 68, 68, 0.2)', 
                    borderRadius: '8px',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem'
                  }}>
                    <AlertCircle size={18} />
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-field" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-field" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-field" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-field" 
                    style={{ minHeight: '150px', resize: 'vertical' }} 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: 'fit-content' }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'} 
                  <Send size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}
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
