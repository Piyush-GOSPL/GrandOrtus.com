import React from 'react'

const MSMEs = () => {

    const requirements = [
        {
          title: "IT Infrastructure Setup & Management",
          description:
            "Installing and configuring servers, workstations, and networking devices like routers and switches.\nSetting up LAN, WAN, and Wi-Fi networks for secure and fast communication.\nProtecting infrastructure with firewalls, antivirus, and endpoint security.",
          icon: "\ud83d\udee0\ufe0f", // Replace with an actual icon component
        },
        {
          title: "Business Software Integration",
          description:
            "Linking Customer Relationship Management (CRM) software with sales, marketing, and support systems for better customer insights.\nBridging cloud-based applications with legacy on-premise systems to improve accessibility and scalability.",
          icon: "\ud83d\udcbb", // Replace with an actual icon component
        },
        {
          title: "Cybersecurity & Data Protection",
          description:
            "Encrypting sensitive data in transit and at rest to prevent unauthorized access or leaks.\nCreating automated data backup solutions and disaster recovery plans to restore operations in case of cyber incidents.",
          icon: "\ud83d\udd12", // Replace with an actual icon component
        },
        {
          title: "Cloud & Remote Work Solutions",
          description:
            "Deploying scalable cloud platforms such as AWS, Microsoft Azure, or Google Cloud for secure and efficient business operations.\nEnsuring secure remote access to company resources with encrypted VPN connections.",
          icon: "\u2601\ufe0f", // Replace with an actual icon component
        },
      ];
    
  return (
    <section className="w-full my-16">
    <div className="w-full h-[70dvh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/assets/MSME.svg')] flex flex-col justify-center items-start px-6">
      <h1 className="text-5xl text-white font-bold max-w-3xl">
      Importance of MSMEs in the economy
      </h1>
      <p className="text-2xl text-white mt-4 max-w-2xl">
      Role of systems integrators in modernizing and optimizing MSMEs.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 lg:gap-12 p-4 md:py-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/MSMEbody.png"
          alt="Startupbody"
          className="w-full max-w-[400px] h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 md:mt-20">
        <p className="text-lg leading-relaxed max-w-2xl text-left md:text-justify">
        Micro, Small, and Medium Enterprises (MSMEs) require scalable, cost-effective, and efficient IT solutions to enhance productivity, security, and business growth. Grand Ortus Solution Pvt. Ltd., as a system integrator company, provides tailored IT infrastructure setup, cloud solutions & migration, software integration & development, cybersecurity & data protection, and managed IT services to help MSMEs streamline operations.
        Grand Ortus empowers MSMEs to scale efficiently, improve productivity, and stay competitive in the digital era. 
        </p>
      </div>
    </div>

    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Requirements for Systems Integrators in MSMEs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-left"
            >
              <div className="text-4xl text-blue-500 mb-4 text-center">{req.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                {req.title}
              </h3>
              <p className="text-gray-600 whitespace-pre-line text-center">{req.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </section>
  )
}

export default MSMEs