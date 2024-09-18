import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../utils/logo.png";
import {Link, NavLink} from "react-router-dom"

const Container = styled.div`
display: flex; 
justify-content: space-between; 
align-items: center; 
height: 100px;
width: 100vw;
position: sticky;
z-index: 10;
color: white;
border-bottom: 1px solid black;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;


const MobileNavItems = styled.div`
display: none;
`; 


const NavItems = styled.div`
display: flex; 
justify-content: space-between; 
width: 40%;
:

@media(max-width: 400px)
{display: none;
}
`; 

const MobileMenu = styled.div`
display: none
`; 

const NavLogo = styled.div`
`;

const LinkNav = styled(NavLink)`
`;



const Logo = styled.img`
    height: 90px;
    padding-left: 30px;
`;

const MenuIcon = styled.div`
`;

const MenuImg = styled.div`
`;

const UserContainer = styled.div`
`;  

const UserImg = styled.img`
`;

const UserLogout = styled.div`
`;


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
            <LinkNav to="/">DashBoard</LinkNav>
            <LinkNav to="/budget">Budget</LinkNav>
            <LinkNav to="/">GHI</LinkNav>
            <LinkNav to="/">JKL</LinkNav>
        </MobileNavItems>

        <NavItems>
            <LinkNav to="/">DashBoard</LinkNav>
            <LinkNav to="/budget">Budget</LinkNav>
            <LinkNav to="/">GHI</LinkNav>
            <LinkNav to="/">JKL</LinkNav>
        </NavItems>

        <UserContainer>
            <UserImg>

            </UserImg>

            <UserLogout>
               
            </UserLogout>
        </UserContainer>
    </Container>
  )
}

export default Navbar