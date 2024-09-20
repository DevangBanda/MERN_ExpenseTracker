import React from 'react'; 
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 5px;`;


const Label = styled.div``;

const Input = styled.input`
  border: 2px solid black; 
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:focus-within {
    border-color: ${({ theme }) => theme.border};
  }`;

const Input_Dash = ({label, placeholder, type, value, validateFloat}) => {


    //Input Validation for the amount
    const handleChange = (e) => {
        let {value} = e.target; 

        if(validateFloat){
            if(!isFinite(value) && !/^[+-]?\d+(\.\d+)?$/.test(value)){
                return
            }
        }
        onChange(value);
    };

  return (
    <Container>
        <Label>
            {label}
        </Label>
        <Input
            label = {label}
            type={type}
            value={value}
            placeholder={placeholder}/>
    </Container>
  );
};

// Input_Dash.propTypes = {
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//     type: PropTypes.string,
//     placeholder: PropTypes.string,
//     validateFloat: PropTypes.bool
// }; 

// Input_Dash.defaultProps = {
//     type: 'text',
//     placeholder: '',
//     validateFloat: false
// };

export default Input_Dash