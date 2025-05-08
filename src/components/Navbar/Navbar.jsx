import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({onGetQuoteClick}) => {
  const [menuBar, setMenuBar] = useState(false);

  const handleMenubar = () => {
    setMenuBar(!menuBar);
  };

  const navMenuData = [
    { label: "Home", url: "Home" },
    {
      label: "Resource",
      // url: "/",
      subNavBar: [
        { label: "About Us", url: "About" },
        // { label: "Team", url: "/" },
        { label: "Blogs", url: "Blogs" },
        { label: "Case Studies", url: "CaseStudy" },
        { label: "Awards & Certifications", url: "AwardsandCertification" },
        {
          label: "Career",
          // url: "/",
          dropdown: [
            { label: "Life Grand Ortus", url: "LifeGrandOrtus" },
            { label: "Current Openings", url: "CurrentOpenings" },
            { label: "Corporate Social Responsibility", url: "CSR" },
          ],
        },

        { label: "Contact Us", url: "Contact" },
      ],
    },
    {
      label: "Association",
      // url: "/",
      subNavBar: [
        { label: "Clients", url: "Clients" },
        { label: "Partners", url: "Partners" },
      ],
    },
    { label: "Product",
      subNavBar: [
        { label: "Product I Description", url: "ProductOne" },
        { label: "Product II Description", url: "ProductTwo" }, 
        
      ],
     },
    {
      label: "Solution",
      // url: "/",
      subNavBar: [
        {
          title: "Company Size",
          submenu: [
            { label: "Startups", url: "Startups" },
            { label: "MSMEs", url: "MSMEs" },
            { label: "Enterprises", url: "Enterprises" },
          ],
        },

        {
          title: "Services",
          submenu: [
            { label: "Services List", url: "ServicesList" },
            { label: "Implementation Services", url: "ImplementationServices" },
            // { label: "IT Infrastructure Consulting", url: "#" },
            {
              label: "Datacenter Infra Design & Deployment",
              url: "Datacenter",
            },
            { label: "Networking and Intranet", url: "NetworkingandIntranet" },
            { label: "Mobile App & Web Development", url: "MobileWeb" },
            { label: "Mobility and Cloud", url: "MobilityandCloud" },
            { label: "Cyber Security", url: "CyberSecurity" },
            { label: "FMS and AMC Support", url: "FMSandAMC" },
            { label: "Zero Trust Network Framework", url: "ZeroTrust" },
          ],
        },

        {
          title: "By Industries",
          submenu: [        
            { label: "IT & ITES", url: "IT&ITES" },
            { label: "Hospitality Industry", url: "HospitalityIndustry" },
            { label: "Telecom Industry", url: "TelecomIndustry" },
            { label: "FMCG Industry", url: "FMCGIndustry" },
            { label: "Healthcare Industry", url: "HealthcareIndustry" },
            { label: "Manufacturing Industry", url: "ManufacturingIndustry" },
            { label: "Real Money Gaming Industry", url: "RealMoneyGaming" },
            { label: "Retail Industry", url: "RetailIndustry" },
            { label: "Staffing and Recruitment", url: "StaffingRecruitment" },
            { label: "On Demand Economy", url: "OnDemandEconomy" },
          ],
        },
      ],
      isCustomNavbar: true,
    },
  ];

  return (
    <nav className="w-full md:fixed sm:top-0 bg-white py-3 md:flex items-center justify-between px-5 z-9999 shadow-md">
      {/* Logo */}
      <span className="max-w-[200px] inline-block">
        <NavLink to="Home" title="Grand Ortus - Home">
          <img src="/assets/logo.svg" alt="logo" />
        </NavLink>
      </span>

      {/* Mobile Menu Icon */}
      <span
        className="md:hidden absolute right-8 top-6 cursor-pointer"
        onClick={handleMenubar}>
        <i
          className={`fa-solid ${
            menuBar ? "fa-xmark" : "fa-bars"
          } transition-all duration-500 ease-in`}
        ></i>
      </span>

      {/* Navigation Menu */}
      <ul
        className={`absolute bg-white left-0 w-full md:flex md:static transition-all duration-500 ease-in justify-center ${
          menuBar ? "top-[80px]" : "top-[-500px]"
        }`}
      >
        {navMenuData.map((menu, index) => (
          <li
            key={index}
            className="relative group text-lg text-[18px] px-4 py-2"
          >
            <NavLink
              to={menu.url}
              className="hover:bg-sky-700 duration-150 ease-in-out hover:text-white text-[#575757] p-[8px] rounded-[10px]"
            >
              {menu.label}
            </NavLink>

            {/* Submenu */}

            {menu.subNavBar && (
              <ul
                className={`absolute left-0 reletive top-full hidden group-hover:block bg-white rounded-md py-2 ${
                  menu.isCustomNavbar ? "w-full flex" : "w-60"
                }`}
              >
                {menu.isCustomNavbar ? (
                  <div className="flex w-[754px] left-[-200px] top-0 absolute p-4 bg-white shadow-md rounded-md">
                    {menu.subNavBar.map((submenuCategory, subIndex) => (
                      <div key={subIndex} className=" px-2">
                        <h3 className="font-bold text-gray-700">
                          {submenuCategory.title}
                        </h3>
                        <ul className="mt-2">
                          {submenuCategory.submenu.map((submenuItem, i) => (
                            <li
                              key={i}
                              className="px-1 py-1 text-lg text-[18px] text-[#575757] hover:bg-[#0090d2] hover:text-white"
                            >
                              <NavLink to={submenuItem.url}>
                                {submenuItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  menu.subNavBar.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative dropitem px-4 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757] group"
                    >
                      <NavLink to={subMenu.url}>{subMenu.label}</NavLink>

                      {/* Nested Dropdown */}
                      {subMenu.dropdown && (
                        <ul className="absolute left-full top-[-8px] hidden showme bg-white shadow-md rounded-md w-70 py-2">
                          {subMenu.dropdown.map((dropItem, i) => (
                            <li
                              key={i}
                              className="px-2 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757]"
                            >
                              <NavLink to={dropItem.url}>
                                {dropItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Call to Action Button */}
      <button className="lg:block hidden bg-[#0090d2] text-white font-[Poppins] py-2 px-6 text-nowrap rounded hover:bg-[#87d9ff] cursor-pointer duration-500"
       onClick={onGetQuoteClick}
      >
        Get a quote
      </button>
    </nav>


  );
};

export default Navbar;
