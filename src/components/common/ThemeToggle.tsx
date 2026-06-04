import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'var(--tag-bg)',
        border: '1.5px solid var(--border)',
        borderRadius: '50px',
        width: '56px',
        height: '28px',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        padding: '3px',
      }}
    >
      <span style={{ fontSize: '12px', position: 'absolute', left: '7px' }}>🌙</span>
      <span style={{ fontSize: '12px', position: 'absolute', right: '7px' }}>☀️</span>
      <span
        style={{
          display: 'block',
          width: '20px',
          height: '20px',
          background: 'var(--accent)',
          borderRadius: '50%',
          transform: theme === 'dark' ? 'translateX(0px)' : 'translateX(28px)',
          transition: 'transform 0.3s ease',
          zIndex: 1,
          boxShadow: '0 0 8px var(--accent-glow)',
        }}
      />
    </button>
  );
};