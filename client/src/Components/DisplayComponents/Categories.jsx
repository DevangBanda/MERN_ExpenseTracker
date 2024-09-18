import React,{useState, useRef} from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import CategoriesDisplay from '../CategoriesDisplay';

const Container = styled.div`
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

const Categories = ({props}) => {
  console.log("hed");

    const [categoryList, setCategoryList] = useState([]);

    const elementRef = useRef(null);
    const [addCategory, setAddCategory] = useState(false);
    const [categoryInput, setCategoryInput] = useState("");

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
    setCategoryList((categoryList) => categoryList.filter((categ) => categ.id !== id));
  }


  return (
    <Container>
         <Top>
            <Head>Categories</Head>
        </Top>
        <Top>
            <input ref={elementRef} type="text" placeholder={"Add new Category"}/>
            <button onClick={handleCategoryAdd} component={<AddIcon/>}></button>
        </Top>
        <Bottom>
            {categoryList.map((category) => (<CategoriesDisplay onClick={handleCategoryDelete} id={category.id} key={category.id} name={category.name}/>))}
        </Bottom>

    </Container>
  )
}

export default Categories