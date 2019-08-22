import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc13="#656565"
                fc13="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img="http://turanzas.com.mx/NvoDesign/images/abogados/norma.png"
                        data={props.data}
                        rol={props.data.areas.equipo.asociados}
                        nombreEquipo="Norma Martínez Betanzos"
                        correoEquipo="nmartinez@turanzas.com.mx"
                        linkCorreo="mailto:nmartinez@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.cinco}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.seis}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.NMuno}
                    parrafoDos2={props.data.areas.equipo.educacion.NMdos}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.NMuno}
                />

            </section>

        </div>
    )
}

export default Abogado;