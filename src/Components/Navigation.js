import React from "react";
import "../Styles/style.css";
import { useState } from "react";
import Logo from "../Media/icon.png";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

library.add(faBars, faTimes);

function Navigation() {
  useAos();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenUl, setIsDropdownOpenUl] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsDropdownOpenUl((prevState) => !prevState);
  };

  const toggleIcon = isDropdownOpen ? faTimes : faBars;

  return (
    <div className="Navigation">
      <header>
        <img data-aos="fade-down" src={Logo} width={70} alt="Logo" />
        <nav>
          <ul data-aos="fade-down">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={toggleIcon} />
        </div>
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
          <ul className={`ul ${isDropdownOpenUl ? "open" : ""}`}>
            <li>
              <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                CONTACT
              </ScrollLink>
            </li>
          </ul>

          <div className="icons">
            <Link to="https://github.com/Tofunmithehuman" target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.instagram.com/tofunmithehuman/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://twitter.com/tofunmithehuman" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/tofunmithehuman/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
