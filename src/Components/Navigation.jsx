import React from "react";
import "../Styles/Styles.css";
import { Link } from "react-router-dom";
import useAos from "./aos";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useAos();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navigation">
      <header data-aos="fade-down">
        <div className="container">
          <h3>Tofunmithehuman.</h3>
          <nav>
            <ul>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-30}
                >
                  ABOUT
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="work" smooth={true} duration={500} offset={-30}>
                  WORK
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/" smooth={true} duration={500} offset={-30}>
                  SKILLS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-30}
                >
                  CONTACT
                </ScrollLink>
              </li>
            </ul>
          </nav>

          <i
            className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}
            onClick={toggleMenu}
          ></i>

          <div className={`dropdown ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-30}
                >
                  ABOUT
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="work" smooth={true} duration={500} offset={-30}>
                  WORK
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/" smooth={true} duration={500} offset={-30}>
                  SKILLS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-30}
                >
                  CONTACT
                </ScrollLink>
              </li>
            </ul>

            <div className="row">
              <Link to="https://github.com/Tofunmithehuman" target="_blank">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/tofunmithehuman/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="https://wa.me/message/UGCFR27RZ5IHN1" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link to="https://twitter.com/tofunmithehuman" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com/tofunmithehuman/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
