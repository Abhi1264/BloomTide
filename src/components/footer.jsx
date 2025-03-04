import React, { useMemo } from "react";
import logo from "../assets/logowhite.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoArrowDownCircleSharp } from "react-icons/io5";
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
      { text: "Services", link: "/Services" },
      { text: "Contact Us", link: "/Contact" },
      { text: "About Us", link: "/About" },
      { text: "Career", link: "/Career", isNew: true },
      { text: "Blog", link: "/Blog" },
      { text: "Case Studies", link: "/Casestudies" },
    ],
    []
  );

  return (
    <footer className="bg-[#000b0f] text-[#bbbbb9] pt-12 pb-6 px-4 sm:px-6 lg:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center space-x-24">
          <div className="md:w-2/3 space-y-6">
            <img src={logo} alt="" className="h-12" />
            <p className="text-base leading-relaxed">
              Bloom Tide Consulting delivers innovative IT solutions to help
              businesses thrive in the digital age. We focus on quality,
              collaboration, and cutting-edge technology to create tailored
              strategies that drive success.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-20 md:w-3/4 ml-auto">
            <div className="md:w-1/2">
              <h3 className="text-white font-semibold mb-6 uppercase text-lg">
                services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-sm hover:text-primaryBlue transition-colors"
                  >
                    <Link
                      to="/Services"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 ml-10">
              <h3 className="text-white font-semibold mb-6 uppercase text-lg">
                quick links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((linkItem, index) => (
                  <li
                    key={index}
                    className="text-sm hover:text-primaryBlue transition-colors"
                  >
                    {linkItem.link ? (
                      <Link
                        to={linkItem.link}
                        className="flex items-center"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        {linkItem.text}
                        {linkItem.isNew && (
                          <span className="ml-2 bg-primaryBlue text-white text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </Link>
                    ) : (
                      <button className="flex items-center justify-end">{linkItem.text}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-[#232323] mt-12 mb-4" />
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 lg:space-x-48 space-y-4 md:space-y-0">
          <div className="inline-flex items-center space-x-2">
            <button>
              <IoArrowDownCircleSharp className="text-primaryBlue h-10 w-10 transition-all duration-300 transform hover:scale-105 hover:text-primaryBlue/90"/>
            </button>
            <div className="text-left">
              <p className="text-sm font-semibold">Company Brochure</p>
              <p className="text-xs text-[#a1a1a6]">PDF, 3 MB</p>
            </div>
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
