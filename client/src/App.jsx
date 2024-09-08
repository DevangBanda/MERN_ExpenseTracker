import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './Pages/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Navbar from './Components/Navbar';


const Container = styled.div`
height: 100%; 
widht: 100vw;`;


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
  <BrowserRouter>
    <Container>
      <Navbar/>
        <Routes> 
          <Route path = "/" exact element={<Dashboard/>}/>
          <Route path = "/budget" exact element={<Dashboard/>}/>
          <Route path = "/" exact element={<Dashboard/>}/>
        </Routes>
    </Container>
  </BrowserRouter>
  )
}

export default App
