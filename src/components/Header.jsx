import React from 'react';
import styled from 'styled-components';
import Homeimg from '../assets/home.jpeg';
import Navbar from './Navbar';
import './header.css';
import { Link } from 'react-router-dom';

const Headerstyle = styled.header`
  background: url(${Homeimg}) no-repeat center center/cover;
  // height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #7ec3c3;
  width: 220px;
  border-radius: 5px;
  padding: 10px;
  border: 2px solid transparent;
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
  color: rgb(237, 236, 236);
  transition: 0.2s ease-in;
  &:hover {
    cursor: pointer;
    background: transparent;
    border: 2px solid #000336;
    color: black;
    box-shadow: 0px 2px 4px #7ec3c3;
  }
  @media (max-width: 576px) {
    width: 180px;
    font-size: 16px;
  }
`;

const Header = () => (
  <div>
    <Headerstyle>
      <Navbar />
      <div className='box'>
        <p className='title-child'>Welcome to Vistify</p>
        <p className='title'>
          Visualize your <span>ideal home.</span>
        </p>
        <p className='title-child'>
          Transform your dream home from imagination to reality with Vistify's
          <p>meticulously curated collection of exclusive properties.</p>
        </p>
        <Link to="/about"><Button>More About Us</Button></Link>
      </div>
    </Headerstyle>
  </div>
);

export default Header;
