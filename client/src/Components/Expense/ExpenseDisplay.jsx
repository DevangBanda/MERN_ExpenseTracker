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
display: flex;
justify-content: center;
flex: 0.6;
border-right: 3px solid ${({theme}) => theme.bgLight};
 `;

const Desc = styled.div`
display: flex;
justify-content: center;
flex: 1;
border-right: 3px solid ${({theme}) => theme.bgLight};
`;

const Amount = styled.div`
display: flex;
justify-content: center;
flex: 1;
border-right: 3px solid ${({theme}) => theme.bgLight};
`;

const Type = styled.div`
flex: 0.6;
display: flex;
justify-content: center;
`;


const ExpenseDisplay = (props) => {
  const {dt, description, amount, category} = props;
  return (
    <Container>
        <Date>{dt}</Date>
        <Desc>{description}</Desc>
        <Amount>{amount}</Amount>
        <Type>Type</Type>
    </Container>
  )
}

export default ExpenseDisplay