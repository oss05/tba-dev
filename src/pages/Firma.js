import React from 'react';
import chambers from '../assets/chambers2.jpg';
import legal from '../assets/legal-500.png';
// import wts from '../assets/wts.png';
// import latax from '../assets/latax.png';
import '../styles/firma.css'

const Firma = props => {
    return (
        <div>
            <section className="title">
                <h2>{props.data.areas.firma.nombre}</h2>
            </section>
            <section className="parrafosFirma">
                <article>
                    <div>
                        <p style={{display: "inline"}}>{props.data.areas.firma.contenido.uno}</p>
                        <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.firma.contenido.bold}</p>
                        <p style={{display: "inline"}}>{props.data.areas.firma.contenido.unopuntouno}</p>
                        <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.firma.contenido.bold2}</p>
                        <p style={{display: "inline-block", marginBottom: 16}}>{props.data.areas.firma.contenido.unopuntodos}</p>
                        <p>{props.data.areas.firma.contenido.dos}</p>
                        <p>{props.data.areas.firma.contenido.tres}</p>
                        <p style={{display: "inline"}}>{props.data.areas.firma.contenido.cuatro}</p>
                        <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.firma.contenido.bold3}</p>
                        <p style={{display: "inline"}}>{props.data.areas.firma.contenido.cuatropuntouno}</p>
                        <p style={{marginTop: 16}}>{props.data.areas.firma.contenido.cinco}</p>
                    </div>
                </article>
            </section>
            <section className='seccionLibros'>
                <article className="librosUp">
                    <a href="https://chambers.com/department/turanzas-bravo-ambrosi-tax-non-contentious-latin-america-9:2860:144:1:117525" target="_blank"><img style={{width:82, height: 111}} src={chambers} alt="chambers" /></a>
                    <a href="http://www.legal500.com/c/mexico/tax" target="_blank"><img src={legal} alt="tax" /></a>
                </article>
                {/* <article className="librosDown">
                    <a href="https://www.wts.com/global"><img src={wts} alt="wts" /></a> 
                    <a href="http://lataxnet.net/"><img src={latax} alt="latax" /></a> 
                </article> */}
            </section>
        </div>
    )
}

export default Firma;