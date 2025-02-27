import React, { useMemo, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import earth from "../assets/earth.png";
import { Link } from "react-router";

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const memoizedContent = useMemo(() => {
    return (
      <div data-aos="zoom-in" className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center py-16 relative">
          <div className="bg-gradient-to-b from-[#A4EAFF] to-[#08BFF7] rounded-2xl p-8 sm:p-12 shadow-xl text-center max-w-7xl relative z-10 overflow-hidden">
            <div className="absolute left-10 top-1/5 h-1/2 w-1/4 bg-gradient-to-r from-white to-transparent opacity-50 blur-lg rounded-full"></div>
            <img
              src={earth}
              alt="earth"
              className="absolute bottom-36 left-1/2 w-2/3 transform -translate-x-1/2 translate-y-3/4 opacity-20"
              draggable={false}
            />
            <h2 className="text-3xl sm:text-4xl font-medium text-white">
              Let’s Build the Future Together 🚀
            </h2>
            <p className="mt-4 text-white text-sm sm:text-md lg:px-80">
              Ready to take your business to the next level? <br /> Contact us
              today to discuss how our IT consulting services can help.
            </p>
            <Link to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <button className="mt-8 mb-4 px-6 py-3 bg-white text-primaryBlue font-semibold rounded-xl shadow-sm transition-all duration-300 transform hover:scale-105 relative z-10">
              Let’s Build the Future Together
            </button>
            </Link>
          </div>
          <div className="absolute inset-0 blur-3xl bg-gradient-radial from-blue-300 to-transparent opacity-50"></div>
        </div>
      </div>
    );
  }, []);

  return memoizedContent;
};

export default Cta;
