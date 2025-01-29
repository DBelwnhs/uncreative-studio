import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiquidSideNav from "./LiquidSidenav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavToggle = (isOpen) => {
    setIsNavOpen(isOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-center w-full z-50 pt-28 xl:pt-28 lg:pt-20 md:pt-14 sm:pt-7 xs:pt-5 ${
          isScrolled && !isNavOpen ? "mix-blend-difference" : ""
        }`}
      >
        <div className="flex flex-row items-end justify-between w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-full xs:mx-3 mx-auto">
          {/* Brand Name with Link */}
          <div className="flex justify-start">
            <Link
              to="/"
              className={`font-lemon text-[50px] xl:text-[50px] md:text-[40px] sm:text-[35px] xs:text-[28px] ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              UNCREATIVE STUDIO
            </Link>
          </div>

          {/* Menu */}
          <div className="flex justify-end items-center">
            <LiquidSideNav onNavToggle={handleNavToggle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
