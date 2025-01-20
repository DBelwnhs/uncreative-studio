import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95%] mx-auto px-0 m-0 md:pt-48">
      <section className="flex w-full sm:flex-row xs:flex-col mb-48 ">
        <div className=" text-black mx-auto sm:w-[50%] xs:w-full flex flex-col items-start ">
          <h2 className="lg:text-4xl  md:text-3xl xs:text-2xl font-sans font-[700] md:leading-tight sm:leading-tight xs:leading-tight sm:mb-6 xs:mb-3">
          Hospitality branding <br/>
          designed for tomorrow
          </h2>
          <p className="md:text-base sm:text-base font-sans font-light md:leading-6 sm:leading-4 xs:leading-4">
          Uncreative is a design studio specializing in modern brand identity 
design for the hospitality and retail sectors.<br/><br/>

Through contemporary art direction and system design, 
we craft identities that connect to today and evolve for tomorrow.
          </p>
        </div>

        <div className="mx-auto sm:w-[50%] xs:w-full sm:mt-0 xs:mt-6 flex flex-col sm:items-end align-bottom justify-end">
            <button className="capitalize md:text-base sm:text-sm  hover:text-[#2455E9]"><a href="/contact">START A PROJECT</a></button>
           
        </div>
      </section>
    </div>
  );
}

export default About;
