
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  iconPosition = 'right',
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-orderbot text-white shadow-sm hover:bg-orderbot-dark',
    secondary: 'bg-secondary text-foreground shadow-sm hover:bg-muted',
    ghost: 'bg-transparent hover:bg-secondary text-foreground',
    outline: 'bg-transparent border border-border hover:bg-secondary text-foreground',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-lg',
    md: 'text-sm px-4 py-2 rounded-lg',
    lg: 'text-base px-6 py-3 rounded-xl',
  };

  return (
    <button
      className={cn(
        'font-medium transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orderbot/20 active:scale-[0.98]',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
