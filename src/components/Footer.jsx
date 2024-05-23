import React from "react";
import "./Footer.css"; 
import fbIcon from "../assets/fbicon.png";
import twitterIcon from "../assets/twittericon.png";
import linkedinIcon from "../assets/linkedinicon.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="custom-container">
        <div className="box1">
          <h2>Products</h2>
          <Link to="/Listings"><span className="footer-link">Listing</span></Link>
          <br />
          <Link to="/agents"><span className="footer-link">Agents</span></Link>
          <br />
          <Link to="/testimonials"><span className="footer-link">Testimonials</span></Link>
        </div>

        <div className="box1"> 
          <h2>Company</h2>
          <Link to="/partnerships"><span className="footer-link">Partnerships</span></Link>
          <br />
          <Link to="/terms"> <span className="footer-link">Terms of Use</span> </Link>
          <br />
          <Link to="/privacy"><span className="footer-link">Privacy</span></Link>
          <br />
        </div>

        <div className="box1">
          <h2>Get in touch</h2>
          <p>Envision your dream home with Vistify.</p>
          <div className="icon-box">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
