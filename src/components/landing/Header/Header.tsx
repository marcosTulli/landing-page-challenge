import React from "react";
import { Button } from "../../Button";
import classes from "./Header.module.scss";
import logo from "../../../assets/logo_full_color.svg";

const Header = () => {
  return (
    <div className={classes.navBar}>
      <div>
        <img src={logo} alt={"wolox logo"} />
      </div>
      <div>
        <Button variant="outlined">Inicio</Button>
        <Button>Beneficios</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
