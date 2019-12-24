import React from 'react';
import img from '../assets/oficinas.png';
import '../styles/oficinas.css';

const Oficinas = props => {
    return (
        <div className="oficeContainer">
            <section className="title">
                <h2>{props.data.areas.oficinas}</h2>
            </section>
            <section className="oficeCenterContainer">
                <article className="oficeImg">
                    <img src={img} alt="" />
                </article>
                    
                <article className="oficeDirection">
                    <p>Edificio Corporativo <br/>
                        Arcos Norte “C” <br/>
                        Paseo de los Tamarindos No. 100, <br/>
                        Piso 3 <br/>
                        Bosques de las Lomas, <br/>
                        México, Ciudad de México 05120 <br/>
                        Tel. (55) 5081 4590 <br/>
                        Fax. (55) 5259 3861</p>
                </article>
            </section>
            <section className="oficeMap">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1747468347367!2d-99.253883425753!3d19.387810379304245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201193e0f7cf7%3A0x857bbed63a165161!2sPaseo+de+Los+Tamarindos+100%2C+Bosques+de+las+Lomas%2C+05120+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1558636298546!5m2!1ses!2smx" width="100%" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
            </section>
        </div>
    )
}

export default Oficinas;