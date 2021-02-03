import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-nav px-12 bg-white text-black relative shadow-md font-inter not-italic"
      role="navigation"
    >
      <Link to="/" className="flex font-bold text-5xl">
        <h1 className="">
          app.<span className="text-primary">me </span>{" "}
        </h1>
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="md:block  hidden font-bold text-primary text-3xl">
        <Link to="/#" className="p-4">
          Why
        </Link>
        <Link to="/#" className="p-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
