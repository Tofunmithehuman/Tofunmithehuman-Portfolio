import React from "react";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import SectionOne from "../Components/SectionOne";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Hero />
      <SectionOne />
    </div>
  );
}

export default Home;
