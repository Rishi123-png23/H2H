import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'font-medium tracking-wide transition-all duration-300 inline-flex items-center justify-center rounded-pill';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand.primary to-brand.accent text-white hover:shadow-glow hover:-translate-y-0.5',
    secondary: 'bg-brand.gold text-black hover:bg-brand.cream hover:text-brand.primary',
    outline: 'border-2 border-brand.primary text-brand.primary bg-transparent hover:bg-brand.primary hover:text-white',
  } as const;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  } as const;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
