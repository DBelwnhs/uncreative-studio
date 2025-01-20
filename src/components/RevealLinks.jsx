import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <div className="bg-black">
    <div className="w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95vw] mx-auto p-0 sm:pt-12 sm:px-0 xs:px-4">
    <section className="grid place-content-start sm:place-content-start py-20 gap-2 bg-green-300 text-[#3E3E3E] font-bold">
      
      <FlipLink href="#">Instagram</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
    </section></div></div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black font-sans uppercase sm:text-3xl md:text-3xl lg:text-4xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};