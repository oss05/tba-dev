import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import NavSinLogo from '../components/NavSinLogo'
import Logo from '../assets/logoHome.png';
import '../styles/home.css';
import Esp from '../lang/Esp.json'
import CustomCarousel from '../components/Carousel';

const dataEsp = Esp

class Home extends Component {
    state = {
        data: dataEsp,
        idioma: "Esp"
      }
    
    render() { 
        return ( 
            <div>
            {/* <NavSinLogo data={this.props.data}/> */}
            <section className="contenedorLogoHome">
               <img className="logoTuranzasHome" src={Logo} alt="logo turanzas"/> 
            </section>
            <section className="imgOficinaHome">

            </section>
            <section className="carouselContainer d-flex justify-content-center mt-3 mb-5">
                <CustomCarousel/>
            </section>
            {/* <section className="listaHome">
                <ul>
                    <li><Link to="/firma">{this.props.data.areas.firma.nombre}</Link></li>
                    <li><Link to="/areas/aduanas">{this.props.data.areas.practica.nombre}</Link></li>
                    <li><Link to="/equipo/sos001">{this.props.data.areas.equipo.nombre}</Link></li>
                    <li><Link to="/publicaciones/2019">{this.props.data.areas.publicaciones.nombre}</Link></li>
                    <li><Link to="/oficinas">{this.props.data.areas.oficinas}</Link></li>
                </ul>
            </section> */}
        </div>
         );
    }
}
 
export default Home;
