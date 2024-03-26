import React from "react";
import "../Styles/Styles.css";
import useAos from "./aos";
import { Link } from "react-router-dom";

function About() {
  useAos();
  return (
    <div className="About" id="about">
      <div className="container" data-aos="fade-up">
        <p>
          I specialize in building dynamic and responsive web applications using
          the MERN Stack and i have a strong foundation in front-end and
          back-end development. Creating efficient, user-friendly, and scalable
          solutions that meet clients needs.
        </p>
        <br />
        <p>
          Explore my{" "}
          <Link
            to="https://github.com/Tofunmithehuman?tab=repositories"
            target="_blank"
          >
            repository
          </Link>{" "}
          to find a diverse range of projects showcasing my skills and expertise
          in full-stack web development. From e-commerce platforms to social
          media applications, each project demonstrates my commitment to clean
          code, robust architecture, and intuitive user interfaces.
        </p>
        <br />
        <p>- Bolaji Oluwatofunmi Ashraf</p>
      </div>
    </div>
  );
}

export default About;
