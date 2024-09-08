import React from 'react'; 
import styled, { ThemeProvider } from 'styled-components'
import BarGraphData from '../Components/BarGraphData';
import PieChartData from '../Components/PieChartData';


const Container = styled.div``;

const ExpenseDisplayContainer = styled.div``;

const SelectTimeline = styled.div``;

const GraphDisplay = styled.div``;




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
      </ExpenseDisplayContainer>
    </Container>
  )
}

export default Dashboard