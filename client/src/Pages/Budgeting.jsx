import React, {useRef, useState, useEffect} from 'react'; 
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Button_Dash from '../Components/Button_Dash';
import ExpenseDisplay from '../Components/Expense/ExpenseDisplay';
import CategoriesDisplay from '../Components/CategoriesDisplay';
import AddIcon from '@mui/icons-material/Add';
import { addExpenseCSV } from '../api';
import TextInput from '../Components/TextInput';
import { CloudQueueSharp } from '@mui/icons-material';
import Papa from "papaparse";

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

const Top = styled.div`
display: flex;
align-items: center;
padding: 0px 5px;
gap: 10px;`;

const Bottom = styled.div`
display: flex;
flex-direction: column;
gap: 1px;
width: 90%;
`;

const Head = styled.h2`
flex: 1;
display: flex;
justify-content: center;
padding-left: 10px;
`;

const inputCategory = {
  fontSize: '1rem', 
  borderRadius: '5px',
  width: 'fit-content'
}

const Budgeting = React.memo(() => {
  console.log("hed");
  const elementRef = useRef(null);
  const [addCategory, setAddCategory] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryInput, setCategoryInput] = useState("");
  
  const [uploadedFile, setUploadedFile] = useState(null);

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

  //Function to handle add category button click
  const handleCategoryAdd = () => {

    setCategoryList([...categoryList, {id: Date.now(), name:elementRef.current.value}]);
    
  }

  //Function to handle category Input Change
  const handleCategoryInputChange = (e) =>{
      setCategoryInput(e.target.value);
  }

  //Function to handle delete category button click 
  const handleCategoryDelete = (id) => {
    console.log("Bird");
    setCategoryList((categoryList) => categoryList.filter((categ) => categ.id !== id));
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
                  <ExpenseDisplay/>
              </ExpensesContainer> 

              <ExpensesContainer>
                <Top>
                  <Head>Categories</Head>
                </Top>
                <Top>
                  <input ref={elementRef} type="text" placeholder={"Add new Category"}/>
                  <Button_Dash onClick={handleCategoryAdd} component={<AddIcon/>}></Button_Dash>
                </Top>
                <Bottom>
                  {categoryList.map((category) => (<CategoriesDisplay onClick={handleCategoryDelete} id={category.id} key={category.id} name={category.name}/>))}
                </Bottom>
              </ExpensesContainer>

            </ExpenseAndCategory>
        </UploadedDiv>
        
    </Container>
  )
});

export default Budgeting