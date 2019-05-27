import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:1500}}>
            <Izq data={props.data}
            bgc12 = "#656565"
            fc12 = "#fff" />
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.asociados}
                    nombreEquipo="Cecilia Bustamante"
                    correoEquipo="cbustamante@turanzas.com.mx"
                    linkCorreo="mailto:cbustamante@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.nueve}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.CBuno}
                    parrafoDos2={props.data.areas.equipo.educacion.CBdos}
                />

            </section>

        </div>
    )
}

export default Abogado;