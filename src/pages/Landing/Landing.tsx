import {
  Header,
  Hero,
  Banner,
  Benefits,
  Footer,
} from "../../components/LandingPage";
import classes from "./Landing.module.scss";

function Landing() {
  return (
    <div className={classes.container}>
      <Header />
      <Hero />
      <Banner />
      <Benefits />
      <Footer />
    </div>
  );
}

export default Landing;
