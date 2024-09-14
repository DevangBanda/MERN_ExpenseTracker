import React from 'react'; 
import styled from 'styled-components';

const categoryName = {
    fontSize: '1rem',
    
}

const CategoriesDisplay = (props) => {
    const {name} = props
  return (
    <div><span style={categoryName}>{name}</span></div>
  )
}

export default CategoriesDisplay