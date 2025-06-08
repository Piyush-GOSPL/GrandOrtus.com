import React, { useEffect, useState } from "react";
import "./SatisfiedCustomers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SatisfiedCustomers = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // 🔹 Forces OwlCarousel to recalculate
    }, 500);
  }, []);

  const option = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoWidth: false, 
    autoplayTimeout: 4000,
    responsiveClass: true,
    mergeFit: true,
    responsive: {
      0: { items: 1 },
      425: { items: 2 },
      768: { items: 3 },
      1000: { items: 3 },
    },
  };

  const Customer = [
    {
      img_url: "/assets/colan.svg",
      name: "Sunit Kumar",
      description: `Grand Ortus consistently delivers exceptional service, showcasing a deep understanding of client needs and innovative solutions. Their team is professional, reliable, and highly responsive throughout every project phase.`,
      cast: "Vice President",
      img_url1: "/assets/sunil.svg",
    },
    {
      img_url: "/assets/colan.svg",
      name: "Ajay Kumar",
      description: `Grand Ortus consistently delivers exceptional service, showcasing a deep understanding of client needs and innovative solutions. Their team is professional, reliable, and highly responsive throughout every project phase.`,
      cast: "Server Engineer",
      img_url1: "/assets/ajay.svg",
    },
  ];

  return (
    <section className="w-full md:p-20 p-5 mx-auto bg-[#0090d2]">
      <h1 className="text-center text-4xl bg-[url('/assets/satisfied-bg.svg')] bg-center bg-no-repeat">
        Satisfied Customers
      </h1>

      <div className="my-20">
        {isClient && (  // ✅ Prevents server-side rendering issues
          <OwlCarousel className="owl-theme" {...option}>
            {Customer.map((Customers, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl shadow-lg">
                <img src={Customers.img_url} alt="" className="w-5!" />
                <p>{Customers.description}</p>
                <div className="flex pl-3 mt-4">
                  <img src={Customers.img_url1} alt="Customer" className="w-16!" />
                  <div className="ml-5">
                    <h5 className="pb-2">{Customers.name}</h5>
                    <p>{Customers.cast}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};

export default SatisfiedCustomers;
