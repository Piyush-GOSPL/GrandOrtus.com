import React from "react";
import { FaUsers, FaHandshake, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerSection from "../Resource/BannerSection";
// import Banner from '../Banner/Banner'

const About = () => {
  return (
    <>
      {/* <section
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/assets/aboutBanner.svg')] "
        id="about"
      >
      \<div className="absolute inset-0 bg-black/50"></div> 

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-wide mb-4">
            Unlocking the Power of Technology for Your Success
          </h1>
          <p className="text-lg md:text-xl lg:text-xl font-light max-w-2xl mx-auto">
            Innovate, Transform, and Succeed with Cutting-Edge Technology.
          </p>
        </div>
      </section> */}

      <BannerSection heading="Unlocking the Power of Technology for Your Success" subheading=" Innovate, Transform, and Succeed with Cutting-Edge Technology."  bgImage="/assets/aboutBanner.svg"/>

    

      <div
        className="flex flex-col lg:flex-row items-center justify-around gap-10 mx-auto lg:p-20 md:p-10 my-10 bg-no-repeat bg-[length:150px] bg-right-top"
        style={{
          backgroundImage:
            "url('/assets/dot-bg.svg'), url('/assets/dot-bg.svg')",
          backgroundPosition: "top right, bottom left",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <Link to="/Clients">
          <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col justy items-center shadow hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaUsers className="text-2xl mb-2" />

            <p className="text-lg font-semibold">Clients</p>
          </div>
        </Link>

        <Link to="/Partners">
          <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col justy items-center shadow hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaHandshake className="text-2xl mb-2" />

            <p className="text-lg font-semibold">Partners</p>
          </div>
        </Link>

        <Link to="/Contact">
          <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col justy items-center shadow hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaPhone className="text-2xl mb-2" />

            <p className="text-lg font-semibold">Contact US</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto px-6 lg:px-20 py-10">
        {/* Image Section */}
        <div className="w-full   flex justify-center">
          <img
            src="/assets/about-img.svg"
            alt="About Us"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full max-w-4xl mx-auto bg-gray-100 shadow-lg p-6 md:p-10 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0090d2] mb-4">
            About Us
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed ">
            At Grand Ortus Solutions Pty Ltd, we’re not just a system
            integrator; we are the epitome of technological excellence. With a
            passion for innovation, a knack for understanding complex systems,
            and an unmatched commitment to customer satisfaction, we have
            established ourselves as leaders in the realm of system integration.
            Grand Ortus Solutions Pvt. Limited, headquartered in Gurugram within
            the National Capital Region of India, was established in December
            2019. The company expanded its global presence by establishing Grand
            Ortus Solutions Pty. Limited in Australia in February 2024. Both
            branches have experienced rapid growth, emerging as prominent system
            integrators in the industry.
          </p>
        </div>
      </div>

      {/* What Drives Us */}

      <div className="mx-auto flex justify-center items-center flex-col p-6 bg-[url('/assets/drive.svg')]   ">
        <h1 className="text-2xl text-[#575757] font-semibold">
          What Drives Us
        </h1>
        <div className="p-6  mt-4 max-w-3xl w-full">
          <h2 className="text-xl text-[#0090d2] my-3">Spirit of GrandOrtus</h2>
          <p className="text-lg text-gray-700 mt-3 leading-relaxed">
          
            These values are our bedrock. They define and make us. Our character
            and destinies are energized by our values. It thrives on
            transforming ideas into reality, ensuring seamless digital
            experiences, and empowering businesses with cutting-edge solutions.
          </p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <span
                className="w-4 h-4 rounded-full mr-3 shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
                }}
              ></span>
              Works closely with vendors, engineers, IT teams, and stakeholders.
            </li>
            <li className="flex items-center">
              <span
                className="w-4 h-4 rounded-full mr-3 shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
                }}
              ></span>
              Understanding client needs and delivering tailored, high-quality
              IT solutions.
            </li>
            <li className="flex items-center">
              <span
                className="w-4 h-4 rounded-full mr-3 shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
                }}
              ></span>
              Be passionate about client’s success.
            </li>
            <li className="flex items-center">
              <span
                className="w-4 h-4 rounded-full mr-3 shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
                }}
              ></span>
              Staying ahead of emerging trends to offer scalable, future-proof
              solutions.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
