import React from "react";
import ImageGallery from 'react-image-gallery';
import { useLocation } from 'react-router-dom';
import './FlatDetail.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const FlatDetail = () => {
  const location = useLocation();
  const {
    title,
    price,
    bedrooms,
    bathrooms,
    sqft,
    address,
    images,
    description,
    propertyDetails,
    features,
    categories,
  } = location.state || {};

  if (!location.state) {
    return <div>No property details available</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="flat-detail">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Luxury Property</h1>
              <h2 className="page-description">{sqft} sqft</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">{title}</h3>
                <p className="fd-address">
                  <i className="fas fa-map-marker-alt"></i> {address}
                </p>
              </div>
              <div>
                <span className="fd-price">{price}</span>
              </div>
            </div>
            <ImageGallery
              flickThreshold={0.50}
              slideDuration={0}
              items={images}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <div className="row">
              <div className="col-lg-8">
                <div className="fd-item">
                  <h4>Description</h4>
                  <p>{description}</p>
                  <p style={{fontSize:"20px" ,width:"300px",display:"flex", justifyContent:"space-between"}}>
                    <p>🛏️ - {bedrooms}</p> 
                    <p>🛁 - {bathrooms}</p>
                    <p>🏡 - {sqft}sqft</p>
                  </p>
                </div>
                <div className="fd-item fd-property-detail">
                  <h4>Property Details</h4>
                  <div className="row">
                    {propertyDetails.map((detail, index) => (
                      <div className="col-lg-4" key={index}>
                        <span>{detail.label}: </span>
                        <span>{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fd-item fd-features">
                  <h4>Features</h4>
                  <div className="row">
                    {features.map((feature, index) => (
                      <div className="col-lg-4" key={index}>
                        <i className="fa fa-check"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fd-item">
                  <h4>Maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31561973.040565956!2d37.05858539250784!3d15.060284831835753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1715983948577!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>Category</h4>
                  <ul className="category-ul">
                    {categories.map((category, index) => (
                      <li key={index}>{category}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FlatDetail;
