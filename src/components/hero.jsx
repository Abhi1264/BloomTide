import React, { useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ratingvector from "../assets/ratingvector.svg";
import mainimg from "../assets/mainimg.jpg";
import mahaaai from "../assets/mahaaai.avif";

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const heroContent = useMemo(() => (
        <>
            <div className="relative" data-aos="fade-right" data-aos-once="false">
                <div className="absolute inset-0 flex justify-center md:justify-center items-center -z-50 md:mt-96 mt-36">
                    <h1 className="text-[5rem] md:text-[10.5rem] xl:text-[17rem] font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-[#08BFF7] to-[#3386EE] opacity-10" aria-hidden="true">
                        BloomTide
                    </h1>
                </div>
            </div>
            <div className="text-center xl:my-24 md:my-16 my-8" data-aos="zoom-out" data-aos-once="false">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#08BFF7] to-[#3386EE] text-transparent bg-clip-text" data-aos="fade-up" data-aos-once="false">
                        <span className="hidden md:inline-block">Innovative Enterprise Web &<br /></span>
                        <span className="hidden md:inline-block">Mobile App Development</span>
                        <span className="md:hidden block">Innovative Enterprise Web & Mobile App Development</span>
                    </h1>
                    <p className="mt-6 text-[#1f1f1f] text-md md:text-lg max-w-4xl mx-auto">
                        Transform your business with cutting-edge web and mobile apps...
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
                    <div className="images flex items-center justify-center mt-8 -z-50">
                        <img src={mainimg} alt="" className="rounded-xl w-3/4" />
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