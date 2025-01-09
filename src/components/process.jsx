import React, { useMemo } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Process = () => {
    const content = useMemo(() => (
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col sm:flex-col lg:flex-row items-center sm:items-start sm:gap-10">
                <div className="lg:w-1/2 space-y-6">
                    <div>
                        <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
                            Our Process
                        </h3>
                        <h1 className="text-4xl lg:text-5xl font-bold text-black lg:mb-32 leading-snug md:leading-relaxed tracking-wide">
                            Empowering Businesses for Sustainable Growth
                        </h1>
                    </div>
                    <img
                        src="https://picsum.photos/600/400"
                        alt="Process image 1"
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>

                <div className="lg:w-1/2 space-y-6 lg:mt-7">
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

                    <div className="border py-6 md:py-9 md:px-4 px-0 rounded-xl border-[#D3DBE5] md:flex grid gap-6 items-center justify-center">
                        <div className="md:text-center text-left">
                            <h3 className="text-4xl font-semibold text-[#080F1A]">90%</h3>
                            <p className="mt-2 text-sm text-[#647491]">
                                Increase in operational efficiency
                            </p>
                        </div>
                        <div className="md:text-center text-left border-t border-[#D3DBE5] md:border-l md:border-t-0">
                            <h3 className="text-4xl font-semibold text-[#080F1A]">100%</h3>
                            <p className="mt-2 text-sm text-[#647491]">
                                Customer satisfaction improvement
                            </p>
                        </div>
                        <div className="md:text-center text-left border-t border-[#D3DBE5] md:border-l md:border-t-0">
                            <h3 className="text-4xl font-semibold text-[#080F1A]">99%</h3>
                            <p className="mt-2 text-sm text-[#647491]">
                                Long-term client retention rate
                            </p>
                        </div>
                    </div>
                    <img
                        src="https://picsum.photos/400/135"
                        alt="Process image 2"
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    ), []);

    return content;
};

export default Process;