import React from 'react'; 
import { LineChart } from '@mui/x-charts';
import styled from 'styled-components';


const LineChartData = React.memo(() => {

    const chartData = [{"Income": 10, "Expense": 8, 'month': 'Jan'},
                    {"Income": 10, "Expense": 8, 'month': 'Feb'}, 
                    {"Income": 10, "Expense": 8, 'month': 'Mar'},
                    {"Income": 10, "Expense": 8, 'month': 'Apr'},
                ]

    const LineContainer = styled.div`
    flex: 1;
    min-width: 300px; 
    padding: 10px; 
    border: 1px solid black; 
    border-radius: 10px; 
    background:  ${({theme}) => theme.bgLight};  
    box-shadow: 1px 6px 10px 1px black;
    @media(max-width: 600px)
    {
    padding: 5px;}`;

  return (
  
    <LineContainer>
        <LineChart
            dataset={chartData}
            xAxis = {[{scaleType: 'band', dataKey:'month'}]}
            series={[{dataKey: "Income", label: "Income"},
                {dataKey: "Expense", label: "Expense"},
            ]}
            height={300}
        />
    </LineContainer>
  )
});

export default LineChartData