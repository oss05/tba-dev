import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img="http://turanzas.com.mx/NvoDesign/images/fotos/FranciscoOrtega.jpg"
                        data={props.data}
                        rol={props.data.areas.equipo.socios}
                        nombreEquipo="Francisco Ortega Gaxiola"
                        correoEquipo="fortega@turanzas.com.mx"
                        linkCorreo="mailto:fortega@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.diez}
                    parrafoDos={props.data.areas.equipo.areas.nueve}
                    parrafoTres={props.data.areas.equipo.areas.diesiciete}
                    parrafoCuatro={props.data.areas.equipo.areas.ocho}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.FOuno}
                    parrafoDos2={props.data.areas.equipo.educacion.FOdos}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.FOuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.FOdos}
                />

            </section>

        </div>
    )
}

export default Abogado;