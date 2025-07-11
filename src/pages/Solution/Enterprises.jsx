import React from 'react'
import BannerSection from '../Resource/BannerSection';

const Enterprises = () => {
    const services = [
        {
          title: "IT Infrastructure & Cloud Solutions",
          description:
            "This includes network design, service deployment, storage solutions, virtualization, and IT support services to ensure seamless operations. The goal is to build a reliable and high-performing IT backbone that supports business growth.",
          icon: "\ud83d\udee0\ufe0f", 
        },
        {
          title: "Business Application & Software Integration",
          description:
            "Upgrading and integrating outdated software with modern cloud-based or AI-driven applications to enhance efficiency without disrupting existing business operations.",
          icon: "\ud83d\udcbb", 
        },
        {
          title: "Cybersecurity & Compliance Solutions",
          description:
            "Implementation of firewalls, intrusion detection/prevention systems. Providing end-to-end encryption, identity access management.",
          icon: "\ud83d\udd12", 
        },
        {
          title: "Managed IT Services & Support",
          description:
            "IT management to ensure seamless operations, enhanced security, and optimal system performance. It includes network monitoring, IT infrastructure maintenance, cloud management, and helpdesk support.",
          icon: "\ud83c\udf10", 
        },
      ];
  return (
    <section className='w-full'>
    {/* Hero Section */}

    <BannerSection  heading='Importance of Enterprises in the Economy' subheading='Role of systems integrators in modernizing and optimizing Enterprises.' bgImage='/assets/interprices.png'/>

    {/* About Section */}
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-20 py-20">
      <img src="/assets/Enterprisesbody.png" alt="Enterprise Illustration" className="w-full md:w-1/3 h-auto" />
      <div className="text-lg text-gray-700">
        <p>
          Grand Ortus Solutions Pvt Ltd, as a leading system integrator company, offers a comprehensive range of services tailored to meet the complex IT needs of enterprise companies. These services are designed to enhance operational efficiency, ensure seamless system integration, and provide cutting-edge technological solutions to drive business growth.
        </p>
        <p className="mt-4">
          To support enterprises in their digital transformation journey, Grand Ortus offers Cloud Solutions & Migration, enabling companies to move their operations to public, private, or hybrid cloud environments for better scalability, cost-efficiency, and security.
        </p>
      </div>
    </div>

    {/* Services Section */}
    <div className="bg-gray-50 py-20">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Role of systems integrators in modernizing and optimizing Enterprises.
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-left">
            <div className="text-4xl text-blue-500 mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 whitespace-pre-line text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
   
  )
}

export default Enterprises