import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex justify-between items-center sticky top-0 bg-white z-50 shadow-md">
      <div className="logo ml-10">
        <img src="/logo.jpg" alt="Company Logo" className="h-12 w-auto" />
      </div>
      <main className="flex justify-end space-x-8 w-3/4">
        <HashLink
          to="/"
          className="text-gray-800 hover:text-blue-500 transition-colors"
        >
          Home
        </HashLink>
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-500 transition-colors"
        >
          Contact Us
        </Link>
        <HashLink
          to="/about"
          className="text-gray-800 hover:text-blue-500 transition-colors"
        >
          About Us
        </HashLink>
        <HashLink
          to="/career"
          className="text-gray-800 hover:text-blue-500 transition-colors"
        >
          Career
        </HashLink>
        <Link
          to="/services"
          className="text-gray-800 hover:text-blue-500 transition-colors"
        >
          Services
        </Link>
      </main>
    </nav>
  );
};

export default Navbar;
