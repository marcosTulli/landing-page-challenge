import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import pokeball from '../../../assets/poke.png';
import classes from './Header.module.scss';

interface HearderProps {
  className?: string;
}

const Header: React.FC<HearderProps> = ({ className }) => (
  <div className={cx(classes.container, className)}>
    <div className={classes.title}>
      <img src={pokeball} alt="logo" />
      Pokemon finder
    </div>
    <div className={classes.button}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  </div>
);

export default Header;
