import React, { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'base' | 'primary' | 'outlined' | 'outlinedNav';
  onClick?: any;
  className?: any;
}

function getButtonStyles(variant: string) {
  return classes[variant];
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => {
  const className = getButtonStyles(variant);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
