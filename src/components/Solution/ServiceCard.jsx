import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
     const services = [
    {
      name: "Implementation Service",
      icon: "/assets/implementation.png",
      bg: "bg-[#0090d2]",
      path: '/ImplementationServices'
    },
    {
      name: "Datacenter Infra Design & Deployment",
      icon: "/assets/datacenter.png",
      bg: "bg-[#575757]",
      path: '/Datacenter'
    },
    {
      name: "Networking and Intranet",
      icon: "/assets/networking.png",
      bg: "bg-[#0090d2]",
      path: '/NetworkingandIntranet'
    },
    {
      name: "IT Infrastructure Consulting",
      icon: "/assets/it-consulting.png",
      bg: "bg-[#575757]",
      path: ''
    },
    {
      name: "Mobility and Cloud",
      icon: "/assets/cloud.png",
      bg: "bg-[#0090d2]",
      path: '/MobileWeb'
    },
    {
      name: "Mobile App & Web Development",
      icon: "/assets/mobile-app.png",
      bg: "bg-[#575757]",
      path: ''
    },
    {
      name: "Zero Trust Network Framework",
      icon: "/assets/zero-trust.png",
      bg: "bg-[#0090d2]",
      path: '/ZeroTrust'
    },
    {
      name: "FMS & AMC Support",
      icon: "/assets/fms-amc.png",
      bg: "bg-[#575757]",
      path: '/FMSandAMC'
    },
  ];
  
  return (
    <div>{/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 text-center md:py-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 md:py-10">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <Link to={service.path}>
                <Card key={index} bg={service.bg} icon={service.icon} name={service.name}/>
            </Link>
          )
          

          )}
        </div>
      </div></div>
  )
}

export default ServiceCard