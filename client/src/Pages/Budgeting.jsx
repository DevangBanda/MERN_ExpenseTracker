import React from 'react'; 
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Button_Dash from '../Components/Button_Dash';
import ExpenseDisplay from '../Components/Expense/ExpenseDisplay';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
  overflow: hidden; 
`;

const Division = styled.div`
display: flex;
flex-direction: row;
justify-content :space-around; 
align-items: center;
flex: 0 0 auto; 
`;

const Info = styled.h3`
width: fit-content;
flex: 0 0 auto;`;

const UploadedDiv = styled.div`
flex: 1; 
overflow-y: auto;
display: flex; 
flex-direction: column; 
align-items: center;
gap: 10px;
background: ${({ theme }) => theme.bg};
box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 10px;`;

const ExpensesContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:10px;
overflow-y: auto;
min-height: 50vh;
width: 98vw;
background: ${({ theme }) => theme.bgLight};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 20px;
@media(max-width: 400px)
{
    min-height: 30vh;
}
`;

const Budgeting = () => {
  return (
    <Container>
        <Division> 
            <Info>Last File uploaded on: </Info>   
            <Button_Dash text="Upload" component={<AddIcon/>}/> 
        </Division>
        <UploadedDiv>
            <Info>Recent added Expenses</Info>
            <ExpensesContainer>
                <ExpenseDisplay/>
                <ExpenseDisplay/>   
                <ExpenseDisplay/>  
                <ExpenseDisplay/>
                <ExpenseDisplay/>   
                <ExpenseDisplay/>  
                <ExpenseDisplay/>
                <ExpenseDisplay/>   
                <ExpenseDisplay/>  

            </ExpensesContainer>  
        </UploadedDiv>
        
    </Container>
  )
}

export default Budgeting