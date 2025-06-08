import React from "react";
import SolutionSection from "./SolutionSection";

const Startups = () => {
  const roles = [
    {
      title: "IT Infrastructure Setup",
      description:
        "Selection and installation of servers, networking equipment, and cloud solutions.\nSetting up workstations, operating systems, and databases.\nSetting up essential hardware like servers, computers, and networking devices.",
      icon: "\ud83d\udee0\ufe0f", 
    },
    {
      title: "Cloud Solutions & Migration",
      description:
        "Cloud migration and hybrid cloud setup.\nSaaS (Software as a Service) implementation.\nSetting up virtual machines, storage, and networking to replace on-premises infrastructure.",
      icon: "\u2601\ufe0f", 
    },
    {
      title: "Software Integration & Development",
      description:
        "Cloud migration and hybrid cloud setup.\nSaaS (Software as a Service) implementation.\nUpgrading outdated software to modern platforms for better performance and security.",
      icon: "\ud83d\udcbb", 
    },
    {
      title: "Cybersecurity & Data Protection",
      description:
        "Firewall, antivirus, and intrusion detection setup.\nData encryption & secure authentication solutions.\nBackup & disaster recovery planning.\nEncrypting sensitive business data at rest and in transit to prevent unauthorized access.",
      icon: "\ud83d\udd12", 
    },
  ];

  return (
    <section className="w-full ">
      {/* <div className="w-full h-[70dvh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/assets/Startupsbanner.svg')] flex flex-col justify-center items-start px-6">
        <h1 className="text-5xl text-white font-bold max-w-3xl">
          Building Startup Infrastructure: Role of the System Integrator
        </h1>
        <p className="text-2xl text-white mt-4 max-w-2xl">
          A deep dive into the critical role of system integrators in startup
          infrastructure.
        </p>
      </div> */}
      <SolutionSection heading="Building Startup Infrastructure: Role of the System Integrator"  subheading=" A deep dive into the critical role of system integrators in startup
          infrastructure" backgroundImage="/assets/Startupsbanner.svg"/>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 lg:gap-12 p-4 md:my-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/Startupbody.png"
            alt="Startupbody"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:mt-20">
          <p className="text-lg leading-relaxed max-w-2xl text-left md:text-justify">
            Grand Ortus Solution Pvt. Ltd., as a system integrator company,
            offers a comprehensive suite of IT and technology solutions tailored
            for startups to help them establish a strong digital foundation,
            scale efficiently, and remain competitive. For startups, the company
            provides IT infrastructure setup, including cloud computing
            solutions, secure networking, and managed IT services to ensure
            smooth operations. Software integration is a key service, where they
            implement CRM and custom business applications to streamline
            processes. Cybersecurity solutions such as firewalls, endpoint
            protection, and compliance consulting help startups safeguard their
            data and customer information. Grand Ortus Solution Pvt. Ltd.
            ensures startups can focus on innovation while having a scalable and
            secure IT backbone to support their journey.
          </p>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Roles of Systems Integrators in Startups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-left"
              >
                <div className="text-4xl text-blue-500 mb-4 text-center">
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                  {role.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line text-cernter">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
    
  );
};

export default Startups;
