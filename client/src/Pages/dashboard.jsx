import React from 'react'; 
import styled, { ThemeProvider } from 'styled-components'
import BarGraphData from '../Components/Graphs/BarGraphData';
import PieChartData from '../Components/Graphs/PieChartData';
import LineChartData from '../Components/Graphs/LineChartData';

import ExpenseTable from '../Components/Expense/ExpenseTable';
import AddExpense from '../Components/AddExpense';


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


const ExpenseHistory = styled.div`

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
          <AddExpense/>

        </GraphDisplay>
      </ExpenseDisplayContainer>

      <ExpenseHistory>
        <ExpenseTable/>

      </ExpenseHistory>

    </Container>
  )
}

export default Dashboard