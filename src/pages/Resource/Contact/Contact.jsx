import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import BannerSection from "../BannerSection";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaToken(value);
      setCaptchaError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setCaptchaError("Please complete the CAPTCHA.");
      return;
    }

    // Proceed with form submission logic
    console.log("Form submitted");
  };

  return (
    <section className="w-full">
      {/* Header Banner */}
      <BannerSection heading="Contact Us" bgImage="/assets/CONTACT2.png"/>

      {/* Intro */}
      <div className="lg:flex justify-center items-center py-10 px-4">
        <img src="/assets/colan.svg" alt="" />
        <p className="md:w-1/2 text-base mt-4 md:mt-0 ml-0 md:ml-10">
          "Get in touch with us today! Whether you have questions or need
          support, the Grand Ortus team is ready to assist you. Reach out via
          email or phone number or complete the form below, and we'll respond
          promptly."
        </p>
      </div>

      {/* Office Sections */}
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 px-4 md:px-10 py-8 md:py-16 space-y-10 md:space-y-0 md:space-x-10">
  {/* India Office */}
  <div className="flex-1 flex flex-col">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">India Office</h2>
    <div className="flex flex-col space-y-6">
      <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">
          Unit No. 508 & 509, TOWER-B, Unitech Business Zone, Nirvana Rd, The Close South,
          Sector 50, Gurugram, Haryana 122018
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <FaPhoneAlt className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">+91 124 4210575, +91 99580 14222</p>
      </div>
      <div className="flex items-start space-x-4">
        <FaEnvelope className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">info@grandortus.com</p>
      </div>
    </div>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Unitech+Business+Zone,+Sector+50,+Gurugram"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 md:mt-8 px-6 py-3 bg-[#0090d2] text-white text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 inline-flex items-center w-fit"
    >
      View on Google Maps
    </a>
  </div>

  {/* Australia Office */}
  <div className="flex-1 flex flex-col">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Australia Office</h2>
    <div className="flex flex-col space-y-6">
      <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">
        23 Rosetta Street, Schofields 2762, NSW, Australia
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <FaPhoneAlt className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">+61 473 123 937, +91 124 4210575</p>
      </div>
      <div className="flex items-start space-x-4">
        <FaEnvelope className="text-2xl text-[#0090d2]" />
        <p className="text-base md:text-lg">info@grandortus.com</p>
      </div>
    </div>
    <a
      href="https://maps.app.goo.gl/7vKVqp3uZhg1rna58"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 md:mt-8 px-6 py-3 bg-[#0090d2] text-white text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 inline-flex items-center w-fit"
    >
      View on Google Maps
    </a>
  </div>
</div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-5 my-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/getintouch.svg"
            alt="Get in touch"
            className="max-w-full h-auto"
          />
        </div>

        <img
          src="/assets/ContactLine.png"
          alt=""
          className="md:block hidden w-[40px]"
        />

        <div className="md:w-1/2 w-full">
          <h4 className="text-2xl font-semibold text-gray-700">Contact us</h4>
          <p className="text-xl font-semibold text-gray-700 mb-5">
            Let’s Start a Conversation
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                name="number"
                placeholder="Number"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <select
              name="service"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="development">Development</option>
              <option value="implementation">Implementation Services</option>
              <option value="infra_consulting">
                Infrastructure Consulting
              </option>
              <option value="datacenter">
                Datacenter Infra Design & Deployment
              </option>
              <option value="networking">Networking and Security</option>
              <option value="mobility_cloud">Mobility and Cloud</option>
              <option value="intranet">Intranet</option>
              <option value="fms_amc">FMS and AMC Support</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6Lc_TTIrAAAAACuJKo7gvfuxfzN-qtxXwock01dt"
                onChange={handleCaptchaChange}
                onErrored={() =>
                  setCaptchaError(
                    "CAPTCHA failed to load. This may be due to an invalid domain for the site key. Please inform the site owner."
                  )
                }
              />
            </div>

            {captchaError && (
              <p className="text-red-600 text-center">{captchaError}</p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-1/3 bg-blue-500 border border-blue-500 text-white p-3 rounded-lg text-center hover:bg-white hover:text-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
