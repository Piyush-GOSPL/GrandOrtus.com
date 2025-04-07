import React from "react";
import { FaExclamationCircle, FaLightbulb, FaFileAlt } from "react-icons/fa";

const CaseStudy = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between text-center bg-[#0090d2]">
        <div className="mb-6 p-10">
          <h1 className="text-3xl font-bold text-white">Case Study</h1>
          <p className="text-lg text-white mt-2">
            We provide professional solutions for your business.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/assets/CaseStudyBanner.svg"
            alt="Illustration of business solutions in a case study"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="p-10 lg:p-8 bg-center bg-no-repeat bg-[url('/assets/Background-img.svg')] ">
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
            <div className="bg-white rounded-full flex items-center p-5 shadow-md relative">
              <FaExclamationCircle className="text-blue-700 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white " />
              <div>
                <h3 className="text-lg font-semibold">The Problem</h3>
                <p className="text-sm text-gray-700">
                  Healthcare sectors are highly susceptible to cyber threats
                  like protection of sensitive data, complex access management,
                  compliance and regulatory requirements, vulnerabilities from
                  IoT and medical devices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center p-5 shadow-md relative">
              <FaLightbulb className="text-yellow-500 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white" />
              <div>
                <h3 className="text-lg font-semibold">The Solution</h3>
                <p className="text-sm text-gray-700">
                  We worked on Zero Trust Network Implementation, which was
                  achieved by Identity and Access Management (IAM), Network
                  Access Control (NAC), and Secure SD-WAN with Gateway-Level
                  Security.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center p-5 shadow-md relative">
              <FaFileAlt className="text-green-600 text-3xl w-[50px] h-[50px] rounded-full border border-gray-300 p-2 mr-4 absolute -left-8 bg-white" />
              <div>
                <h3 className="text-lg font-semibold">The Result</h3>
                <p className="text-sm text-gray-700">
                  Reduced risk of insider threats and external attacks. Limited
                  exposure of sensitive assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
