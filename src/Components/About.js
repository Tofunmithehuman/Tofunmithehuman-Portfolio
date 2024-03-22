import "../Styles/style.css";
import "aos/dist/aos.css";
import img from "../Media/imgTwo.jpg";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";

const About = () => {
  useAos();
  return (
    <div className="About" id="about">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center gap-5 "
          id="parent"
        >
          <div data-aos="fade-up" className="content w-60">
            <h1 className="w-60">About Oluwatofunmi</h1>
            <br />
            <br />
            <p className="w-60">
              I specialize in building dynamic and responsive web applications
              using the MERN Stack and i have a strong foundation in front-end
              and back-end development. Explore my{" "}
              <Link
                to="https://github.com/Tofunmithehuman?tab=repositories"
                target="_blank"
                style={{ color: "white" }}
              >
                repository
              </Link>{" "}
              to find a diverse range of projects showcasing my skills and
              expertise in full-stack web development. From e-commerce platforms
              to social media applications, each project demonstrates my
              commitment to clean code, robust architecture, and intuitive user
              interfaces.
            </p>
            <h5>My languages and tools:</h5>
            <p style={{ maxWidth: "600px" }}>
              HTML5 CSS3 JavaScript Bootstrap Tailwind-CSS React Redux Node.js
              Express.js MONGODB Mongoose Git Github
            </p>
            <br />
            <br />
            <br />
            <h3 className="fst-italic">
              "I aim for Sucess and Strive for Greatness."
            </h3>
          </div>
          <img
            data-aos="fade-up"
            src={img}
            alt="Studio"
            about="Rejoice Moyosola Joseph"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
