import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoblue.svg";

const Navbar = () => {
  const location = useLocation();
  const memoizedNavbar = useMemo(() => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="container mx-auto flex items-center justify-between py-4 xl:px-12 px-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              draggable={false}
              src={logo}
              alt="Bloom Tide Consulting Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8 mr-16 ml-auto">
            <Link
              to="/Services"
              className={`font-medium transition ${
                location.pathname === "/Services"
                  ? "text-primaryBlue"
                  : "text-[#3e3e3e] hover:text-primaryBlue"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Services
            </Link>
            <Link
              to="/Company"
              className={`font-medium transition ${
                location.pathname === "/Company"
                  ? "text-primaryBlue"
                  : "text-[#3e3e3e] hover:text-primaryBlue"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Company
            </Link>
            <Link
              to="/BlogsPage"
              className={`font-medium transition ${
                location.pathname === "/BlogsPage"
                  ? "text-primaryBlue"
                  : "text-[#3e3e3e] hover:text-primaryBlue"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Blog
            </Link>
            <Link
              to="/Career"
              className={`font-medium transition ${
                location.pathname === "/Career"
                  ? "text-primaryBlue"
                  : "text-[#3e3e3e] hover:text-primaryBlue"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Career
            </Link>
          </div>
          <Link
            to="/Contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="bg-primaryBlue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    );
  }, [location.pathname]);

  return memoizedNavbar;
};

export default Navbar;
