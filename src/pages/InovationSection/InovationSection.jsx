import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import InfoCard from '../InfoCard/InfoCard'

const InnovationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Animates only once
    });
    AOS.refresh(); // Ensures animations are triggered after component mounts
  }, []);

  const innovationData = [
    {
      imageURL: '/assets/inno.png',
      heading: 'Innovative Ideas',
      subHeading:
        'Innovative ideas are creative solutions that challenge norms, solve problems, and drive meaningful progress.',
    },
    {
      imageURL: '/assets/Expertise-1.svg',
      heading: 'Expertise Strategy',
      subHeading:
        'Expertise strategy leverages specialized knowledge and skills to create focused plans that achieve goals effectively and efficiently.',
    },
  ];

  return (
    <section className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 py-20 px-4">
      {innovationData.map((innovation, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="w-full sm:w-[45%] md:w-[40%] flex justify-center"
        >
          <InfoCard
            imageURL={innovation.imageURL}
            heading={innovation.heading}
            subHeading={innovation.subHeading}
            cssClasses="flex-col flex items-center"
            headingCssClasses="text-2xl sm:text-3xl font-semibold text-center"
            subHeadingCssClasses="text-sm sm:text-base text-center"
          />
        </div>
      ))}
    </section>
  );
};

export default InnovationSection;
