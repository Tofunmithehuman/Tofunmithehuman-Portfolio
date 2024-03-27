import React from "react";
import "../Styles/Styles.css";
import useAos from "./aos";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://tofunmithehuman-backend-production.up.railway.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.text();
      setSuccessMessage(result);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useAos();
  return (
    <div className="Contact" id="contact">
      <div className="container">
        <form data-aos="fade-up" onSubmit={handleSubmit}>
          <h3>
            Send a message <i className="fa-solid fa-envelope"></i>
          </h3>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message "
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button disabled={submitting}>
            {submitting ? "Submitting" : "Submit"}{" "}
            <i className="fa-solid fa-paper-plane"></i>
          </button>
          {successMessage && (
            <p id="success">
              {successMessage} <i className="fa-solid fa-check"></i>
            </p>
          )}
          <p>
            *To get more information about me and how i can help you work on
            projects, please fill out the form. I will get back to you as soon
            as possible.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
