import React, { useRef } from 'react';
import {
  Header,
  Hero,
  Banner,
  Benefits,
  Footer,
} from '../../components/LandingPage';
import classes from './Landing.module.scss';

const Landing = () => {
  const benefitRef = useRef();
  return (
    <div className={classes.container}>
      <Header />
      <Hero />
      <Banner />
      <Benefits ref={benefitRef} />
      <Footer />
    </div>
  );
};

export default Landing;
