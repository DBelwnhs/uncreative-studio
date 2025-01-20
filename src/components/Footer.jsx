import React from "react";

const Footer = ({ textColor = "white" }) => {
  const textClasses =
    textColor === "white"
      ? "text-white"
      : textColor === "black"
      ? "text-black"
      : "text-[#C6D0D2]";

  return (
    <footer className="py-12 h-auto font-sans flex flex-wrap flex-row items-end justify-between w-full xl:w-[1600px] lg:w-[1100px] md:w-[900px] sm:w-[700px] xs:w-full mx-auto sm:px-0 xs:px-4 overflow-hidden">
      <div className="text-left w-1/2 md:w-auto items-end">
        <p className={`text-[12px] sm:text-sm leading-relaxed ${textClasses} ${textColor !== 'white' ? 'mb-4' : 'mb-2'}`}>
          WHERE WE WORK <br />
          ANTONIOU MICHAILIDOU 8, <br />
          CHANIA CITY, GREECE <br />
          PHONE <a href="tel:00306948854616">+30 6948854616</a> <br />
          <br />
          <a href="mailto:antoniaprooo@hotmail.com"> SAY HELLO <br />
          antonapiromaki@gmail.com</a>
        </p>
        <h1
          className={`text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-base font-bold leading-none mt-5  md:mt-9 font-lemon ${textClasses}`}
        >
          <span className="font-light font-lemon">UN</span>CREATIVE
        </h1>
      </div>

      <div className="hidden lg:block flex-grow"></div>

      <div className="w-1/2 md:w-auto flex justify-end md:justify-end md:items-end md:h-[360px]">
        <h1
          className={`text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-base font-light leading-none font-lemon ${textClasses}`}
        >
          STUDIO
        </h1>
      </div>
    </footer>
  );
};

export default Footer;