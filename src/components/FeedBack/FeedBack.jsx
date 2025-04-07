import React from "react";
import "./FeedBack.css";

const FeedBack = () => {
  return (
    <section className="w-full md:p-16 p-5 bg-[#F5F5F5] feedback-section">
    {/* Title Section */}
    <h1 className="text-center text-[30px] font-bold text-[#0090d2] max-w-3xl mx-auto leading-snug">
      Turn your passion into reality with an award-winning and top-notch system
      integrator enterprise.
    </h1>
  
    {/* Statistics Section */}
    <div className="bg-white shadow-lg rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center md:p-12 p-5 my-12">
      <div>
        <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">300</h2>
        <p className="text-lg text-gray-600">Projects  <span className="text-[#0090d2]"> Delivered </span> </p>
      </div>
      <div>
        <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">99.99%</h2>
        <p className="text-lg text-gray-600">Positive  <span className="text-[#0090d2]"> Feedback </span> </p>
      </div>
      <div>
        <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">120+</h2>
        <p className="text-lg text-gray-600">Happy  <span className="text-[#0090d2]"> Clients </span> </p>
      </div>
      <div>
        <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">80+</h2>
        <p className="text-lg text-gray-600">Technology <span className="text-[#0090d2]">  Experts </span> </p>
      </div>
    </div>
  </section>
  
  );
};

export default FeedBack;
