import React from "react";

const ProductOne = () => {
  const features = [
    {
      title: "Device Administration",
      description:
        "Utilize the RADIUS security protocol to improve access control flows, allowing better security and visibility. Network devices are authenticated and authorized, while logs are collected via NetSight/NMS, with accounting messages logged for tracking.",
      icon: "/assets/device-admin.png",
    },
    {
      title: "Guest and Secure Wireless",
      description:
        "Enables secure network access for visitors, contractors, consultants, and business meetings. Issued via guest portals. Custom page settings for different guest types can be crafted, with role-based access managed through guest accounts.",
      icon: "/assets/guest-wireless.png",
    },
    {
      title: "(BYOD) Bring your Own Devices",
      description:
        "Allows employees and guests to connect their own personal and business devices to the enterprise network via self-configuration portals and various predefined authentications.",
      icon: "/assets/byod.png",
    },
    {
      title: "Asset Availability",
      description:
        "Provides continuous visibility and control over network assets like end-user devices, wireless, wired, and VPN connections.",
      icon: "/assets/asset-availability.png",
    },
    {
      title: "Secure Access",
      description:
        "Utilize various authentication protocols like 802.1X, RADIUS, and MAC to ensure secure network access for devices and endpoints.",
      icon: "/assets/secure-access.png",
    },
    {
      title: "Universal Devices Compatibility",
      description:
        "Supports compatibility across all operating systems and device types, including Windows, MacOS, iOS, Android, printers, scanners, and other headless IoT devices.",
      icon: "/assets/device-compatibility.png",
    },
  ];

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="text-white py-10 px-6 text-center w-full min-h-[70vh] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/assets/ProductOne.svg')] flex flex-col justify-center items-center md:items-end">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-full sm:max-w-[70%] md:max-w-[50%] mx-auto md:mx-0">
          G-Ortus NetGuardian ProX Network Policy Manager Tailored Solutions
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Network Policy Manager
          </h2>
          <p className="text-gray-700">
            G-Ortus NetGuardian ProX Network Policy Manager stands at the
            forefront of innovative network access and security solutions,
            specifically designed to meet the dynamic needs of modern
            enterprises. It delivers next-gen features like real-time tracking,
            security, and operational efficiency, making this ideal for secure
            multi-segment corporate LAN/WiFi environments. G-Ortus NetPM
            software is meticulously designed to cater to specific needs and
            demands, ensuring high IT system efficiency while being lightweight
            and highly scalable.
          </p>
        </div>
        <img
          src="/assets/ProductOneBody.png"
          alt="Network Policy"
          className="w-full rounded-lg"
        />
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Key Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOne;
