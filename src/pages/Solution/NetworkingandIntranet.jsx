import React from "react";
import ServiceCard from '../../components/ServiceCard';
import SolutionSection from "./SolutionSection";

const NetworkingandIntranet = () => {
 

  return (
    <section className="w-full md:my-16">
      {/* Hero Image */}

            <SolutionSection heading={'  Networking And Intranet Services'} subheading={'  Enabling communication between devices and users.'} backgroundImage={'/assets/DATA_CENTER.png'} />


      {/* Additional Image */}
      <div className="w-full flex justify-center mt-8 md:p-20 p-5">
        <img
          src="/assets/NetworkingandIntranet.png"
          alt="Implementation Services Graphic"
          className="max-w-full h-auto"
        />
      </div>

      <ServiceCard/>
    </section>
  );
};

export default NetworkingandIntranet;
