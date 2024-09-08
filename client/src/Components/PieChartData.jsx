import React from "react";
import styled from "styled-components";
import {Piechart} from "@mui/x-charts";

import React from 'react'

const DataCard = styled.div`
flex: 1;
min-width: 300px; 
padding: 10px; 
border: 1px solid black; 
border-radius: 10px; 
box-shadow: 1px 6px 20px 0px; 
@media(max-width: 600px)
{
padding: 5px;}
`;

const PieChartData = () => {
    
    const chartData = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
    ]

  return (

    <DataCard>
        <Piechart
            series={[
                {
                    data:{data}, 
                    highlightScope: {fade: 'global', highlight: 'item'}, 
                    faded: {innerRadius: 30, additionalRadius: -15, color: 'grey'}, 
                    valueFormatter,
                },
            ]}
            height={300} 
        />
    </DataCard>
  )
}

export default PieChartData