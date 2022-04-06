import React from "react";
import { BsTwitter } from "react-icons/bs";
import { Button } from "../../Button";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <div>
      <div>
        <div className={classes.bannerImage}>
          <h2>
            <span>350 +</span>
            <span>Woloxers</span>
          </h2>
          <div>
            <BsTwitter /> <p>@Wolox</p>
          </div>
          <Button>Siguenos</Button>
        </div>
        <div className={classes.bannerText}>
          Trabajamos para <span>convertir</span>
          <span>ideas</span> en productos
        </div>
      </div>
    </div>
  );
};

export default Banner;
