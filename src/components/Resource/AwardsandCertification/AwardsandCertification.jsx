import React from "react";

const AwardsandCertification = () => {
  return (
    <section className="w-full ">
      <div
        className="h-[50vh] w-full bg-no-repeat bg-cover bg-center flex items-center pl-25"
        style={{ backgroundImage: "url('/assets/AwardsandCertification.svg')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Awards and Certification
        </h1>
      </div>

      <div
        className="bg-no-repeat bg-cover bg-center  w-full py-10"
        style={{ backgroundImage: "url('/assets/AwardsBG.svg')" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 grid gap-10">

          {/* Certification Block */}

          {[
            {
              img: "/assets/dbs.png",
              title: "ISO/IEC 27001:2022",
              subtitle: "Information Security Management System",
              text: `Information security, cybersecurity, and privacy protection 
        ISO/IEC 27001:2022 is an international standard that provides a 
        systematic framework for managing information security within an 
        organization. Grand Ortus implemented all necessary steps to comply 
        with this standard. Accredited and authorized auditors performed 
        assessments of the organization’s ISMS to confirm its complete 
        compliance with the ISO 27001:2022 requirements.`,
            },
            {
              img: "/assets/startup.png",
              title: "#Startupindia",
              subtitle: "Certificate Of Recognition",
              text: `Certification for Quality Management System. The ISO 9001 
        family applies to organisations wanting to improve service quality 
        to consistently meet customer needs. Our ISO 9001:2015 certificate 
        demonstrates our commitment to delivering the highest service level. 
        Obtaining ISO 9001 certification means we have demonstrated our ability 
        to meet regulatory requirements and implement a protocol that meets 
        quality management system standards.`,
            },
            {
              img: "/assets/bms.png",
              title: "ISO 9001:2015",
              subtitle: "Certification for Quality Management System",
              text: `ISO 9001 applies to organisations looking to improve their service 
        quality to consistently meet customer expectations. Our ISO 9001:2015 
        certificate shows our commitment to high standards. Obtaining ISO 9001 
        certification means we have demonstrated compliance with regulatory 
        requirements and implemented quality management processes that ensure 
        continuous improvement and customer satisfaction.`,
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md">
             
              <div className="flex justify-center mb-4">
                <img src={cert.img} alt={cert.title} className="w-32 h-auto" />
              </div>

          
              <h2 className="text-black text-2xl font-bold text-center">
                {cert.title}
              </h2>

           
              <h3 className="text-gray-600 text-lg font-semibold text-center mt-2">
                {cert.subtitle}
              </h3>

            
              <p className="text-gray-700 mt-4 leading-relaxed text-justify">
                {cert.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsandCertification;
