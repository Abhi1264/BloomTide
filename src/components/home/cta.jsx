import { useEffect, useRef, useState } from "react";
import earth from "../../assets/earth.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import React from "react";

const Cta = ({
  className = "",
  spotlightColor = "#FFFFFF40",
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div data-aos="zoom-in" className="container mx-auto px-6 md:px-12">
      <div className="flex justify-center items-center py-16 relative">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative rounded-xl bg-gradient-to-b from-[#A4EAFF] to-[#08BFF7] overflow-hidden p-8 sm:p-12 shadow-xl text-center max-w-7xl z-10 ${className}`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity,
              background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 30%)`,
            }}
          />
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
          <Link
            to="/Contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="mt-8 mb-4 px-6 py-3 bg-white text-primaryBlue font-semibold rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 relative z-10">
              Let’s Build the Future Together
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
