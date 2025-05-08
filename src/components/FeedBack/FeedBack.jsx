import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./FeedBack.css";

const FeedBack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once
    threshold: 0.4,     // Trigger when 40% of the section is visible
  });

  return (
    <section ref={ref} className="w-full md:p-16 p-5 bg-[#F5F5F5] feedback-section">
      {/* Title Section */}
      <h1 className="text-center text-[30px] font-bold text-[#0090d2] max-w-3xl mx-auto leading-snug">
        Turn your passion into reality with an award-winning and top-notch system
        integrator enterprise.
      </h1>

      {/* Statistics Section */}
      <div className="bg-white shadow-lg rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center md:p-12 p-5 my-12">
        <div>
          <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">
            {inView && <CountUp end={300} duration={4} />}
          </h2>
          <p className="text-lg text-gray-600">
            Projects <span className="text-[#0090d2]"> Delivered </span>
          </p>
        </div>
        <div>
          <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">
            {inView && <CountUp end={99.99} duration={4} decimals={2} suffix="%" />}
          </h2>
          <p className="text-lg text-gray-600">
            Positive <span className="text-[#0090d2]"> Feedback </span>
          </p>
        </div>
        <div>
          <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">
            {inView && <CountUp end={120} duration={4} suffix="+" />}
          </h2>
          <p className="text-lg text-gray-600">
            Happy <span className="text-[#0090d2]"> Clients </span>
          </p>
        </div>
        <div>
          <h2 className="md:text-[40px] text-[20px] font-bold text-[#575757]">
            {inView && <CountUp end={80} duration={4} suffix="+" />}
          </h2>
          <p className="text-lg text-gray-600">
            Technology <span className="text-[#0090d2]"> Experts </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
