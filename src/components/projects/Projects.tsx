import { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Layout, Globe, ClipboardList, Info, X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    period: "2024–2026",
    category: "Community Initiative",
    title: "Community-Based Health Promotion Field Practical",
    description: "Designed and implemented interventions, conducted needs assessments, and developed educational programs.",
    status: "Completed",
    icon: <Globe size={28} />
  },
  {
    period: "2025",
    category: "Community Initiative",
    title: "Community Health Promotion Camp Initiative",
    description: "Organized health camps, performed screenings, and provided health education to at-risk individuals.",
    status: "Completed",
    icon: <ClipboardList size={28} />
  },
  {
    period: "2024",
    category: "Academic Research",
    title: "Health Indicator Assessment",
    description: "Systematic data collection and analysis for regional health metrics using quantitative research methods.",
    status: "Completed",
    icon: <Layout size={28} />
  }
];

// Health Promotion Intervention Projects
const HEALTH_PROJECTS = [
  {
    id: 1,
    title: "Successfully Completed 2 Years of Health Promotion Intervention to Improve ECCD Practices Among Preschool Children and Their Mothers",
    category: "Early Childhood Development",
    period: "2023 - 2025",
    description: "Focused on improving Early Childhood Care and Development (ECCD) through mother-centric interventions.",
    images: [
      new URL('../../assets/projects/1/Image 1.jpeg', import.meta.url).href,
      new URL('../../assets/projects/1/Image 2.jpeg', import.meta.url).href,
      new URL('../../assets/projects/1/Image 3.jpeg', import.meta.url).href,
      new URL('../../assets/projects/1/Image 4.jpeg', import.meta.url).href,
    ]
  },
  {
    id: 2,
    title: "Successfully Completed 2 Years of Health Promotion Intervention to Improve mental wellbeing among women and elders",
    category: "Mental Wellbeing",
    period: "2023 - 2025",
    description: "A comprehensive program aimed at enhancing mental health outcomes for vulnerable groups in the community.",
    images: [
      new URL('../../assets/projects/2/Image 5.jpeg', import.meta.url).href,
      new URL('../../assets/projects/2/Image 6.jpeg', import.meta.url).href,
      new URL('../../assets/projects/2/Image 7.jpeg', import.meta.url).href,
      new URL('../../assets/projects/2/Image 8.jpeg', import.meta.url).href,
    ]
  },
  {
    id: 3,
    title: "Successfully Completed 2 Years of Health Promotion Intervention to Improve academic engagement among children",
    category: "Education & Health",
    period: "2023 - 2025",
    description: "Improving school performance and engagement through targeted health and motivation programs.",
    images: [
      new URL('../../assets/projects/3/Image 9.jpeg', import.meta.url).href,
      new URL('../../assets/projects/3/Image 10.jpeg', import.meta.url).href,
      new URL('../../assets/projects/3/Image 11.jpeg', import.meta.url).href,
      new URL('../../assets/projects/3/Image 12.jpeg', import.meta.url).href,
    ]
  },
  {
    id: 4,
    title: "Successfully Completed 2 Years of Health Promotion Intervention to reduce NCDs risk among women",
    category: "NCD Prevention",
    period: "2023 - 2025",
    description: "Reduced non-communicable disease risks through lifestyle modifications and community awareness.",
    images: [
      new URL('../../assets/projects/4/Image 13.jpeg', import.meta.url).href,
      new URL('../../assets/projects/4/Image 14.jpeg', import.meta.url).href,
      new URL('../../assets/projects/4/Image 15.jpeg', import.meta.url).href,
      new URL('../../assets/projects/4/Image 16.jpeg', import.meta.url).href,
    ]
  },
  {
    id: 5,
    title: "Community symposium with all the community members in Ashokapura village",
    category: "Community Intervention",
    period: "2023 - 2025",
    images: [
      new URL('../../assets/projects/5/Image 17.jpeg', import.meta.url).href,
      new URL('../../assets/projects/5/Image 18.jpeg', import.meta.url).href,
      new URL('../../assets/projects/5/Image 19.jpeg', import.meta.url).href,
      new URL('../../assets/projects/5/Image 20.jpeg', import.meta.url).href,
    ]
  }
];

