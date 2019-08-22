import React from 'react'
import { withRouter } from 'react-router-dom'; 
import navbar from '../components/Navbar';
import navSinLogo from '../components/NavSinLogo';   


const navbar = (props) => {
  const { location } = props;
  if (location.pathname.match(/TBA/)){
    return null;
  }

  return (
    <navSinLogo/>
  )
}

const navSinLogo = withRouter(navbar);


