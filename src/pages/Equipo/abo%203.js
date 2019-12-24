import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc23 = "#656565"
            fc23 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer"> 
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    display="none"
                    nombreEquipo="Regina Figueroa Aguayo"
                    correoEquipo="rfigueroa@turanzas.com.mx"
                    linkCorreo="mailto:rfigueroa@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    href="/areas/asesoriafis"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.RFuno}
                />

            </section>

        </div>
    )
}

export default Abogado;