import React from "react";

const ProductTwo = () => {
  return ( 

    <section className="w-full">

      {/* Hero Section */}

      <div className="w-full h-[60vh]  bg-fixed bg-cover bg-center bg-[url('/assets/NMSBanner.svg')] flex flex-col justify-center items-start text-white text-center px-6">
        <h1 className="text-4xl font-bold">Network Management System (NMS)</h1>
        <p className="text-lg mt-2">Monitor, Manage and Maintain Networks<br />(Soon to be Launched)</p>
      </div>

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
