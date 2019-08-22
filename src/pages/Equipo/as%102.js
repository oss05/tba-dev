import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc12="#656565"
                fc12="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img="http://turanzas.com.mx/NvoDesign/images/abogados/gr-CeciliaBustamante.jpg"
                        data={props.data}
                        rol={props.data.areas.equipo.asociados}
                        nombreEquipo="Cecilia Bustamante"
                        correoEquipo="cbustamante@turanzas.com.mx"
                        linkCorreo="mailto:cbustamante@turanzas.com.mx"
                    />
                </div>
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