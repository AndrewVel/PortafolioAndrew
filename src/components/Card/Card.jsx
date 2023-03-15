import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <span>{heading}</span>
      <img src={emoji} alt="" />
      <img src={emoji} alt="" />
      <img src={emoji} alt="" />
    </div>
  );
};

export default Card;