export const Projects = () => {
  const [activeHealthIndex, setActiveHealthIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveHealthIndex((prev) => (prev + 1) % HEALTH_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextHealth = () => {
    setActiveHealthIndex((prev) => (prev + 1) % HEALTH_PROJECTS.length);
    setIsPaused(true);
  };

  const prevHealth = () => {
    setActiveHealthIndex((prev) => (prev - 1 + HEALTH_PROJECTS.length) % HEALTH_PROJECTS.length);
    setIsPaused(true);
  };

  const openLightbox = (project: any) => {
    setSelectedProject(project);
    setLightboxImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal">
          <SectionTitle 
            label="My Work" 
            title="Academic &" 
            accent="Field Projects" 
            center={true}
            subtitle="A selection of my recent initiatives in community health and academic research."
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '30px',
          marginBottom: '100px'
        }}>
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`card reveal reveal-delay-${(index % 5) + 1}`}
              style={{ 
                padding: '32px', 
                display: 'flex', 
                flexDirection: 'column',
                minHeight: '300px'
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  color: 'var(--accent)', 
                  background: 'var(--tag-bg)', 
                  padding: '12px', 
                  borderRadius: '12px' 
                }}>
                  {project.icon}
                </div>
                <span className="tag" style={{ fontSize: '0.75rem' }}>{project.period}</span>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--text-muted)', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '8px' }}>{project.title}</h3>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ 
                marginTop: 'auto', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid var(--border)'
              }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--accent)', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                  {project.status}
                </span>
                <a href="#contact" style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }} className="hover-underline">
                  Inquire details <Info size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Health Promotion Interventions Slider */}
        <div className="reveal" style={{ marginTop: '40px' }}>
          <SectionTitle 
            label="Featured Impact" 
            title="Health Promotion" 
            accent="Interventions" 
            center={true}
            subtitle="Long-term interventions conducted to improve community health outcomes across various sectors."
          />

          <div style={{ position: 'relative', marginTop: '40px' }}>
            <div style={{ 
              overflow: 'hidden',
              margin: '0 -15px'
            }}>
              <div 
                ref={sliderRef}
                style={{ 
                  display: 'flex',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `translateX(-${activeHealthIndex * (100 / (window.innerWidth > 968 ? 3 : window.innerWidth > 640 ? 2 : 1))}%)`,
                }}
              >
                {HEALTH_PROJECTS.map((project, index) => (
                  <div 
                    key={project.id} 
                    style={{ 
                      minWidth: `${100 / (window.innerWidth > 968 ? 3 : window.innerWidth > 640 ? 2 : 1)}%`, 
                      padding: '15px',
                      boxSizing: 'border-box',
                      flexShrink: 0
                    }}
                  >
                    <div 
                      className="card"
                      onClick={() => openLightbox(project)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      style={{ 
                        position: 'relative',
                        height: '350px', // Matches the approximate size of academic cards
                        overflow: 'hidden',
                        cursor: 'pointer',
                        borderRadius: '16px',
                        border: '1px solid var(--border)',
                        background: '#000'
                      }}
                    >
                      {/* Background Image */}
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          opacity: 0.6, // Darken for text readability
                          transition: 'transform 0.6s ease'
                        }}
                        className="project-bg-img"
                      />

                      {/* Content Overlay */}
                      <div style={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        padding: '30px',
                        background: 'linear-gradient(to top, rgba(5, 10, 14, 0.95) 0%, rgba(5, 10, 14, 0.4) 50%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        color: '#fff',
                        zIndex: 2
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '10px'
                        }}>
                          <span style={{ 
                            fontSize: '0.7rem', 
                            color: 'var(--accent)', 
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}>
                            {project.category}
                          </span>
                          <span style={{ 
                            fontSize: '0.65rem', 
                            background: 'rgba(255,255,255,0.1)', 
                            padding: '4px 8px', 
                            borderRadius: '100px',
                            backdropFilter: 'blur(4px)'
                          }}>
                            {project.period}
                          </span>
                        </div>
                        
                        <h3 style={{ 
                          fontSize: '1.2rem', 
                          marginBottom: '10px',
                          lineHeight: 1.3,
                          fontWeight: 700,
                          color: '#fff',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {project.title}
                        </h3>
                        
                        <p style={{ 
                          color: 'rgba(255, 255, 255, 0.8)', 
                          fontSize: '0.85rem', 
                          lineHeight: 1.5,
                          marginBottom: '15px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {project.description}
                        </p>

                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          color: 'var(--accent)',
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>
                          View Project Gallery <Maximize2 size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '20px',
              marginTop: '30px'
            }}>
              <button 
                onClick={prevHealth}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-card)'
                }}
                className="slider-nav-btn"
              >
                <ChevronLeft size={22} />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {HEALTH_PROJECTS.map((_, i) => (
                  <div 
                    key={i}
                    onClick={() => { setActiveHealthIndex(i); setIsPaused(true); }}
                    style={{
                      width: activeHealthIndex === i ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '8px',
                      background: activeHealthIndex === i ? 'var(--accent)' : 'var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={nextHealth}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-card)'
                }}
                className="slider-nav-btn"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 10, 14, 0.95)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          backdropFilter: 'blur(10px)'
        }}>
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            <X size={28} />
          </button>

          <div style={{ 
            width: '100%', 
            maxWidth: '1000px', 
            textAlign: 'center',
            marginBottom: '30px' 
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>{selectedProject.title}</h3>
            <p style={{ color: 'var(--accent)', fontWeight: 600 }}>{selectedProject.category} | {selectedProject.period}</p>
          </div>

          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '1000px', 
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={selectedProject.images[lightboxImageIndex]} 
              alt="Project detail" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            />

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
              }}
              style={{
                position: 'absolute',
                left: '-60px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImageIndex((prev) => (prev + 1) % selectedProject.images.length);
              }}
              style={{
                position: 'absolute',
                right: '-60px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={48} />
            </button>
          </div>

          {/* Image Thumbnails */}
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            marginTop: '40px',
            overflowX: 'auto',
            padding: '10px',
            maxWidth: '800px'
          }}>
            {selectedProject.images.map((img: string, i: number) => (
              <div 
                key={i}
                onClick={() => setLightboxImageIndex(i)}
                style={{
                  width: '80px',
                  height: '60px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: lightboxImageIndex === i ? '2px solid var(--accent)' : '2px solid transparent',
                  opacity: lightboxImageIndex === i ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .slider-nav-btn:hover {
          background: var(--accent) !important;
          color: white !important;
          transform: scale(1.1);
        }
        .card:hover .project-bg-img {
          transform: scale(1.1);
        }
        @media (max-width: 968px) {
          .card {
            height: 300px !important;
            flex-direction: column !important;
          }
          .card > div {
            width: 100% !important;
          }
        }
      `}} />
    </section>
  );
};

