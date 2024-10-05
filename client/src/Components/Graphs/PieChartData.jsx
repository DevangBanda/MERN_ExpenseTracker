import React from "react";
import styled from "styled-components";
import {PieChart} from "@mui/x-charts";
import AmountDisplay from "../Expense/AmountDisplay";


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
    // const expenseData1 = data.map((exp) => {return{id:exp._id, value:10, label:exp.categoryName}});  

    const sumByCategory = (data) => {
        return data.reduce((acc, item) => {
            const {categoryName, amount} = item;
            const floatAmt = parseFloat(amount);
            //If the category name already exists in the accumulator, add to the value
            if(acc[categoryName]){
                acc[categoryName] += floatAmt;
            }
            //otherwise make a new and set the value
            else{
                acc[categoryName] = floatAmt;
            }
            return acc
        }, {});
    };

    const expenseData = sumByCategory(data);
    
    const res = Object.entries(expenseData).map(([key, value]) => ({key, value, label:key}));

  return (
    <PieChart
        series={[
            {
                data:[...res], 
                innerRadius: 10,
                outerRadius: 100,
                paddingAngle: 3,
                padding: 33,
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