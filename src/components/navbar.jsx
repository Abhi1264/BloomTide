import React, { useMemo } from "react";
import logo from "../assets/logoblue.svg";

const Navbar = () => {
    const memoizedNavbar = useMemo(() => {
        return (
            <nav className="sticky top-0 bg-white shadow-sm border-b z-50">
                <div className="container mx-auto flex items-center justify-between py-4 px-4 xl:px-2">
                    <img
                        draggable={false}
                        src={logo}
                        alt="Bloom Tide Consulting Logo"
                        className="h-10 w-auto cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    />
                    <div className="hidden md:flex items-center space-x-8 mr-16 ml-auto">
                        <button className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Services</button>
                        <button className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Company</button>
                        <button className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Blog</button>
                        <button className="text-[#3e3e3e] hover:text-primaryBlue transition font-medium">Career</button>
                    </div>
                    <button className="bg-primaryBlue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </nav>
        );
    }, []);

    return memoizedNavbar;
};

export default Navbar;