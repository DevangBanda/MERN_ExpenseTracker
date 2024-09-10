import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './Pages/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/theme';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Budgeting from './Pages/Budgeting';

const Container = styled.div`
height: 100vh; 
widht: 95vw;
margin: auto;
display: flex;
flex-direction: column;
background: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text_primary};
transition: all 0.2s ease;
`;


function App() {

  return (
  // <BrowserRouter>
  //   <Container> 
  //     <NavBar/>
  //       <Routes> 
  //         <Route path = "/" exact element={<Dashboard/>}/>
  //         <Route path = "/budget" exact element={<Dashboard/>}/>
  //         <Route path = "/" exact element={<Dashboard/>}/>
  //       </Routes>

  //   </Container>

  // </BrowserRouter>
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Container>
        <Navbar/>
          <Routes> 
            <Route path = "/" exact element={<Budgeting/>}/>
            <Route path = "/budget" exact element={<Dashboard/>}/>
            <Route path = "/account" exact element={<Budgeting/>}/>
          </Routes>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
