import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webjf.png';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc3 = "#656565"
            fc3 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                     img={fotoSocio}
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Jorge Fuentes Pérez"
                    correoEquipo="jfuentes@turanzas.com.mx"
                    linkCorreo="mailto:jfuentes@turanzas.com.mx"
                />
                </div>
                
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.nueve}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.JFuno}
                    parrafoDos2={props.data.areas.equipo.educacion.JFdos}
                    parrafoTres2={props.data.areas.equipo.educacion.JFtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.JFuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.JFdos}
                />

            </section>

        </div>
    )
}

export default Abogado;