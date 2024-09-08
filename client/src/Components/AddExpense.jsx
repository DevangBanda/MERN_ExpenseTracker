import React from 'react'; 
import styled from 'styled-components';
import TextInput from './TextInput';

import Button_Dash from './Button_Dash';

const Expense = styled.div`
width: 40%;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
padding: 10px;
gap: 8px;
background: ${({theme}) => theme.bgLight};
box-shadow: 1px 6px 10px 1px black;
color: ${({theme}) => theme.text_primary};
padding: 10px; 
border: 1px solid black; 
border-radius: 10px; 
`;


const SubtopicHeading = styled.div`
background: grey;
`;

const AddExpense = () => {

    const handleAddExpenseClick = () => {
        console.log("buttonClicked");
    }
  return (
    <Expense>
    <SubtopicHeading>Add Expense</SubtopicHeading>
      <TextInput 
        label = "Description"
        placeholder = "Enter description of Expense"
        onChange={(e) => (e.target.value)}
        />
    
      <TextInput 
        label = "Amount"
        placeholder = "Enter amount in $"
        onChange={(e) => (e.target.value)}/>

      <TextInput 
      label = "Replace with Drop down"
      placeholder = "Income, expense or saving"/>

      {/* Add Date picker  */}
      <Button_Dash  text="Add Expense" onClick={handleAddExpenseClick}/>   

    </Expense>

  )
}

export default AddExpense