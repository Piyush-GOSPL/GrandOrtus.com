import React from "react";
import "./CompanyVison.css";
import { Link } from "react-router-dom";

const CompanyVision = () => {
  return (
    <section className="w-full md:p-20 p-5 flex md:flex-row flex-col justify-center md:gap-20 gap-5 bg-[#C5DEE9]">
      {/* Left Image Section */}
      <div className="md:w-[50%] w-full flex flex-col items-center">
  <img src="./assets/Rectangle-2.svg" alt="" className="rectangle-1 animate-zoom transition-transform duration-300 hover:scale-125 hover:z-[9999]" />
  <img src="./assets/Rectangle-1.svg" alt="" className="rectangle-2 animate-zoom transition-transform duration-300 hover:scale-125 " />
  <img src="./assets/Rectangle-3.svg" alt="" className="rectangle-3 animate-zoom transition-transform duration-300 hover:scale-125 hover:z-[9999]" />
  <img src="./assets/Rectangle-4.svg" alt="" className="rectangle-4 animate-zoom transition-transform duration-300 hover:scale-125 hover:z-[9999]" />
 </div>



      {/* Right Content Section */}
      <div className="md:w-[50%] w-full">
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
        
        <button className="bg-[#575757] cursor-pointer px-6 py-3 text-white my-6 transition-all duration-300 hover:bg-white hover:text-[#0090d2] border-2 border-[#575757]">
          ABOUT COMPANY
        </button>
        </Link>

        {/* Rating Section */}
        <div className="flex gap-4 items-center">
          <div className="text-[24px] font-bold text-[#0090d2]">5.0</div>
          <div className="border-l-2 border-[#575757] pl-4">
            <div className="flex gap-1">
              <img src="./assets/star 1.svg" alt="Star" className="w-5 h-5 " />
              <img src="./assets/star 1.svg" alt="Star" className="w-5 h-5" />
              <img src="./assets/star 1.svg" alt="Star" className="w-5 h-5" />
              <img src="./assets/star 1.svg" alt="Star" className="w-5 h-5" />
              <img src="./assets/star 1.svg" alt="Star" className="w-5 h-5" />
            </div>
            <div className="text-sm text-[#575757]">Genuine Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;
