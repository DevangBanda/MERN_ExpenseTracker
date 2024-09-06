import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../utils/logo.png";


const Container = styled.div`
display: flex; 
justify-content: space-between; 
align-items: center; 
width: 100vw;
position: sticky;
top: 0;
z-index:10;
color:white;
border-bottom: 1px solid black;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;


const MobileNavItems = styled.div`
display: none;
`; 


const NavItems = styled.div`
display: flex; 
justify-content: space-between; 
align-items: center;
width: 40%;

@media(max-width: 400px)
{display: none;
}
`; 

const NavLink = styled.btn`

`;

const MobileMenu = styled.div`
display: none`; 

const NavLogo = styled.div``; 

const Logo = styled.img`
    width: 100px;
`;

const MenuIcon = styled.div``;
const MenuImg = styled.div``;


const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

  return (
    <Container>
        <MobileMenu>
            <MenuIcon onClick={() => setisOpen(!isOpen)}>
                <MenuImg></MenuImg>
            </MenuIcon>
        </MobileMenu>

        <NavLogo>
            <Logo src = {logo} />
        </NavLogo>

        <MobileNavItems> 
            <NavLink to="/">ABC</NavLink>
            <NavLink to="/">DEF</NavLink>
            <NavLink to="/">GHI</NavLink>
            <NavLink to="/">JKL</NavLink>
        </MobileNavItems>

        <NavItems>
            <NavLink to="/">ABC</NavLink>
            <NavLink to="/">DEF</NavLink>
            <NavLink to="/">GHI</NavLink>
            <NavLink to="/">JKL</NavLink>
        </NavItems>
    </Container>
  )
}

export default Navbar