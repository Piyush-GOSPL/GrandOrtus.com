import React from "react";

const OnDemandEconomy = () => {
  const sections = [
    {
      title: "Platform Development",
      points: [
        "Mobile App Development: Creating user-friendly mobile applications enables seamless booking, real-time tracking, and secure payments, essential for on-demand services.",
        "Microservices Architecture: Implementing a scalable microservices framework allows for rapid development and flexibility, accommodating growth and new features efficiently.",
        "API Integration: Seamless integration with third-party services, such as payment gateways and logistics providers, ensures smooth operations and an enhanced user experience.",
      ],
    },
    {
      title: "Operational Optimization",
      points: [
        "Dynamic Matching Algorithms: AI-driven algorithms match user requests with available providers based on factors like location and availability, maximizing efficiency and minimizing wait times.",
        "Surge Pricing and Optimization: Dynamic pricing models adjust based on demand and supply, optimizing revenue and resource allocation during peak periods.",
        "Route Optimization and Tracking: GPS tracking and routing algorithms optimize delivery routes, providing real-time updates to users and providers, enhancing transparency and reducing operational costs.",
      ],
    },
    {
      title: "User Experience Enhancement",
      points: [
        "Personalized Recommendations: Data analytics help understand user preferences, enabling the recommendation of relevant services or products, thereby increasing satisfaction and engagement.",
        "Push Notifications and In-App Communication: Timely notifications about order status and promotions keep users informed, building trust and encouraging repeat business.",
        "Gamification and Incentives: Implementing loyalty programs and reward systems engages users, fostering brand loyalty and community building.",
      ],
    },
    {
      title: "Data-Driven Insights",
      points: [
        "Business Intelligence Dashboards: Interactive dashboards visualize key performance indicators in real-time, empowering stakeholders to monitor trends and make informed decisions.",
        "Predictive Analytics: AI tools forecast demand and optimize pricing strategies, providing a competitive edge in the market.",
        "Sentiment Analysis: Analyzing user feedback helps understand sentiment, guiding platform refinements to deliver better experiences and build loyalty.",
      ],
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/assets/OnDemand.svg')] flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 sm:mt-14">Empowering the On-Demand Economy</h1>
        <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 max-w-3xl">
          The on-demand economy thrives on speed, convenience, and instant access, with technology serving as its backbone.
        </p>
      </div>

      {/* Info Section */}
      <div className=" py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-7xl mx-auto">
          <img
            src="/assets/OnDemandImg.png"
            alt="On Demand Economy"
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-[#575757] mb-4">
              How IT Transforms the OnDemand Economy:
            </h2>
            <p className="text-[#575757] text-base leading-relaxed">
              Empowering the on-demand economy, information technology (IT) plays a crucial role in enabling businesses to offer instant services and products to consumers. IT-driven platforms, such as mobile apps and websites, connect customers with providers in real-time for services like ride-sharing, food delivery, home maintenance, cloud computing, and data analytics-driven operations, enhancing scalability and efficiency. Payment gateways and digital wallets ensure secure transactions, while AI and machine learning personalize user experiences, optimize routes, and predict preferences. IT facilitates seamless back-end processes and scalable business models, fostering growth in the on-demand economy.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-[#66BCE4] mb-4">{section.title}</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base leading-relaxed">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnDemandEconomy;
