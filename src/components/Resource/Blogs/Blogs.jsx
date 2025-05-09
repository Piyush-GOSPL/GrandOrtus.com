import React from "react";
import './Blogs.css';

const Blogs = () => {
  const BlogsCard = [
    {
      Card_img_url: "/assets/Windows.svg",
      title: "Windows vs. Linux: Unraveling the Battle of Operating Systems",
      btn: "Read More  >>",
    },
    {
      Card_img_url: "/assets/Future.svg",
      title: "Exploring the Future of Technology: A Glimpse into Tomorrow",
      btn: "Read More  >>",
    },
    {
      Card_img_url: "/assets/TheTransformative.svg",
      title: "The Transformative Power of IoT in Industries",
      btn: "Read More  >>",
    },
    {
      Card_img_url: "/assets/TheCybersecurity.svg",
      title: "Cybersecurity: The Importance of Protecting Your Data",
      btn: "Read More  >>",
    },
    {
      Card_img_url: "/assets/Industry.svg",
      title: "The IT Industry Ecosystem",
      btn: "Read More  >>",
    },
    {
      Card_img_url: "/assets/ITservices.svg",
      title: "How can IT services help reduce costs for companies",
      btn: "Read More  >>",
    },
  ];
  return (
    <>
      <section className="relative w-full h-[70vh] flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat bg-[url('/assets/BlogBanner.svg')] ">
        <h1 className="text-white text-3xl">Blogs & Updates</h1>
        <p className="text-white text-xl mt-4">
          "Secure, scalable, and efficient—where networking meets software
          innovation."
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 my-6 bg-cover bg-center bg-no-repeat bg-[url('/assets/cardbgimg.svg')] px-20 py-10">
        {BlogsCard.map((blog, i) => (
          <div
            key={i}
            className="w-full my-5 hover:bg-[#cccbcb3d] hover:scale-105 transition-transform duration-300 ease-in-out "
          >
            <img src={blog.Card_img_url} alt="" className="w-full " />
            <div className="p-5 text-center">
              <h4 className="text-gray-700 font-semibold pb-4">{blog.title}</h4>
              <button className="text-[#0090d2] border border-[#0090d2] px-4 py-2 rounded-md hover:bg-[#0090d2] hover:text-white transition">
                {blog.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
