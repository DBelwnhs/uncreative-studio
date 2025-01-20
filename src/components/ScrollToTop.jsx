import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof lenis !== "undefined") {
        lenis.scrollTo(0);
      } else {
        window.scrollTo(0, 0); // Fallback if lenis is not initialized
      }
    };

    handleScroll();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
