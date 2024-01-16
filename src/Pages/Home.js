import React from "react";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Hero id="home" />
      <SectionOne id="about" />
      <SectionTwo id="projects" />
      <SectionThree id="contact" />
      <Footer />
    </div>
  );
}

export default Home;
