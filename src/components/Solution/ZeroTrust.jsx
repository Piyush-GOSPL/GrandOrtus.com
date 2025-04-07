import React from 'react'

const ZeroTrust = () => {

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
      {/* Hero Section with Better Responsive Height and Background Control */}
      <div
        className="w-full min-h-[80vh] bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: "url('/assets/Zero-Trust.svg')",
          clipPath:
            "polygon(0% 0%, 100% 0px, 100% 80%, 51% 100%, 0px 80%, 0px 0px)",
        }}>
            
        <h1 className="md:text-5xl text-3xl font-bold text-white">
          Zero-Trust Network Services
        </h1>
        <p className="md:text-2xl text-lg text-white mt-4 max-w-3xl">
          Empowering your business with "never trust, always verify" security philosophy and cutting-edge technologies.
        </p>
      </div>

      {/* Additional Image */}
      <div className="w-full flex justify-center mt-8 md:p-20 p-5">
        <img
          src="/assets/ZeroTrustBody.png"
          alt="Implementation Services Graphic"
          className="max-w-full h-auto"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:p-20 p-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${service.bg} text-white transition-transform transform hover:scale-105`}
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZeroTrust;
