import React from 'react'
import "../Partners/Partners.css";

const Partners = () => {
    const partnersImages = Array.from({length:30}, (_, i) => `assets/partners/Picture${i+12}.png`);
  return (
    <section className='w-full mx-auto  my-5'>
        <div className='Partner-bannerimg flex justify-center items-center h-[80dvh] bg-cover bg-center bg-no-repeat bg-[url(/assets/Partnerbannerimg.svg)]'>
        <div className=''>
            <h1 className='text-[#0090d2] text-2xl md:text-4xl font-semibold text-center'>OUR PARTNERS</h1>
            <p className='text-white text-lg md:text-xl mt-2 font-medium'>"Together, we are stronger – thank you for being a valued partner in our shared success."</p>

        </div>
      </div>

      <div className='w-full flex flex-col items-center px-6 py-10 bg-gray-100 mt-10  bg-gradient-to-b from-[#DAD4D4] via-[#E4E4E4] to-[#FFFFFF]'>
        <div className='max-w-3xl text-center'>
            <h1 className='text-[#0090d2] text-2xl md:text-3xl font-semibold capitalize'>our partners</h1>

            <div className="text-gray-700 text-base md:text-lg mt-4">
            <ul className="list-disc pl-5 space-y-4">
              <li>
              Together, we empower businesses with seamless integration solutions, driving innovation and efficiency across industries.
              </li>
              <li>
              Our partnerships fuel the future of technology, delivering customized, reliable, and scalable system integration for your business needs.
              </li>
              <li>
              Collaborating with industry leaders, we offer end-to-end integration services that unlock the full potential of your enterprise.
              </li>
              <li>
              By partnering with us, you gain access to cutting-edge technology and expert solutions that bridge the gap between systems and success.
              </li>
              <li>
              Through trusted partnerships, we build integrated ecosystems that enhance performance, optimize processes, and accelerate growth.
              </li>
              <li>
              As your trusted partner in system integration, we’re committed to delivering solutions that streamline operations and elevate business outcomes.
              </li>
              <li>
              Our collaborative approach ensures your systems work together harmoniously, driving smarter solutions for a connected future.
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="w-full p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
  {partnersImages.map((img, index) => (
    <div key={index} className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={img} alt={`Client ${index + 1}`} className="w-24 md:w-32 lg:w-40 h-auto object-contain" />
    </div>
  ))}
</div>


    </section>
  )
}

export default Partners