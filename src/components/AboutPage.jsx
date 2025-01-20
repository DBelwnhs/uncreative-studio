import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const aboutLogo = "/images/about_logo.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#007FFF] to-white">
      <Header />
      <section className="pt-60 mb-36 flex flex-row items-start justify-between w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95vw] mx-auto ">
        <div>
          <h2 className="xl:text-[250px] xl:leading-[205px]  md:text-7xl text-4xl leading-tight font-lemon">HellO!</h2>
        </div>
        <div>
          <h2 className="lg:text-[60px] sm:text-4xl xs:text-xl text-2xl font-sans text-right font-light lg:leading-[65px] leading-tight  mr-3">
            We are a<br />
            Digital agency
            <br />
            From Chania
          </h2>
        </div>
      </section>
      <section className="mb-32 flex flex-row items-end justify-end w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95vw] mx-auto">
        <div>
          <p className="lg:text-2xl text-md font-sans text-right font-thin lg:leading-[42px] leading-tight">
          Uncreative Studio” is a brand that stands out for its unconventional approach
to design and creation. With a unique name that reflects the idea of “insensitive creativity,” 
Uncreative Studio explores new paths in the world of graphic 
design, branding, and creative strategy.

Based in Chania, we push the boundaries of traditional design, 
offering innovative solutions that go beyond expectations 
and create meaningful connections with your audience.
          </p>
        </div>
      </section>
      <section className="flex flex-row w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95vw] mx-auto">
        <div className="m-0 p-0">
          <p className="lg:text-[60px] text-xl leading-tight font-sans text-left font-bold lg:leading-[65px]">
            A team of creatives based in Chania. <br />
            We design strong and distinct brand identities based on real data
            and your brand’s needs.
          </p>
        </div>
      </section>
      <section className="lg:my-[450px] sm:my-52 my-28  flex sm:flex-row flex-col-reverse items-start justify-between w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[95vw] xs:w-[95vw] mx-auto">
        <div className="flex flex-col m-0 p-0 sm:w-1/2 w-full">
          <h3 className="font-lemon font-bold text-4xl sm:mb-20 mb-10 sm:mt-0 mt-8 sm:text-start text-center">Services</h3>
          <div className="flex flex-col w-full sm:text-start  text-center">
            <h5 className="font-sans md:text-3xl text-xl font-bold -mb-5 ">
              Branding Strategy
            </h5>
            <br />
            <ul className="font-sans md:text-base text-sm font-thin  leading-tight sm:leading-[25px] ">
              <li>Core Values</li>
              <li>Naming</li>
              <li>Tagline & Messaging </li>
              <li>Positioning</li>
            </ul>
          </div>
          <div className="flex flex-col w-full my-24">
            <div className="flex flex-row md:justify-end justify-center">
              <div className="flex flex-col sm:text-start  text-center">
                <h5 className="font-sans md:text-3xl text-xl font-bold -mb-5 ">
                  Branding Identity
                </h5>
                <br />
                <ul className="font-sans md:text-base text-sm font-thin leading-tight sm:leading-[25px]">
                  <li>Visual Identity</li>
                  <li>Logo Design</li>
                  <li>Packaging</li>

                  <li>Catalogue</li>
                  <li>Poster</li>
                  <li>Corporate flyer</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:text-start  text-center">
            <h5 className="font-sans md:text-3xl text-xl font-bold -mb-5">
              Communication
            </h5>
            <br />
            <ul className="font-sans md:text-base text-sm  font-thin leading-tight sm:leading-[25px]">
              <li>Web Development</li>
              <li>Creative Campaign</li>
              <li>Digital Marketing</li>
              <li>Art Direction</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-row sm:justify-end justify-center m-0 p-0 sm:w-1/2 w-full h-full">
          <div>
            <img
              src={aboutLogo}
              alt="About Logo"
              className="w-[760px] max-h-[780px]"
            />
          </div>
        </div>
      </section>
      <Footer textColor="#C6D0D2" />
    </div>
  );
};

export default AboutPage;
