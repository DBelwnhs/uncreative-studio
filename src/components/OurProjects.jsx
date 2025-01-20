import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import projectsData from "../data/projects_data";

const OurProjects = () => {
  const projects = Object.values(projectsData);

  return (
    <div className="min-h-screen custom-background">
      <Header />
      <section className="pt-[330px] mb-[220px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="text-center">
                <Link to={`/projects/${project.id}`}>
                  <div className="w-full max-w-[375px] mx-auto aspect-square overflow-hidden">
                    <img
                      src={project.featured_image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  <h2 className="text-sm font-sans font-thin max-w-[375px] mx-auto text-start mt-[5px]">
                    {project.title}
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

export default OurProjects;