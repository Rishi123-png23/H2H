import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md transition-all duration-300 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
