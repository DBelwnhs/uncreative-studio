import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import OurProjects from "./components/OurProjects";
import OurAwards from "./components/OurAwards";
import ProjectTemplate from "./components/projects/ProjectTemplate";
import AwardsTemplate from "./components/awards/AwardsTemplate";
import projectsData from "./data/projects_data";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/our-awards" element={<OurAwards  />} />

        {/* Dynamically generate routes */}
        <Route
          path="/projects/:projectId"
          element={
            <div className="custom-background">
              <ProjectTemplate />
            </div>
          }
        />
        <Route
          path="/awards/:awardId"
          element={
            <div className="bg-[#000000]">
              < AwardsTemplate />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
