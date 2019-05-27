import React from 'react';
import chambers from '../assets/chambers.png';
import legal from '../assets/legal-500.png';
import wts from '../assets/wts.png';
import latax from '../assets/latax.png';
import '../styles/firma.css'

const Firma = props => {
    return (
        <div>
            <section className="title">
                <h2>{props.data.areas.firma.nombre}</h2>
            </section>
            <section className="parrafosFirma">
                <article>
                    <p>
                        {props.data.areas.firma.contenido.uno} <br /> <br/>
                        {props.data.areas.firma.contenido.dos}  <br /><br/>
                        {props.data.areas.firma.contenido.tres} <br /><br/>
                        {props.data.areas.firma.contenido.cuatro} <br /> <br/>
                        {props.data.areas.firma.contenido.cinco} <br />
                    </p>
                </article>
            </section>
            <section className='seccionLibros'>
                <article className="librosUp">
                    <a href="https://chambers.com/"><img src={chambers} alt="chambers" /></a> 
                    <a href="http://www.legal500.com/c/mexico/tax"><img src={legal} alt="tax" /></a> 
                </article>
                <article className="librosDown">
                    <a href="https://www.wts.com/global"><img src={wts} alt="wts" /></a> 
                    <a href="http://lataxnet.net/"><img src={latax} alt="latax" /></a> 
                </article>
            </section>
        </div>
    )
}

export default Firma;