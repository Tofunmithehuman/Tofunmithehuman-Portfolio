import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";

function SectionTwo() {
  useAos();

  return (
    <div className="SectionTwo" id="projects">
      <h1 className="headBoy" data-aos="fade-up">
        My Projects
      </h1>
      <div className="container">
        <div className="catelogue" data-aos="fade-up">
          <Link to="https://www.allbirds.com" target="_blank">
            <img
              src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1705447075/allbird_omii6x.png"
              alt="catImg"
            />
          </Link>
          <h5>AllBirds</h5>
          <p>
          Welcome to AllBird, your premier destination for fashion-forward and sustainable style! Immerse yourself in a curated collection that seamlessly blends comfort, innovation, and trendsetting designs.
          </p>
        </div>
        <div className="catelogue" data-aos="fade-up">
          <Link to="https://www.blissworld.com" target="_blank">
            <img
              src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1705447075/blissworld_axktts.png"
              alt="catImg"
            />
          </Link>
          <h5>BlissWorld</h5>
          <p>
          Welcome to BlissWorld, your sanctuary for radiant and rejuvenated skin! Immerse yourself in the world of skincare where bliss meets science, and each product is crafted to elevate your self-care routine.
          </p>
        </div>
        <div className="catelogue" data-aos="fade-up">
          <Link to="https://www.chubbiesshorts.com" target="_blank">
            <img
              src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1705447076/chubbiesshorts_kp8kaj.png"
              alt="catImg"
            />
          </Link>
          <h5>ChubbiesShorts</h5>
          <p>
          Welcome to Chubbies Shorts, where the spirit of fun and adventure meets the comfort of the perfect pair of shorts! Dive into a world of vibrant colors, bold patterns, and unbeatable quality that defines the essence of leisure and laid-back style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
