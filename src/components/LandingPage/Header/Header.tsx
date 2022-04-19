import React from 'react';
import { Button } from '../../Button';
// import cx from 'classnames';
import classes from './Header.module.scss';
import logo from '../../../assets/logo_full_color.svg';
import { MdMenu } from 'react-icons/md';
import { useMedia } from 'react-media';
import { Link } from 'react-router-dom';

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
              <ul className={classes.mobileNav}>
                <li className={classes.listItem}>
                  <Link to={'/pokemons'}>
                    <Button className={classes.button} variant='primary'>
                      Pokemons
                    </Button>{' '}
                  </Link>
                </li>

                <li className={classes.listItem}>
                  <MdMenu />
                </li>
              </ul>
            ) : (
              <div className={classes.largeNav}>
                <li className={classes.listItem}>
                  <Link to={'/pokemons'}>
                    <Button className={classes.button} variant='primary'>
                      Pokemons
                    </Button>{' '}
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link to={'/'}>
                    <Button
                      onClick={() => {}}
                      className={classes.button}
                      variant='base'>
                      Inicio
                    </Button>{' '}
                  </Link>
                </li>
                <li className={classes.listItem}>
                  {' '}
                  <Button onClick={() => {}} variant='base'>
                    Beneficios
                  </Button>{' '}
                </li>
                <li className={classes.listItem}>
                  {' '}
                  <Button onClick={() => {}} variant='outlinedNav'>
                    Login
                  </Button>{' '}
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
