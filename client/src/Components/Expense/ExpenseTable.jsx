import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';



const ExpenseTable = ({addedExpense}) => {


  const [newExpense] = addedExpense; //Deconstruct the object
   

  const hasMounted = useRef(false);

  const [Expense, setExpense] = useState([

  ]);

  //Update the Expense whenever addedExpense is changed
  useEffect(() => {
    if(newExpense){
      if(newExpense.amount!=="" && newExpense.description!==""){
        const dateStr = newExpense.newDate;
        const date = `${dateStr.getDate()} ${dateStr.toLocaleString('default', { month: 'long' })} ${dateStr.getFullYear()}`;
        newExpense.newDate = date;
        newExpense.amount = parseFloat(newExpense.amount);
        setExpense((prevExpense) => [...prevExpense, newExpense]);
      }
  }}, [addedExpense]);

      const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
      };
    
      const cellStyle = {
        padding: '10px',
        border: '1px solid black',
        textAlign: 'center'
      };

  return (
    <table style = {tableStyle}>
        <thead>
            <tr>
                <th style={cellStyle}>Date</th>
                <th style={cellStyle}>Details</th>
                <th style={cellStyle}>Amount</th>
                <th style={cellStyle}>Edit</th>
            </tr>
        </thead>
            
        <tbody>
            {Expense.map((Expense, index) => (
                <tr key={index}>
                    <td style={cellStyle}>{Expense.newDate}</td>
                    <td style={cellStyle}>{Expense.description}</td>
                    <td style={cellStyle}>{Expense.amount}</td>
                    <td></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ExpenseTable