import React from "react";

const BannerSection = ({
  heading = "",
  subheading = " ",
  bgImage = " ",
}) => {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-start text-left px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-4xl ml-4 sm:ml-10">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">
          {heading}
        </h1>
        <p className="text-white text-base sm:text-xl lg:text-2xl mt-4">
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default BannerSection;


