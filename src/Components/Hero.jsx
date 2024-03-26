import React from "react";
import "../Styles/Styles.css";
import { Link } from "react-router-dom";
import useAos from "./aos";

function Hero() {
  useAos();
  return (
    <div className="Hero">
      <div className="container" data-aos="fade-up">
        <h1>
          Hi there,
          <br />
          I'm Oluwatofunmi,
          <br />
          Frontend | Backend | FullStack
          <br />
          Developer
        </h1>
        <Link
          to="https://drive.google.com/file/d/1I8619yfzbEm1ywTNz-eLUR8qYztuPcmB/view?usp=sharing"
          target="_blank"
        >
          View resume <i className="fa-solid fa-file"></i>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
