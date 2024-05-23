import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`

  width: 90%;
  height: 260px;
  margin: 15px auto ;
  text-align: center;
  padding: 10px;
  &:hover{
  background-color: #7ec3c3;
  box-shadow: 0px 0px 5px 0px #141448;
  border-radius:10px;
  color:white;
  transition:.1s;
  cursor:default;
  
  }
  img{
    width:60px;
    height:50px;
  }
  @media(min-width:1440px){
    height:240px;
  }
`;


const HomeCards = ({children,image}) =>(
  <Cards>
    <img src={image} alt="sectionA cards"/>
    <div>
      {children}
    </div>
  </Cards>

);

export default HomeCards;



