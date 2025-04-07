import React from "react";

const WorkingFlowchart = () => {
  const chart = [
    {
      stepNumber: "1",
      title: "Design",
      img_url: "/assets/design1.svg",
    },
    {
       stepNumber: "2",
      title: "Development",
      img_url: "/assets/Deploment2.svg",
    },
    {
       stepNumber: "3",
      title: "Manage",
      img_url: "/assets/Manage3.svg",
    },
    {
       stepNumber: "4",
      title: "Audit",
      img_url: "/assets/Audit4.svg",
    },
  ];
  return (
    <section className="w-full mx-auto p-3  bg-[url('/assets/wrokFlowbg.svg')] bg-center bg-no-repeat ">
      <h1 className="text-center text-4xl">Working Flowchart</h1>

      <div className="flex items-center md:flex-row flex-col justify-evenly my-10">
        {chart.map((charts, index) => (
          <div className="flex flex-col items-center text-center mb-6 md:mb-0 relative ">
            <div className="group relative after:w-[94%] after:h-full after:bg-gray  after:border-2 after:border-gray-800 after:top-0 after:left-0 after:absolute after:rotate-45 after:rounded-[9px] ">
            <div className="bg-[#575757] p-6 rounded-xl shadow-lg group-hover:bg-[#0090d2] relative ">
              <div className=" absolute bottom-0 right-0 w-10 h-10 bg-[#0090d2] text-white font-bold flex items-end justify-around [clip-path:polygon(0_100%,100%_100%,100%_0)] py-[1px] px-[20px] ">{charts.stepNumber}</div>
              <img
                src={charts.img_url}
                alt={charts.title}
                className="w-16 h-16 object-contain transition duration-300 group-hover:text-white group-hover:brightness-0 group-hover:invert"
              />
            </div>
            </div>

            <p className="mt-3 font-semibold text-lg">{charts.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingFlowchart;
