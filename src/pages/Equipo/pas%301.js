import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc31 = "#656565"
            fc31 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    display="none"
                    nombreEquipo="Alejandro Diener Cabieses"
                    correoEquipo="adiener@turanzas.com.mx"
                    linkCorreo="mailto:adiener@turanzas.com.mx"
                />
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.diecisiete}
                    href="/areas/fundaciones"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.ADuno}
                    parrafoDos2={props.data.areas.equipo.educacion.ADdos}
                    parrafoTres2={props.data.areas.equipo.educacion.ADtres}
                />

            </section>

        </div>
    )
}

export default Abogado;