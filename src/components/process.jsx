import React, { useMemo, useEffect } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const content = useMemo(
    () => (
      <div className="container mx-auto px-6 md:px-12" data-aos="fade-right">
        <div className="flex flex-col sm:flex-col lg:flex-row items-center sm:items-start sm:gap-10">
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
                Our Process
              </h3>
              <h1 className="text-4xl lg:text-5xl font-bold text-black lg:mb-32 tracking-wide">
                Empowering Businesses for Sustainable Growth
              </h1>
            </div>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
              alt="Process image 1"
              className="rounded-lg w-full h-[23rem] object-cover shadow-md"
              data-aos="zoom-in"
            />
          </div>

          <div className="lg:w-1/2 space-y-6 mt-6">
            <div className="space-y-4">
              <p className="text-md md:text-lg text-[#080F1A]">
                Bloomtide Consulting delivers tailored solutions to drive
                strategic growth. We provide actionable insights and data-driven
                strategies to optimize operations and enhance decision-making.
              </p>
              <p className="text-md md:text-lg text-[#080F1A]">
                Our streamlined approach allows your team to focus on high-value
                initiatives while scaling your business with predictable
                consulting costs.
              </p>
              <button className="bg-primaryBlue text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 -z-50">
                <span>Discover Our Process</span>
                <MdOutlineArrowForwardIos />
              </button>
            </div>

            <div
              data-aos="zoom-in"
              className="border py-6 md:py-9 md:px-4 px-0 rounded-xl border-[#D3DBE5] md:flex grid gap-6 items-center justify-center"
            >
              <div className="md:text-center text-left">
                <h3 className="text-4xl font-semibold text-[#080F1A]">90%</h3>
                <p className="mt-2 text-sm text-[#647491]">
                  Increase in operational efficiency
                </p>
              </div>
              <div className="md:text-center text-left border-[#D3DBE5] md:border-x border-y md:border-y-0 py-5 md:py-0">
                <h3 className="text-4xl font-semibold text-[#080F1A]">100%</h3>
                <p className="mt-2 text-sm text-[#647491]">
                  Customer satisfaction improvement
                </p>
              </div>
              <div className="md:text-center text-left border-[#D3DBE5]">
                <h3 className="text-4xl font-semibold text-[#080F1A]">99%</h3>
                <p className="mt-2 text-sm text-[#647491]">
                  Long-term client retention rate
                </p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Process image 2"
              className="rounded-lg w-full h-[11.4rem] object-cover shadow-md"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    ),
    []
  );

  return content;
};

export default Process;
