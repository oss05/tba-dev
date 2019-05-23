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
                    <img src={chambers} alt="" />
                    <img src={legal} alt="" />
                </article>
                <article className="librosDown">
                    <img src={wts} alt="" />
                    <img src={latax} alt="" />
                </article>
            </section>
        </div>
    )
}

export default Firma;