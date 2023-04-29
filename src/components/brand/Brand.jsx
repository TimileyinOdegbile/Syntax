import React from "react";
import "./brand.css";

import {
  volkswagen,
  chevrolet,
  ford,
  jeep,
  tesla,
  toyota,
} from "../../assets/asset";

const Brand = () => {
  return (
    <div className="syntax__brand">
      <img src={volkswagen} alt="brands" />
      <img src={chevrolet} alt="brands" />
      <img src={ford} alt="brands" />
      <img src={jeep} alt="brands" />
      <img src={tesla} alt="brands" />
      <img src={toyota} alt="brands" />
    </div>
  );
};

export default Brand;
