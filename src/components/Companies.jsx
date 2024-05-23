import React from "react";
import "./Companies.css"; 
import logoImg from "../assets/Vistify.png";
import starsImg from "../assets/Star.png";
import logosImg from "../assets/logos.png";

const Companies = () => {
  return (
    <div className="companies-container">
      <div className="custom-container">
        <div className="left-box">
          <img src={logoImg} alt="logo" className="logo-img" />
          <p className="company-info">
            More than 5,000 trust Vistify
          </p>
        </div>
        <div className="right-box">
          <img src={starsImg} alt="stars" className="stars-img" />
          <p className="company-info">
            5-Star Rating (1k+ Reviews)
          </p>
        </div>
      </div>
      <div className="logos-container">
        <img src={logosImg} alt="logos" className="logos-img" />
      </div>
    </div>
  );
};

export default Companies;