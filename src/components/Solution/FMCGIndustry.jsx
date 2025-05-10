import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const FMCGIndustry = () => {
  return (
    <section className="w-full">
      {/* Header Section */}
     
      <HeroSection heading="FMCG Industry" subHeading=" Accelerate your business with innovative IT solutions and IT-enabled services." />

      {/* Technology Benefits Section */}
      <div className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/assets/FMCG.png"
            alt="FMCG Industry"
            className="w-full rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#575757]">
              How Technology Benefits the FMCG Industry
            </h3>
            <p className="mt-4">
              Technology significantly benefits the FMCG industry by streamlining operations, enhancing efficiency, and improving customer engagement. Automation and robotics optimize manufacturing and supply chain processes, reducing costs and increasing productivity. Advanced data analytics provide insights into consumer behavior, enabling personalized marketing and demand forecasting. E-commerce platforms and digital payment solutions expand market reach and offer seamless shopping experiences. Additionally, technologies like IoT and AI improve inventory management and product tracking. These innovations drive agility, foster innovation, and ensure competitiveness in the fast-paced FMCG landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Transformation through IT */}
      <div className="w-full py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Here's how IT can transform your FMCG operations:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8 text-gray-800">
            {[
              {
                title: "1. Streamlined Operations and Enhanced Efficiency",
                description: [
                  "Enterprise Resource Planning (ERP) systems integrate and automate critical business processes, such as inventory management, production planning, logistics, and finance. AI-driven supply chain management solutions optimize resource allocation and minimize risks.",
                  "Supply chain management (SCM) solutions: Gain visibility and control over your entire supply chain, from raw material sourcing to last-mile delivery. Optimize routes, reduce waste, and improve product availability."
                ],
              },
              {
                title: "2. Data-Driven Insights and Customer Centricity",
                description: [
                  "Customer Relationship Management (CRM) platforms: Understand your customers better than ever. Track interactions, analyze purchase patterns, and personalize marketing campaigns for higher engagement and loyalty.",
                  "Business intelligence (BI) and analytics tools: Turn data into actionable insights. Analyze sales trends, identify market opportunities, and optimize product offerings to meet evolving consumer preferences."
                ],
              },
              {
                title: "3. Innovation and Enhanced Brand Experience",
                description: [
                  "E-commerce platforms and mobile apps: Reach a wider audience and provide a seamless online shopping experience. Integrate loyalty programs, offer personalized recommendations, and boost customer engagement.",
                  "Artificial Intelligence (AI) and Machine Learning (ML): Leverage AI for predictive maintenance, optimize pricing strategies, and personalize customer experiences. Automate repetitive tasks and free up resources for innovation."
                ],
              },
              {
                title: "4. Sustainability and Resource Optimization",
                description: [
                  "IIoT-enabled solutions: Track energy consumption, optimize production processes, and reduce waste. Monitor environmental impact and build a sustainable brand image.",
                  "Cloud-based solutions: Reduce your carbon footprint and improve operational efficiency with scalable and flexible cloud infrastructure."
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-tl-lg rounded-br-lg shadow text-gray-800">
                <h3 className="text-xl font-semibold text-[#0A76A8]">
                  {feature.title}
                </h3>
                <ul className="list-disc pl-6 mt-2">
                  {feature.description.map((point, idx) => (
                    <li key={idx} className="mt-2">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond the Industry Section */}
      <div className="w-full bg-[#0A76A8] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Beyond these specific benefits, IT offers the FMCG industry a unique opportunity to:
          </h2>
          <ul className="list-disc mt-4 pl-6 text-lg">
            <li>Boost collaboration and communication with real-time data access.</li>
            <li>Enhance consumer engagement through AI-driven marketing and digital experiences.</li>
            <li>Optimize resource allocation for increased productivity and reduced operational costs.</li>
            <li>Develop sustainable business models through efficient logistics and waste reduction.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FMCGIndustry;
