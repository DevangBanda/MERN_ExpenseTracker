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

const PieChartData = React.memo((props) => {

    const {data} = props; 

    const expenseData = data.map((exp) => {return{id:exp._id, value:10, label:exp.categoryName}});

  return (
    <PieChart
        series={[
            {
                data:[...expenseData], 
                innerRadius: 10,
                outerRadius: 100,
                paddingAngle: 3,
                padding: 30,
                cornerRadius: 6,
                highlightScope: {fade: 'global', highlight: 'item'}, 
                faded: {innerRadius: 30, additionalRadius: -30, color: 'gray'}, 
            },
        ]}
        slotProps={{
            legend:{
                // hidden:true,
                padding: 10,
            }
        }}
        height={300} 
    />
  )
});

export default PieChartData