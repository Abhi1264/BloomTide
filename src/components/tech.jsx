import React from "react";
import "../index.css";

const images = [
    "https://seeklogo.com/images/A/adobe-after-effects-logo-960B473FE4-seeklogo.com.png",
    "https://images.seeklogo.com/logo-png/40/1/alpine-js-logo-png_seeklogo-404949.png?v=1957208575220308472",
    "https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png",
    "https://images.seeklogo.com/logo-png/42/1/microsoft-azure-logo-png_seeklogo-426746.png?v=1957275811389725368",
    "https://seeklogo.com/images/B/bash-logo-BF4F6893D9-seeklogo.com.png",
    "https://images.seeklogo.com/logo-png/45/1/c-language-logo-png_seeklogo-458623.png?v=1957116640630043384",
    "https://seeklogo.com/images/C/c-logo-43CE78FF9C-seeklogo.com.png",
    "https://images.seeklogo.com/logo-png/36/1/c-sharp-c-logo-png_seeklogo-363285.png?v=1957363170977474520",
    "https://images.seeklogo.com/logo-png/42/1/css-3-logo-png_seeklogo-426083.png?v=1957274319419708016",
    "https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png",
    "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
    "https://images.seeklogo.com/logo-png/33/1/figma-logo-png_seeklogo-332042.png?v=1957363170977474520",
    "https://images.seeklogo.com/logo-png/35/1/flutter-logo-png_seeklogo-354671.png?v=1957300474038936160",
    "https://images.seeklogo.com/logo-png/58/1/framer-icon-logo-png_seeklogo-586477.png?v=1957879778701940112",
];

const InfiniteScroll = () => {
    const reversedImages = [...images].reverse();
    return (
        <>
        <div className="container mx-auto px-6 md:px-12 pt-6">
          <div className="flex flex-col md:flex-row">
            <div>
              <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
                Our Technology
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal">
                Find the Best Technology <br /> for Your Product
              </h1>
            </div>
            </div>
          </div>
            <div className='flex overflow-hidden my-10 space-x-6'>
                {[...Array(2)].map((_, index) => (
                    <div key={index} className='slide flex animate-infinite-slide shrink-0 whitespace-nowrap gap-12 mx-2'>
                        {images.map((src, idx) => (
                            <div key={idx} className='h-20 w-20 flex justify-center items-center rounded-xl shadow-md mb-4 p-4'>
                                <img src={src} alt={`logo-${idx}`} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default InfiniteScroll;
