import React, { Component } from 'react'
import Logo from '../assets/logoHome.png';
import '../styles/home.css';
import Esp from '../lang/Esp.json'
import CustomCarousel from '../components/Carousel';
// import panoramica from '../assets/panoramica2.png';

const dataEsp = Esp

class Home extends Component {
    state = {
        data: dataEsp,
        idioma: "Esp"
    }

    render() {
        return (
            <div>
                <section className="imgOficinaHome">
                    {/* <img src={panoramica} alt="Imagen panoramica home"/> */}
                </section>
                <section className="carouselContainer d-flex justify-content-center mt-3 mb-5">
                    <CustomCarousel />
                </section>
                <section className="text-center mb-4">
                    <p>Teléfono: (55) 5081 4590</p>
                    <p><a href="mailto:info@turanzas.com.mx" style={{color: "#000", textDecoration: "none"}}>info@turanzas.com.mx</a></p>
                    <p>Edificio Corporativo Arcos Norte “C” Paseo de los Tamarindos No. 100, Piso 3 Bosques de las Lomas,México D.F. 05120
                </p>
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
