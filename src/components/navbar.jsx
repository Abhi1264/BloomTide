import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoblue.svg";

const Navbar = () => {
  const location = useLocation();

  const getButtonClass = (path) =>
    `font-medium transition ${
      location.pathname === path ? "text-primaryBlue" : "text-[#3e3e3e] hover:text-primaryBlue"
    }`;

  const memoizedNavbar = useMemo(() => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 xl:px-2">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          draggable={false}
          src={logo}
          alt="Bloom Tide Consulting Logo"
          className="h-10 w-auto cursor-pointer"
        />
        </Link>
        <div className="hidden md:flex items-center space-x-8 mr-16 ml-auto">
        <Link to="/ServicesPage" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button className={getButtonClass("/ServicesPage")}>Services</button>
        </Link>
        <Link to="/CompanyPage" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button className={getButtonClass("/CompanyPage")}>Company</button>
        </Link>
        <Link to="/BlogsPage" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button className={getButtonClass("/BlogsPage")}>Blog</button>
        </Link>
        <Link to="/CareerPage" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button className={getButtonClass("/CareerPage")}>Career</button>
        </Link>
        </div>
        <button className="bg-primaryBlue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
        Contact Us
        </button>
      </div>
      </nav>
    );
  }, [location.pathname]);

  return memoizedNavbar;
};

export default Navbar;
