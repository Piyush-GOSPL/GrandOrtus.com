import React, { useEffect } from "react";
import "./CompanyVison.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-cubic",
    });
  }, []); // <-- Add this empty array to run only once

  return (
    <section className="w-full p-5 md:pt-20 md:pr-20 md:pl-20 pb-0 flex md:flex-row flex-col justify-center md:gap-20 gap-5 bg-[#C5DEE9]">
      {/* Left Image Section */}
      <div
        data-aos="fade-right" 
        className="md:w-[50%] w-full flex flex-col items-center gap-4 lg:gap-0"
      >
        <img
          src="/assets/Rectangle-2.svg"
          alt="rectangle-2"
          className="rectangle-1 transition-transform duration-300 hover:scale-125"
        />
        <img
          src="/assets/Rectangle-1.svg"
          alt="rectangle-1"
          className="rectangle-2 transition-transform duration-300 hover:scale-125"
        />
        <img
          src="/assets/Rectangle-3.svg"
          alt="rectangle-3"
          className="rectangle-3 transition-transform duration-300 hover:scale-125"
        />
        <img
          src="/assets/Rectangle-4.svg"
          alt="rectangle-4"
          className="rectangle-4 transition-transform duration-300 hover:scale-125"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-[50%] w-full" data-aos="fade-left">
        <span className="text-[30px] font-bold py-4 block">
          Company’s Vision
        </span>
        <h1 className="text-[30px] font-bold text-[#0090d2] py-2">
          Scalable Business for Startups
        </h1>
        <p className="text-[20px] text-[#575757] py-4 leading-relaxed">
          Our vision is to empower startups with scalable business solutions,
          seamlessly integrating systems to drive growth and efficiency. By
          aligning technology and strategy, we enable enterprises to adapt,
          innovate, and thrive in dynamic markets.
        </p>

        {/* About Button */}
        <Link to="/About" className="cursor-pointer">
          <button className="bg-[#575757] px-6 py-3 text-white my-6 transition-all duration-300 hover:bg-white hover:text-[#0090d2] border-2 border-[#575757]">
            ABOUT COMPANY
          </button>
        </Link>

        {/* Rating Section */}
        <div className="flex gap-4 items-center">
          <div className="text-[24px] font-bold text-[#0090d2]">5.0</div>
          <div className="border-l-2 border-[#575757] pl-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/star 1.svg"
                  alt="Star"
                  className="w-5 h-5"
                />
              ))}
            </div>
            <div className="text-sm text-[#575757]">Genuine Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;
