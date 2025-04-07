import React from 'react'
import Banner from './Banner/Banner'
import InovationSection from './InovationSection/InovationSection'
import CompanyVision from './companyVision/CompanyVision'
import FeedBack from './FeedBack/FeedBack'
import ServiceSection from './ServiceSection/ServiceSection'
import BusinessProcess from './BusinessProcess/BusinessProcess'
import ChooseUs from './ChooseUs/ChooseUs'
import SatisfiedCustomers from './SatisfiedCustomers/SatisfiedCustomers'
import Blog from './Blog/Blog'
import WorkingFlowchart from './WorkingFlowchart/WorkingFlowchart'
import PartnersClients from './PartnersClients/PartnersClients'
import Contactus from './Contactus/Contactus'
// import Nav from './nav'

const Home= () => {
  return (
    <div>
      <Banner />
      <InovationSection />
      <CompanyVision/>
      <FeedBack/>
      <ServiceSection/>
      <BusinessProcess/>
      <ChooseUs/>
      <SatisfiedCustomers/>
      <Blog/>
      <WorkingFlowchart/>
      <PartnersClients/>
      <Contactus/>        
      {/* <Nav/> */}
    </div>
  )
}

export default Home

