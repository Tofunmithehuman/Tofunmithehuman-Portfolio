import React from "react";
import "../Styles/style.css";
import { useState } from "react";
import Logo from "../Media/icon.png";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <div className="toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={toggleIcon} />
        </div>
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
          <ul className={`ul ${isDropdownOpenUl ? "open" : ""}`}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
