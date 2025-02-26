import React, { useMemo } from "react";
import logo from "../assets/logowhite.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import download from "../assets/download.svg";
import { Link } from "react-router-dom";

function Footer() {
  const services = useMemo(
    () => [
      "Web Application Development",
      "Mobile Application Development",
      "SEO and Performance Optimization",
      "Branding And Identity",
      "Software Solution",
      "E - Commerce Solution",
    ],
    []
  );

  const quickLinks = useMemo(
    () => [
      { text: "Home", link: "/" },
      { text: "Services", link: "/ServicesPage" },
      { text: "Contact Us", link: "" },
      { text: "About Us", link: "" },
      { text: "Career", link: "/CareerPage", isNew: true },
      { text: "Blog", link: "/BlogsPage" },
      { text: "Case Studies", link: "" },
    ],
    []
  );

  return (
    <footer className="bg-[#000b0f] text-[#bbbbb9] pt-16 pb-8 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <img src={logo} alt="" className="h-10" />
            <p className="text-sm md:bottom-0 leading-relaxed">
              Bloom Tide Consulting delivers innovative IT solutions to help
              businesses thrive in the digital age. We focus on quality,
              collaboration, and cutting-edge technology to create tailored
              strategies that drive success.
            </p>
          </div>

          <div className="lg:ml-40">
            <h3 className="text-white font-semibold mb-6 uppercase">
              services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-primaryBlue transition-colors"
                >
                  <button>{service}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:ml-60 lg:ml-52">
            <h3 className="text-white font-semibold mb-6 uppercase">
              quick links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((linkItem, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-primaryBlue transition-colors"
                >
                  {linkItem.link ? (
                    <Link to={linkItem.link} className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      {linkItem.text}
                      {linkItem.isNew && (
                        <span className="ml-2 bg-primaryBlue text-white text-xs px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </Link>
                  ) : (
                    <button className="flex items-center">
                      {linkItem.text}
                      {linkItem.isNew && (
                        <span className="ml-2 bg-primaryBlue text-white text-xs px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-[#232323] mt-8 mb-4" />
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 lg:space-x-64 space-y-4 md:space-y-0">
          <div>
            <button className="inline-flex items-center space-x-2">
              <img src={download} className="w-8 h-8" />
              <div className="text-left">
                <p className="text-sm font-semibold">Company Brochure</p>
                <p className="text-xs text-[#a1a1a6]">PDF, 3 MB</p>
              </div>
            </button>
          </div>
          <p className="text-sm text-[#a1a1a6] order-last md:order-none">
            © {new Date().getFullYear()}, BloomTide Consulting, All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-white">
            {[
              FaFacebookF,
              FaLinkedinIn,
              FaWhatsapp,
              FaXTwitter,
              FaInstagram,
            ].map((Icon, index) => (
              <button
                key={index}
                className="bg-[#232323] hover:bg-primaryBlue transition-colors p-2 rounded-full"
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
