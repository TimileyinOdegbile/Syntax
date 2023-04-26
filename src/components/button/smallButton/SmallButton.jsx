import React from "react";
import "./smallButton.css";

const SmallButton = ({ content }) => {
  return (
    <button
      onClick={() => {
        alert("Clicked");
      }}
      className="syntax__small--button"
    >
      {content}
    </button>
  );
};

export default SmallButton;