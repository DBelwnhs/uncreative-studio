import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projects_data";
import Header from "../Header";
import Footer from "../Footer";
import rightarr from "../../assets/images/right-arr.png";
import leftarr from "../../assets/images/left-arr.png";

const ProjectTemplate = () => {
  const { projectId } = useParams();

  const project = projectsData[projectId];

  if (!project) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const {
    title,
    featured_image,
    featured_video,
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
    img6,
    img7,
    img8,
    img9,
    img10,
    video2,
  } = project;

  return (
    <>
      <Header />
      <div className="flex flex-col items-start w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[750px] xs:w-[95%] mx-auto px-0 m-0 pt-48  ">
        <section className="flex md:flex-row xs:flex-col flex-col  mb-48 ">
          <div className="mx-auto md:w-[50%] xs:w-full mr-[100px] fontl ">
            {featured_image &&<img src={featured_image} alt={title} className="xl:min-w-[816px] xl:min-h-[753px] lg:min-w-[600px] md:min-w-auto sm:min-w-[40vw] min-w-[40vw] xs:min-w-[40vw]
            
            lg:min-h-[550px] md:min-h-[48vh] sm:min-h-[48vh] min-h-[48vh] xs:min-h-[48vh] max-w-full max-h-full" />}
             {featured_video && <video src={featured_video} autoPlay  loop className="xl:min-w-[816px] xl:min-h-[753px] lg:min-w-[600px] md:min-w-auto sm:min-w-[40vw] min-w-[40vw] xs:min-w-[40vw]
            
            lg:min-h-[550px] md:min-h-[48vh] sm:min-h-[48vh] min-h-[48vh] xs:min-h-[48vh] max-w-full max-h-full"></video>}
          </div>

          <div className="mx-auto md:w-[50%] xs:w-full sm:mt-0 xs:mt-6 flex flex-col sm:items-start align-top justify-start lg:ml-[100px] md:ml-6  ">
            <h1 className="md:text-4xl text-2xl font-lemon md:mb-12 mb-3 ">{title}</h1>
            <p className="sm:text-md leading-snug  text-sm xl:mb-[180px] mb-11" style={{ whiteSpace: 'pre-line' }}>{description}</p>
            <p className="w-full sm:text-md leading-snug  text-sm text-center bg-black text-white px-4 py-2 xl:mt-6 self-start xl:mb-[155px] mb-11">{text}</p>
            <div className="flex justify-between items-center w-full xl:mt-16">
              {prev_project && (
                <div className="flex items-center space-x-2">
                 
                  <Link
                    to={`/projects/${prev_project}`}
                    className="text-black font-lemon leading-tight uppercase  text-[13px]"
                  >
                    Previous Project
                  </Link>
                  <img
                    src={leftarr}
                    alt="Previous Project Icon"
                    className="w-24 h-6"
                  />
                </div>
              )}
              {next_project && (
                <div className="flex items-center space-x-2">
                  <img
                    src={rightarr}
                    alt="Next Project Icon"
                    className="w-24 h-6"
                  />
                  <Link
                    to={`/projects/${next_project}`}
                    className="text-black font-lemon leading-tight uppercase  text-[13px] text-right"
                  >
                    Next Project
                  </Link>
                  
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95%] mx-auto px-0 m-0 ">
        {video1 && <video src={video1} autoPlay  loop className="w-full"></video>}
        {img1 && <img src={img1} alt="Image 1" className="w-full my-6" />}
        {img7 && <img src={img7} alt="Image 8" className="w-full my-6" />}
        {img8 && <img src={img8} alt="Image 8" className="w-full my-6" />}
      </div>
      <div className="flex w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95%] mx-auto px-0 m-0   sm:justify-normal justify-center  ">
        {img2 && <img src={img2} alt="Image 2" className="w-1/2 sm:mr-[7.5px] mr-[5px]" />}
        {img3 && <img src={img3} alt="Image 3" className="w-1/2 sm:ml-[7.5px] ml-[5px]" />}
      </div>
      <div className="flex w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95%] mx-auto px-0 m-0 sm:justify-normal justify-center ">
        {img4 && <img src={img4} alt="Image 4" className="w-1/2 sm:mr-[7.5px] mr-[5px] mt-[15px]" />}
        {img5 && <img src={img5} alt="Image 5" className="w-1/2 sm:ml-[7.5px] ml-[5px] mt-[15px]" />}
      </div>
      <div className="w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[95%] mx-auto px-0 m-0 mt-6 lg:mb-80 ">
      {img9 && <img src={img9} alt="Image 9" className="w-full my-6" />}
        {video2 && <video  src={video2} 
            autoPlay 
            loop 
            muted 
            playsInline 
            disablePictureInPicture 
            controlsList="nodownload nofullscreen" 
            controls={false}
            ></video>}
           
            {img10 && <img src={img10} alt="Image 10" className="w-full my-6" />}
        {img6 && <img src={img6} alt="Image 1" className="w-full my-6" />}
        
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectTemplate;
