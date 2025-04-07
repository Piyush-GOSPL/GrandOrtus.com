import React from 'react'
import InfoCard from '../InfoCard/InfoCard'

const InovationSection = () => {

    const inovationData = [
        {
            imageURL:'/assets/innovative-1.svg',
            heading: 'Innovative ideas',
            subHeading: 'Innovative ideas are creative solutions that challenge norms, solve problems, and drive meaningful progress.'
        },
        {
            imageURL:'/assets/Expertise-1.svg',
            heading: 'Expertise strategy',
            subHeading: 'Innovative ideas are creative solutions that challenge norms, solve problems, and drive meaningful progress.'
        }
        
    ]

  return (
    <section className='w-full flex sm:flex-row flex-col justify-center py-20'>
        {
            inovationData.map((inovation, index)=> {
                return (
                    <InfoCard key={index} imageURL={inovation.imageURL} heading={inovation.heading} subHeading={inovation.subHeading} cssClasses="w-[40%] flex items-center" headingCssClasses="text-3xl font-semibold" subHeadingCssClasses="" />
                )
            })
        }
     
    </section>
  )
}

export default InovationSection