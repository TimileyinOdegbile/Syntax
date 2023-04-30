import React from "react";
import "./contactUs.css";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactMap from "../../components/contactMap/ContactMap";

const ContactUs = () => {
    return (
        <div className="syntax__contact">
            <ContactForm />
            <ContactMap />
        </div>    
        )
};

export default ContactUs;