import React from "react";
import logo from "../assets/logoblue.svg";

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-white shadow-sm border-b z-50"> 
            <div className="container mx-auto flex items-center justify-between py-4 px-4 xl:px-2">
                <img draggable={false} src={logo} alt="Bloom Tide Consulting Logo" className="h-10 w-auto cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}/>
                <div className="hidden md:flex items-center space-x-8 mr-16 ml-auto">
                    <a href="#" className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Services</a>
                    <a href="#" className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Company</a>
                    <a href="#" className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Blog</a>
                    <a href="#" className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Career</a>
                </div>
                <button className="bg-primaryBlue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;