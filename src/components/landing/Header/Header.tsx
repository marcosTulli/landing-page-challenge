import React from "react";
import { Button } from "../../Button";

import logo from "../../../assets/logo_full_color.svg";
const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt={"wolox logo"} />
      </div>
      <div>
        <Button>Inicio</Button>
        <Button>Beneficios</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
