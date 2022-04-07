import React from "react";
import { Button } from "../../Button";
import footerlogo from "../../../assets/Ic_Wolox_Footer.svg";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerText}>
        <h1>
          Gracias por{" "}
          <span className={classes.blue}>completar el ejercicio</span>
        </h1>
        <span>Te invitamos ver mas informacion</span>
      </div>
      <Button> Conocer mas</Button>
      <div className={classes.logo}>
        <img src={footerlogo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
