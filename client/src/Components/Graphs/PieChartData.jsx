import React from "react";
import styled from "styled-components";
import {PieChart} from "@mui/x-charts";


const DataCard = styled.div`
flex: 1;
min-width: 300px; 
padding: 10px; 
border: 1px solid ${({theme}) => theme.bgLight}; 
border-radius: 10px; 
background:  ${({theme}) => theme.bgLight};
box-shadow: 1px 6px 10px 1px black;
@media(max-width: 600px)
{
padding: 5px;}
`;

const PieChartData = React.memo(() => {
    const chartData = [
        { id: 0, value: 30, label: 'Income' },
        { id: 1, value: 20, label: 'Expense' },
        { id: 2, value: 10, label: 'Saving' },
    ]

  return (
    <PieChart
        series={[
            {
                data:[...chartData], 
                highlightScope: {fade: 'global', highlight: 'item'}, 
                faded: {innerRadius: 30, additionalRadius: -15, color: 'grey'},        
            },
        ]}
        height={300} 
    />
  )
});

export default PieChartData