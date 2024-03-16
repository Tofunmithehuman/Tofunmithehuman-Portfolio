import "aos/dist/aos.css";
import "../Styles/style.css";
import useAos from "../Components/aos";
import { Link } from "react-router-dom";

function Contact() {
  useAos();

  return (
    <div className="Contact" id="contact">
      <div data-aos="fade-up" className="container">
        <div className="contain">
          <h3>Contact me</h3>
          <br />
          <p>
            To get more information about me and how i can help you work on
            projects, please fill out this form. I will get back to you as soon
            as possible.
            <br /><br />
            Why Fill Out This Form?
            <br />
            Personalized Assistance. <br />
            Efficient Communication. <br />
            Collaboration Opportunities.
          </p>
          <br />
          <br />
          <p>(+234) 904-634-6648</p>
          <p>tofunmibolaji13@gmail.com</p>
          <div className="social-media-icons">
            <Link to='https://github.com/Tofunmithehuman' target="_blank"><i className="fa-brands fa-github"></i></Link>
            <Link to='https://www.linkedin.com/in/tofunmithehuman/' target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to='https://wa.me/message/UGCFR27RZ5IHN1' target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
            <Link to='https://twitter.com/tofunmithehuman' target="_blank"><i className="fa-brands fa-twitter"></i></Link>
            <Link to='https://www.instagram.com/tofunmithehuman/' target="_blank"><i className="fa-brands fa-instagram"></i></Link>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Full Name" required />
          <br />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <br />
          <input type="number" placeholder="Phone" required />
          <br />
          <br />
          <input type="text" placeholder="Subject" required /> <br />
          <br />
          <textarea placeholder="Message" required />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
