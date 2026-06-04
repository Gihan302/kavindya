import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
}

export const Button = ({ children, variant = 'primary', href, onClick, download, target }: ButtonProps) => {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-outline';

  if (href) {
    return (
      <a href={href} className={className} download={download} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};