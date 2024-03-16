import "../Styles/style.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import useAos from "../Components/aos";
import logo from "../Media/icon.png";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  useAos();

  return (
    <div className="Navigation">
      <header data-aos="fade-down" className=" p-4 w-100 position-fixed">
        <Link to="/">
          <img src={logo} width={70} alt="logo" />
        </Link>

        <nav>
          <ul className="d-flex align-items-center mb-0 gap-4">
            <li>
            <ScrollLink to="home" smooth={true} duration={500} offset={-30}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                About
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink to="services" smooth={true} duration={500}  offset={-230}>
                Projects
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink to="contact" smooth={true} duration={500}  offset={-70}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
