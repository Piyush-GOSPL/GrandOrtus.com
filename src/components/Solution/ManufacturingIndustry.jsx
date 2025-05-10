import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const ManufacturingIndustry = () => {
  return (
    <section className="w-full">
      {/* Header Section */}
     
      <HeroSection heading="Manufacturing Industry" subHeading="Streamline operations and enhance efficiency with modern IT solutions." />
      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Overview of IT & Manufacturing Industry</h2>
        <p className="text-gray-700 mt-4">
        The Information Technology (IT) and Manufacturing industries are two of the most influential sectors in the global economy. While distinct, they are increasingly interconnected, with IT playing a crucial role in modernizing and optimizing manufacturing processes. Below is an overview of both industries, their key components, and their growing interdependence.
        </p>
      </div>
      
      <div className="w-full py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            <div className=" text-white p-6">
              <h3 className="text-2xl font-semibold text-[#575757]">Thriving Manufacturing Industry</h3>
              <p className="mt-4 text-[#575757]">
                Advancements in IT are shaping the manufacturing industry by enhancing automation, efficiency, and productivity. 
                Technologies like IoT, AI, and robotics improve supply chain management, reduce downtime, and optimize processes. 
                Data analytics enable real-time decision-making, while cloud-based solutions streamline operations.
              </p>
            </div>
            <img
              src="/assets/Manufacturing.png"
              alt="Manufacturing Technology"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* How IT Transforms Manufacturing */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            How IT is Transforming the Manufacturing Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-gray-800">
            {[
              {
                title: "Automation and Robotics",
                description:
                  "Industrial robots handle repetitive tasks with precision, reducing human error and increasing efficiency. Automation solutions streamline production workflows, improving output and cost-effectiveness.",
              },
              {
                title: "Data-Driven Decision Making",
                description:
                  "Manufacturing execution systems (MES) and analytics tools optimize operations, enabling real-time tracking of supply chains and inventory. AI-powered insights enhance predictive maintenance and process optimization.",
              },
              {
                title: "Enhanced Product Design and Development",
                description:
                  "Computer-aided design (CAD) and digital manufacturing enable rapid prototyping, accelerating product innovation. AI and IoT-driven simulations improve design accuracy and efficiency, reducing time to market.",
              },
              {
                title: "Improved Quality Control and Traceability",
                description:
                  "Modern tracking systems ensure product compliance and traceability, reducing waste and recalls. Automated quality control enhances precision, ensuring defect-free manufacturing.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-tl-lg rounded-br-lg shadow text-gray-800"
              >
                <h3 className="text-xl font-semibold text-[#0A76A8]">
                  {feature.title}
                </h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="w-full bg-[#0A76A8] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            The Benefits of IT in Manufacturing:
          </h2>
          <ul className="list-disc mt-4 pl-6 text-lg">
            <li>Increased production efficiency through automation and data-driven insights.</li>
            <li>Enhanced quality control using AI-driven analytics and monitoring systems.</li>
            <li>Reduced operational costs through predictive maintenance and optimized supply chain management.</li>
            <li>Improved sustainability with eco-friendly manufacturing practices and smart energy usage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingIndustry;
