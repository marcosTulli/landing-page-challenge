import React from "react";
import classes from "./Hero.module.scss";
import heroImage from "../../../assets/hero/Ic_ilustra_Hero.png";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <h1 className={classes.heading}>
        Bienvenido a tu <br />
        <strong>Entrevista Técnica</strong> en <br />
        <span>Wolox</span>
      </h1>
      <div className={classes.imageContainer}>
        <img className={classes.heroImage} src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
