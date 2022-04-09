import React from "react";
import { BsTwitter } from "react-icons/bs";
import { Button } from "../../Button";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div>
      <div className={classes.banner}>
        <div className={classes.bannerImage}>
          <h1>
            <span className={classes.green}>350 + </span>
            <span className={classes.blue}>Woloxers</span>
          </h1>
          <div className={classes.twitterLogo}>
            <BsTwitter /> <span>@Wolox</span>
          </div>
          <Button variant="outlined">Siguenos</Button>
        </div>
        <h1 className={classes.bannerText}>
          Trabajamos para <span className={classes.blue}>convertir</span>
          <span className={classes.green}> ideas</span> en productos.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
