import React, { useMemo, useEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        text: "Bloomtide Consulting helped transform our operations with tailored solutions that boosted efficiency and productivity. Their team was professional, flexible, and delivered real results. Highly recommend!",
        logo: null,
        name: "John Doe",
        title: "Co-Founder, TechCorp",
        image: null,
      },
      {
        text: "We partnered with Bloomtide Consulting to enhance our marketing strategy, and the results were outstanding. Their insights and execution helped us reach a broader audience.",
        logo: null,
        name: "Sarah Williams",
        title: "Marketing Head, StartupX",
        image: null,
      },
      {
        text: "Working with Bloomtide was a game-changer for our business. Their data-driven approach and strategic guidance propelled our revenue growth beyond expectations. We're thrilled with the results!",
        logo: null,
        name: "Michael Lee",
        title: "CEO, FinTech Solutions",
        image: null,
      },
      {
        text: "Bloomtide Consulting truly understands how to scale businesses. Their team provided the clarity and execution needed to refine our product-market fit. We're grateful for their expertise and support.",
        logo: null,
        name: "Emma Brown",
        title: "Founder, HealthPlus",
        image: null,
      },
      {
        text: "Bloomtide Consulting helped us scale from one to ten. Their team provided the support and expertise needed to refine our business model. We're grateful for their support and guidance.",
        logo: null,
        name: "Jonathan Smith",
        title: "Founder, ConnextX",
        image: null,
      },
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  return (
    <div
      className="lg:px-24 pb-12 bg-[#f9f9f9] relative overflow-hidden"
      data-aos="fade-right"
    >
      <div className="px-6 md:px-12 pt-12">
        <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
          Testimonials
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal sm:mr-56">
          What People Say About Us
        </h1>
        <div className="hidden sm:block absolute top-20 sm:left-2/4 ml-20 transform rotate-12 bg-[#1AFF85] px-4 py-4 text-black font-medium text-sm rounded-lg">
          200+ Trusted Clients
        </div>
        <div className="hidden sm:block absolute top-20 mt-24 mr-4 lg:m-0 sm:left-3/4 transform -rotate-12 bg-[#9C1AFF] px-4 py-4 text-white font-medium text-sm rounded-lg">
          400+ Successful Projects
        </div>
        <div
          ref={scrollRef}
          className="testimonials flex gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[22rem] bg-white shadow-sm rounded-lg p-6"
            >
              <RiDoubleQuotesL className="text-5xl text-[#B5C0C9]" />
              <p className="text-sm text-[#5F5F5D] mt-2">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="text-sm font-medium text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#58585B]">{testimonial.title}</p>
                </div>
                {testimonial.logo && (
                  <img
                    src={testimonial.logo}
                    alt="Company Logo"
                    className="ml-auto h-6 object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
