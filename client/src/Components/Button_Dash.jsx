import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
    transition: transform 0.1s ease-in;
    cursor: pointer;
    &:hover {
    transform: scale(1.10);
    font-size: 18px;
    }
    @media (max-width: 600px) {
      padding: 10px 12px;}
    `;



const Button_Dash = ({text, key, type, onClick, component}) => {
  return (
    <Container key={key} onClick={onClick}>
      {component}
      <button onClick={onClick}>    
          {text}
      </button>
    </Container>
  )
}

export default Button_Dash