import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SectionVideos from "./components/SectionVideos";

const Inicio = () => {
  return (
    <div className="mainSection">
      <Banner />
      <About/>
      <SectionVideos/>
      <Footer />
    </div>
  );
};

export default Inicio;
