import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = props => {
    return (
        <Link className="navLink" to={props.endPoint}>
            <li style={{backgroundColor: props.bgc , color: props.fc }}>
                {props.menuArea}
            </li>
        </Link >
    )
}

export default Menu;