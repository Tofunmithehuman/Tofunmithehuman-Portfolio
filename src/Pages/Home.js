import "../Styles/style.css";
import "aos/dist/aos.css";
import Navigation from "../Components/Navigation";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import useAos from "../Components/aos";

const Home = () => {
  useAos();

  return (
    <div className="Home" id="home">
      <Navigation />
      <div className="text-center p-3" id="parent">
        <div data-aos="fade-up" className="heroContent">
          <h1>Bolaji Oluwatofunmi Ashraf</h1>
          <h6>Frontend | Backend | Fullstack Developer</h6>
          <p id="homey">
            I specialize in building dynamic and responsive web applications
            using the MERN Stack <br />
            and i have a strong foundation in front-end and back-end
            development.
          </p>
          <button>
            <Link
              to="https://drive.google.com/file/d/1I8619yfzbEm1ywTNz-eLUR8qYztuPcmB/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </Link>
          </button>
        </div>
      </div>

      <About id="about" />
      <Services id="services" />
      <Contact id="contact" />
      <Footer/>
    </div>
  );
};

export default Home;
