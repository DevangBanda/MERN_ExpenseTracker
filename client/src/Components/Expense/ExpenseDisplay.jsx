import { Category } from '@mui/icons-material';
import React from 'react'; 
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
display: flex; 
max-height: 20%;
justify-content: space-around;
align-items: center;
border-radius: 15px;
font-size: 20px;
background: ${({theme}) => theme.expenseDisplay};
*{padding: 10px 10px;}
`;

const Date = styled.div`
flex: 0.6;
border-right: 3px solid ${({theme}) => theme.bgLight};
height: 100%;
margin: none;
 `;

const Desc = styled.div`
flex: 1;`;

const Amount = styled.div`
flex: 1;`;

const Type = styled.div`
flex: 0.6;`;


const ExpenseDisplay = ({}) => {
  return (
    <Container>
        <Date>Date</Date>
        <Desc>Description</Desc>
        <Amount>Amount</Amount>
        <Type>Type</Type>
    </Container>
  )
}

export default ExpenseDisplay