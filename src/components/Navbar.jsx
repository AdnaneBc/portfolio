import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 text-white border border-white border-opacity-10 rounded-lg max-w-4xl mx-auto mt-5">
      <h1 className="font-logo text-4xl">Adnane Bcr</h1>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-8">
        <li>
          <a href="#Hero" className="hover:text-pink-500 transition-colors duration-300">Home</a>
        </li>
        <li>
          <a href="#About" className="hover:text-pink-500 transition-colors duration-300">About</a>
        </li>
        <li>
          <a href="#Projects" className="hover:text-pink-500 transition-colors duration-300">Projects</a>
        </li>
        <li>
          <a href="#Skills" className="hover:text-pink-500 transition-colors duration-300">Skills</a>
        </li>
        <li>
          <a href="#Contact" className="hover:text-pink-500 transition-colors duration-300">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0B0D17] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes size={24} />
          </button>
          <ul className="mt-16 space-y-6">
            <li>
              <a
                href="#Hero"
                className="block text-xl hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="block text-xl hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="block text-xl hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className="block text-xl hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block text-xl hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
