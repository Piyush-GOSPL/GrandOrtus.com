import React from 'react';
import HeroSection from '../HeroSection/HeroSection';

const RealMoneyGaming = () => {
  const industryContent = [
    {
      title: 'Game Development',
      items: [
        {
          heading: 'Powerful Development Tools',
          detail:
            'IT provides advanced game engines and development tools that allow developers to create immersive and engaging gaming experiences.',
        },
        {
          heading: 'Live Operations',
          detail:
            'IT enables real-time updates, bug fixes, and content delivery, ensuring players have a smooth and uninterrupted experience.',
        },
        {
          heading: 'Personalization',
          detail:
            'AI and machine learning power dynamic in-game experiences, tailoring content and challenges to individual players.',
        },
      ],
    },
    {
      title: 'Server Management & Security',
      items: [
        {
          heading: 'Scalability',
          detail:
            'IT infrastructure scales seamlessly to accommodate millions of players simultaneously, ensuring smooth gameplay and uptime.',
        },
        {
          heading: 'Security & Fraud Prevention',
          detail:
            'Robust security measures protect player data and financial transactions from cyberattacks and fraud.',
        },
        {
          heading: 'Fairness & Randomness',
          detail:
            'IT ensures fair gameplay through random number generation algorithms and sophisticated monitoring systems.',
        },
      ],
    },
    {
      title: 'Player Acquisition & Engagement',
      items: [
        {
          heading: 'Marketing & Analytics',
          detail:
            'IT drives targeted marketing campaigns and analyzes player data to acquire and retain players.',
        },
        {
          heading: 'Live Events & Tournaments',
          detail:
            'IT facilitates online tournaments and events, fostering player communities and excitement.',
        },
        {
          heading: 'Payment Gateways & Customer Support',
          detail:
            'IT provides secure payment processing and efficient customer support channels.',
        },
      ],
    },
  ];

  const conclusion = {
    heading:
      'Beyond these core areas, IT also empowers the industry in other ways:',
    list: [
      'Virtual Reality & Augmented Reality: IT paves the way for immersive gaming experiences through VR and AR technology.',
      'Blockchain & Cryptocurrencies: IT enables secure and transparent transactions within the gaming ecosystem.',
      'Mobile Gaming Boom: IT drives the growth of mobile gaming with optimized apps and seamless cross-platform play.',
    ],
    paragraphs: [
      'In conclusion, information technology is not just vital to the real money gaming industry: it\'s essential. Without IT, the industry wouldn’t exist in its current form. IT provides the infrastructure, tools, and security that enable developers to create compelling games, operators to attract and retain players, and players to enjoy a safe and fair gaming experience.',
      'As an IT company, we are proud to be part of this dynamic industry and contribute to its continued growth and innovation.',
      'Do you have any specific questions about how IT is used in the real money gaming industry? I’d be happy to share more.',
    ],
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <HeroSection heading='Real Money Gaming Industry' subHeading=' Streamline operations and enhance efficiency with modern IT solutions.' />

      {/* Info Section */}
      <div className="w-full py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            <div className="text-[#575757] p-6">
              <h3 className="text-2xl font-semibold">
                Information Technology as the Backbone of Real Money Gaming:
              </h3>
              <p className="mt-4">
                Information technology (IT) serves as the backbone of real money gaming, enabling secure, efficient, and immersive gaming experiences. IT powers robust platforms for online casinos, poker, and sports betting, ensuring seamless gameplay and reliable transactions. Advanced security protocols, including encryption and fraud detection systems, protect user data and funds. AI and machine learning enhance personalization, offering tailored recommendations and real-time support. Scalable cloud infrastructure ensures smooth operations during peak usage. Additionally, blockchain technology promotes transparency and fairness. IT's integration fosters trust, innovation, and growth in the rapidly expanding real money gaming industry.
              </p>
            </div>
            <img
              src="/assets/RealGamingIndustry.png"
              alt="Real Money Gaming"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="bg-gray-50 text-gray-800 font-sans px-4 py-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {industryContent.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-[#0092D6] mb-4">
                {section.title}:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#575757]">
                {section.items.map((item, subIdx) => (
                  <li key={subIdx}>
                    <strong>{item.heading}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#0092D6] mb-4">
              {conclusion.heading}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#575757]">
              {conclusion.list.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {conclusion.paragraphs.map((para, i) => (
              <p key={i} className="mt-4 text-[#575757]">
                {para}
              </p>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default RealMoneyGaming;
