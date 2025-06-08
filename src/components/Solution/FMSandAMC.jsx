import React from 'react'
import ServiceCard from './ServiceCard'

const FMSandAMC = () => {

   

  return (

    <section className="w-full md:my-16">
    {/* Hero Image */}
    <div
      className="w-full h-[70dvh] bg-fixed bg-no-repeat bg-cover bg-[url('/assets/FMSandAMCBanner.png')] flex flex-col justify-center items-center"
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0px, 100% 80%, 51% 100%, 0px 80%, 0px 0px)",
      }}
    >
      <h1 className="md:text-5xl text-2xl text-white">
      FMS and AMC Support
      </h1>
      <p className="md:text-2xl text-xl text-white my-6 pl-5 ">
      "Seamless deployment of tailored solutions to optimize business operations efficiently."
      </p>
    </div>

    {/* Additional Image */}
    <div className="w-full flex justify-center mt-8 md:p-20 p-5">
      <img
        src="/assets/FMSandAMC.svg"
        alt="Implementation Services Graphic"
        className="max-w-full h-auto"
      />
    </div>

    <ServiceCard/>
  </section>
  
  )
}

export default FMSandAMC