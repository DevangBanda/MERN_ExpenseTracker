import React, {useRef, useState, useEffect} from 'react'; 
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Button_Dash from '../Components/Button_Dash';
import ExpenseDisplay from '../Components/Expense/ExpenseDisplay';
import AddIcon from '@mui/icons-material/Add';
import { addExpenseCSV } from '../api';
import TextInput from '../Components/TextInput';
import { CloudQueueSharp } from '@mui/icons-material';
import Papa from "papaparse";
import Categories from '../Components/DisplayComponents/Categories';

import {addCategory, getCategoryList, deleteCategoryList} from '../api/index';

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
  overflow: hidden; 
`;

const Division = styled.div`
display: flex;
flex-direction: row;
justify-content :space-around; 
align-items: center;
flex: 0 0 auto; 
`;

const Info = styled.h3`
width: fit-content;
flex: 0 0 auto;`;

const UploadedDiv = styled.div`
flex: 1; 
overflow-y: auto;
display: flex; 
flex-direction: column; 
align-items: center;
gap: 10px;
background: ${({ theme }) => theme.bg};
box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 10px;`;

const ExpenseAndCategory = styled.div`
display: flex;
flex: 1;
width: 98vw;
padding: none;
overflow-y: auto;
justify-content: center;
@media(max-width:700px)
{
  flex-direction: column;
}`;

const ExpensesContainer = styled.div`
flex: ${(props) => (props.primary ? '0.75' : '0.25')}; 
display: flex;
flex-direction: column;
gap:10px;
overflow-y: auto;
background: ${({ theme }) => theme.bgLight};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 20px;
@media(max-width: 700px)
{
  flex: ${(props) => (props.primary ? '0.7' : '0.3')};
}
`;


const Budgeting = React.memo(() => {
 
  //useRef for the name of the category
  const inputValueRef = useRef('');
  //useState for the the categories saved in MongoDB
  const [categoryList, setCategoryList] = useState([]);

  const [uploadedFile, setUploadedFile] = useState(null);


  const handleInputChange = (newValue) => {
    inputValueRef.current = newValue; // Update the ref without re-rendering
  }

  //Function to add expense into the list of expenses
  const handleUploadFile = async () => {

    if(!uploadedFile){
      alert("no file selected"); 
      return
    }

    Papa.parse(uploadedFile ,{
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data)
        },
    });
    
    await addExpenseCSV()
      .then((res) => {
          console.log(res)
      })
      .then(data => console.log(data))
      .catch()
      {
       
      }
  };

  const getCategoryMongo = async() => {
      await getCategoryList()
        .then((res) =>{
            const data = res.data; 
            setCategoryList(data);
            console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })

  }

  //Function to handle add category button click
  const addNewCategory = async() => {
   await addCategory({categoryName: inputValueRef.current})
   .then((res) =>
  {
    getCategoryMongo();
    console.log(res);
  })
  .catch((error) =>
  {
    console.log(error);
  });
  };

  const handleDeleteCategory = async(id) => {
    await deleteCategoryList(`${id}`)
    .then((res) => {console.log(res); 
      getCategoryMongo();
    })
  }

  return (
    <Container>
        <Division> 
            <Info>Last File uploaded on: </Info>   
            <input onChange={(e) => {setUploadedFile(e.target.files[0])}} type = "file"/>
            <Button_Dash text="Upload" component={<AddIcon/>} onClick={handleUploadFile}/> 
        </Division>
        <UploadedDiv>
            <Info>Recent added Expenses</Info>
            <ExpenseAndCategory>
              <ExpensesContainer primary>
                  
              </ExpensesContainer> 

              <ExpensesContainer>
                <Categories addNewCategory={addNewCategory} onInputChange={handleInputChange} onDelete={handleDeleteCategory} list={categoryList}/>
              </ExpensesContainer>

            </ExpenseAndCategory>
        </UploadedDiv>
        
    </Container>
  )
});

export default Budgeting