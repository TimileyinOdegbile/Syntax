import React from "react";
import "./primaryButton.css";

const PrimaryButton = ({ content }) => {
  return (
    <button
      onClick={() => {
        alert("Clicked");
      }}
      className="syntax__header--button general-button"
    >
      {content}
    </button>
  );
};

export default PrimaryButton;