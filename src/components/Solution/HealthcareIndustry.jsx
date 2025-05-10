import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const HealthcareIndustry = () => {
  return (
    <section className="w-full">
      {/* Header Section */}
     
      <HeroSection heading="Healthcare Industry" subHeading="Innovate and scale with smart IT solutions to transform the healthcare
          industry."/>
          
      {/* Technology Benefits Section */}
      <div className="w-full py-12 bg-[#0A76A8] md:my-20 ">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 ">
          <div className=" text-white p-6 ">
            <h3 className="text-2xl font-semibold">
              How Technology Benefits the Healthcare Industry
            </h3>
            <p className="mt-4">
              IT is transforming healthcare by improving patient care,
              optimizing operations, and enhancing accessibility. Electronic
              health records (EHRs) centralize patient data, while telemedicine
              expands remote healthcare services. Precision medicine, AI-driven
              diagnostics, and wearable devices further drive personalized
              treatment and efficiency. By leveraging IT innovations, healthcare
              providers can improve outcomes, reduce costs, and streamline
              workflows.
            </p>
          </div>
          <img
            src="/assets/Healthcare.png"
            alt="Healthcare Technology"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* IT Transformations in Healthcare */}
      <div className="w-full py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Here are just a few ways IT is revolutionizing healthcare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8 text-gray-800">
            {[
              {
                title: "Electronic Health Records (EHRs)",
                description:
                  "EHRs digitalize patient records, improving data accessibility and coordination among healthcare providers. This reduces errors and enhances patient safety.",
              },
              {
                title: "Telemedicine",
                description:
                  "Remote healthcare solutions enable virtual consultations, remote patient monitoring, and tele-surgery, making healthcare accessible in rural and underserved areas.",
              },
              {
                title: "Precision Medicine",
                description:
                  "AI and big data enable personalized treatments tailored to a patient’s genetics and lifestyle, improving outcomes and reducing side effects.",
              },
              {
                title: "Artificial Intelligence (AI)",
                description:
                  "AI enhances diagnostics, automates administrative workflows, and assists in disease prediction, improving accuracy and efficiency in medical decision-making.",
              },
              {
                title: "Wearable Devices",
                description:
                  "Smart devices track health metrics in real-time, providing valuable data for preventive care and chronic disease management.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-tl-lg rounded-br-lg shadow text-gray-800"
              >
                <h3 className="text-xl font-semibold text-[#0A76A8]">
                  {feature.title}
                </h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional IT Benefits */}
      <div className="w-full bg-[#0A76A8] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            The benefits of IT in healthcare extend beyond these specific
            examples. IT can also improve:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center bg-white rounded-lg shadow">
            {[
              {
                title: "Operational Efficiency",
                description:
                  "IT automates hospital management systems, reducing paperwork and optimizing resource allocation for better patient care.",
              },
              {
                title: "Patient Engagement",
                description:
                  "Digital platforms, mobile apps, and AI-powered chatbots empower patients to access healthcare information and schedule appointments easily.",
              },
              {
                title: "Cost Reduction",
                description:
                  "IT-driven solutions streamline operations, reducing costs associated with administration, hospital stays, and redundant testing.",
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6  text-gray-800">
                <h3 className="text-xl font-semibold text-[#0A76A8]">
                  {benefit.title}
                </h3>
                <p className="mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="md:py-15 py-10 ">
            <p>
              Of course, implementing IT solutions in healthcare comes with its
              own set of challenges. Data security and privacy concerns need to
              be addressed, and healthcare providers need to ensure that they
              have the proper infrastructure and training in place to
              effectively utilize new technologies. However, the potential
              benefits of IT in healthcare are undeniable. By embracing
              technology, the healthcare industry can provide better care for
              patients, improve health outcomes, and ultimately make healthcare
              more accessible and affordable for everyone. We are committed to
              partnering with healthcare organizations to leverage the power of
              IT and create a healthier future for all. Our team offers a range
              of IT solutions and services specifically designed for the
              healthcare industry, and we’re here to help you every step of the
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareIndustry;
