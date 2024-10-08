import React from 'react'; 
import { LineChart } from '@mui/x-charts';
import styled from 'styled-components';


const LineChartData = React.memo((props) => {

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

    const {data} = props;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

    const monthOrder = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, 
    November: 10,December: 11
    };
    
    const sumByCategoryAndMonth = (data) => {
        return data.reduce((acc, item) => {
            const {categoryName, amount, dateStr} = item;

            const floatAmt = parseFloat(amount);

            //extract year and month from the date String
            const dateObj = new Date(dateStr);
            const year = `${dateObj.getFullYear()}`;
            const month = monthNames[dateObj.getMonth()];
            //Create a key for accumulator
            const key = `${year}-${month}-${categoryName}`;

            // const monthKey = `${month}`;
            //If the category name already exists in the accumulator, add to the value
            if(acc[key]){
                acc[key] += floatAmt;
            }
            //otherwise make a new and set the value
            else{
                acc[key] = floatAmt;
            }
            return acc
        }, {});
    };
    
    const expenseData = sumByCategoryAndMonth(data);

    const res = Object.entries(expenseData).map(([key, value]) => ({key, value, label:key}));

    const chartData = res.reduce((acc, {key, value}) => {
        const [year, month, category] = key.split('-');

        if(!acc[month]){
            acc[month] = {month: month};
        }

        acc[month][category] = value;

        return acc
    }, {});
    
    
    const result = Object.values(chartData).map((monthData) => ({
        ...monthData,
        month: monthData.month, // Add month as a separate property
        }));

    console.log(result);
    
    const sortedRes = result.sort((a,b) => monthOrder[a.month] -  monthOrder[b.month]);
    
    
        // Extract unique categories
    const uniqueCategories = new Set();
    sortedRes.forEach(monthData => {
        Object.keys(monthData).forEach(key => {
            if (key !== 'month') { // Exclude the month property
                uniqueCategories.add(key);
            }
            });
    });
    
    // Convert Set to Array
    const categoriesArray = Array.from(uniqueCategories);

    console.log(categoriesArray);
    
    // Create an array of objects with label and dataKey
    const categoryObjects = categoriesArray.map(category => {
        // Get the total value for the category across all months
        return {
        dataKey: category,
        label: category
        
        };
    });
        
  return (
        <LineChart
            dataset={result}
            xAxis = {[{scaleType: 'band', dataKey:'month'}]}
            series={categoriesArray.map((cat) => {return{label: cat, dataKey: cat}})}
            height={300}
        />
  )
});

export default LineChartData