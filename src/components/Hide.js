import React from 'react'
import { withRouter } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import NavSinLogo from '../components/NavSinLogo';   
const NavbarHide = (props) => {
  const { location } = props;
  if (location.pathname.match(/TBA/)){
    return null;
  }

  return (
    <NavSinLogo/>
  )
}

const NavbarH = withRouter(NavbarHide);

export default NavbarHide;
