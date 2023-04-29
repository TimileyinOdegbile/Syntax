import React from "react";
import "./drivers.css";
import Heading from "../../components/heading/Heading";
import DriverCard from "../../components/driverCard/DriverCard";
import martinez from "../../assets/Rectangle 29.png";
import sandro from "../../assets/Rectangle 30.png";
import nedu from "../../assets/Rectangle 32.png";
import benjamin from "../../assets/photo-of-man-in-black-suit-posing-2474307 1.png";

const Drivers = () => {
  return (
    <div className="syntax__drivers">
      <Heading
        head="Our Expert Drivers"
        body="Our department is here to ensure personalized guidance. Our smart team takes care of
everything. The entire team has been great to work with from start to finish."
      />
      <div className="syntax__drivers--module">
        <DriverCard image={martinez} driver="Nashida Martinez" />
        <DriverCard image={sandro} driver="Sandro James" />
        <DriverCard image={nedu} driver="Nedu Kenneth" />
        <DriverCard image={benjamin} driver="Benjamin Franklin" />
      </div>
    </div>
  );
};

export default Drivers;
