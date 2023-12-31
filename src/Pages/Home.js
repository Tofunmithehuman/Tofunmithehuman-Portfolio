import React from "react";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default Home;
