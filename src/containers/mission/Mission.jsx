import React from "react";
import "./mission.css";
import hero from "../../assets/Rectangle 9.png";
import Article from "../../components/article/Article";
import Resume from "../../components/resume/Resume";

const Mission = () => {
  return (
    <div className="syntax__mission">
      <div className="syntax__mission--article">
        <Article
          head="Our Mission"
          topic="We are Professional Chauffeurs"
          text="Our clients can rely on us in terms of accounting, budget planning,
          taxes etc. We provide a wide range of financial services for
          businesses and individual purposes."
        />
        <div className="syntax__mission--resume">
            <div className="resume-box">
            <Resume head="1500" body="Successful Rides" />
            <Resume head="13" body="Years of Experience" />
            </div>
            <div className="resume-box">
            <Resume head="300" body="Satisfied Partners & Clients" />
            <Resume head="33" body="Company's Office" />
            </div>
        </div>
      </div>
      <div className="syntax__mission--hero">
        <img src={hero} alt="Lady in coat sitting in Black Mercedes" />
      </div>
    </div>
  );
};

export default Mission;
