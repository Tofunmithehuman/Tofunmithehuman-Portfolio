import React from "react";
import "../Styles/Styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <Link to="https://github.com/Tofunmithehuman" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/tofunmithehuman/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link to="https://wa.me/message/UGCFR27RZ5IHN1" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
        <Link to="https://www.instagram.com/tofunmithehuman/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>

      <div className="row">
        Tofunmithehuman Copyright © 2024 Tofunmithehuman - All rights reserved
        || Developed By: Bolaji Oluwatofunmi Ashraf
      </div>
    </div>
  );
}

export default Footer;
