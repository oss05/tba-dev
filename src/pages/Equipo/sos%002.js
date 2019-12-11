import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webFB.png';
 
const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc2 = "#656565"
            fc2 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                    img={fotoSocio}
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Mauricio Bravo Fortoul"
                    correoEquipo="mbravo@turanzas.com.mx"
                    linkCorreo="mailto:mbravo@turanzas.com.mx"
                />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.cinco}
                    parrafoDos={props.data.areas.equipo.areas.seis}
                    parrafoTres={props.data.areas.equipo.areas.dos}
                    parrafoCuatro={props.data.areas.equipo.areas.uno}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.MBuno}
                    parrafoDos2={props.data.areas.equipo.educacion.MBdos}
                    parrafoTres2={props.data.areas.equipo.educacion.MBtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.MBuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.MBdos}
                    parrafoTres3={props.data.areas.equipo.asociaciones.MBtres}
                    parrafoCuatro3={props.data.areas.equipo.asociaciones.MBcuatro}
                />
            </section>

        </div>
    )
}

export default Abogado;