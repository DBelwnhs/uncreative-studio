import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(""); // For status messages

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zszphtb", // Replace with your EmailJS Service ID
        "template_gxw6acg", // Replace with your EmailJS Template ID
        form.current,
        "G7ZYRY0-GhEGpk3Up" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Thank you! Your message has been sent.");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#BAFF00] to-white">
      <Header />
      <section className="pt-60 sm:mb-36 mb-4 flex sm:flex-row flex-col-reverse justify-between sm:items-end items-center w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-[90vw] mx-auto ">
        <div className="sm:w-1/2 w-full">
          <h2 className="w-full lg:text-3xl xs:text-2xl xs:leading-tight font-sans font-thin leading-[30px] lg:leading-[34px] md:leading-[36px]  xs:-mb-[280px] sm:text-left text-center ">
          <a href="#form"> <b>Get in Touch.</b></a>
            <br />
            <br />
            Let’s start the conversation and create impactful designs and
            experiences that your audience will love.
          </h2>
        </div>
        <div className="sm:w-1/2 w-full">
          <h2 className="w-full xl:text-[100px] lg:text-[75px] md:text-[60px] text-[60px] xs:text-[35px] font-sans sm:text-right lg:leading-[100px] md:leading-[60px] xs:leading-[45px] mb-12 text-center">
            Let’s Foster a Notable Transformation Together!!
          </h2>
        </div>
      </section>
      <section id="form" className="pt-60 mb-36 flex md:flex-row flex-col justify-between md:items-end items-center w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] mx-auto ">
        <div className="md:relative">
          <div className="absolute top-[-700px] bottom-[-200px] right-0 md:border-r-2 border-black"></div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[980px] xl:w-[980px] xs:w-[70vw] mr-12 relative"
          >
            <div className="flex space-x-6">
              <input
                type="text"
                name="from_name"
                placeholder="NAME"
                className="w-full border-2 border-black bg-transparent placeholder-white text-lg outline-none focus:border-black mb-4 md:h-20 h-12 p-6 bg-black font-sans text-white focus:placeholder-black focus:text-black focus:bg-[#ffffff00]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full border-2 border-black bg-transparent placeholder-white text-lg outline-none focus:border-black mb-4 md:h-20 h-12 p-6 bg-black font-sans text-white focus:placeholder-black focus:text-black focus:bg-[#ffffff00]"
                required
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="COMPANY"
              className="w-full border-2 border-black bg-transparent placeholder-white text-lg outline-none focus:border-black mb-4 md:h-20 h-12 p-6 bg-black font-sans text-white focus:placeholder-black focus:text-black focus:bg-[#ffffff00]"
            />

            <textarea
              name="message"
              placeholder="TELL US..."
              className="w-full border-b-2 bg-transparent placeholder-white text-lg outline-none focus:border-black md:h-32 h-20 mb-4 p-6 bg-black font-sans text-white focus:placeholder-black focus:text-black focus:bg-[#ffffff00]"
              required
            />

            <p className="text-sm text-gray-600 mb-4">
              *By submitting this form, you agree to our Privacy Policy.
            </p>

            <button
              type="submit"
              className="bg-black text-white py-4 px-8 md:h-14 h-12 font-bold text-lg tracking-wide"
            >
              LET'S TALK
            </button>
          </form>
          {formStatus && <p className="mt-4 text-sm">{formStatus}</p>}
        </div>
      </section>
      <Footer className="overflow-hidden" textColor="black" />
    </div>
  );
};

export default Contact;
