import React, { useMemo, useEffect } from "react";
import { IoCodeSlash, IoColorPalette, IoSettings } from "react-icons/io5";
import { LuTabletSmartphone } from "react-icons/lu";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const services = useMemo(
    () => [
      {
        id: "web-dev",
        number: "01",
        title: "Web App Development",
        description:
          "Get responsive and robust web applications built tailored to your needs.",
        icon: <IoCodeSlash className="w-8 h-8" />,
      },
      {
        id: "branding",
        number: "02",
        title: "Branding And Identity",
        description:
          "Create memorable brand experiences through expert design and strategy services that resonate with your target audience.",
        icon: <IoColorPalette className="w-8 h-8" />,
      },
      {
        id: "mobile-dev",
        number: "03",
        title: "Mobile Application Development",
        description:
          "Build powerful, user-friendly mobile applications that engage users and drive business growth across all platforms.",
        icon: <LuTabletSmartphone className="w-8 h-8" />,
      },
      {
        id: "software",
        number: "04",
        title: "Software Solution",
        description:
          "Develop custom software solutions tailored to your specific business needs and operational requirements.",
        icon: <IoSettings className="w-8 h-8" />,
      },
      {
        id: "seo",
        number: "05",
        title: "SEO and Performance Optimization",
        description:
          "Improve your digital presence and search rankings through comprehensive SEO and performance optimization strategies.",
        icon: <GrLineChart className="w-8 h-8" />,
      },
      {
        id: "ecommerce",
        number: "06",
        title: "E - Commerce Solution",
        description:
          "Create powerful online stores with seamless shopping experiences and robust backend management systems.",
        icon: <MdOutlineShoppingCart className="w-8 h-8" />,
      },
    ],
    []
  );

  return (
    <>
    <div className="container mx-auto px-6 md:px-12 pt-12" data-aos="fade-left">
      <div className="flex flex-col md:flex-row">
        <div>
          <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
            Our Services
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal">
            Services we offer
          </h1>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1" data-aos="fade-left">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-36 rounded-lg sm-hover:py-4 group relative overflow-hidden bg-white hover:bg-[#f9f9f9] transition-all duration-300 ease-in-out"
          >
            <div className="py-6 flex items-center justify-center">
              <p className="text-xl font-medium text-primaryBlue group-hover:text-[#171717]">
                {service.number}
              </p>

              <div className="flex-1 mx-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1d] group-hover:text-primaryBlue">
                  {service.title}
                </h3>
                <div className="mt-4 transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0 group-hover:max-h-80 group-hover:opacity-100">
                  <p className="text-base leading-relaxed text-[#1d1d1d]">
                    {service.description}
                  </p>
                  <Link
                    to="/Services"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <button className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-primaryBlue text-white hover:bg-primaryBlue/90 transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              <span className="p-2 rounded-lg bg-white text-primaryBlue group-hover:bg-primaryBlue group-hover:text-white transition-all duration-300 ease-in-out">
                {service.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}
