import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc37 = "#656565"
            fc37 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    display="none"
                    nombreEquipo="Francisco Humberto López Vega"
                    correoEquipo="fhlopez@turanzas.com.mx"
                    linkCorreo="mailto:fhlopez@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    href="/areas/aduanas"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.FHuno}
                    parrafoDos2={props.data.areas.equipo.educacion.FHdos}
                    parrafoTres2={props.data.areas.equipo.educacion.FHtres}
                />
            </section>

        </div>
    )
}

export default Abogado;