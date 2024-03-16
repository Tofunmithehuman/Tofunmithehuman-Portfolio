import "../Styles/style.css";
import "aos/dist/aos.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";
import lura from "../Media/luravpn.jpeg";
import sarvee from "../Media/sarvee.jpeg";
import teensvoice from "../Media/teensvoice.jpeg";

function Services() {
  useAos();

  return (
    <div data-aos="fade-up" className="Services" id="services">
      <h1 className=" text-center">Oluwatofunmi Projects</h1>
      <div data-aos="fade-up" className="container">
        <div className="contain">
          <Link
            to="https://luravpn.com/"
            target="_blank"
            style={{ color: "white" }}
          >
            <img src={lura} alt="Lura-Vpn" />
            <h5>Lura-vpn</h5>
          </Link>
          <p>
            A React.js and TailwindCSS-powered VPN hosting landing page,
            offering secure browsing solutions with sleek design and efficient
            functionality.
          </p>
        </div>
        <div className="contain">
          <Link
            to="https://sarvee.vercel.app/"
            target="_blank"
            style={{ color: "white" }}
          >
            <img src={sarvee} alt="Sarvee" />
            <h5>Sarvee</h5>
          </Link>
          <p>
            An e-commerce platform utilizing React.js and Bootstrap for
            frontend, Express.js for backend, and MongoDB for database, ensuring
            seamless shopping experiences.
          </p>
        </div>
        <div className="contain">
          <Link
            to="http://teensvoice.org/"
            target="_blank"
            style={{ color: "white" }}
          >
            <img src={teensvoice} alt="TeensVoice" />
            <h5>TeensVoice</h5>
          </Link>
          <p>
            An NGO website crafted using React for frontend and Node.js for
            backend, fostering community engagement and promoting philanthropic
            initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
