import React from 'react';
import classes from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <div className={classes.container}>
    <p>Pokemon Footer</p>
  </div>
);

export default Footer;
