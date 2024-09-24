import React, {useState, useRef, useEffect} from 'react'; 
import styled from 'styled-components';
import TextInput from './TextInput';
import Input_Dash from './Input_Dash';
import Button_Dash from './Button_Dash';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Today } from '@mui/icons-material';
import {getCategoryList} from '../api/index';


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
    const [date, setDate]= useState(dayjs(new Date()));
    const [categoryList, setCategoryList] = useState([]);
    
    const categoryRef = useRef(null);

      // Function to handle description change
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

    // Function to handle amount change
    const handleAmountChange = (value) => {
        setAmount(value);
      };

    const handleAddExpenseClick = () => {
        if(!amount=="" && !description==""){
            const {$M, $D, $y} = date; 
            let month = $M; 
            let year = $y; 
            let day = $D;
            
            const newDate = new Date(year, month, day);
            const dateStr = newDate.toLocaleDateString();
            const category = categoryRef.current;
            onAddExpense({dateStr, description, amount, category});
        }
        else{
            window.alert("Amount and description cannot be empty");
        }
    };

    const getCategoryMongo = async() => {
      await getCategoryList()
        .then((res) =>{
            const data = res.data; 
            setCategoryList(data);
        })
        .catch((error) => {
          console.log(error);
        })

  }

  useEffect(() => {
    getCategoryMongo();
  }, []);

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
      
      <select name="categories" onChange={(e) => {categoryRef.current = e.target.options[e.target.selectedIndex].getAttribute('data');}}>
        {categoryList.map((cat) => (<option data={cat._id} key={cat._id}>{cat.categoryName}</option>))}
      </select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(newDate) => setDate(newDate)} defaultValue={Date.Today}
            sx={{
              color: '#FFFFFF', // Uses theme color
            }}/>
        </LocalizationProvider>

      <button type="submit" text="Add Expense" onClick={handleAddExpenseClick}/>   

    </Expense>
  )
})

export default AddExpense