import React from "react";
import projectsData from "../../data/projects_data";
import Header from "../Header";
import Footer from "../Footer";

const Heliophilia = () => {
  const {
    title,
    featured_image,
    description,
    text,
    prev_project,
    next_project,
    video1,
    img1,
    img2,
    img3,
    img4,
    img5,
    video2,
  } = projectsData.Heliophilia;

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <img src={ featured_image} alt="featured image" className="w-full mb-4" />
      <p className="text-lg mb-4">{description}</p>
      <p className="text-base mb-8">{text}</p>
      <div className="mb-8">
        <video src={video1} controls className="w-full mb-4"></video>
        <img src={img1} alt="Image 1" className="w-full mb-4" />
        <img src={img2} alt="Image 2" className="w-full mb-4" />
        <img src={img3} alt="Image 3" className="w-full mb-4" />
        <img src={img4} alt="Image 4" className="w-full mb-4" />
        <video src={video2} controls className="w-full mb-4"></video>
      </div>
      <div className="flex justify-between">
        <a href="#" className="text-blue-500">{prev_project}</a>
        <a href="#" className="text-blue-500">{next_project}</a>
      </div>
    </div>
    <Footer textColor="black" />
    </>
  );
};

export default Heliophilia;