import React from "react";

const features = [
  {
    id: 1,
    title: "Quality",
    description:
      "Consistently delivering superior products, services, and experiences that meet or exceed customer expectations.",
    icon: "/assets/quality.svg",
  },
  {
    id: 2,
    title: "Customer support",
    description:
      "Continuously evolving with cutting-edge technology to provide the best IT solutions for your business.",
    icon: "/assets/support.svg",
  },
  {
    id: 3,
    title: "Secure system",
    description:
      "Dedicated 24/7 support to ensure seamless operations and peace of mind for our clients.",
    icon: "/assets/secure.svg",
  },
];

const ChooseUs = () => {
  return (
    <section className="w-full px-10 lg:px-20 mx-auto flex flex-col lg:flex-row items-center gap-10 py-10">
      {/* Left Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h1>
        <p className="text-gray-600 mb-6">
          We’re the IT architects of tomorrow, building today. Our innovative solutions and dedicated support ensure
          your success in the digital landscape. We deliver innovative IT products and services tailored to your needs.
        </p>

        {/* Features List */}
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4 bg-gray-200  rounded-2xl p-4 mb-4">
            <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
            <div>
              <h5 className="text-lg font-semibold text-gray-800">{feature.title}</h5>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full">
        <img src="/assets/choose-rtimg.svg" alt="Why Choose Us" className="w-full" />
      </div>
    </section>
  );
};

export default ChooseUs;
