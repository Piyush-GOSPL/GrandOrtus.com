import React from "react";
import ServiceCard from '../../components/ServiceCard';
import SolutionSection from "./SolutionSection";

const ServicesList = () => {

 

  return (
    <section className="w-full md:my-16">
      {/* Hero Section */}

      <SolutionSection heading={' Importance of Enterprises in the Economy'} subheading={' Role of systems integrators in modernizing and optimizing Enterprises.'} backgroundImage={'/assets/ServicesList.svg'} />

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
