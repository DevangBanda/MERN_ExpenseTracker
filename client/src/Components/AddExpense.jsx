import React, {useState, useMemo} from 'react'; 
import styled from 'styled-components';
import TextInput from './TextInput';
import Input_Dash from './Input_Dash';
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

const AddExpense = React.memo(({onAddExpense}) => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [expense, setExpense] = useState({description: '', amount: ''})

      // Function to handle description change
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

    // Function to handle amount change
    const handleAmountChange = (value) => {
        setAmount(value);
      };

    const handleAddExpenseClick = () => {
        setExpense({description, amount });

        onAddExpense({description, amount});
    }


  return (
    <Expense>
    <SubtopicHeading>Add Expense</SubtopicHeading>
      <Input_Dash  
        name = "description"
        value={description}
        onChange={handleDescriptionChange}
        type="text"
        placeholder="Enter description"
        label = "Details of Expense"
        />
    
      <Input_Dash 
        name = "amount"
        value={amount}
        onChange={handleAmountChange}
        type="text"
        placeholder="Enter amount"
        validateFloat={true} // Enable float validation
        label = "Enter Amount"
        />

      {/* Add Date picker  */}
      <Button_Dash type="submit" text="Add Expense" onClick={handleAddExpenseClick}/>   

    </Expense>

  )
})

export default AddExpense