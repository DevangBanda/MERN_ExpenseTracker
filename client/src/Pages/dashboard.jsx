import React, {useCallback, useState, useMemo} from 'react'; 
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

  const [expense, setExpense] = useState([]);

  const handleAddExpense = useCallback((newExpense) =>
  {
    console.log(newExpense);
    setExpense((prevExpenses) => {
      const updatedExpenses = [newExpense];
      console.log("Updated expenses:", updatedExpenses);
      return updatedExpenses;
    });
  }, []);  //Dependency array is empty, so the function is only created once

 // Memoize the expenses array
 const memoizedExpenses = useMemo(() => expense, [expense]);
   
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
          <AddExpense onAddExpense={handleAddExpense}/>

        </GraphDisplay>
      </ExpenseDisplayContainer>

      <ExpenseHistory>
        <ExpenseTable addedExpense={memoizedExpenses}/>

      </ExpenseHistory>

    </Container>
  )
}

export default Dashboard