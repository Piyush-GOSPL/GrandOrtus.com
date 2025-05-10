import React from 'react'

const HeroSection = ({
    imgurl = '/assets/ITESBanner.svg',
    heading = '',
    subHeading = '',
  }) => {
  return (
    <div
    className="w-full h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
    style={{ backgroundImage: `url(${imgurl})` }}>
    <h1 className="text-4xl font-bold">{heading}</h1>
    <p className="text-lg mt-2">{subHeading}</p>
  </div>
  )
}

export default HeroSection