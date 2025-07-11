import React from "react";
import BannerSection from "../Resource/BannerSection";

const ProductTwo = () => {
  return ( 

    <section className="w-full">

      {/* Hero Section */}

      <BannerSection heading="Network Management System (NMS)" subheading="Monitor, Manage and Maintain Networks(Soon to be Launched)" bgImage="/assets/NMS.png" />

      {/* Content Section */}

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">NMS</h2>
          <p className="text-gray-700 mb-4">
            A NMS is a set of hardware and software tools that allow an IT professional to monitor, manage and maintain networks. NMS enables the detection of network performance issues, configuration errors and device status.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Real Time Network Monitoring</li>
            <li>Alerts and Notification for performance issue</li>
            <li>Device Configuration Management</li>
            <li>Traffic Analysis and Reporting</li>
          </ul>
        </div>
        <div>
          <img
            src="/assets/NMSInfoImage.png"
            alt="NMS Diagram"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductTwo;
