import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Hero() {
  useAos();

  return (
    <div className="Hero" id="home">
      <div className="container">
        <div data-aos="fade-up" className="contain">
          Hi, I am Bolaji Oluwatofunmi Ashraf.
          <br />
          I'm a Fullstack Javascript Developer (MERN)
        </div>
        <div data-aos="fade-up" className="buttons">
          <Link
            to="https://drive.google.com/file/d/1a1b8Ua4f9pTT-uBA3e9PHBPM7i-PXstD/view?usp=drive_link"
            target="_blank"
          >
            <button>Download CV</button>
          </Link>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
          <button>Latest Project</button>
              </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
