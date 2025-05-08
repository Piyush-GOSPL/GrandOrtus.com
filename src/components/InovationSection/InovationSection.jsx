import React from 'react'
import InfoCard from '../InfoCard/InfoCard'

const InovationSection = () => {
  const inovationData = [
    {
      imageURL: '/assets/innovative-1.svg',
      heading: 'Innovative ideas',
      subHeading:
        'Innovative ideas are creative solutions that challenge norms, solve problems, and drive meaningful progress.',
    },
    {
      imageURL: '/assets/Expertise-1.svg',
      heading: 'Expertise strategy',
      subHeading:
        'Innovative ideas are creative solutions that challenge norms, solve problems, and drive meaningful progress.',
    },
  ]

  return (
    <section className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 py-20 px-4">
      {inovationData.map((inovation, index) => (
        <InfoCard
          key={index}
          imageURL={inovation.imageURL}
          heading={inovation.heading}
          subHeading={inovation.subHeading}
          cssClasses="w-full sm:w-[45%] md:w-[40%] flex-col flex items-center"
          headingCssClasses="text-2xl sm:text-3xl font-semibold text-center"
          subHeadingCssClasses="text-sm sm:text-base text-center"
        />
      ))}
    </section>
  )
}

export default InovationSection
