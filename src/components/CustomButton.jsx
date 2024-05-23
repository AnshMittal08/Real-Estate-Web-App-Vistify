import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border-radius: 7px;
  text-transform: none;
  display: block;
  border: 2px solid transparent;
  &:hover {
    background-color: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ backgroundColor }) => backgroundColor};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ heroBtn, getStartedBtn }) =>
      (heroBtn || getStartedBtn) && "0 auto 3rem auto"};
    width: ${({ heroBtn, getStartedBtn }) => (heroBtn || getStartedBtn) && "90%"};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ guideBtn }) => guideBtn && "3rem"};
    width: ${({ guideBtn }) => guideBtn && "90%"};
  }
`;

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      heroBtn={heroBtn}
      guideBtn={guideBtn}
      getStartedBtn={getStartedBtn}
    >
      {buttonText}
    </StyledButton>
  );
};

export default CustomButton;
