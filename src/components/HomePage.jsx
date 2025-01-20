import { SmoothScrollHero } from "./SmoothScrollHero";
import About from "./About";
import Projects from "./Projects";
import { RevealLinks } from "./RevealLinks";
import Footer from "./Footer";
import Header from "./Header";
import VerticalAccordion from "./VerticalAccordion";
import { SpringCards } from "./SpringCards";

const HomePage = () => {
  return (
    <div className="">
    <Header/>
     <div className="custom-background">
        <SmoothScrollHero />
      <About />
      <SpringCards/>
      {/* <VerticalAccordion/> */}
      <Projects />
      <RevealLinks />
      <Footer textColor="white" />
      </div> 
    </div>
  );
};

export default HomePage;
