import React from "react";
import { FaUsers, FaHandshake, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerSection from "../Resource/BannerSection";
// import Banner from '../Banner/Banner'

const About = () => {
  return (
    <>
    
      <BannerSection heading="Unlocking the Power of Technology for Your Success" subheading=" Innovate, Transform, and Succeed with Cutting-Edge Technology."  bgImage="/assets/about_us.png" className="text-left items-start"/>

    <div
  className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10 bg-no-repeat bg-[length:150px] bg-right-top"
  style={{
    backgroundImage: "url('/assets/dot-bg.svg'), url('/assets/dot-bg.svg')",
    backgroundPosition: "top right, bottom left",
    backgroundRepeat: "no-repeat, no-repeat",
  }}
>
  <Link to="/Clients">
    <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer">
      <FaUsers className="text-2xl mb-2" />
      <p className="text-lg font-semibold">Clients</p>
    </div>
  </Link>

  <Link to="/Partners">
    <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer">
      <FaHandshake className="text-2xl mb-2" />
      <p className="text-lg font-semibold">Partners</p>
    </div>
  </Link>

  <Link to="/Contact">
    <div className="bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer">
      <FaPhoneAlt className="text-2xl mb-2" />
      <p className="text-lg font-semibold">Contact Us</p>
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

    <div className="mx-auto flex flex-col md:flex-row justify-between items-center p-6 bg-[url('/assets/drive.svg')] bg-cover bg-no-repeat">
  {/* Left Side: Text Content */}
  <div className="w-full md:w-1/2 p-4">
    <h1 className="text-2xl text-[#575757] font-semibold">
      What Drives Us
    </h1>
    <div className="mt-4 max-w-3xl w-full">
      <h2 className="text-xl text-[#0090d2] my-3">Spirit of GrandOrtus</h2>
      <p className="text-lg text-gray-700 mt-3 leading-relaxed">
        These values are our bedrock. They define and make us. Our character
        and destinies are energized by our values. It thrives on transforming
        ideas into reality, ensuring seamless digital experiences, and
        empowering businesses with cutting-edge solutions.
      </p>

      <ul className="mt-4 space-y-3">
        {[
          "Works closely with vendors, engineers, IT teams, and stakeholders.",
          "Understanding client needs and delivering tailored, high-quality IT solutions.",
          "Be passionate about client’s success.",
          "Staying ahead of emerging trends to offer scalable, future-proof solutions.",
        ].map((item, index) => (
          <li className="flex items-center" key={index}>
            <span
              className="w-4 h-4 rounded-full mr-3 shrink-0"
              style={{
                background: "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
              }}
            ></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="w-full md:w-1/2 flex justify-center p-4">
    <img
      src="/assets/worldmap.png" // 🔁 Replace with your actual image path
      alt="Teamwork"
      className="max-w-full h-auto rounded-lg shadow-md"
    />
  </div>
</div>

    </>
  );
};

export default About;
