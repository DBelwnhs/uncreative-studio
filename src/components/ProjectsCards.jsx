import React, { Component, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";



export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#1b1a24]">
      <h2 className="relative z-0 text-[20vw] font-black text-white xs:text-[65px] sm:text-[100px] md:text-[200px] lg:text-[120px] font-lemon">
        AWARDS<span className="text-indigo-500">.</span>
      </h2>
      <p
  className="flex w-[200px] h-[200px] justify-center items-center absolute top-[10%] right-[20%] z-50  font-sans text-white xs:text-[21px]  sm:text-[26px] uppercase text-center leading-tight border-2 border-white rounded-full p-1"
>
  Move <br />
  The images
</p>
      <Cards />
    </section>
  );
};


const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/public/images/award-1.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
        link="/our-projects" // Link destination
      />
      <Card
        containerRef={containerRef}
        src="/public/images/award-2.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
        link="/our-projects" // Link destination
      />
      <Card
        containerRef={containerRef}
        src="/public/images/award-3.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
        link="/our-projects" // Link destination
      />
      <Card
        containerRef={containerRef}
        src="/public/images/award-4.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
        link="/our-projects" // Link destination
      />
      {/* <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
        link="https://example.com/image5" // Link destination
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
        link="https://google.com/" 
      /> */}
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className, link }) => {
  const [zIndex, setZIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); 

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  const handleClick = () => {
    if (!isDragging) {
      window.location.href = link
    }
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      onClick={handleClick} 
      onDragStart={() => setIsDragging(true)} 
      onDragEnd={() => setIsDragging(false)}  
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default Cards;