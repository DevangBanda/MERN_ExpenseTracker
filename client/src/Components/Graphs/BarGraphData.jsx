import React from 'react'; 
import styled from 'styled-components';
import { BarChart } from '@mui/x-charts';

const BarGraph = styled.div`
flex: 1;
min-width: 300px; 
padding: 10px; 
border: 1px solid black; 
background:  ${({theme}) => theme.bgLight};
border-radius: 10px; 
box-shadow: 1px 6px 10px 1px black;
@media(max-width: 600px)
{
padding: 5px;}`;

const BarGraphData = React.memo(() => {



    //Using dataset in Bargraph, therefore, data needs to be an array of objects
    //Might need to define and use a valueFormatter with the real data
    const chartData = [{"Income": 10, "Expense": 8, 'month': 'Jan'},
                        {"Income": 10, "Expense": 8, 'month': 'Feb'}, 
                        {"Income": 10, "Expense": 8, 'month': 'Mar'},
                        {"Income": 10, "Expense": 8, 'month': 'Apr'},
    ]

  return (
    <BarGraph>
        <BarChart
        dataset={chartData}
        xAxis = {[{scaleType: 'band', dataKey:'month'}]}
        series={[{dataKey: "Income", label: "Income"},
            {dataKey: "Expense", label: "Expense"},
        ]}
        height={300}
        borderRadius={5}
        />
    </BarGraph>
  )
});

export default BarGraphData