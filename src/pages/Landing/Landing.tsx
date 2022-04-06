import React from "react";
import {
  Header,
  Hero,
  Banner,
  Benefits,
  Footer,
} from "../../components/LandingPage";
import classes from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.hero}>
        <Hero />
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.benefits}>
        <Benefits />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
