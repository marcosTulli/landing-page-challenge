import React from 'react';
import cx from 'classnames';
import classes from './Header.module.scss';
import { Button } from '../../Button';
import pokeball from '../../../assets/poke.png';

interface HearderProps {
  className?: string;
}

const Header: React.FC<HearderProps> = ({ className }) => {
  return (
    <>
      <div className={cx(classes.container, className)}>
        <div className={classes.title}>
          <img src={pokeball} alt='logo' />
          Pokemon finder
        </div>
        <div className={classes.button}>
          <Button>Home</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
