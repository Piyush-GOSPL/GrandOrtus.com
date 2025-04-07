import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ImplementationServices from "./ImplementationServices";
import { Routes, Route } from "react-router-dom";

const Solution = () => {
  return (
    <section className="w-full ">
      <Navbar />

      <Routes>
        <Route
          path="/ImplementationServices"
          element={<ImplementationServices />}
        />
      </Routes>

      <Footer />
    </section>
  );
};

export default Solution;
