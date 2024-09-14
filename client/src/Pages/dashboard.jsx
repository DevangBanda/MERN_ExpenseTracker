import React, {useCallback, useState, useMemo, useEffect} from 'react'; 
import styled, { ThemeProvider } from 'styled-components'
import BarGraphData from '../Components/Graphs/BarGraphData';
import PieChartData from '../Components/Graphs/PieChartData';
import LineChartData from '../Components/Graphs/LineChartData';

import ExpenseTable from '../Components/Expense/ExpenseTable';
import AddExpense from '../Components/AddExpense';
import Button_Dash from '../Components/Button_Dash';
import AmountDisplay from '../Components/Expense/AmountDisplay';


const Container = styled.div`
flex: 1; 
display: flex; 
flex-direction: column;
height: 100vh; 
width: 100vw;
overflow: auto;
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

const ChartSelector = styled.div`
flex: 0.6;
display: flex;
flex-direction: column;
align-items: center;
min-width: 300px; 
padding: 10px; 
border: 1px solid black; 
border-radius: 10px; 
background:  ${({theme}) => theme.bgLight};  
box-shadow: 1px 6px 10px 1px black;
@media(max-width: 600px)
{
padding: 5px;}
`;

const AccountDisplayContainer = styled.div`
flex: 0.4;
display: flex;
flex-direction: column;
`;

const AccountsDisplay = styled.div`
display: flex;

`;




const ButtonDiv = styled.div`
display: flex; 
gap: 10px;
height`;



const Dashboard = React.memo(() => {

  const [expense, setExpense] = useState([]);

  const [chartType, setChartType] = useState();

  const handleSetChartType = (chart) => 
  {
    setChartType(chart);
  }

  const handleAddExpense = useCallback((newExpense) =>
  {
    setExpense((prevExpenses) => {
      const updatedExpenses = [newExpense];
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
          <ChartSelector>
            <ButtonDiv>
              <Button_Dash onClick={() => handleSetChartType('pie')} text="Pie"/>
              <Button_Dash onClick={() => handleSetChartType('bar')} text="Bar"/>
              <Button_Dash onClick={() => handleSetChartType('line')} text="Line"/>
            </ButtonDiv>
              {chartType == 'bar' ? (<BarGraphData/>) : chartType == 'line' ? (<LineChartData/>) : (<PieChartData/>)}
          </ChartSelector>

          <AccountDisplayContainer>
            <AccountsDisplay>
              <AmountDisplay type="Put Timeline here"/>
            </AccountsDisplay>

            <AccountsDisplay>
              <AmountDisplay type="Income" amount="$20000"/>
              <AmountDisplay type="Income" amount="$20000"/>
            </AccountsDisplay>
          </AccountDisplayContainer>
        </GraphDisplay>
        
        <GraphDisplay>
          <AddExpense onAddExpense={handleAddExpense}/>
        </GraphDisplay>
      </ExpenseDisplayContainer>

      <ExpenseHistory>
        <ExpenseTable addedExpense={memoizedExpenses}/> 
      </ExpenseHistory>

    </Container>
  )
})

export default Dashboard