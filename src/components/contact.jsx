import React, { useMemo, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 400,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const memoizedContact = useMemo(() => {
    return (
      <div
        className="flex flex-col gap-8 lg:gap-0 lg:flex-row mx-auto justify-between items-center bg-[#f9f9f9] p-8 lg:py-20 lg:px-36"
      >
        <div className="lg:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">
            Have a Project Idea?
          </h2>
          <img
            src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Questions"
            className="rounded-xl w-full lg:w-11/12 h-96 object-cover shadow-md"
          />
        </div>

        <div className="lg:w-1/2 w-full lg:px-6 px-8 py-8 bg-white rounded-lg shadow-sm" data-aos="fade-left">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-black"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="Sujith"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-black"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Ex. BloomTide"
                  className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-black"
              >
                Service Required*
              </label>
              <select
                id="service"
                required
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-black"
              >
                <option value="">Select Your Service</option>
                <option value="web-development">Web App Development</option>
                <option value="app-development">Mobile App Development</option>
                <option value="branding">Branding and Identity</option>
                <option value="ui-ux-design">UI/UX Design</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-black"
              >
                Project Details*
              </label>
              <textarea
                id="details"
                placeholder="Message"
                required
                rows="4"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    );
  }, []);

  return memoizedContact;
};

export default Contact;
