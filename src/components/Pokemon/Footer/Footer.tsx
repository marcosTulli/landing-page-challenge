import React from 'react';
import classes from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <>
      <div className={classes.container}>
        <p>Pokemon Footer</p>
      </div>
    </>
  );
};

export default Footer;
