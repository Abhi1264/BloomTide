import React, { useMemo, useEffect } from "react";
import {Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ratingvector from "../../assets/ratingvector.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const heroContent = useMemo(
    () => (
      <>
        <div className="relative" data-aos="fade-right" data-aos-once="false">
          <div className="absolute inset-0 flex justify-center md:justify-center items-center -z-50 md:mt-80 mt-36">
            <h1
              className="text-7xl md:text-[11rem] lg:text-[13.5rem] xl:text-[19.5rem] font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-[#08BFF7] to-[#3386EE] opacity-10"
              aria-hidden="true"
            >
              BloomTide
            </h1>
          </div>
        </div>
        <div
          className="text-center lg:mt-36 mt-28 mb-16 md:mb-20"
          data-aos="zoom-out"
          data-aos-once="false"
        >
          <div className="container mx-auto px-4">
            <h1
              className="text-4xl sm:text-[4.5rem] max-w-5xl sm:leading-[5.5rem] font-bold bg-gradient-to-r from-[#08BFF7] to-[#3386EE] text-transparent bg-clip-text text-center mx-auto"
              data-aos="fade-up"
              data-aos-once="false"
            >
              Innovative Enterprise Web & Mobile App Development
            </h1>
            <p className="sm:mt-6 mt-3 text-[#1f1f1f] text-md md:text-lg max-w-4xl mx-auto">
              Transform your business with cutting-edge web and mobile apps. We
              design scalable solutions to elevate your brand and accelerate
              growth. Contact us today to build your enterprise's future.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-1">
              <IoIosStar className="text-[#FFC107] animate-pulse"/>
              <IoIosStar className="text-[#FFC107] animate-pulse" />
              <IoIosStar className="text-[#FFC107] animate-pulse" />
              <IoIosStar className="text-[#FFC107] animate-pulse" />
              <IoIosStarHalf className="text-[#FFC107] animate-pulse" />
              <span className="text-[#1f1f1f] px-2">4.7 (1552+ reviews)</span>
              <img
                draggable={false}
                src={ratingvector}
                alt="rating vector"
                className="h-4 hover:-rotate-45 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link to="/Contact" className="w-full md:w-auto bg-primaryBlue text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 text-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Schedule a Consultation
              </Link>
              <Link to="/Services" className="w-full md:w-auto bg-[#292929] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <span>Explore Services</span>
                <MdOutlineArrowForwardIos />
              </Link>
            </div>
            <div className="images relative flex items-center justify-center mt-8 -z-50 max-w-7xl mx-auto">
              <img
                draggable={false}
                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="seo"
                className="absolute left-[17.5%] top-[26%] w-20 md:w-48 lg:w-72 xl:w-80 rounded-md md:rounded-lg shadow-2xl -translate-x-1/2 -translate-y-1/2 z-20"
              />
              <img
                draggable={false}
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="software development"
                className="absolute left-[17.5%] top-[69%] w-20 md:w-48 lg:w-72 xl:w-80 rounded-md md:rounded-lg shadow-2xl -translate-x-1/2 -translate-y-1/2 z-20 md:mt-4 lg:mt-8"
              />
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Web Development"
                className="rounded-md md:rounded-xl w-2/3 relative z-10 shadow-xl"
              />
              <img
                draggable={false}
                src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="app development"
                className="absolute right-[17.5%] top-[50%] w-20 md:w-48 lg:w-64 xl:w-80 rounded-md md:rounded-lg shadow-2xl translate-x-1/2 -translate-y-1/2 z-20"
              />
            </div>
            <p className="py-8 text-[#647491]">Trusted by 100+ businesses:</p>
            <div className="flex items-center justify-center space-x-2 md:space-x-20 overflow-x-hidden">
              <img
                draggable={false}
                src="https://framerusercontent.com/images/JAaaicONeOdj6imSlBiNQb0OXKw.png?scale-down-to=512"
                alt=""
                className="h-3 md:h-8"
              />
              <img
                draggable={false}
                src="https://framerusercontent.com/images/JAaaicONeOdj6imSlBiNQb0OXKw.png?scale-down-to=512"
                alt=""
                className="h-3 md:h-8"
              />
              <img
                draggable={false}
                src="https://framerusercontent.com/images/JAaaicONeOdj6imSlBiNQb0OXKw.png?scale-down-to=512"
                alt=""
                className="h-3 md:h-8"
              />
              <img
                draggable={false}
                src="https://framerusercontent.com/images/JAaaicONeOdj6imSlBiNQb0OXKw.png?scale-down-to=512"
                alt=""
                className="h-3 md:h-8"
              />
            </div>
          </div>
        </div>
      </>
    ),
    []
  );

  return heroContent;
};

export default Hero;
