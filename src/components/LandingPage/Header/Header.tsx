import React from "react";
import { Button } from "../../Button";
// import cx from 'classnames';
import classes from "./Header.module.scss";
import logo from "../../../assets/logo_full_color.svg";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className={classes.mainheader}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img className={classes.logo} src={logo} alt={"wolox logo"} />
          </li>
          <li className={classes.listItem}>
            <MdMenu />
          </li>
          {/* <li>
            <Button variant="base">Inicio</Button>
          </li>
          <li>
            <Button variant="base">Beneficios</Button>
          </li>
          <li>
            <Button variant="outlinedBlue">Login</Button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
