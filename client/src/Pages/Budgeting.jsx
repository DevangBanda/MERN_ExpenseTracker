import React, {useRef, useState, useEffect} from 'react'; 
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Button_Dash from '../Components/Button_Dash';
import ExpenseDisplay from '../Components/Expense/ExpenseDisplay';
import AddIcon from '@mui/icons-material/Add';
import { addExpenseCSV } from '../api';

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

const ExpenseAndCategory = styled.div`
display: flex;
flex: 1;
width: 98vw;
padding: none;
overflow-y: auto;
justify-content: center;`;

const ExpensesContainer = styled.div`
flex: ${(props) => (props.primary ? '0.75' : '0.25')}; 
display: flex;
flex-direction: column;
gap:10px;
overflow-y: auto;
min-height: 50vh;
background: ${({ theme }) => theme.bgLight};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 20px;
@media(max-width: 400px)
{
    min-height: 30vh;
}
`;

const Top = styled.div`
display: flex;
align-items: center;`;

const Head = styled.h2`
flex: 1;
display: flex;
justify-content: center;
padding-left: 10px;
`;



const Budgeting = () => {


  
  // const [pWidth, setPWidth] = useState(0);
  // const pRef = useRef(null);

  // useEffect(() => {
  //   if (pRef.current) {
  //     setPWidth(pRef.current.offsetWidth);
  //   }
  // }, [pRef]); 
  // const element = document.getElementById('myElement');

  const addExpense = async () => {
    console.log("Button pressed");
    await addExpenseCSV("Add Data Request")
      .then((res) => {
          console.log(res)
      })
  };


  return (
    <Container>
        <Division> 
            <Info>Last File uploaded on: </Info>   
            <Button_Dash text="Upload" component={<AddIcon/>} onClick={addExpense}/> 
        </Division>
        <UploadedDiv>
            <Info>Recent added Expenses</Info>
            <ExpenseAndCategory>
              <ExpensesContainer primary>
                  <ExpenseDisplay/>
                  <ExpenseDisplay/>   
                  <ExpenseDisplay/>  
                  <ExpenseDisplay/>
                  <ExpenseDisplay/>   
                  <ExpenseDisplay/>  
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

              <ExpensesContainer>
                <Top>
                  <Head>Categories</Head>
                  <Button_Dash id = "myEle"component={<AddIcon/>}></Button_Dash>
                </Top>
              </ExpensesContainer>

            </ExpenseAndCategory>
        </UploadedDiv>
        
    </Container>
  )
}

export default Budgeting