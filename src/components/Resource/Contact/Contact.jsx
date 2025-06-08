import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="w-full">
      
      <div
        className="w-full flex justify-start items-center h-[60vh] bg-cover bg-center pl-20"
        style={{ backgroundImage: "url('/assets/Contact.svg')" }}
      >
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="lg:flex justify-center items-center py-10">
        <img src="/assets/colan.svg" alt="" />
        <p className="md:w-1/2 text-base mt-15 ml-10">
          "Get in touch with us today! Whether you have questions or need
          support, the Grand Ortus team is ready to assist you. Reach out via
          [email/contact number] or complete the form below, and we'll respond
          promptly."
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center bg-gray-100 bg-gray-100">
        <div className=" px-10 py-16 flex flex-col ">
          <h2 className="text-3xl font-semibold mb-8">India Office</h2>
          <div className="flex flex-col space-y-6 ">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-[#0090d2]" />
              <p className="text-lg">
              Unit No. 508 & 509, TOWER-B, Unitech Business Zone, Nirvana Rd, The Close South, Sector 50, Gurugram, Haryana 122018
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-[#0090d2]" />
              <p className="text-lg">989864924</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#0090d2]" />
              <p className="text-lg">info@grandortus.com</p>
            </div>
          </div>
          <div className="flex">
            <a
              href="https://www.google.com/maps/search/?api=1&query=D+14%2F30%2C+2nd+Floor%2C+Sector+52%2C+Ardeecity+Gurugram%2C+Haryana+122003"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#0090d2] text-white text-lg font-semibold rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>

        <div className=" px-10 py-16 flex flex-col ">
          <h2 className="text-3xl font-semibold mb-8">Australia  Office</h2>
          <div className="flex flex-col space-y-6 ">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-[#0090d2]" />
              <p className="text-lg">
                D 14/30, 2nd Floor, Sector 52, Ardeecity Gurugram, Haryana -
                122003, India
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-[#0090d2]" />
              <p className="text-lg">989864924</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#0090d2]" />
              <p className="text-lg">info@grandortus.com</p>
            </div>
          </div>
          <div className="flex">
            <a
              href="https://www.google.com/maps/search/?api=1&query=D+14%2F30%2C+2nd+Floor%2C+Sector+52%2C+Ardeecity+Gurugram%2C+Haryana+122003"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#0090d2] text-white text-lg font-semibold rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-5 my-10">
      <div className="md:w-1/2 flex justify-center ">
        <img
          src="/assets/getintouch.svg"
          alt="Get in touch"
          className="max-w-full h-auto"
        />
      </div>
      <img src="/assets/ContactLine.png" alt=""  className="md:block hidden line w-[40px]"/>
      <div className="md:w-1/2 w-full  ">
        <h4 className="text-2xl font-semibold text-gray-700">Contact us</h4>
        <p className="text-xl font-semibold text-gray-700 mb-5">
          Let’s Start a Conversation
        </p>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            id="UserName"
            placeholder="User Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
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
            <option value="infra_consulting">Infrastructure Consulting</option>
            <option value="datacenter">Datacenter Infra Design & Deployment</option>
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
          <button
            className="w-full md:w-1/3 bg-blue-500 border border-blue-500 text-white p-3 rounded-lg text-center hover:bg-white hover:text-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    </section>
  );
};

export default Contact;
