import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import SolutionSection from './SolutionSection'

const MobilityandCloud = () => {

  
  return (
    <section className="w-full md:my-16">
    {/* Hero Image */}
    
<SolutionSection heading={' Mobility and Cloud'}  subheading={'Seamless deployment of tailored solutions to optimize business operations efficiently.'} backgroundImage={'/assets/MobilityandCloud.png'}/>

    {/* Additional Image */}
    <div className="w-full flex justify-center mt-8 md:p-20 p-5">
      <img
        src="/assets/MobilityBody.png"
        alt="Implementation Services Graphic"
        className="max-w-full h-auto"
      />
    </div>

    <ServiceCard/>
  </section>
  )
}

export default MobilityandCloud