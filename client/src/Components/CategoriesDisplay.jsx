import React from 'react'; 
import styled from 'styled-components';
import Button from '../Components/Button';
import Button_Dash from './Button_Dash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const categoryName = {
    flex: '0.8',
    textAlign: 'center',
    fontSize: '1rem', 
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 5px solid black;
`;

const CategoriesDisplay = (props) => {
    const {name, onClick, id} = props
  return (
    <Container id = {id}><h2 style={categoryName}>{name}</h2>
        <Button_Dash id={id} onClick={() => onClick(id)} component={<DeleteForeverIcon/>}></Button_Dash>
    </Container>

  )
}

export default CategoriesDisplay