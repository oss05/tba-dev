import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc6 = "#656565"
            fc6 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Pedro Ramírez Mota Velasco"
                    correoEquipo="pramirez@turanzas.com.mx"
                    linkCorreo="mailto:pramirez@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.diesciocho}
                    parrafoDos={props.data.areas.equipo.areas.cinco}
                    parrafoTres={props.data.areas.equipo.areas.diez}
                    parrafoCuatro={props.data.areas.equipo.areas.seis}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.PRuno}
                    parrafoDos2={props.data.areas.equipo.educacion.PRdos}
                    parrafoTres2={props.data.areas.equipo.educacion.PRtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.PRuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.PRdos}
                />
            </section>

        </div>
    )
}

export default Abogado;