import React, {useState} from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import { userSignUp } from '../api';

const Container = styled.div`
display: flex; 
flex-direction: column;
gap:20px;
width: 80%;
@media(max-width: 800px)
{gap:8px;}`; 

const TextPrimary = styled.div`
font-size: 30px; 
font-weight: bold;
color:${({theme}) => theme.TextSecondary}`; 

const TextSecondary = styled.div`
color:${({theme}) => theme.menu_secondary_text}`; 
; 

const ForgotButton = styled.div`
color:${({theme}) => theme.TextSecondary}; 
cursor:pointer
`;


const SignUp = () => {
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



    const validateInput = () => {
    if(!name || !email || !password)
    {
      alert("Fill in all the blanks"); 
      return false;
    }
    return true;
  }

  const handleSignUp = async() =>{
    if(validateInput())
    {
      await userSignUp({name, email, password})
      .then((res) =>{
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <Container>
        <div>
            <TextPrimary>Create New Account</TextPrimary>
            <TextSecondary>Please enter your credentials</TextSecondary>
        </div>
        <TextInput label="Full Name" placeholder={"Enter your full name"}></TextInput>

        <TextInput label="Email Address" placeholder={"Enter your email address"}></TextInput>
        
        <div>
            <TextInput label="Password" placeholder={"Enter your password"}></TextInput>
        </div>
        
        <Button onClick={handleSignUp} text="Sign Up"></Button>
    </Container>
  )
}

export default SignUp