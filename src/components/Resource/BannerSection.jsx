import React from "react";

const BannerSection = ({ heading = 'Blogs & Updates', subheading = '"Secure, scalable, and efficient—where networking meets software innovation."', bgImage = '/assets/BlogBanner.svg' }) => {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center flex-col text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">{heading}</h1>
      <p className="text-white text-base sm:text-xl lg:text-2xl mt-4">
        {subheading}
      </p>
    </section>
  );
};

export default BannerSection;
