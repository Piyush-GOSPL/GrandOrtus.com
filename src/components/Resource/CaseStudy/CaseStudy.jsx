import React from "react";
import { FaExclamationCircle, FaLightbulb, FaFileAlt } from "react-icons/fa";

const CaseStudy = () => {
  const data = [
    {
      icon: (
        <FaExclamationCircle className="text-blue-700 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white" />
      ),
      title: "The Problem",
      description:
        "Healthcare sectors are highly susceptible to cyber threats like protection of sensitive data, complex access management, compliance and regulatory requirements, vulnerabilities from IoT and medical devices.",
    },
    {
      icon: (
        <FaLightbulb className="text-yellow-500 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white" />
      ),
      title: "The Solution",
      description:
        "We worked on Zero Trust Network Implementation, which was achieved by Identity and Access Management (IAM), Network Access Control (NAC), and Secure SD-WAN with Gateway-Level Security.",
    },
    {
      icon: (
        <FaFileAlt className="text-green-600 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white" />
      ),
      title: "The Result",
      description:
        "Reduced risk of insider threats and external attacks. Limited exposure of sensitive assets.",
    },
  ];
  return (
    <section className="w-full">
      <div className=" w-full flex items-center h-[70dvh] justify-between text-center bg-center bg-no-repeat bg-[url('/assets/CaseStudyBanner.svg')]  ">
        <div className="mb-6 p-10">
          <h1 className="text-3xl font-bold text-white">Case Study</h1>
          <p className="text-lg text-white mt-2">
            We provide professional solutions for your business.
          </p>
        </div>
      </div>

      <div className="md:p-10 lg:py-8 md:py-10 py-5 p-0 lg:p-8 bg-center bg-no-repeat bg-[url('/assets/Background-img.svg')] ">
        <h1 className="text-2xl p-10 text-center">
          Implementing a Zero Trust Network at Healthcare Institute
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="relative bg-[#0092D68F] rounded-lg p-6 sm:p-8 md:p-10 w-full md:max-w-2xl">
            <h3 className="bg-[#575757F0] rounded-full text-white text-center py-3 text-xl absolute -top-6 left-1/2 -translate-x-1/2 px-6 w-max">
              Case Study
            </h3>
            <p className="mt-8 text-sm sm:text-md text-gray-800">
              The client, a leading healthcare institute with multiple hospitals
              and research centers, was facing increasing cybersecurity threats,
              including ransomware attacks and insider threats. With sensitive
              patient data, research information, and regulatory compliance
              requirements (such as HIPAA), the institute needed a robust
              security framework. ABC System Integration Company was approached
              to implement a Zero Trust Network (ZTN) to enhance security.
            </p>
          </div>

          <div className="ml-10 space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white md:rounded-full rounded-[20px] flex items-center p-5 shadow-md relative"
              >
                {item.icon}
                <div className="max-w-xl mx-auto">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
