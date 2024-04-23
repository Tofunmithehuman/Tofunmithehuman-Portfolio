import React from "react";
import "../Styles/Styles.css";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Hero />
      <About id="about" />
      <Work id="work" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default Home;
