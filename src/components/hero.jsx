import React, { useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ratingvector from "../assets/ratingvector.svg";
import mainimg from "../assets/mainimg.jpg";
import mahaaai from "../assets/mahaaai.avif";
import seo from "../assets/seo.jpg";
import appdev from "../assets/appdev.jpg";
import software from "../assets/software.jpg";

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const heroContent = useMemo(() => (
        <>
            <div className="relative" data-aos="fade-right" data-aos-once="false">
                <div className="absolute inset-0 flex justify-center md:justify-center items-center -z-50 md:mt-80 mt-36">
                    <h1 className="text-[5rem] md:text-[11rem] lg:text-[13.5rem] xl:text-[19.5rem] font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-[#08BFF7] to-[#3386EE] opacity-10" aria-hidden="true">
                        BloomTide
                    </h1>
                </div>
            </div>
            <div className="text-center lg:mt-36 mt-28 mb-16 md:mb-20" data-aos="zoom-out" data-aos-once="false">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-7xl max-w-5xl font-bold bg-gradient-to-r from-[#08BFF7] to-[#3386EE] text-transparent bg-clip-text text-center mx-auto" data-aos="fade-up" data-aos-once="false">
                        Innovative Enterprise Web & Mobile App Development
                    </h1>
                    <p className="mt-6 text-[#1f1f1f] text-md md:text-lg max-w-4xl mx-auto">
                        Transform your business with cutting-edge web and mobile apps. We design scalable solutions to elevate your brand and accelerate growth. Contact us today to build your enterprise's future.
                    </p>
                    <div className="flex items-center justify-center mt-4 space-x-1">
                        <IoIosStar className="text-[#FFC107]" />
                        <IoIosStar className="text-[#FFC107]" />
                        <IoIosStar className="text-[#FFC107]" />
                        <IoIosStar className="text-[#FFC107]" />
                        <IoIosStarHalf className="text-[#FFC107]" />
                        <span className="text-[#1f1f1f] px-2">4.7 (1552+ reviews)</span>
                        <img draggable={false} src={ratingvector} alt="rating vector" className="h-4" />
                    </div>
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <button className="w-full md:w-auto bg-primaryBlue text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 text-center">
                            Schedule a Consultation
                        </button>
                        <button className="w-full md:w-auto bg-[#292929] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                            <span>Explore Services</span>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
                    <div className="images relative flex items-center justify-center mt-8 -z-50 lg:max-w-7xl mx-auto">
                        <img
                            draggable={false}
                            src={seo}
                            alt=""
                            className="hidden sm:block absolute left-[12.5%] top-[33%] w-80 rounded-lg shadow-2xl -translate-x-1/2 -translate-y-1/2 z-20 mb-8"
                        />
                        <img
                            draggable={false}
                            src={software}
                            alt=""
                            className="hidden sm:block absolute left-[12.5%] top-[67%] w-80 rounded-lg shadow-2xl -translate-x-1/2 -translate-y-1/2 z-20 mt-4"
                        />
                        <img
                            draggable={false}
                            src={mainimg}
                            alt=""
                            className="rounded-xl w-3/4 relative z-10"
                        />
                        <img
                            draggable={false}
                            src={appdev}
                            alt=""
                            className="hidden sm:block absolute right-[12.5%] top-[50%] w-96 rounded-lg shadow-2xl translate-x-1/2 -translate-y-1/2 z-20"
                        />
                    </div>
                    <p className="py-8 text-[#647491]">Trusted by 100+ businesses:</p>
                    <div className="flex items-center justify-center space-x-2 md:space-x-20 overflow-x-hidden">
                        <img draggable={false} src={mahaaai} alt="" className="h-3 md:h-8" />
                        <img draggable={false} src={mahaaai} alt="" className="h-3 md:h-8" />
                        <img draggable={false} src={mahaaai} alt="" className="h-3 md:h-8" />
                        <img draggable={false} src={mahaaai} alt="" className="h-3 md:h-8" />
                    </div>
                </div>
            </div>
        </>
    ), []);

    return heroContent;
};

export default Hero;