import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const HospitalityIndustry = () => {
  const features = [
    {
      title: "Streamlined Operations and Increased Efficiency",
      points: [
        "Property Management Systems (PMS): These centralized platforms manage reservations, check-ins, check-outs, housekeeping, billing, and more, saving time, reducing errors, and improving customer satisfaction.",
        "Revenue Management Systems: These systems allow hotels to optimize pricing strategies, ensuring maximum occupancy and increased profits.",
        "Automated Task Reports: Real-time task tracking, guest requests, and scheduling appointments can be automated, freeing up staff to focus on delivering exceptional service."
      ],
    },
    {
      title: "Enhanced Guest Experience",
      points: [
        "Mobile Check-in/out: Guests can skip the front desk and use their smartphones to check in and out, saving time and creating a more convenient experience.",
        "AI-driven Assistance: Virtual assistants help guests book spa appointments, or access information about local attractions, adding a level of service directly integrated with their stay.",
        "Smart Room Features: Personalized climate control, smart digital guides to recommend restaurants, activities, and services based on their individual preferences."
      ],
    },
    {
      title: "Improved Communication and Marketing",
      points: [
        "Social Media Engagement: Hotels can connect with guests on social media platforms, build relationships, and promote their offerings, increasing brand awareness.",
        "Targeted Advertising: AI-powered algorithms can track user data and target digital campaigns and promotions, ensuring maximum reach and effectiveness.",
        "Online Reviews: Automated response tools ensure hotels respond to guest feedback on key hotel sites, building trust and increasing bookings."
      ],
    },
    {
      title: "Innovation and the Future of Hospitality",
      points: [
        "Artificial Intelligence (AI): AI chatbots can answer guest queries, provide recommendations, and even personalize room settings.",
        "Wearable Technology: Smart wristbands act as room keys, enable check-in, and allow in-app room control.",
        "IoT Integration: Smart devices like thermostats, lights, and locks can be controlled remotely, enhancing guest comfort and convenience."
      ],
    }
  ];

  return (
    <section className="w-full">
      {/* Header Section */}
            
      <HeroSection heading="Hospitality Industry" subHeading="Streamline operations and enhance guest experiences with modern IT solutions."  />

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">How Information Technology Transforms the Hospitality Industry</h2>
        <p className="text-gray-700 mt-4">
          Information Technology (IT) revolutionizes the hospitality industry by elevating guest experiences, optimizing operations, and fostering innovation. Modern check-ins, keyless entry, and automation enhance convenience, while PMS, revenue systems, and AI-powered assistants boost efficiency. Smart technologies like IoT, data analytics, and customer relationship management systems enable personalized experiences. Emerging technologies like SaaS, VR, and AI introduce innovative solutions, empowering hotels to deliver exceptional services and remain competitive.
        </p>
      </div>

      {/* Image & Description Section */}
      <div className="w-full py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#575757]">
            How Information Technology Transforms the Hospitality Industry:
            </h3>
            <p className="text-[#575757] mt-4">
            Information Technology (IT) revolutionizes the hospitality industry by elevating guest experiences, optimizing operations, and fostering innovation. Mobile check-ins, keyless entry, and automation enhance convenience. Property Management Systems, Point of Sale systems, and automated housekeeping streamline processes. Data analytics and Customer Relationship Management systems enable personalized experiences. Emerging technologies like AI, VR, and AR introduce innovative solutions, empowering hotels to deliver exceptional services and remain competitive.
            </p>
          </div>
          <img src="/assets/HospitalityImage.svg" alt="Hospitality IT" className="w-full " />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="w-full bg-no-repeat bg-cover bg-center bg-[url('/assets/Hospitalitybg.svg')]">
      <div className="max-w-6xl mx-auto px-6 py-16 ">
        {features.map((feature, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A76A8]">{feature.title}</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              {feature.points.map((point, i) => (
                <li key={i} className="mt-2">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>

      {/* Conclusion Section */}
      <div className="w-full bg-[#0A76A8] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">The Future of Hospitality IT</h2>
          <p className="mt-4 text-lg">
            IT is redefining hospitality by offering seamless experiences, efficient operations, and advanced analytics. As technology evolves, its role in hospitality will continue to grow, enabling businesses to provide unparalleled service and innovation in an increasingly digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HospitalityIndustry;
