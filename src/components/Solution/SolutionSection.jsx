import React from "react";

const SolutionSection = ({ heading, subheading, backgroundImage }) => {
  return (
    <div
      className="w-full h-[70dvh] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold max-w-3xl">
        {heading}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 max-w-2xl">
        {subheading}
      </p>
    </div>
  );
};

export default SolutionSection;
