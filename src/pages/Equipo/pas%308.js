import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc38 = "#656565"
            fc38 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    display="none"
                    nombreEquipo="Julio Armando Montelongo Ceballos"
                    correoEquipo="jmontelongo@turanzas.com.mx"
                    linkCorreo="mailto:jmontelongo@turanzas.com.mx"
                />
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    href="/areas/asesoriafis"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.JAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.JAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.JAtres}
                />
            </section>

        </div>
    )
}

export default Abogado;