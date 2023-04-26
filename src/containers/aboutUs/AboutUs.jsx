import React from "react";
import "./aboutUs.css";
import Article from "../../components/article/Article";
import hero from "../../assets/Airport-Limo 1.png";
import PrimaryButton from "../../components/button/primaryButton/PrimaryButton";

const AboutUs = () => {
  return (
    <div className="syntax__aboutUs">
      <div className="syntax__aboutUs--hero">
        <img src={hero} alt="Black Mercedes" />
      </div>
      <div className="syntax__aboutUs--article">
        <Article
          head="Who are we?"
          topic="We are Exceptional Private Drivers"
          text="Our clients receive remarkable results because we get to help them build their business without compromising our creativity! We love what we do in the world of finance."
        />

        <PrimaryButton content="Contact Us" />
      </div>
    </div>
  );
};

export default AboutUs;
