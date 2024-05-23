import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const SellPageStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;

  .sell-head {
    text-align: center;
    background-color: #7ec3c3;
    color: #fff;
    border-radius: 0.5em;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;

  .form-input {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
      color: #293064;
      font-weight: bold;
    }

    input,
    textarea,
    select {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    textarea {
      height: 100px;
    }
  }

  .submit-btn {
    text-align: center;

    button {
      width: 200px;
      height: 50px;
      border: none;
      border-radius: 5px;
      background-color: #7ec3c3;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #323d3d;
      }
    }
  }
`;

const SellPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    area: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    date: '',
    price: '',
    summary: '',
    image: null,
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('sellFormData', JSON.stringify(formData));

    alert('Form submitted successfully!');

    navigate('/');
  };

  return (
    <>
      <Navbar />
      <SellPageStyle>
        <div className="sell-head">
          <h3>Want to sell your home?</h3>
          <p>Let's take that burden off you. Just fill out the form below and we will contact you.</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
          </div>
          <div className="form-input">
            <label htmlFor="number">Phone Number:</label>
            <input type="text" name="number" value={formData.number} onChange={handleInputChange} placeholder="Enter your phone number" />
          </div>
          <div className="form-input">
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your address" />
          </div>
          <div className="form-input">
            <label htmlFor="area">Area:</label>
            <input type="text" name="area" value={formData.area} onChange={handleInputChange} placeholder="Enter area" />
          </div>
          <div className="form-input">
            <label htmlFor="type">Type:</label>
            <input type="text" name="type" value={formData.type} onChange={handleInputChange} placeholder="Enter type" />
          </div>
          <div className="form-input">
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input type="text" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} placeholder="Enter number of bedrooms" />
          </div>
          <div className="form-input">
            <label htmlFor="bathrooms">Bathrooms:</label>
            <input type="text" name="bathrooms" value={formData.bathrooms} onChange={handleInputChange} placeholder="Enter number of bathrooms" />
          </div>
          <div className="form-input">
            <label htmlFor="date">Date:</label>
            <input type="text" name="date" value={formData.date} onChange={handleInputChange} placeholder="Enter date" />
          </div>
          <div className="form-input">
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" value={formData.price} onChange={handleInputChange} placeholder="Enter price" />
          </div>
          <div className="form-input">
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" value={formData.summary} onChange={handleInputChange} placeholder="Enter summary"></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" onChange={handleImageChange} />
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </SellPageStyle>
      <Footer />
    </>
  );
};

export default SellPage;

