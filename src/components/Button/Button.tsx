import React, { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'base' | 'primary' | 'outlined' | 'outlinedNav';
}

function getButtonStyles(variant: string) {
  return classes[variant];
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary' }) => {
  const className = getButtonStyles(variant);
  return <button className={className}>{children}</button>;
};

export default Button;
