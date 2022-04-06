import React from "react";
import classes from "./Hero.module.scss";
import heroImage from "../../../assets/hero/Ic_ilustra_Hero.png";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <h1 className={classes.heading}>
        Bienvenido a tu <strong>Entrevista Técnica</strong> en
        <span>Wolox</span>
      </h1>
      <img className={classes.heroImage} src={heroImage} alt="hero" />
    </div>
  );
};

export default Hero;
