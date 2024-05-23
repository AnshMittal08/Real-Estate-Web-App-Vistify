import React, { useState } from 'react';
import './Contact.css'; 
import Footer from '../Footer';
import Navbar from '../Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Contact form saved successfully');
    window.location.href = '/';
  };

  return (
    <div>
    <Navbar/>
    <br></br>
    <div className='contact-box'>
      <br></br>
      <br></br>
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className='btn1'type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <br></br>
    <br></br>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
