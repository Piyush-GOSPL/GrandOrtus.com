import React from "react";


const Footer = () => {
  return (
    <footer className="w-full bg-[#043E59] px-4 md:px-16 lg:px-28">
      <img src="/assets/footerlogo.png" alt="" className="w-[200px] py-3" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="text-white space-3">
          <h4 className="text-lg font-semibold my-2">Call Us</h4>
          <p className="text-sm">+9955499218</p>

          <h4 className="text-lg font-semibold my-2">Location</h4>
          <p className="text-sm">
            D 14/30, 2nd Floor, Sector 52, Ardeecity Gurugram, Haryana -122003,
            India
          </p>

          <h4 className="text-lg font-semibold my-2">Email</h4>
          <p className="text-sm">info@grandortus.com</p>
        </div>
        <div className="text-white">
          <h3 className="text-2xl text-[#0092D6] font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li> <a href="/">    Implementation & IT Infrastructure consulting </a> </li>
            <li> <a href="/">    Networking and Intranet </a> </li>
            <li> <a href="/">    Mobile app and Web Development. </a> </li>
            <li> <a href="/">    FMS and AMC Support. </a> </li>
            <li> <a href="/">    Mobility and Cloud . </a> </li>
            <li> <a href="/">    Datacenter infra design and Deployment </a> </li>
            <li> <a href="/">    Cyber security. </a> </li>
            <li> <a href="/">    Zero Trust network. </a> </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-2xl text-[#0092D6] font-semibold mb-4">
            More Information
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Blogs</li>
            <li>Case studies </li>
            <li>Industries</li>
            <li>Life @ GrandOrtus</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="flex border-t border-white py-6 mt-6 justify-between">
        <div className="text-sm text-white opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Grand Ortus. All rights reserved.
          </p>
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/Grandortus.Official" target="blank" className="text-[#5682e8] ">
           <img src="/assets/socialmeida.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/grandortus.official" target="blank" className="text-[#5682e8] ">
           <img src="/assets/insta.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/grand-ortus-solutions-pty-ltd/" target="blank" className="text-[#5682e8] ">
           <img src="/assets/linkden.svg" alt="" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
