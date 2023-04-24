import React from "react";
import NavBar from "../../components/NavBar";
import "./header.css";

const Header = () => {
  return (
    <div className="syntax__header">
      <NavBar />
      <div className="syntax__header--heading">
        <h1 className="syntax__header--head">The Best Chaffeur Company</h1>
        <p className="syntax__header--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button onClick={()=>{alert("Clicked");}} className="syntax__header--button general-button">Order Ride</button>
      </div>
      <div className="syntax__header--pagination">
        <img src="C:\Users\gh\Desktop\Project\Syntax\src\assets\pagi...png" alt="pagination" />
      </div>
    </div>
  );
};

export default Header;
