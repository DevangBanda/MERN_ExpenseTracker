import { FullscreenExit } from '@mui/icons-material';
import React from 'react'; 
import styled from 'styled-components';

const container = {
    display: 'flex', 
    flexDirection: 'column', 
    border: '1px solid black', 
    borderRadius: '10px',
    flex: '0.5',
    margin: '5px',
}

const AmountDisplay = (props) => {
    const {type, amount} = props
  return (
    <div style={container}>
        <h1>{type}</h1>
        <h2>{amount}</h2>
    </div>
  )
}

export default AmountDisplay