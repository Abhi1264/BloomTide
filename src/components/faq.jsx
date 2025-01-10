import React, { useMemo, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = useMemo(() => [
        {
            question: "What services does Bloomtide Consulting offer?",
            answer: "Bloomtide Consulting specializes in business strategy, process improvement, digital transformation, and change management. We work with clients to identify opportunities for growth, streamline operations, and implement technology solutions to drive business success."
        },
        {
            question: "What industries does Bloomtide Consulting serve?",
            answer: "We serve a variety of industries including technology, healthcare, finance, and manufacturing."
        },
        {
            question: "How can Bloomtide Consulting help my business grow?",
            answer: "By identifying growth opportunities, streamlining operations, and implementing effective technology solutions tailored to your business needs."
        },
        {
            question: "What is the typical process of working with Bloomtide Consulting?",
            answer: "Our process includes an initial consultation, assessment of your current operations, strategy development, implementation, and ongoing support."
        },
        {
            question: "How can I schedule a consultation with Bloomtide Consulting?",
            answer: "You can schedule a consultation by contacting us through our website or by calling our office directly."
        }
    ], []);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    useEffect(() => {
            AOS.init({
                duration: 1000,
                offset: 200,
                once: false,
                anchorPlacement: 'top-bottom',
            });
        }, []);

    return (
        <div data-aos="fade-left" className="container mx-auto px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row">
                <div>
                    <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">faqs</h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal">Have Questions?</h1>
                </div>
            </div>

            <div>
                {faqs.map((item, index) => (
                    <div key={index} className="mt-6 border-t border-[#D7DBDE]">
                        <button
                            className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                            onClick={() => toggleFAQ(index)}>
                            <h3 className={`text-xl md:text-2xl font-medium ${openFAQ === index ? "text-[#0A72F4]" : "text-black"}`}>
                                {item.question}
                            </h3>
                            <span className={`text-xl md:text-2xl font-semibold transform transition-transform duration-300 ${openFAQ === index ? "text-[#0A72F4] rotate-45" : "text-black"}`}>+</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? "max-h-full" : "max-h-0"}`}>
                            <p className="mt-2 text-lg text-[#49617F]">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;