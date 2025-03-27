import React from "react";
import img from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="min-h-140 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 text-white max-w-7xl mx-auto">
      {/* Left side: Text */}
      <div className="md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-small text-transparent bg-clip-text color-gradient-title">
          FRONTEND <br /> DEVELOPER
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
          Hi! I'm Adnane - a frontend developer who turns ideas into
          interactive, elegant web experiences. With a sharp eye for design and
          clean code, I craft responsive websites that don't just work — they
          impress.
        </p>

        {/* Glowing Button */}
        <div className="relative inline-block mt-8 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 opacity-50 blur-lg group-hover:opacity-70 transition duration-300"></div>
          <button className="relative px-6 py-3 bg-[#0B0D17] border border-pink-500 text-white rounded-full font-medium tracking-wide">
            VIEW MY WORK
          </button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={img} // Replace this with your image
          alt="Adnane"
          className=" shadow-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
