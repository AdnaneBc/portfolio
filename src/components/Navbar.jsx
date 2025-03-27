import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-4 text-white border border-white border-opacity-10 rounded-lg max-w-4xl mx-auto">
      <h1 className="font-logo text-4xl">Adnane Bcr</h1>
      <ul className="flex justify-center gap-4">
        <li>
          <a href="#Hero">Home</a>
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
