import React from "react";
import "../Styles/style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <h4>Tofunmithehuman&copy; 2024 All rights reserved.</h4>
        <div className="icons">
          <Link to="https://github.com/Tofunmithehuman" target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link to="https://www.instagram.com/tofunmithehuman/" target="_blank">
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
        <p>tofunmibolaji13@gmail.com</p>
        <p>+234 904-634-6648</p>
      </footer>
    </div>
  );
}

export default Footer;
