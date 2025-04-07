import React from "react";
import "./ServiceSection.css";

const services = [
  {
    title: "Implementation & IT Infrastructure Consulting",
    icon: "./assets/icon.svg",
    points: [
      "Strategy Development Assistance",
      "Technology Infrastructure Optimization.",
      "IT System Integration.",
    ],
  },
  {
    title: "Cybersecurity & Risk Management",
    icon: "./assets/icon.svg",
    points: [
      "Threat Detection & Prevention",
      "Compliance & Risk Assessment",
      "Incident Response Planning",
    ],
  },
  {
    title: "Cloud Solutions & Consulting",
    icon: "./assets/icon.svg",
    points: [
      "Cloud Architecture Design",
      "Hybrid Cloud Solutions",
      "Cloud Migration Assistance",
    ],
  },
  {
    title: "Digital Transformation Strategy",
    icon: "./assets/icon.svg",
    points: [
      "Business Process Automation",
      "Digital Platform Strategy",
      "Agile Implementation Support",
    ],
  },
];

const Servicetwo = [
  
  {
    title: "Implementation & IT Infrastructure Consulting",
    icon: "./assets/icon.svg",
    points: [
      "Strategy Development Assistance",
      "Technology Infrastructure Optimization.",
      "IT System Integration.",
    ],
  },
  {
    title: "Cybersecurity & Risk Management",
    icon: "./assets/icon.svg",
    points: [
      "Threat Detection & Prevention",
      "Compliance & Risk Assessment",
      "Incident Response Planning",
    ],
  },
  {
    title: "Cloud Solutions & Consulting",
    icon: "./assets/icon.svg",
    points: [
      "Cloud Architecture Design",
      "Hybrid Cloud Solutions",
      "Cloud Migration Assistance",
    ],
  },
  {
    title: "Digital Transformation Strategy",
    icon: "./assets/icon.svg",
    points: [
      "Business Process Automation",
      "Digital Platform Strategy",
      "Agile Implementation Support",
    ],
  },
];

const ServiceSection = () => {
  return (
    
    <section className="w-full mx-auto relative">
      <div className="service-section py-10 text-center">
        <h3 className="text-[30px] max-w-3xl mx-auto">Our Services</h3>
        <h1 className="max-w-3xl mx-auto">
          Transform Your Business with Advanced Technology
        </h1>
      </div>

      {/* Service Cards Container */}
      <div className=" grey grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-6  bg-after-[#575757] after:content-[''] after:absolute after:w-full after:h-[200px] after:bg-gray-200 after:bottom-[20px] after:left-0 after:-z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-h-72 relative transform transition-transform duration-300 hover:scale-105  hover:shadow-2xl"
          >
            <div className="absolute bg-white w-20 h-20 rounded-full translate-x-[124px] translate-y-[-30px] flex items-center justify-center shadow-lg p-2.5 ">
              <img
                src={service.icon}
                alt=""
                className="w-full object-center bg-[#0090d2] rounded-full p-2"
              />
            </div>

            <div className="bg-[#0090d2] p-5 min-h-[120px]">
              <h1 className="mt-5 text-[20px] text-center text-white">
                {service.title}
              </h1>
            </div>

            <ul className="list-disc pl-5 space-y-3">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className=" grey grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-6  bg-after-[#575757] after:content-[''] after:absolute after:w-full after:h-[200px] after:bg-gray-200 after:bottom-[20px] after:left-0 after:-z-10">
        {Servicetwo.map((Servicetwo, index) => (

          <div
            key={index}
            className="min-h-72 relative transform transition-transform duration-300 hover:scale-105  hover:shadow-2xl">
            <div className="absolute bg-white w-20 h-20 rounded-full translate-x-[124px] translate-y-[-30px] flex items-center justify-center shadow-lg p-2.5 ">
              <img src={Servicetwo.icon} alt=""className="w-full object-center bg-[#0090d2] rounded-full p-2"/>
            </div>

            <div className="bg-[#0090d2] p-5 min-h-[120px]">
              <h1 className="mt-5 text-[20px] text-center text-white">
                {Servicetwo.title}
              </h1>
            </div>

            <ul className="list-disc pl-5 space-y-3">
              {Servicetwo.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ServiceSection;
