import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MyServices from "../components/Services";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
  return (
    <div className="h-full gradient-bg py-4">
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <Skills />
    </div>
  );
};

export default Home;
