import React from 'react';
import { Button } from '../../Button';
// import cx from 'classnames';
import classes from './Header.module.scss';
import logo from '../../../assets/logo_full_color.svg';
import { MdMenu } from 'react-icons/md';
import { useMedia } from 'react-media';

const Header = () => {
  const isMobile = useMedia({ query: '(max-width: 768px)' });
  return (
    <header className={classes.mainheader}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img className={classes.logo} src={logo} alt={'wolox logo'} />
          </li>
          <div>
            {isMobile ? (
              <li className={classes.listItem}>
                <MdMenu />
              </li>
            ) : (
              <div className={classes.largeNav}>
                <li className={classes.listItem}>
                  {' '}
                  <Button variant='base'>Inicio</Button>{' '}
                </li>
                <li className={classes.listItem}>
                  {' '}
                  <Button variant='base'>Beneficios</Button>{' '}
                </li>
                <li className={classes.listItem}>
                  {' '}
                  <Button variant='outlinedNav'>Login</Button>{' '}
                </li>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
