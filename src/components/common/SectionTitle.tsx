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
      <div className="section-label" style={{ justifyContent: center ? 'center' : 'flex-start', marginBottom: '16px' }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--text-primary)',
        marginBottom: subtitle ? '16px' : '0',
      }}>
        {title}{' '}
        {accent && (
          <span style={{ color: 'var(--accent)' }}>{accent}</span>
        )}
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          maxWidth: center ? '560px' : '100%',
          margin: center ? '0 auto' : '0',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};