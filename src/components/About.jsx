import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="about-us">
      <div className="header">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Vistify, our mission is to simplify the process of buying and selling properties by providing a seamless and transparent platform for all users. We aim to empower our customers with the tools and information they need to make informed real estate decisions.
          </p>
        </section>
        <section className="ceo-message">
          <h2>Message from Our CEO</h2>
          <p>
            "At Vistify, we believe in the power of technology to transform the real estate industry. Our platform is built on the principles of trust, transparency, and innovation. We are committed to providing our users with the best possible experience and helping them achieve their real estate goals. Thank you for choosing Vistify as your trusted real estate partner."
          </p>
          <p>- Ansh, CEO of Vistify</p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading real estate platform, recognized for our commitment to innovation, integrity, and excellence. We strive to create a trusted environment where buyers, sellers, and agents can connect effortlessly and achieve their real estate goals.
          </p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.</li>
            <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do. We are dedicated to providing exceptional service and support.</li>
            <li><strong>Innovation:</strong> We embrace technology and innovation to continuously improve our platform and deliver the best possible experience to our users.</li>
            <li><strong>Excellence:</strong> We strive for excellence in every aspect of our business, from our user interface to our customer support.</li>
          </ul>
        </section>

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;


