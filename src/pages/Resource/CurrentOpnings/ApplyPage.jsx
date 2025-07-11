import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state || {};  

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !resume) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Form submission logic (e.g., sending data to API)
    console.log({
      jobTitle: job?.jobTitle,
      applicantName: name,
      applicantEmail: email,
      applicantPhone: phone,
      resumeFile: resume,
    });

    alert('Application submitted successfully! ✅');
    navigate('/');  
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg w-full mt-20">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Apply for {job?.jobTitle || 'Position'}
        </h1>

        {/* Job Details */}
        <div className="mb-8">
          <p className="text-gray-700 mb-1"><strong> Location:</strong> {job?.jobLocation}</p>
          <p className="text-gray-700 mb-1"><strong> Designation:</strong> {job?.designation}</p>
          <p className="text-gray-700 mb-3"><strong> Description:</strong> {job?.jobDescription}</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Error Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Your Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Resume */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none"
          />

          {/* Submit Button */}
          <div className='flex justify-center'>


          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Submit Application
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
