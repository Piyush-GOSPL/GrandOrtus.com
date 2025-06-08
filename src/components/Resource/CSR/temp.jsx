import React from "react";

const CSR = () => {
  return (
    <section className="w-full">

      <div className="text-center bg-[#0090d2] w-full h-[50vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Corporate Governance</h1>
      </div>

     
      <div className="container mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <img
      src="/assets/CSR.png"
      alt="CSR"
      className="w-full md:w-1/5 object-contain"
    />
    <div className="space-y-4 text-center md:text-left md:flex-1">
      <p className="text-lg text-gray-700">
        At Grand Ortus, we are dedicated to creating opportunities and solutions
        that improve lives and drive sustainable growth through technology.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Digital literacy programs for underprivileged communities</li>
        <li>Green data center initiatives</li>
        <li>Open-source tools for nonprofits</li>
      </ul>
      <p className="text-gray-700">
        Companies that engage in CSR initiatives often enjoy a positive
        reputation and increased customer loyalty. A strong CSR program attracts
        employees who value ethical business practices and proactively addresses
        social and environmental issues.
      </p>
      <p className="text-gray-700">
        Implementing sustainable practices leads to cost savings and improved
        operational efficiency.
      </p>
    </div>
  </div>
</div>


     <div className="container mx-auto px-4 md:px-20 py-10">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Initiatives</h2>

  {/* Social Work Section */}
  <div className="flex flex-col md:flex-row items-center gap-6 my-10">
    <div className="space-y-4 md:w-1/2">
      <h3 className="text-2xl font-bold text-gray-800">Social Work: Feeding Hope & Nourishing Lives</h3>
      <p className="text-gray-700">
        At Grand Ortus Solutions Pvt Ltd., we believe in making a positive impact beyond our technological innovations.
        As part of our corporate social responsibility, we take pride in distributing food to hungry people in our community.
        Our team is dedicated to alleviating hunger and ensuring that those in need receive nutritious meals. By collaborating
        with local organizations and volunteers, we aim to create a food distribution network that reaches the most vulnerable
        populations, bringing hope and sustenance to many. Through this initiative, we are committed to fostering a more
        compassionate and caring society, where everyone has access to the basic necessity of food.
      </p>
    </div>
    <img
      src="/assets/image.png"
      alt="Social Work"
      className="w-full md:w-1/2 object-cover rounded-lg"
    />
  </div>

  {/* Plantation Drive Section */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-6 my-10">
    <div className="space-y-4 md:w-1/2">
      <h3 className="text-2xl font-bold text-gray-800">Plantation Drive</h3>
      <p className="text-gray-700">
        We are deeply committed in preserving nature and combating climate change through our tree plantation initiatives.
        Recognizing the critical role trees play in sequestering carbon dioxide and mitigating global warming, we have embarked
        on large-scale planting projects aimed at rejuvenating our environment. By planting trees, we not only enhance air quality
        and foster biodiversity but also promote soil conservation and water management. Our efforts extend beyond the immediate
        ecological benefits, as we aim to create a lasting impact that ensures a greener and more sustainable future for generations
        to come. Through community involvement and dedicated action, we strive to protect our planet and contribute to the global
        effort against climate change.
      </p>
    </div>
    <img
      src="/assets/Drive.png"
      alt="Plantation Drive"
      className="w-full md:w-1/2 object-cover rounded-lg"
    />
  </div>
</div>

    </section>
  );
};

export default CSR;
