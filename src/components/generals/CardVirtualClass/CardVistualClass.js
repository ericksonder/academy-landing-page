import React from "react";
import "./CardVirtualClass.css";

const CardVistualClass = ({ title, text, type="" }) => {
  return (
    <div className={`card-virtual-class ${type}`}>
      <div className="card-virtual-class__info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="card-virtual-class__img"></div>
    </div>
  );
};

export default CardVistualClass;
