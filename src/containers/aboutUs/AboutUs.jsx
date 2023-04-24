import React from "react";
import "./aboutUs.css"
import Article from "../../components/article/Article";
import hero from "../../assets/Airport-Limo 1.png";

const AboutUs = () => {
  return (
    <div className="syntax__aboutUs">
      <img src={hero} alt="Black Mercedes" />
      <div>
        <Article
          head="Who are we?"
          topic="We are Exceptional Private Drivers"
          text="Our clients receive remarkable results because we get to help them build their business without compromising our creativity! We love what we do in the world of finance."
        />
      </div>
    </div>
  );
};

export default AboutUs;
