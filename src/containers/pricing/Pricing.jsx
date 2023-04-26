import React from "react";
import "./pricing.css";
import Heading from "../../components/heading/Heading";
import OrderRideCard from "../../components/orderRideCard/OrderRideCard";

import regular from "../../assets/Black_Mercedes_Benz_S_Class_2012_Car_PNG_Clipart-106 1.png";
import jeep from "../../assets/Black_Mercedes_Benz_GL_2013_Car_PNG_Clipart-105 1.png";
import limousine from "../../assets/HOR_XB1_Cadillac_XTS 1.png";
import miniVan from "../../assets/pngwing 1.png";

const Pricing = () => {
  return (
    <div className="syntax__pricing">
      <Heading
        head="Our Ride Pricing"
        body="Our department is here to ensure personalized guidance. Our smart team takes care of
everything. The entire team has been great to work with from start to finish."
      />
      <div className="syntax__pricing--module">
        <div className="syntax__pricing--card">
          <OrderRideCard
            carName="Regular Car"
            carImage={regular}
            seater="Four"
            color="Black & White"
            cost="$5,000"
          />
        </div>
        <div className="syntax__pricing--card">
          <OrderRideCard
            carName="Jeep"
            carImage={jeep}
            seater="Five"
            color="Black & White"
            cost="$9,000"
          />
        </div>
        <div className="syntax__pricing--card">
          <OrderRideCard
            carName="Mini Van"
            carImage={miniVan}
            seater="Six"
            color="Black & White"
            cost="$9,500"
          />
        </div>
        <div className="syntax__pricing--card">
          <OrderRideCard
            carName="Limousine"
            carImage={limousine}
            seater="Four"
            color="Black & White"
            cost="$20,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
