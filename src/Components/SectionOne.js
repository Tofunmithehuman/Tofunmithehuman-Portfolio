import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";
import html from "../Media/html.png";
import css from "../Media/css-3.png";
import bootstrap from "../Media/bootstrap.png";
import javaScript from "../Media/java-script-logo.png";
import git from "../Media/git.png";
import reactpic from "../Media/react.png";
import node from "../Media/node-js.png";
import express from "../Media/express.png";
import mongodb from "../Media/mongodb.png";

function SectionOne() {
  useAos();

  return (
    <div className="SectionOne" id="about">
      <div className="container">
        <h1 data-aos="fade-up">About Tofunmithehuman...</h1>

        <div className="innerContain">
          <div data-aos="fade-right" className="contain">
            <h2>Hey there,</h2>
            <br />
            <p>
              My name is Bolaji Oluwatofunmi Ashraf, and I have a lifelong
              passion for technology, mastery of Javascript, proficiency in
              front-end and back-end development, problem-solving prowess, and
              contribution to the community which makes me a beacon in the world
              of web development.
            </p>
            <br />
            <br />
            <h3>My Skills</h3>
            <br />
            <p>
              HTML CSS-3 BOOTSTRAP JAVASCRIPT GIT <br /> REACT NODEJS EXPRESSJS
              MONGODB
            </p>
          </div>

          <div data-aos="fade-up" className="contain">
            <img src={html} width={50} alt="HTML" />
            <img src={css} width={50} alt="CSS-3" />
            <img src={bootstrap} width={50} alt="BOOTSTRAP" />
            <img src={javaScript} width={50} alt="JAVASCRIPT" />
            <img src={git} width={50} alt="GIT" />
            <img src={reactpic} width={50} alt="REACT" />
            <img src={node} width={50} alt="NODEJS" />
            <img src={express} width={50} alt="EXPRESSJS" />
            <img src={mongodb} width={50} alt="MONGODB" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
