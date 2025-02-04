import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LiquidSideNav = ({ onNavToggle }) => { // Added onNavToggle prop
  const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    onNavToggle(isOpen); // Called onNavToggle to update parent component
    return () => (document.body.style.overflow = "auto");
  }, [isOpen, onNavToggle]);

  return (
    <>
      {/* Menu Button */}
      <motion.button
        whileHover={{ rotate: "180deg" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`text-3xl bg-[#ffffff00]  hover:text-indigo-500 transition-colors sm:py-4 py-1 rounded-full ${
          isScrolled ? "text-white" : "text-black"
        }`}
        aria-label="Open navigation"
      >
        <FiMenu />
      </motion.button>

      {/* Side Navigation */}
      <motion.nav
        className="fixed top-0 left-0 w-full h-full custom-background z-50"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        initial="closed"
      >
        {/* Close Button */}
        <motion.button
          className="text-3xl bg-[#ffffff00] text-black hover:text-indigo-500 hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
          whileHover={{ rotate: "180deg" }}
          onClick={() => setIsOpen(false)}
          whileTap={{ scale: 0.9 }}
          aria-label="Close navigation"
        >
          <FiX />
        </motion.button>

        {/* Navigation Links */}
        <motion.div
          variants={linkWrapperVariants}
          className="flex flex-col gap-4 absolute bottom-8 left-8"
        >
          <NavLink text="home" to="/" />
          <NavLink text="portfolio" to="/our-projects" />
          <NavLink text="awards" to="/our-awards" />
          <NavLink text="about" to="/about" />
          <NavLink text="contact" to="/contact" />
        </motion.div>
      </motion.nav>
    </>
  );
};

const NavLink = ({ text, to }) => {
  return (
    <motion.div
      className="inline-block z-10 w-fit"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
    >
      <Link
        to={to} // Use the `to` prop for navigation
        className="text-slate-800 font-bold sm:text-5xl text-4xl hover:text-[#2455E9] transition-colors"
        rel="nofollow"
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default LiquidSideNav;

// Animation Variants
const navVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
