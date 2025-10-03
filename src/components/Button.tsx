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
  const baseClasses = 'font-medium transition-all duration-300 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#8B1538] to-[#A0153E] text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-[#D4AF37] text-white hover:bg-[#F4E4C1] hover:text-[#8B1538]',
    outline: 'border-2 border-[#8B1538] text-[#8B1538] bg-transparent hover:bg-[#8B1538] hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg',
  };

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
