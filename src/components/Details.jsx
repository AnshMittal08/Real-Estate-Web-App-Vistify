import React from "react";
import "./Details.css";
import houseCard from "../assets/houseCard.png";

const Details = () => {
  return (
    <div className="details-container">
      <div className="custom-box">
        <div className="img-container">
          <img src={houseCard} alt="house" className="house-img" />
        </div>

        <div className="text-box">
          <div className="divider" />
          <h2 className="heading">
            You've found a neighborhood you love.
          </h2>
          <p className="description">
            When you own a home, you commit to living in one location for a
            period of time. We are here to ensure that this will be a
            memorable experience for you.
          </p>
        </div>
      </div>

      <div className="text-flexbox">
        <div className="text-item">
          <h3 className="large-text">2500+</h3>
          <p className="small-text">Homes For Sale</p>
        </div>

        <div className="text-item">
          <h3 className="large-text">10+</h3>
          <p className="small-text">Properties Listed</p>
        </div>

        <div className="text-item">
          <h3 className="large-text">3500+</h3>
          <p className="small-text">Homes Sold</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
