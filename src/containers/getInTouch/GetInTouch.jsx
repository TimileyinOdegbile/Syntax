import React from "react";
import "./getInTouch.css";
import PrimaryButton from "../../components/button/primaryButton/PrimaryButton";
// import background from "../../assets/Home background.png";

const GetInTouch = () => {
  return (
    <div className="syntax__getInTouch">
      <div className="syntax__getInTouch--hero">
        <div>
          <h3>Make your trip an unforgettable moment together.</h3>
        </div>
        <div>
          <PrimaryButton content="Get in Touch Now" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
