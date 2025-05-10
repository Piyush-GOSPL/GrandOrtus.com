import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const TelecomIndustry = () => {
  const features = [
    {
      title: "Network Optimization",
      description:
        "Optimizing network infrastructure to enhance efficiency and coverage. Technologies like 5G, AI-driven network automation, and edge computing help improve speed, reduce latency, and optimize bandwidth utilization.",
        bg: "bg-[#0090d2]",
    },
    {
        title: "Enhanced Services and Revenue Streams",
        description:
        "Cloud platforms and AI-driven services enable telecom providers to offer personalized services, real-time customer support, and new digital experiences, increasing revenue opportunities.",
        bg: "bg-[#575757]",
    },
    {
      title: "Operational Efficiency and Cost Reduction",
      description:
        "Automation and predictive maintenance reduce downtime and operational costs. AI-powered analytics streamline processes, enhancing resource allocation and workforce management.",
        bg: "bg-[#0090d2]",
    },
    {
      title: "Security and Reliability",
      description:
        "Cybersecurity advancements protect telecom infrastructure from cyber threats. Encryption protocols, firewalls, and AI-driven threat detection ensure secure communication networks.",
        bg: "bg-[#575757]",
    },
  ];

  return (
    <section className="w-full">
      {/* Header Section */}
     
      <HeroSection heading="Telecom Industry" subHeading="Connecting the world with cutting-edge technology and seamless communication."/>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Overview of IT & Telecom Industry</h2>
        <p className="text-gray-700 mt-4">
        The telecommunications industry is a crucial sector that enables global connectivity through the transmission of voice, data, and video services. It consists of multiple players, including network operators, equipment manufacturers, and service providers. The industry has evolved significantly, driven by technological advancements, regulatory changes, and shifting consumer demands.
        </p>
      </div>

      {/* Industry Game Changer Section */}
      <div className="w-full bg-[#61C2F0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <img src="/assets/TelecomImage.svg" alt="Telecom Industry" className="w-full rounded-lg" />
          <div>
            <h3 className="text-2xl font-semibold text-[#575757]">
              A Telecom Industry Game Changer
            </h3>
            <p className="text-white mt-4">
            A telecom industry game changer, such as 5G technology, transforms connectivity by delivering faster speeds, reduced latency, and extensive IoT integration. This innovation drives advancements in areas like smart cities, autonomous vehicles, augmented reality, and telemedicine, enabling unprecedented applications. Coupled with AI and blockchain, it revolutionizes network optimization, enhances customer experience through predictive analytics, and ensures secure transactions. These breakthroughs not only redefine business models but also create opportunities for efficiency, scalability, and innovation, positioning the telecom industry as a cornerstone of the modern digital.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Empowering telecom networks with robust and scalable solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:py-10 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`p-6 rounded-tl-[50px] ${feature.bg} rounded-br-[50px] shadow`}>
              <h3 className="text-xl text-white  font-semibold text-[#0A76A8]">{feature.title}</h3>
              <p className="text-gray-700  text-white mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges and Considerations */}
      <div className="w-full bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A76A8]">Challenges and Considerations</h2>
          <p className="mt-4 text-lg text-gray-700">
            The telecom industry faces challenges such as network scalability, regulatory compliance, cybersecurity risks, and high infrastructure costs. To stay competitive, companies must invest in emerging technologies, optimize network performance, and enhance security protocols.
          </p>
        </div>
      </div>

      {/* Note Section */}
      <div className="w-full bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">NOTE:</h2>
          <p className="mt-4 text-gray-300">
            Information technology is the backbone of the telecom industry. It ensures efficient network management, enhances user experience, and enables digital transformation. The integration of AI, automation, and cloud solutions paves the way for the next-generation telecom ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelecomIndustry;
