import React from 'react'

const Contactus = () => {
  return (
    <section className="px-20">
         <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-5 my-10">
      <div className="md:w-1/2 flex justify-center ">
        <img
          src="/assets/getintouch.svg"
          alt="Get in touch"
          className="max-w-full h-auto"
        />
      </div>
      <img src="/assets/ContactLine.png" alt=""  className="line w-[40px]"/>
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
  )
}

export default Contactus