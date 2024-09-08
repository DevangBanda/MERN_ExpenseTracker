import React from 'react'; 
import styled from 'styled-components';
import { BarChart } from '@mui/x-charts';

const BarGraph = styled.div`
flex: 1;
min-width: 300px; 
padding: 10px; 
border: 1px solid black; 
border-radius: 10px; 
box-shadow: 1px 6px 20px 0px; 
@media(max-width: 600px)
{
padding: 5px;}`;

const BarGraphData = () => {

    const chartData = [{Income: 10, Expense: 8, month: 'Jan'},
                        {Income: 10, Expense: 8, month: 'Feb'}, 
                        {Income: 10, Expense: 8, month: 'Mar'},
                        {Income: 10, Expense: 8, month: 'Apr'},
    ]

  return (
    <BarGraph>
        <BarChart
        dataset={chartData}
        XAxis = {[{scaleType: 'band', dataKey:'month'}]}
        series={[{dataKey: Income, label: Income, valueFormatter},
            {dataKey: Expense, label: Expense, valueFormatter},
        ]}
        width={500}
        height={300}
        borderRadius={5}
        />
    </BarGraph>
  )
}

export default BarGraphData