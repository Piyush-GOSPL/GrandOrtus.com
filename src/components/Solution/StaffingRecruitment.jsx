import React from 'react';

const StaffingRecruitment = () => {
  const sections = [
    {
      title: 'Streamlining the Recruitment Process',
      points: [
        'Applicant Tracking Systems (ATS): Manage applications, schedule interviews, and track candidates seamlessly with a robust ATS.',
        'Talent Acquisition Platforms: Use job boards and pipeline management tools to support intelligent recruitment platforms.',
        'Video Interviews & Assessments: Simplify initial screenings, reduce travel costs, and assess candidates efficiently.',
      ],
    },
    {
      title: 'Enhancing Candidate Experience',
      points: [
        'Mobile-Ready Applications: Candidates can now apply with a mobile-optimized application process.',
        'AI Chatbots & Automation: 24/7 responses, interview scheduling, and status updates with intelligent bots.',
        'Engagement Tools: Personalized emails, SMS notifications, and real-time status tracking to improve the candidate journey.',
      ],
    },
    {
      title: 'Improving Data-driven Decisions',
      points: [
        'Data Analytics & Reporting: Get actionable insights into recruitment efforts using dashboards and reports.',
        'Trend Monitoring: Use KPIs to refine hiring strategies and understand sourcing effectiveness.',
        'Talent Forecasting: Use predictive data to align hiring needs with demand, reducing gaps and improving planning.',
      ],
    },
    {
      title: 'Our IT Solutions for Staffing and Recruitment',
      points: [
        'Cloud-based platforms and ATS',
        'AI-driven screening tools',
        'Integrated video interviewing systems',
        'Predictive analytics for talent acquisition',
        'Remote hiring tools and solutions',
      ],
    },
  ];

  const bottomNote = {
    title: 'Investing in IT empowers your staffing and recruitment business to:',
    benefits: [
      'Reduce hiring time and costs',
      'Enhance the candidate experience',
      'Make data-driven decisions for better results',
      'Stay agile and scalable in fast-paced hiring environments',
    ],
    closing:
      "It's time to embrace the full scope of how IT can propel your staffing and recruitment business to the next level.",
  };

  return (
    <section className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <div className="w-full h-[70vh] bg-fixed bg-no-repeat bg-cover bg-[url('/assets/Staffing.svg')] flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl font-bold">Staffing And Recruitment Industry</h1>
      </div>

      {/* Intro Section */}
      <div className='bg-[#66BCE4] p-6 mt-12'>
      <div className=" flex flex-col md:flex-row gap-20 items-center max-w-6xl mx-auto text-white">
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold text-white mb-2">
          How IT Transforms the Staffing and Recruitment Industry:          </h2>
          <p className="text-white leading-relaxed">
          Information technology (IT) is transforming the staffing and recruitment industry by streamlining hiring processes, improving candidate matching, and enhancing operational efficiency. IT tools like Applicant Tracking Systems (ATS) automate candidate sourcing, resume screening, and interview scheduling, significantly reducing administrative workload. AI and machine learning algorithms help match candidates to job roles based on skills, experience, and cultural fit, leading to better recruitment outcomes. Video interview platforms and online assessments enable remote recruitment, expanding the talent pool globally.
          </p>
        </div>
        <img
          src="/assets/StaffingRecruitment.svg"
          alt="Recruitment IT"
          className="w-full md:w-1/3  object-cover"
        />
      </div>

      </div>
     

      {/* Dynamic Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-[#66BCE4] mb-4">{section.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Final Note */}
        <div className=" p-6 text-sm text-gray-700 ">
          <strong>{bottomNote.title}</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {bottomNote.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="mt-4">{bottomNote.closing}</p>
        </div>
      </div>
    </section>
  );
};

export default StaffingRecruitment;
