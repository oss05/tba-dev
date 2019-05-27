import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:1500}}>
            <Izq data={props.data}
            bgc = "#656565"
            fc = "#fff" />
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Mauricio Ambrosi Herrera"
                    correoEquipo="mambrosi@turanzas.com.mx"
                    linkCorreo="mailto:mambrosi@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.tres}
                    parrafoCuatro={props.data.areas.equipo.areas.cuatro}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.MAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.MAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.MAtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.MAuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.MAdos}
                    parrafoTres3={props.data.areas.equipo.asociaciones.MAtres}
                />

                />

            </section>

        </div>
    )
}

export default Abogado;