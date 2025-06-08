import React from 'react'
import ServiceCard from './ServiceCard';

const ZeroTrust = () => {

 

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
      <ServiceCard/>
    </section>
  );
};

export default ZeroTrust;
