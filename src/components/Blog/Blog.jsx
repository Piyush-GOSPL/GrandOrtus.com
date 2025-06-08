import React from "react";

const Blogs = () => {
  const card = [
    {
      img_url: "/assets/window.svg",

      title: `Window vs. Linux:
              Unravelling the Battle of Operating System`,
      redmore: "Read More",
    },
    {
      img_url: "/assets/Future.svg",

      title: `Window vs. Linux:
              Unravelling the Battle of Operating System`,
      redmore: "Read More",
    },
    {
      img_url: "/assets/TheTransformative.svg",

      title: `Window vs. Linux:
              Unravelling the Battle of Operating System`,
      redmore: "Read More",
    },
    {
      img_url: "/assets/TheCybersecurity.svg",

      title: `Window vs. Linux:
              Unravelling the Battle of Operating System`,
      redmore: "Read More",
    },
  ];

  return (
    <section className="mx-auto flex flex-col items-center justify-center container p-14 md:px-20 lg:px-32 px-5 w-full overflow-hidden relative">
     <h3 className="text-xl sm:text-2xl lg:text-3xl">Blogs and News</h3>
<h1 className="text-2xl sm:text-4xl lg:text-5xl text-[#0090d2]">Our Latest Blog and News</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 my-5  after:bg-[#575757] after:w-full after:h-[100px]  after:bottom-[25%] after:absolute  after:left-[-3px] after:-z-10  ">
        {card.map((cards, index) => (
          <div
            key={index}
            className=" flex flex-col p-4 rounded-lg items-center border-[1px] border-[#E6E6E6] min-h-60 shadow-md transition hover:shadow-lg bg-white ">
            <img
              src={cards.img_url}
              alt=""
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-3">
              {cards.title}
            </h2>
            <button className="bg-[#0090d2] text-white px-4 py-2 rounded-md hover:bg-[#0090d29d] transition">
              {cards.redmore}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
