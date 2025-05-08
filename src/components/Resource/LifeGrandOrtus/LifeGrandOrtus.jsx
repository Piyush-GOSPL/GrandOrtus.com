import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LifeGrandOrtus = () => {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      320: { items: 2 },
      425: { items: 2 },
      768: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <section className="w-full mx-auto">
      {/* Banner Section */}
      <div className="h-[50dvh] bg-no-repeat bg-cover bg-center flex justify-center items-center bg-[url('/assets/LifeBanner.svg')]">
        <h1 className="text-white text-3xl font-bold">Life@Grand Ortus</h1>
      </div>

      {/* Carousel Section */}
      <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/lifebgimg.svg')] py-10 px-5 flex justify-center items-center">
        <div className="w-full">
          <OwlCarousel className="owl-theme" {...options}>
            {["1", "2", "3"].map((num) => (
              <div key={num} className="item p-4">
                <img
                  src={`/assets/LifeGrand Ortus${num}.jpg`}
                  alt={`Life at Grand Ortus ${num}`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>

      {/* 👇 Video Section */}
      <div className="w-full py-10 px-5 bg-[#f4f4f4] flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#333] mb-6">
          A Glimpse into Our Culture
        </h2>
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
          <video
            controls
            className="w-full h-full object-cover"
            poster="/assets/video-thumbnail.jpg"
          >
            <source src="/assets/lifeatgrandortus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Culture Highlights */}
      <div className="bg-[radial-gradient(31.01%_50%_at_50%_50%,rgba(217,217,217,0.18)_0%,rgba(115,115,115,0.1458)_99.5%)] pt-10">
        <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/Culture.svg')] p-15 my-20 ">
          <h1 className="text-center text-2xl text-white mt-[-36px]">
            Our Culture Highlights
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {[
            {
              title: "Integrity",
              imgSrc: "/assets/Integrity.svg",
              description:
                "Cultures that emphasize flexibility, remote work options, and mental health support",
            },
            {
              title: "Work-Life Balance",
              imgSrc: "/assets/Balance.svg",
              description:
                "Cultures that emphasize flexibility, remote work options, and mental health support",
            },
            {
              title: "Employee Engagement",
              imgSrc: "/assets/Employee.svg",
              description:
                "Cultures that emphasize flexibility, remote work options, and mental health support",
            },
            {
              title: "Employee Engagement",
              imgSrc: "/assets/Employee.svg",
              description:
                "Cultures that emphasize flexibility, remote work options, and mental health support",
            },
            {
              title: "Employee Engagement",
              imgSrc: "/assets/Employee.svg",
              description:
                "Cultures that emphasize flexibility, remote work options, and mental health support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-10 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[2px] after:h-[2px] after:bg-gray-300 after:-z-10 after:right-0 after:h-full after:bg-[#00000091]"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 mx-auto"
              />
              <h1 className="text-3xl text-[#575757] font-medium p-2">
                {item.title}
              </h1>
              <p className="text-2xl text-[#575757]  px-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full p-10 mx-auto bg-[#0090d2] my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">
          {[
            {
              img_url: "/assets/ritika-yadav.jpg",
              title: "Ritika Yadav",
              description:
                "Working at Grand Ortus has been a transformative experience.The culture here is unmatched.",
            },
            {
              img_url: "/assets/suresh.jpg",
              title: "Suresh Mallick",
              description:
                "The leadership team is supportive, and the opportunities for growth are endless.",
            },
            {
              img_url: "/assets/piyush.jpg",
              title: "Piyush Singh",
              description:
                "The work-life balance and team spirit make this the perfect place to grow your career.",
            },
          ].map((Card, index) => (
            <div key={index} className="flex justify-center flex-col">
              <img
                src={Card.img_url}
                alt=""
                className="w-30 h-30 mx-auto rounded-full object-cover transform translate-x-[10px] translate-y-[45px] "
              />
              <div className="bg-white py-15 px-2 rounded-2xl shadow-lg text-center">
                <h1 className="text-lg font-semibold text-gray-800">
                  {Card.title}
                </h1>
                <h1 className="text-sm text-gray-600 mt-2 px-5">
                  {Card.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeGrandOrtus;
