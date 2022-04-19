import React from "react";
import classes from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => (
  <div className={classes.container}>
    <p>Pokemon Footer</p>
  </div>
);
Footer.defaultProps = {
  className: "",
};

export default Footer;
