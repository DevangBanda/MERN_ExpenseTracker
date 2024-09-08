import React from "react";
import styled from "styled-components";

const Button = styled.div`
    border-radius: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 12px 26px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
    border: 1px solid ${({ theme }) => theme.primary};
    transition: transform 0.1s ease-in;
    &:hover {
    transform: scale(1.10);
    }
    @media (max-width: 600px) {
    padding: 8px 12px;
    }`;


const Button_Dash = ({text, onClick}) => {
  return (
    <Button onClick={onClick}>    
        {text}
    </Button>
  )
}

export default Button_Dash