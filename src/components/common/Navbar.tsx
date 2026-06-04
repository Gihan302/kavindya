import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { NAV_LINKS, PERSONAL } from '../../utils/constants';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href.replace('#', ''));
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" style={{
      boxShadow: scrolled ? 'var(--shadow)' : 'none',
      padding: scrolled ? '10px 0' : '20px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.4rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            {PERSONAL.name.split(' ')[0]}<span style={{ color: 'var(--accent)' }}> {PERSONAL.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={() => handleNavClick(link.href)}
              style={{ fontSize: '0.8rem' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'var(--tag-bg)',
              border: '1.5px solid var(--border)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          boxShadow: 'var(--shadow)',
          animation: 'fadeUp 0.3s ease forwards'
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => handleNavClick(link.href)}
              style={{ fontSize: '0.9rem', padding: '10px 0' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};
