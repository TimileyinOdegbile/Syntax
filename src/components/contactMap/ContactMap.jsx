import React from "react";
import "./contactMap.css";
import { map, latitude } from "../../assets/asset";

const ContactMap = () => {
  return (
    <div className="syntax__contactMap">
      <img src={map} alt="our location on map" />
      <div className="syntax__contactMap--latitude" >
        <img src={latitude} alt="Latitiude" />
      </div>
    </div>
  );
};

export default ContactMap;