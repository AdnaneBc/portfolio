import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MyServices from "../components/Services";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-r bg-gradient-to-br from-[#0B0D17] via-[#0C0F1F] to-[#131A2F] py-4">
      <Navbar />
      <Hero />
      <MyServices />
    </div>
  );
};

export default Home;
