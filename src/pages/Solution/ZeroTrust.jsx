import React from 'react'
import ServiceCard from '../../components/ServiceCard';
import SolutionSection from './SolutionSection';

const ZeroTrust = () => {

 

  return (
    <section className="w-full md:my-16">
      {/* Hero Section */}
      
      <SolutionSection heading={' Zero-Trust Network Services'} subheading={'Empowering your business with "never trust, always verify" security philosophy and cutting-edge technologies.'} backgroundImage={'/assets/ZEROTRUST.png'}/>

      {/* Additional Image */}
      <div className="w-full flex justify-center mt-8 md:p-20 p-5">
        <img
          src="/assets/ZeroTrustBody.png"
          alt="Implementation Services Graphic"
          className="max-w-full h-auto"
        />
      </div>

      {/* Services Grid */}
      <ServiceCard/>
    </section>
  );
};

export default ZeroTrust;
