import React from "react";
import './driverCard.css';

const DriverCard = ({ image, driver }) => {
    return (
        <div className="syntax__driverCard">
            <div className="syntax__driverCard--hero"><img src={image} alt="Drivers"/></div>
            <h4>{driver}</h4>
            <p>Chauffer</p>
        </div>
    )
}

export default DriverCard;