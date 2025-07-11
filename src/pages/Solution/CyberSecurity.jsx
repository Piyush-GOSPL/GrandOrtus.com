import React from "react";
import ServiceCard from "../../components/ServiceCard";
import SolutionSection from "./SolutionSection";

const CyberSecurity = () => {

  return (
    <section className="w-full md:my-16">
      {/* Hero Image */}
      
      <SolutionSection heading={'Cyber Security'} subheading={'Seamless deployment of tailored solutions to optimize business operations efficiently.'} backgroundImage={'/assets/CyberSecurity.png'}/>

      {/* Additional Image */}
      <div className="w-full flex justify-center mt-8 md:p-20 p-5">
        <img
          src="/assets/CyberSecurityBody.png"
          alt="Implementation Services Graphic"
          className="max-w-full h-auto"
        />
      </div>

     <ServiceCard/>
    </section>
  );
};

export default CyberSecurity;
