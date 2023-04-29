import React from "react";
import "./testimonials.css";
import Brand from "../../components/brand/Brand";
import { group1, group2, group3 } from "../../assets/asset";

const Testimonials = () => {
  return (
    <div className="syntax__testimony">
      <Brand />
      <div className="syntax__testimonials">
        <p>Testimonials</p>
        <h3>What Clients says</h3>
        <div className="syntax__testimonials--comments">
          <img src={group3} alt="What clients saying" />
          <img src={group2} alt="What clients saying" />
          <img src={group1} alt="What clients saying" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
