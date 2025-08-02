import React, { useEffect } from "react";
import { FaUsers, FaHandshake, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSection from "../Resource/BannerSection";

const highlights = [
  {
    title: "Shaping the future, Today",
    content:
      "Our headquarters strategically located in NSW, we have a firm grasp of the dynamic IT ecosystem of the region. But our influence doesn’t stop at the city’s borders. With offices spread across India and a growing presence abroad.",
  },
  {
    title: "Our Strength: The Team",
    content:
      "Our most significant asset is our dedicated team of experts. Their in-depth knowledge, hands-on experience, and relentless pursuit of perfection empower us to integrate and deploy even the most intricate systems with finesse.",
  },
  {
    title: "Expanding Horizons",
    content:
      "As the world becomes increasingly interconnected, our mission remains clear to provide state-of-the-art system integration solutions that empower businesses to thrive in the digital age. With our recent expansion plans taking shape overseas.",
  },
  {
    title: "Our Promise.",
    content:
      "At Grand Ortus, we believe in forming long-lasting relationships with our clients. Our commitment doesn’t end after a successful deployment; we continue to offer support.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <BannerSection
        heading="Unlocking the Power of Technology for Your Success"
        subheading="Innovate, Transform, and Succeed with Cutting-Edge Technology."
        bgImage="/assets/about_us.png"
        className="text-left items-start"
      />

      {/* Clients / Partners / Contact */}
      <div
      data-aos="fade-up"
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10 bg-no-repeat bg-[length:150px] bg-right-top"
        style={{
          backgroundImage:
            "url('/assets/dot-bg.svg'), url('/assets/dot-bg.svg')",
          backgroundPosition: "top right, bottom left",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <Link to="/Clients">
          <div
            className="bg-[#0090d2] text-white p-6 w-[250px] rounded-[40px] shadow-lg 
               flex flex-col items-center text-center border-2 border-black 
               hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <FaUsers className="text-2xl mb-2" />
            <p className="text-lg font-semibold">Clients</p>
          </div>
        </Link>

        <Link to="/Partners">
          <div className="border-2 border-black bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaHandshake className="text-2xl mb-2" />
            <p className="text-lg font-semibold">Partners</p>
          </div>
        </Link>

        <Link to="/Contact">
          <div className="border-2 border-black bg-[#0090d2] p-6 rounded-[40px] shadow-lg w-[250px] text-center text-white flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaPhoneAlt className="text-2xl mb-2" />
            <p className="text-lg font-semibold">Contact Us</p>
          </div>
        </Link>
      </div>

      {/* About Text Section */}
      <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center mx-auto px-6 lg:px-20 py-10">
        <div className="w-full flex justify-center mb-6 lg:mb-0">
          <img
            src="/assets/about-img.svg"
            alt="About Us"
            className="max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-full max-w-4xl bg-gray-100 shadow-lg p-6 md:p-10 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0090d2] mb-4">
            About Us
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
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

      {/* Highlights Section */}
      <section className="w-full px-4 py-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#004E6B] mb-10">
          Our Pillars of Success
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="border p-6 rounded-md shadow-md"
              data-aos="fade-up"
            >
              <div className="bg-[#004E6B] text-white font-bold text-center p-4 rounded-t-md relative">
                <span className="block">{item.title}</span>
                {index !== highlights.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-[#004E6B] hidden md:block"></div>
                )}
                {index !== 0 && (
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-[#004E6B] hidden md:block"></div>
                )}
              </div>
              <div className="mt-4 text-gray-700 text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Drives Us Section */}
      <div data-aos="fade-up" className="mx-auto flex flex-col md:flex-row justify-between items-center p-6 bg-[url('/assets/drive.svg')] bg-cover bg-no-repeat">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-[#575757] font-semibold">
            What Drives Us
          </h1>
          <div className="mt-4 max-w-3xl w-full">
            <h2 className="text-xl text-[#0090d2] my-3">
              Spirit of GrandOrtus
            </h2>
            <p className="text-lg text-gray-700 mt-3 leading-relaxed">
              These values are our bedrock. They define and make us. Our
              character and destinies are energized by our values. It thrives on
              transforming ideas into reality, ensuring seamless digital
              experiences, and empowering businesses with cutting-edge
              solutions.
            </p>

            <ul className="mt-4 space-y-3 text-base text-gray-700">
              {[
                "Works closely with vendors, engineers, IT teams, and stakeholders.",
                "Understanding client needs and delivering tailored, high-quality IT solutions.",
                "Be passionate about client’s success.",
                "Staying ahead of emerging trends to offer scalable, future-proof solutions.",
              ].map((item, index) => (
                <li className="flex items-start gap-3" key={index}>
                  <span
                    className="w-3 h-3 rounded-full mt-2"
                    style={{
                      background:
                        "linear-gradient(180deg, #0092D6 52.6%, #575757 63.6%)",
                    }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img
            src="/assets/worldmap.png"
            alt="Teamwork"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default About;
