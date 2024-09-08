import React from 'react';
import styled from 'styled-components';



const ExpenseTable = () => {

    const expenses = [
        { date: "2024-09-08", details: "Groceries", amount: 50 },
        { date: "2024-09-07", details: "Electricity Bill", amount: 100 },
        { date: "2024-09-05", details: "Dinner", amount: 30 }
      ];

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
            {expenses.map((expense, index) => (
                <tr key={index}>
                    <td style={cellStyle}>{expense.date}</td>
                    <td style={cellStyle}>{expense.details}</td>
                    <td style={cellStyle}>{expense.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ExpenseTable