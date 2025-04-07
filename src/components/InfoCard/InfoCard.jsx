import React from 'react'

const InfoCard = ({imageURL='', heading='', subHeading='', cssClasses='', headingCssClasses = '', subHeadingCssClasses}) => {
    console.log("image", imageURL)
    console.log("heaing", heading)
    console.log("subHeading", subHeading)
  return (
    <section className={`flex ${cssClasses}`}>
        <img src={imageURL} alt={heading} className='w-[150px]' />
        <div className='flex flex-col gap-[19px]'>
            <h1 className={headingCssClasses}>{heading}</h1>
            <p className={subHeadingCssClasses}>{subHeading}</p>
        </div>
    </section>
  )
}

export default InfoCard