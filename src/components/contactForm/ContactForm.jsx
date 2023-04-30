import React from "react";
import "./contactForm.css";
import { recaptcha, phone, email, address } from "../../assets/asset";

const ContactForm = () => {
  return (
    <div className="syntax__contactForm--card">
      <div className="syntax__contactForm--head">
        <h2>Contact Us</h2>
        <div className="syntax__contactForm--headline"></div>
        <p>
          If you have any questions, you can contact with us so that we can give
          you a satisfying answer.
        </p>
      </div>
      <div className="syntax__contactForm--forms">
        <div className="syntax__contactForm--form">
          <div className="syntax__contactForm--form__hero">
            <input
              className="syntax__contactForm--form_name"
              placeholder="Name"
            />
            <input
              className="syntax__contactForm--form_email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="syntax__contactForm--form_phone"
              placeholder="Phone number"
            />
          </div>
          <div>
            <input
              className="syntax__contactForm--form_message"
              placeholder="Your Message..."
            />
          </div>
          <div className="syntax__contactForm--form_recaptcha">
            <input type="checkbox"
              className="syntax__contactForm--form_checkbox"
              placeholder="Your Message..."
            />
            <p>I'm not a robot</p>
            <img src={recaptcha} alt="the recaptcha" />
          </div>
          <div className="syntax__contactForm--form_submit">
            <button>Submit</button>
          </div>
          <div className="syntax__contactForm--form_contact" >
            <img src={phone} alt="Phone" />
            <img src={email} alt="email" />
            <img src={address} alt="address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
