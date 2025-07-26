import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import InfoCard from '../InfoCard/InfoCard'

const InovationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    })
  }, [])

  const inovationData = [
    {
      imageURL: '/assets/inno.png',
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
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 400}
          className="w-full sm:w-[45%] md:w-[40%] flex justify-center"
        >
          <InfoCard
            imageURL={inovation.imageURL}
            heading={inovation.heading}
            subHeading={inovation.subHeading}
            cssClasses="flex-col flex items-center"
            headingCssClasses="text-2xl sm:text-3xl font-semibold text-center"
            subHeadingCssClasses="text-sm sm:text-base text-center"
          />
        </div>
      ))}
    </section>
  )
}

export default InovationSection
