import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../assets/logoTuranzas.png';
import '../styles/home.css';

const Home = props => {
    return (
        <div>
            <section className="contenedorLogoHome">
               <img className="logoTuranzasHome" src={Logo} alt="logo turanzas"/> 
            </section>
            <section className="listaHome">
                <ul>
                    <li><Link to="/firma">{props.data.areas.firma}</Link></li>
                    <li><Link to="/practica">{props.data.areas.practica}</Link></li>
                    <li><Link to="/equipo">{props.data.areas.equipo}</Link></li>
                    <li><Link to="/publicaciones">{props.data.areas.publicaciones}</Link></li>
                    <li><Link to="/oficinas">{props.data.areas.oficinas}</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Home;