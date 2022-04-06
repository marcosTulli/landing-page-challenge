import React from "react";
import { Button } from "../../Button";
import footerlogo from "../../../assets/Ic_Wolox_Footer.svg";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <h2>
        Gracias por completar <span>el ejercicio</span>
      </h2>
      <p>Te invitamos ver mas informacion</p>
      <Button> Conocer mas</Button>
      <img src={footerlogo} alt="logo" />
    </div>
  );
};

export default Footer;
