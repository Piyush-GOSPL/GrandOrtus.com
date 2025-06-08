export const navMenuData = [
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
    {
      label: "Product",
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