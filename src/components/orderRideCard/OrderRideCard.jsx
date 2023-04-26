import React from "react";
import SmallButton from "../button/smallButton/SmallButton";
import "./orderRideCard.css";

const OrderRideCard = ({ carName, carImage, seater, color, cost }) => {
  return (
    <div className="syntax__pricing--hero">
      <div>
        <h4>{carName}</h4>
      </div>
      <div className="pricing--hero-image">
        <img src={carImage} alt="Car Ordered" />
      </div>
      <div>
        <h4>Car Details</h4>
      </div>
      <div>
        <p>
          Seat:
          <br />
          <span>{seater} Seater</span>
        </p>
      </div>
      <div>
        <p>
          Color Variation:
          <br />
          <span>{color}</span>
        </p>
      </div>
      <div>
        <p>
          Cost Per Day:
          <br />
          <span>{cost}</span>
        </p>
      </div>
      <SmallButton content="Order Ride" />
    </div>
  );
};

export default OrderRideCard;
