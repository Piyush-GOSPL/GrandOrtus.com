import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PartnersClients = () => {
  const option = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    dotClass: false,
    responsive: {
      0: { items: 1 },
      320: { items: 2 },
      425: { items: 2 },
      768: { items: 2 },
      1000: { items: 5 },
    },
  };

  const partnersImages = Array.from(
    { length: 32 },
    (_, i) => `assets/partners/Picture${i + 14}.png`
  );
  const clientsImages = Array.from(
    { length: 18 },
    (_, i) => `assets/clients/Picture${i + 46}.png`
  );

  return (
    <section className="text-center py-12 px-5">
      <h1 className="text-4xl font-semibold text-gray-800 mb-2 ">
        Our Trusted Partners
      </h1>
      <p className="text-xl text-[#0090d2] font-medium ">
        "Building success together through trust, collaboration, and shared
        goals."
      </p>
      <div className="max-w-6xl mx-auto my-10">
        <OwlCarousel className="owl-theme" {...option}>
          {partnersImages.map((src, index) => (
            <div key={index} className="flex items-center justify-center ">
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>

      <h1 className="text-4xl font-semibold text-gray-800 mb-2">
        Our Happy Clients
      </h1>
      <p className="text-xl text-[#0090d2] font-medium">
        "Your success is our greatest reward!"
      </p>

      <div className="max-w-6xl mx-auto my-10">
        <OwlCarousel className="owl-theme" {...option}>
          {clientsImages.map((src, index) => (
            <div className="flex items-center justify-center my-2">
              <img
                src={src}
                alt={`client ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default PartnersClients;
