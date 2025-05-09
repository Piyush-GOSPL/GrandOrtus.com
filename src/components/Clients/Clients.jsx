import React from "react";
import "../Clients/Clients.css";

const Clients = () => {
  const clientsImages = Array.from(
    { length: 18 },
    (_, i) => `assets/clients/Picture${i + 46}.png`
  );
  return (
    <section className="">
      <div className="Client-bannerimg w-full flex justify-center items-center h-[70dvh] bg-cover bg-center bg-no-repeat bg-[url(/assets/Clientbanner.svg)]">
        <div className="text-center max-w-2xl">
          <h1 className="text-[#0090d2] text-2xl md:text-4xl font-semibold">
            Clients
          </h1>
          <p className="text-[#0090d2] text-lg md:text-xl mt-2 font-medium">
            "We’re grateful for your trust and thrilled to contribute to your
            success - your happiness is our top priority!"
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-6 py-10  mt-10 ">
        <div className="max-w-3xl text-center">
          <h1 className="text-[#0090d2] text-2xl md:text-3xl font-semibold capitalize">
            our Clients
          </h1>
          <p className="text-gray-700 text-base md:text-lg mt-4">
            "We truly value the trust you place in us, and our goal is to
            deliver top-notch solutions tailored to your specific needs. Our
            team is dedicated to providing you with exceptional service and
            support every step of the way. We believe in building long-lasting
            relationships based on mutual respect and a shared vision for
            success.
          </p>
          <br />
          <div className="text-gray-700 text-base md:text-lg mt-4">
            <ul className="list-disc pl-5 ">
              <li>
                Your satisfaction is our top priority, and we are here to
                deliver exceptional service every step of the way.
              </li>
              <li>
                We understand your needs and are committed to providing tailored
                solutions that meet your expectations.
              </li>
              <li>
                Our team is dedicated to ensuring that your experience with us
                is seamless and rewarding.
              </li>
              <li>
                We value your trust and aim to exceed your expectations with
                every project we take on.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {clientsImages.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="w-24 md:w-32 lg:w-40 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
