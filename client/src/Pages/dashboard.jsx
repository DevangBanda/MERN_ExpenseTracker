import React from 'react'; 
import styled, { ThemeProvider } from 'styled-components'
import BarGraphData from '../Components/Graphs/BarGraphData';
import PieChartData from '../Components/Graphs/PieChartData';
import LineChartData from '../Components/Graphs/LineChartData';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';



const Container = styled.div`
flex: 1; 
display: flex; 
flex-direction: column;
`;

const ExpenseDisplayContainer = styled.div``;

const SelectTimeline = styled.div``;

const GraphDisplay = styled.div`
flex: auto;
display: flex; 
flex-direction: row; 
gap: 20px;
padding: 10px;
`;
const AddExpense = styled.div`
width: 40%;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
padding: 10px;
gap: 8px;
color: ${({theme}) => theme.text_primary};
padding: 10px; 
border: 1px solid black; 
border-radius: 10px; 
`;

const ExpenseHistory = styled.div`

`;


const SubtopicHeading = styled.div`
background: grey;
`;

const Dashboard = () => {
 
  return (
    <Container>
      <ExpenseDisplayContainer>
        <SelectTimeline>

        </SelectTimeline>
        <GraphDisplay>
          <PieChartData/>
          <BarGraphData/>
        </GraphDisplay>
        <GraphDisplay>
          <LineChartData/>

          <AddExpense>
          <SubtopicHeading>Add Expense</SubtopicHeading>
            <TextInput 
              label = "Description"
              placeholder = "Enter description of Expense"
              onChange={(e) => (e.target.value)}
              />
          
            <TextInput 
              label = "Amount"
              placeholder = "Enter amount in $"
              onChange={(e) => (e.target.value)}/>

            <TextInput 
            label = "Replace with Drop down"
            placeholder = "Income, expense or saving"/>

            {/* Add Date picker  */}
            <Button  text="Add Expense" />   

          </AddExpense>

        </GraphDisplay>
      </ExpenseDisplayContainer>

      <ExpenseHistory>

      </ExpenseHistory>

    </Container>
  )
}

export default Dashboard