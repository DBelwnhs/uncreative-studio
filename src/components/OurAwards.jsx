import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import awardsData from "../data/Awards-data";

const OurAwards = () => {
  const awards = Object.values(awardsData);

  return (
    <div className="min-h-screen background-black">
      <Header />
      <section className="pt-[330px] mb-[220px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="text-center">
                <Link to={`/awards/${award.id}`}>
                  <div className="w-full max-w-[375px] mx-auto aspect-square overflow-hidden">
                    <img
                      src={award.featured_image}
                      alt={award.title}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  <h2 className="text-sm font-sans font-thin max-w-[375px] mx-auto text-start mt-[5px]">
                    {award.title}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer textColor="black" />
    </div>
  );
};

export default OurAwards;