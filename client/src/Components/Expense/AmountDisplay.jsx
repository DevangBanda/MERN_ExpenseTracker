import { FullscreenExit } from '@mui/icons-material';
import React from 'react'; 
import styled from 'styled-components';

const container = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    border: '1px solid black', 
    borderRadius: '10px',
    flex: '0.5',
    margin: '5px',
}

const heading = {
    margin: '0px',
    width: 'fit-content',
    padding: '10px',
    fontSize: '2rem',
}

const heading2 = {
    margin: '0px',
    padding: '10px',
    }
    
const AmountDisplay = (props) => {
    const {type, amount} = props
  return (
    <div style={container}>
        <h1 style={heading}>{type}</h1>
        <h2 style={heading2}>{amount}</h2>
    </div>
  )
}

export default AmountDisplay