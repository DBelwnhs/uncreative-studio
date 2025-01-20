import React from "react";
import { DragCards } from "./ProjectsCards";
import { VelocityText } from "./VelocityText";

const Projects = () => {
  return (
    <div className="w-full ">
      <VelocityText />
      <div className="w-full bg-black">
        <div className="flex flex-col items-start w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] mx-auto px-0 m-0 pt-10">
          <section className="w-full grid grid-cols-1 md:grid-cols-3 items-start bg-gray-300 py-12 px-8 xl:px-0 md:px-0 h-auto font-sans">
            <div className="text-left mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-2xl font-thin leading-tight text-white font-sans ">
                Proudly <br /> Made Projects
              </h2>
            </div>

            <div className="text-left mb-8 md:mb-0">
              <p className="text-md sm:text-md md:text-md font-thin  text-white font-sans leading-[21px]">
                Explore our award-winning work that demonstrates the power of
                brand identity, graphic design, and social media strategy. <br/><br/>Each
                project reflects our dedication to creativity, innovation, and
                excellence.
              </p>
            </div>

            <div className="text-right">
              <p className="text-base  sm:text-xl md:text-xl lg:text-xl font-thin leading-tight text-white font-sans">
              Projects that<br/>
              speak for themselves
              </p>
            </div>
          </section>
        </div>
        <DragCards />
      </div>
    </div>
  );
};

export default Projects;
