import React from "react";
import "../Styles/style.css";
import useAos from "../Components/aos";

function SectionOne() {
  useAos();

  return (
    <div className="SectionOne" id="about">
      <div className="container">
        <h1 data-aos="fade-up">About Tofunmithehuman</h1>

        <div className="innerContain">
          <div data-aos="fade-right" className="contain">
            <h4>Hey there,</h4>
            <br />
            <p>
              I specialize in building dynamic and responsive web applications
              using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              With a strong foundation in front-end and back-end development,
              I'm dedicated to creating efficient, user-friendly, and scalable
              solutions that meet clients needs.
            </p>
            <br />
            <p>
              Explore my repository to find a diverse range of projects
              showcasing my skills and expertise in full-stack web development.
              From e-commerce platforms to social media applications, each
              project demonstrates my commitment to clean code, robust
              architecture, and intuitive user interfaces.
            </p>
            <br />
            <br />
            <h4>Languages and Tools:</h4>
            <br />
            <div className="skills">
              <a href='https://developer.mozilla.org/en-US/docs/Learn/HTML' target="_blank" rel="noreferrer"><img alt='HTML5' src='https://img.shields.io/badge/HTML5-100000?style=for-the-badge&logo=HTML5&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS' target="_blank" rel="noreferrer"><img alt='CSS3' src='https://img.shields.io/badge/CSS3-100000?style=for-the-badge&logo=CSS3&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"><img alt='javascript' src='https://img.shields.io/badge/Javascript-100000?style=for-the-badge&logo=javascript&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://www.typescriptlang.org/' target="_blank" rel="noreferrer"><img alt='typescript' src='https://img.shields.io/badge/Typescript-100000?style=for-the-badge&logo=typescript&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer"><img alt='Bootstrap' src='https://img.shields.io/badge/Bootstrap-100000?style=for-the-badge&logo=Bootstrap&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://tailwindcss.com/' target="_blank" rel="noreferrer"><img alt='Tailwind CSS' src='https://img.shields.io/badge/Tailwindcss-100000?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://react.dev/' target="_blank" rel="noreferrer"><img alt='REACT' src='https://img.shields.io/badge/REACT-100000?style=for-the-badge&logo=REACT&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://redux.js.org/' target="_blank" rel="noreferrer"><img alt='Redux' src='https://img.shields.io/badge/REDUX-100000?style=for-the-badge&logo=Redux&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://nodejs.org/en' target="_blank" rel="noreferrer"><img alt='node.js' src='https://img.shields.io/badge/Node.js-100000?style=for-the-badge&logo=node.js&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://expressjs.com/' target="_blank" rel="noreferrer"><img alt='express' src='https://img.shields.io/badge/EXPRESS.js-100000?style=for-the-badge&logo=express&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://www.mongodb.com/' target="_blank" rel="noreferrer"><img alt='MONGODB' src='https://img.shields.io/badge/mongodb-100000?style=for-the-badge&logo=MONGODB&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://mongoosejs.com/docs/' target="_blank" rel="noreferrer"><img alt='mongoose' src='https://img.shields.io/badge/mongoosejs-100000?style=for-the-badge&logo=mongoose&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/' target="_blank" rel="noreferrer"><img alt='csharp' src='https://img.shields.io/badge/cSHARP-100000?style=for-the-badge&logo=csharp&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://git-scm.com/' target="_blank" rel="noreferrer"><img alt='git' src='https://img.shields.io/badge/git-100000?style=for-the-badge&logo=git&logoColor=white&labelColor=black&color=black'/></a>
              <a href='https://github.com/' target="_blank" rel="noreferrer"><img alt='github' src='https://img.shields.io/badge/github-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=black&color=black'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
