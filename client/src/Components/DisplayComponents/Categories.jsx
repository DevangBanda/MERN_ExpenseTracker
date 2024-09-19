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

const Categories = ({addNewCategory, onInputChange, list, onDelete}) => {

    const [categoryList, setCategoryList] = useState([]);
    const elementRef = useRef(null);

  //Function to handle add category button click
  const handleCategoryAdd = () => {
    setCategoryList([...categoryList, {id: Date.now(), name:elementRef.current.value}]);
    addNewCategory();
  }

  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  //Function to handle delete category button click 
  const handleCategoryDelete = (id) => {
    //setCategoryList((categoryList) => categoryList.filter((categ) => categ.id !== id));
    onDelete(id);
  }


  return (
    <Container>
         <Top>
            <Head>Categories</Head>
        </Top>
        <Top>
            <input ref={elementRef} onChange={handleChange} type="text" placeholder={"Add new Category"}/>
            <button onClick={() => handleCategoryAdd()} component={<AddIcon/>}></button>
        </Top>
        <Bottom>
            
            {list.map((category) => (<CategoriesDisplay onClick={handleCategoryDelete} id={category._id} key={category._id} name={category.categoryName}/>))}
        </Bottom>

    </Container>
  )
}

export default Categories