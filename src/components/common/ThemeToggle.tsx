import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

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
      <div style={{ 
        fontSize: '12px', 
        position: 'absolute', 
        left: '6px',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Moon size={14} />
      </div>
      <div style={{ 
        fontSize: '12px', 
        position: 'absolute', 
        right: '6px',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Sun size={14} />
      </div>
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
