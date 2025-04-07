import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex items-end justify-center text-white px-6 py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/assets/BannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of the video */}

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-2xl font-bold mb-2">
          Unlocking the power of technology <br /> for your success
        </h1>
        <p className="text-lg mb-2">
          <span className="">Grand </span> Ortus Solutions Pvt Ltd is a system integrator
        </p>
        <div className="flex justify-center">
          <button className="bg-[#0092D6] text-white font-semibold py-1 px-2 rounded-lg hover:bg-white hover:text-[#0092D6] transition border-2 border-[#0092D6]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
