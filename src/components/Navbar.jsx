import { Linkedin } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="text-[#1D3D71] mx-auto w-[80%] py-1 flex justify-center items-center fixed top-4 rounded-full left-0 right-0 z-50 bg-blue-200/50 bg-opacity-70 backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <div className="logo ml-10">
        <img src="/logo.jpg" alt="Company Logo" className="h-12 w-auto" />
      </div>
      <main className="flex justify-center space-x-8 w-3/4 mr-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/services">Services</NavLink>
      </main>
      <div className="flex text-2xl items-center justify-center gap-4">
        <div className="border-2 rounded-full p-2 border-[#1D3D71]">
          <FaLinkedin />
        </div>
        <div className="border-2 text-nowrap text-sm font-bold text-center rounded-full p-2 px-6 mr-2 border-[#1D3D71]">
          Contact Us
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, to }) => {
  const Component = to.startsWith("/") ? Link : HashLink;
  return (
    <Component
      to={to}
      className="text-gray-800 hover:text-blue-500 transition-colors duration-300 font-medium"
    >
      {children}
    </Component>
  );
};

export default Navbar;
