import React, { useState, useMemo } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = useMemo(
    () => [
      {
        question: "What services does Bloomtide Consulting offer?",
        answer:
          "Bloomtide Consulting specializes in business strategy, process improvement, digital transformation, and change management. We work with clients to identify opportunities for growth, streamline operations, and implement technology solutions to drive business success.",
      },
      {
        question: "What industries does Bloomtide Consulting serve?",
        answer:
          "We serve a variety of industries including technology, healthcare, finance, and manufacturing.",
      },
      {
        question: "How can Bloomtide Consulting help my business grow?",
        answer:
          "By identifying growth opportunities, streamlining operations, and implementing effective technology solutions tailored to your business needs.",
      },
      {
        question:
          "What is the typical process of working with Bloomtide Consulting?",
        answer:
          "Our process includes an initial consultation, assessment of your current operations, strategy development, implementation, and ongoing support.",
      },
      {
        question:
          "How can I schedule a consultation with Bloomtide Consulting?",
        answer:
          "You can schedule a consultation by contacting us through our website or by calling our office directly.",
      },
    ],
    []
  );

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12" data-aos="fade-left">
      <div className="flex flex-col md:flex-row">
        <div>
          <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
            faqs
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal">
            Have Questions?
          </h1>
        </div>
      </div>
      <div className="mt-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#D7DBDE] py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-lg font-medium ${
                  activeIndex === index ? "text-[#0A72F4]" : "text-black"
                }`}
              >
                {faq.question}
              </h3>
              <span
                className={`text-xl md:text-2xl font-semibold transform transition-transform duration-300 ${
                  activeIndex === index
                    ? "text-[#0A72F4] rotate-45"
                    : "text-black"
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-[#49617F]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
