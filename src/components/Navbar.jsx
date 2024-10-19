import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className=" mx-auto w-[80%] py-1 flex justify-between items-center fixed top-4 rounded-full left-0 right-0 z-50 bg-white/50 bg-opacity-70 backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <div className="logo ml-10">
        <img
          src="/logo.jpg"
          alt="Company Logo"
          className="h-12 w-auto"
        />
      </div>
      <main className="flex justify-end space-x-8 w-3/4 mr-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/services">Services</NavLink>
      </main>
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
