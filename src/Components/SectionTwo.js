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
          <h3>AllBirds</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
        <div className="catelogue" data-aos="fade-up">
          <Link to="https://www.blissworld.com" target="_blank">
            <img
              src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1705447075/blissworld_axktts.png"
              alt="catImg"
            />
          </Link>
          <h3>BlissWorld</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
        <div className="catelogue" data-aos="fade-up">
          <Link to="https://www.chubbiesshorts.com" target="_blank">
            <img
              src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1705447076/chubbiesshorts_kp8kaj.png"
              alt="catImg"
            />
          </Link>
          <h3>ChubbiesShorts</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aut praesentium? Reiciendis maiores quibusdam ut.
            Quidem porro dignissimos quasi, minima omnis earum vel! Impedit
            dicta ullam in at ea id!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
