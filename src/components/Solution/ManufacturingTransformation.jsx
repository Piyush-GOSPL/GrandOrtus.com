import React from "react";

const ManufacturingTransformation = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How IT is Transforming the Manufacturing Industry
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-gray-800">
          {[
            {
              title: "Automation and Robotics:",
              points: [
                "Industrial robots handle repetitive tasks with precision, increasing productivity and reducing human error.",
                "Automated guided vehicles (AGVs) navigate factory floors autonomously, streamlining material handling and logistics.",
                "Predictive maintenance leverages sensors and AI to anticipate equipment failures, preventing costly downtime.",
              ],
            },
            {
              title: "Data-Driven Decision Making:",
              points: [
                "Manufacturing execution systems (MES) collect and analyze real-time production data, providing insights for optimizing processes and resource allocation.",
                "Supply chain management (SCM) software enhances visibility and control over the flow of materials, ensuring timely deliveries and minimizing inventory costs.",
                "Business intelligence (BI) tools transform vast amounts of data into actionable insights, enabling data-driven decision making at all levels.",
              ],
            },
            {
              title: "Enhanced Product Design and Development:",
              points: [
                "Computer-aided design (CAD) and manufacturing (CAM) software create 3D models and simulations, accelerating product development and improving design accuracy.",
                "Additive manufacturing (3D printing) enables rapid prototyping and production of complex designs, fostering innovation and customization.",
                "Virtual reality (VR) and augmented reality (AR) tools enhance collaboration and training, streamlining product development and maintenance processes.",
              ],
            },
            {
              title: "Improved Quality Control and Traceability:",
              points: [
                "Machine vision systems use cameras and AI to inspect products for defects, ensuring consistent quality and minimizing waste.",
                "Track and trace solutions provide real-time visibility into product movement throughout the supply chain, enhancing transparency and accountability.",
                "Digital twin technology creates a virtual replica of the physical production system, enabling real-time monitoring and optimization of performance.",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#0A76A8]">{section.title}</h3>
              <ul className="list-disc mt-2 pl-4 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingTransformation;
