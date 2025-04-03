import React from "react";

const About = () => {
  return (
    <section className="py-12 md:py-20 text-white text-center px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
          ABOUT
        </span>
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg px-4 md:px-6 leading-relaxed">
        I'm a passionate developer with a love for building clean, responsive,
        and user-focused web applications. I enjoy turning complex problems into
        simple, beautiful interfaces using modern technologies. Whether it's
        frontend magic or backend logic, I thrive on creating smooth digital
        experiences.
      </p>
    </section>
  );
};

export default About;
