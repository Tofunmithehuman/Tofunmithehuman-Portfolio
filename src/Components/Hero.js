import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";

function Hero() {
  useAos();

  return (
    <div className="Hero">
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
          <button>Latest Project</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
