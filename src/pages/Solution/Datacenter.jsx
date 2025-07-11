import React from "react";
import ServiceCard from "../../components/ServiceCard";
import SolutionSection from "./SolutionSection";

const Datacenter = () => {
  return (
    <section className="w-full md:my-16">
      {/* Hero Image */}
    
      <SolutionSection heading={'Datacenter Infra Design & Deployment Services'} backgroundImage={'/assets/DATA_CENTER.png'} />

      {/* Additional Image */}
      <div className="w-full flex justify-center mt-8 md:p-20 p-5">
        <img 
          src="/assets/DatacenterDesign.png" 
          alt="Implementation Services Graphic" 
          className="max-w-full h-auto"/>
      </div>

      <ServiceCard />
    </section>
  );
};

export default Datacenter;
