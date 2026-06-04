interface SectionTitleProps {
  label: string;
  title: string;
  accent?: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionTitle = ({ label, title, accent, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '60px' }}>
      <div className="section-label" style={{ 
        justifyContent: center ? 'center' : 'flex-start', 
        marginBottom: '16px' 
      }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--text-primary)',
        marginBottom: subtitle ? '20px' : '0',
        letterSpacing: '-0.03em'
      }}>
        {title}{' '}
        {accent && (
          <span className="text-accent">{accent}</span>
        )}
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
          maxWidth: center ? '650px' : '100%',
          margin: center ? '0 auto' : '0',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
