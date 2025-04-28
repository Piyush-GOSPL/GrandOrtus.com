import React, { useEffect, useState } from "react";
import { getPosts } from './api';
import { useNavigate } from "react-router-dom"; // 👈 import navigate

const CurrentOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // 👈

  useEffect(() => {
    getPosts().then((data) => {
      setJobs(data);
    });
  }, []);

  const handleApplyClick = (job) => {
    navigate('/apply', { state: { job } }); // 👈 pass job details
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800">Current Openings</h1>
        <p className="text-gray-600 mt-2">
          Explore exciting career opportunities and join our team.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-2xl text-left hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">💼 {job.jobTitle}</h2>
                <p className="text-gray-700"><span className="font-semibold"> 📍 Location:</span> {job.jobLocation}</p>
                <p className="text-gray-700"><span className="font-semibold"> 🧑‍💼 Designation:</span> {job.designation}</p>
                <p className="text-gray-700"><span className="font-semibold"> 📝 Description:</span> {job.jobDescription}</p>
                <p className="text-gray-700"><span className="font-semibold"> 📅 Valid Through:</span> {job.validThroughDate}</p>

                {/* 🛠️ Updated Button */}
                <button
                  onClick={() => handleApplyClick(job)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>

              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4 col-span-full text-center">No current openings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;
