import React from "react";

const ITES = () => {
  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="w-full h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/assets/ITESBanner.svg')] flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl font-bold">IT & ITES Industry</h1>
        <p className="text-lg mt-2">
          Accelerate your business with innovative IT solutions and IT-enabled
          services
        </p>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Overview of IT & ITES Industry</h2>
        <p className="text-gray-700 mt-4">
          The Information Technology (IT) and Information Technology Enabled
          Services (ITES) industry plays a crucial role in the global economy,
          driving digital transformation, automation, and efficiency across
          various sectors. The industry includes a broad range of services such
          as software development, cloud computing, cybersecurity, data
          analytics, and business process outsourcing (BPO).
        </p>
      </div>

      {/* Information Technology Section */}
      <div className="w-full bg-[#61C2F0] ">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#575757]">
              Information Technology: The Engine Driving the IT Industry:
            </h3>
            <p className="text-white mt-4">
              IT enables the creation of innovative software solutions that
              enhance business processes and user experiences. It also provides
              essential tools for managing big data and extracting valuable
              insights. It ensures secure and robust networking, facilitating
              seamless communication and collaboration. This system help
              businesses to manage their resources efficiently, from inventory
              tracking to project management. Platforms like CRM systems allow
              businesses to personalize customer interactions, improving
              satisfaction and loyalty. Overall, IT empowers businesses to
              innovate, operate efficiently, and stay competitive in a rapidly
              evolving digital landscape.
            </p>
          </div>
          <img src="/assets/ITESBody.svg" alt="IT Engine" className="w-full " />
        </div>
      </div>

      {/* How IT Fuels Innovation */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">How IT Fuels Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Innovation",
              icon: "/assets/innovation.png",
              description:
                "IT is the playground of invention. From cloud computing and artificial intelligence to cybersecurity and automation, every new development in technology is a tool in our hands. We leverage these advancements to create solutions that are faster, smarter, and more efficient, constantly pushing the boundaries of what’s possible.",
            },
            {
              title: "Efficiency",
              icon: "/assets/efficiency.png",
              description:
                "IT streamlines our internal processes like a well-oiled machine. From project management and communication to data analysis and resource allocation, technology automates tasks, eliminates redundancies, and frees up our human capital to focus on what they do best: innovate and create.",
            },
            {
              title: "Collaboration",
              icon: "/assets/collaboration.png",
              description:
                "The world is our workplace, and IT makes it accessible. We seamlessly connect with colleagues, partners, and clients across continents, fostering collaboration and driving results. Video conferencing, cloud-based project management platforms",
            },
            {
              title: "Security",
              icon: "/assets/security.png",
              description:
                "In a world increasingly reliant on data, security is paramount. IT provides the armor we need to protect our systems and the sensitive information we handle. Encryption, firewalls, and intrusion detection systems are just some of the weapons in our arsenal, ensuring the integrity of our data and the trust of our clients.",
            },
            {
              title: "Customer Service",
              icon: "/assets/customer-service.png",
              description:
                "IT allows us to exceed customer expectations. Self-service portals, AI-powered chatbots, and personalized experiences through data analysis are just a few ways we leverage technology to provide exceptional service and build lasting relationships with our clients.",
            },
            {
              title: "Scalability",
              icon: "/assets/scalability.png",
              description:
                "IT empowers businesses to scale operations efficiently. With cloud computing, flexible infrastructure, and advanced analytics, companies can expand their services, enter new markets, and adapt to changing demands without major disruptions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Beyond the Industry Section */}
      <div className="w-full bg-[#0A76A8] text-white py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Beyond the Industry</h2>
          <p className="mt-4 text-lg">
            The benefits of IT extend far beyond the walls of our companies. We
            develop solutions that empower businesses of all sizes, improve
            healthcare outcomes, revolutionize education, and connect people
            like never before. This ripple effect of innovation is a testament
            to the transformative power of IT. In conclusion, information
            technology is not just a tool for the IT industry; it’s the very
            foundation on which it is built. It drives innovation, empowers
            efficiency, fuels collaboration, safeguards security, and delights
            customers. As the world continues to evolve at an ever-increasing
            pace, IT will remain the driving force behind progress, not just for
            our industry, but for the entire world.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITES;
