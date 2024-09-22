import { Category } from '@mui/icons-material';
import React, {useEffect, useState} from 'react'; 
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

const NewContainer = styled.div`
flex: 1; 
display: flex;
flex-direction: column;
min-height: 200px;
gap:10px;
overflow-y: auto;
background: ${({ theme }) => theme.bgLight};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 20px;`

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


const TryExpense = ({list}) => {

  const [expenseList, setExpenseList] = useState([null]);

    useEffect(() => {
        setExpenseList(list);    
    }, [list]);

  return (
    <NewContainer>
        {list.map((exp) => (
            <Container key={exp._id}>
                <Date>{exp.dateStr}</Date>
                <Desc>{exp.description}</Desc>
                <Amount>{exp.amount}</Amount>
            </Container>))}
        
     {/* <Date>{dt}</Date>
            <Desc>{description}</Desc>
            <Amount>{amount}</Amount>
            <Type>Type</Type> */}
    </NewContainer>
  )
}

export default TryExpense