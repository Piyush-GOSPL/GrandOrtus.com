import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesList = () => {

 

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
      
    <ServiceCard/>
      
    </section>
  );
};

export default ServicesList;
