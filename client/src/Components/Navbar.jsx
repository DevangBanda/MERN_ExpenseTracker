import React from 'react';
import styled from 'styled-components';
import logo from "../utils/logo.png";


const Container = styled.div`
display: flex; 
`;


const MobileNavItems = styled.div``; 
const NavItems = styled.div``; 
const NavLink = styled.div``;
const MobileMenu = styled.div``; 
const NavLogo = styled.div``; 

const Logo = styled.img`
    width: 100px;
`;

const MenuIcon = styled.div``;







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