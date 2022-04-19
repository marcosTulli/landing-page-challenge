import React, { ReactNode } from 'react';
import classes from './Button.module.scss';

function getButtonStyles() {
  return classes;
}

const Botones = ({ children, variant = 'primary', onClick }) => {
  const className = getButtonStyles(variant);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Botones;
