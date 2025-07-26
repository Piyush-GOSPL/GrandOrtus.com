import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const card = [
    {
      img_url: "/assets/window.svg",
      title: `Windows vs. Linux: Unravelling the Battle of Operating System`,
      redmore: "Read More",
      path: "/BlogDetail_WindowsVsLinux",
    },
    {
      img_url: "/assets/Future.svg",
      title: `The Future of AI: Transforming Everyday Life`,
      redmore: "Read More",
      path: "/BlogDetail_FutureTechnology",
    },
    {
      img_url: "/assets/TheTransformative.svg",
      title: `Cloud Computing: The Transformative Shift`,
      redmore: "Read More",
      path: "/BlogDetail_Transformative",
    },
    {
      img_url: "/assets/TheCybersecurity.svg",
      title: `Cybersecurity in 2025: What to Expect`,
      redmore: "Read More",
      path: "/BlogDetail_Cybersecurity",
    },
  ];

  return (
    <section className="mx-auto flex flex-col items-center justify-center container p-14 md:px-20 lg:px-32 px-5 w-full overflow-hidden relative">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">Blogs and News</h1>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#0090d2]">Our Latest Blog and News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 my-5 after:bg-[#575757] after:w-full after:h-[100px] after:bottom-[25%] after:absolute after:left-[-3px] after:-z-10">
        {card.map((cards, index) => (
          <div
            key={index}
            className="flex flex-col p-4 rounded-lg items-center border-[1px] border-[#E6E6E6] min-h-60 shadow-md transition hover:shadow-lg bg-white">
            <img
              src={cards.img_url}
              alt={cards.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-3">
              {cards.title}
            </h2>
            <Link to={cards.path}>
              <button className="bg-[#0090d2] text-white px-4 py-2 rounded-md hover:bg-[#0090d29d] transition cursor-pointer">
                {cards.redmore}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
