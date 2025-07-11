import React from 'react'

const HeroSection = ({
    imgurl = '/assets/ITESBanner.svg',
    heading = '',
    subHeading = '',
  }) => {
  return (
    <div
  className="w-full min-h-[50vh] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6 py-10 sm:py-16"
  style={{ backgroundImage: `url(${imgurl})` }}
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 sm:mt-14">{heading}</h1>
  <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 max-w-3xl">{subHeading}</p>
</div>

  )
}

export default HeroSection