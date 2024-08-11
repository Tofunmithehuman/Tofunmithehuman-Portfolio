import React from "react";
import "../Styles/Styles.css";
import useAos from "./aos";
import { Link } from "react-router-dom";
import luravpn from "../Media/luravpn.jpeg";
import teensvoice from "../Media/teensvoice.jpeg";
import vms from "../Media/vms.png"

function Work() {
  useAos();
  return (
    <div className="Work" id="work">
      <div className="container">
        <div className="category" data-aos="fade-up">
          <img src={luravpn} alt="categoryImg" />
          <div className="title">
            <h3>Lura VPN</h3>
            <Link to="https://luravpn.com" target="_blank">
              View work <i className="fa-solid fa-link"></i>
            </Link>
          </div>
          <p>
            A React.js and TailwindCSS-powered VPN hosting landing page, which
            offers secure browsing solutions with sleek and efficient
            functionality.
          </p>
        </div>
        <div className="category" data-aos="fade-up">
          <img src={teensvoice} alt="categoryImg" />
          <div className="title">
            <h3>Teens Voice</h3>
            <Link to="https://teensvoice.org" target="_blank">
              View work <i className="fa-solid fa-link"></i>
            </Link>
          </div>
          <p>
            An NGO website crafted using React for frontend and Node.js for
            backend, fostering community engagement and philanthropic
            initiatives.
          </p>
        </div>
        <div className="category" data-aos="fade-up">
          <img src={vms} alt="categoryImg" />
          <div className="title">
            <h3>TPP VMS</h3>
            <Link to="https://transcorppower-vms.vercel.app" target="_blank">
              View work <i className="fa-solid fa-link"></i>
            </Link>
          </div>
          <p>
            A visitor management system created using React vite for frontend and Node.js for
            backend, this site was created for Transcorp power PLC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
