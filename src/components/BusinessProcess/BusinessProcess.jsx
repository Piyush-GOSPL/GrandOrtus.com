import React from 'react';

import "./BusinessProcess.css";

export default function BusinessProcess() {
  return (
    <section className="w-full p-5">
      <h1 className="text-2xl font-bold text-center mb-6">
        Innovation Solution, Dedicated Services - Transforming Your Business
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
        {/* Image Section */}
        <div className="background-image w-full md:w-1/2 flex flex-col items-center text-center relative p-4">
          <img
            src="./assets/Business.svg"
            alt="Business Process"
            className="max-w-full h-auto"
          />
          <div className="like-sec flex items-center gap-2 text-white">
            <img src="./assets/like.svg" alt="Like Icon" className="w-[70px]" />
            <span>We provide quality services to customers.</span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-xl font-semibold">Understand the Business Process</h2>

          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <span className="shrink-0 two-lines text-white bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold">
              1
            </span>
            <div>
              <h4 className="text-lg font-semibold">Research and Strategy</h4>
              <p className="text-gray-600">
                We spend enough time to uncover business goals and clients' needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <span className="shrink-0 two-lines text-white bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold">
              2
            </span>
            <div>
              <h4 className="text-lg font-semibold">Development and Scale</h4>
              <p className="text-gray-600">
                We utilize our best talents to design digital products and services.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <span className="shrink-0 text-white bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold">
              3
            </span>
            <div>
              <h4 className="text-lg font-semibold">Testing and Evolution</h4>
              <p className="text-gray-600">
                Before the launch, our team thoroughly tests the complete website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
