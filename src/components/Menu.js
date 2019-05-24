import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = props => {
    return (
           <li>
               <Link className="navLink" to={props.endPoint}>{props.menuArea}</Link>
           </li>
    )
}

export default Menu;