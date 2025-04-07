import React from "react";

const ServicesList = () => {

  const services = [
    {
      name: "Implementation Service",
      icon: "/assets/implementation.png",
      bg: "bg-[#0090d2]",
    },
    {
      name: "Datacenter Infra Design & Deployment",
      icon: "/assets/datacenter.png",
      bg: "bg-[#575757]",
    },
    {
      name: "Networking and Intranet",
      icon: "/assets/networking.png",
      bg: "bg-[#0090d2]",
    },
    {
      name: "IT Infrastructure Consulting",
      icon: "/assets/it-consulting.png",
      bg: "bg-[#575757]",
    },
    {
      name: "Mobility and Cloud",
      icon: "/assets/cloud.png",
      bg: "bg-[#0090d2]",
    },
    {
      name: "Mobile App & Web Development",
      icon: "/assets/mobile-app.png",
      bg: "bg-[#575757]",
    },
    {
      name: "Zero Trust Network Framework",
      icon: "/assets/zero-trust.png",
      bg: "bg-[#0090d2]",
    },
    {
      name: "FMS & AMC Support",
      icon: "/assets/fms-amc.png",
      bg: "bg-[#575757]",
    },
  ];

  return (
    <section className="w-full md:my-16">
      {/* Hero Section */}
      <div className="w-full h-[70vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/assets/ServicesList.svg')] flex flex-col justify-center items-start px-6 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Importance of Enterprises in the Economy
        </h1>
        <p className="text-lg mt-2">
          Role of systems integrators in modernizing and optimizing Enterprises.
        </p>
      </div>

      {/* Introduction Text */}
      <div className="max-w-5xl mx-auto text-center px-6 my-10">
        <p className="text-gray-700 text-lg">
          "Grand Ortus delivers end-to-end system integration services that
          connect, optimize, and future-proof your business. By leveraging
          advanced technologies and tailored solutions, we ensure seamless
          integration across platforms, driving efficiency, innovation, and
          sustainable growth for your organization."
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 text-center md:py-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 md:py-10">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col  items-center p-6 rounded-lg shadow-lg ${service.bg} text-white transition-transform transform hover:scale-105`}
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
