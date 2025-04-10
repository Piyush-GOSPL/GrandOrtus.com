import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home";
import Blogs from "./Blogs/Blogs";
import CaseStudy from "./CaseStudy/CaseStudy";
import Clients from "../Clients/Clients";
import Partners from "../Partners/Partners";
import AwardsandCertification from "./AwardsandCertification/AwardsandCertification";
import LifeGrandOrtus from "./LifeGrandOrtus/LifeGrandOrtus";
import CurrentOpenings from "./CurrentOpnings/CurrentOpnings";
import CSR from "./CSR/temp";
import Contact from "./Contact/Contact";
import ImplementationServices from "../Solution/ImplementationServices";
import Startups from "../Solution/Startup";
import MSMEs from "../Solution/MSMEs";
import Enterprises from "../Solution/Enterprises";
import ServicesList from "../Solution/ServicesList";
import Datacenter from "../Solution/Datacenter";
import NetworkingandIntranet from "../Solution/NetworkingandIntranet";
import MobileWeb from "../Solution/MobileWeb";
import MobilityandCloud from "../Solution/MobilityandCloud";
import CyberSecurity from "../Solution/CyberSecurity";
import FMSandAMC from "../Solution/FMSandAMC";
import ITES from "../Solution/ITES";
import HospitalityIndustry from "../Solution/HospitalityIndustry";
import TelecomIndustry from "../Solution/TelecomIndustry";
import FMCGIndustry from "../Solution/FMCGIndustry";
import HealthcareIndustry from "../Solution/HealthcareIndustry";
import ManufacturingIndustry from "../Solution/ManufacturingIndustry";
import RealMoneyGaming from "../Solution/RealMoneyGaming";
import RetailIndustry from "../Solution/RetailExperience";
import StaffingRecruitment from "../Solution/StaffingRecruitment";
import OnDemandEconomy from "../Solution/OnDemandEconomy";
import Model from "../Model";
import ZeroTrust from "../Solution/ZeroTrust";
import ProductOne from "../Product/ProductOne";
import ProductTwo from "../Product/ProductTwo";


const Resource = () => {
  const [showModal, setShowModal] = useState(false); 
  return (
    <section className="w-full ">
      <Navbar onGetQuoteClick={() => setShowModal(true)} />
      

      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/AwardsandCertification"element={<AwardsandCertification />}/>
        <Route path="/LifeGrandOrtus" element={<LifeGrandOrtus />} />
        <Route path="/CurrentOpenings" element={<CurrentOpenings />} />
        <Route path="/CSR" element={<CSR />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Startups" element={< Startups/>} />
        <Route path="/MSMEs" element={<MSMEs/>}/>
        <Route path="/Enterprises" element={<Enterprises/>}/>
        <Route path="ServicesList" element={<ServicesList/>}/>
        <Route path="/ImplementationServices" element={<ImplementationServices/>}/>
        <Route path="/Datacenter" element={<Datacenter/>}/>
        <Route path="/NetworkingandIntranet" element={<NetworkingandIntranet/>}/>
        <Route path="/MobileWeb" element={<MobileWeb/>}/>
        <Route path="/MobilityandCloud" element={<MobilityandCloud/>}/>
        <Route path="/CyberSecurity" element={<CyberSecurity/>}/>
        <Route path="/FMSandAMC" element={<FMSandAMC/>}/>
        <Route path="/IT&ITES" element={<ITES/>}/>
        <Route path="/HospitalityIndustry" element={<HospitalityIndustry/>}/>
        <Route path="/TelecomIndustry" element={<TelecomIndustry/>}/>
        <Route path="/FMCGIndustry" element={<FMCGIndustry/>}/>
        <Route path="/HealthcareIndustry" element={<HealthcareIndustry/>}/>
        <Route path="/ManufacturingIndustry" element={<ManufacturingIndustry/>}/>
        <Route path="/RealMoneyGaming" element={<RealMoneyGaming/>}/>
        <Route path="/RetailIndustry" element={<RetailIndustry/>}/>
        <Route path="/StaffingRecruitment" element={<StaffingRecruitment/>}/>
        <Route path="/OnDemandEconomy" element={<OnDemandEconomy/>}/>
        <Route path="/ZeroTrust" element={<ZeroTrust/>}/>
        <Route path="/ProductOne" element={<ProductOne/>}/>
        <Route path="/ProductTwo" element={<ProductTwo/>}/>
      </Routes>
      <Model show={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </section>
  );
};

export default Resource;
