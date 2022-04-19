import React from 'react';
import { MdOutlineClose, MdMenu } from 'react-icons/md';
import { useMedia } from 'react-media';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_full_color.svg';
import { Button } from '../../Button';
import classes from './Header.module.scss';

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const isMobile = useMedia({ query: '(max-width: 768px)' });
  const menuButtons = () => (
    <div className={classes.largeNav}>
      <li className={classes.listItem}>
        <Link to="/pokemons">
          <Button className={classes.button} variant="primary">
            Pokemons
          </Button>
          {' '}
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link to="/">
          <Button
            onClick={() => setMenuOpen(false)}
            className={classes.button}
            variant="base"
          >
            Inicio
          </Button>
          {' '}
        </Link>
      </li>
      <li className={classes.listItem}>
        <Button
          onClick={() => {
            setMenuOpen(false);
            document
                && document?.getElementById('landing-benefits')?.scrollIntoView({
                  behavior: 'smooth',
                });
          }}
          variant="base"
        >
          Beneficios
        </Button>
        {' '}
      </li>
      <li className={classes.listItem}>
        <Button
          onClick={() => {
            /* TODO: redirect to login page */
          }}
          variant="outlinedNav"
        >
          Login
        </Button>
      </li>
    </div>
  );
  return (
    <header className={classes.mainheader}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img className={classes.logo} src={logo} alt="wolox logo" />
          </li>
          <div>
            {isMobile
              ? (
                <ul className={classes.mobileNav}>
                  <li className={classes.listItem}>
                    <Link to="/pokemons">
                      <Button className={classes.button} variant="primary">
                        Pokemons
                      </Button>
                      {' '}
                    </Link>
                  </li>

                  <li className={classes.listItem}>
                    <MdMenu onClick={toggleMenu} />
                  </li>
                </ul>
              )
              : (
                menuButtons()
              )}
          </div>
        </ul>
      </nav>
      {isMobile && menuOpen && (
        <div className={classes.menu}>
          <MdOutlineClose
            className={classes.close}
            onClick={() => setMenuOpen(false)}
          />
          {menuButtons()}
        </div>
      )}
    </header>
  );
}

export default Header;
