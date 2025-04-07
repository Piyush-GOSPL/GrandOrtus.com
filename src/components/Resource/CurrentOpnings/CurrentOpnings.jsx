import React from "react";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    location: "New York, USA",
    type: "Full-time",
    description:
      "Seeking an experienced Backend Developer proficient in Node.js and databases.",
  },
  {
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Contract",
    description:
      "Creative UI/UX Designer needed with experience in Figma and Adobe XD.",
  },
];

const CurrentOpenings = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800">Current Openings</h1>
        <p className="text-gray-600 mt-2">
          Explore exciting career opportunities and join our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{job.location} • {job.type}</p>
            <p className="text-gray-700 mt-4">{job.description}</p>
            <button className="mt-5 bg-[#0090d2] text-white px-5 py-2 rounded-full hover:bg-[#007bb5] transition-all duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentOpenings;
