
import React from "react";
import "./FlatItem.css";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: #7ec3c3;
  width: auto;
  border-radius: 5px;
  padding: 10px;
  border: 2px solid transparent;
  font-weight: bold;
  color: white;
  transition: 0.2s ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px #7ec3c3;
    background: transparent;
    border: 2px solid #7ec3c3;
    color: black;
  }
`;

const FlatItem = ({ slug, title, price, bedrooms, bathrooms, sqft, im, address, images, description, propertyDetails, features, categories }) => {
  return (
    <div className="text-center col-lg-4 col-12 col-md-6">
      <div className="item">
        <div className="item-image">
          <img className="img-fluid" src={im} alt="flat" />
        </div>
        <div className="item-description">
          <div className="house">
            <span className="item-title">{title}</span>
            <span className="item-price">₹{price}</span>
          </div>
          <br />
          <div className="item-icon d-flex align-items-center justify-content-between">
            <div className="ii">
              <div><p style={{ fontSize: "23px" }}>🛏️ </p> <p>{bedrooms}</p></div>
              <div><p style={{ fontSize: "23px" }}>🛁 </p> <p>{bathrooms}</p></div>
              <div><p style={{ fontSize: "23px" }}>🏠 </p> <p>{sqft} sqft</p></div>
            </div>
          </div>
          <br />
          <div className="btn btn-detail">
            <Link 
              to="/flat-detail"
              state={{ slug, title, price, bedrooms, bathrooms, sqft, im, address, images, description, propertyDetails, features, categories }}
            >
              <Button>View Full Property</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatItem;
