import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webPR.png';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img={fotoSocio}
                        data={props.data}
                        rol={props.data.areas.equipo.socios}
                        nombreEquipo="Pedro Ramírez Mota Velasco"
                        correoEquipo="pramirez@turanzas.com.mx"
                        linkCorreo="mailto:pramirez@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.tres}
                    parrafoTres={props.data.areas.equipo.areas.cuatro}
                    parrafoCuatro={props.data.areas.equipo.areas.cinco}
                    parrafoCinco={props.data.areas.equipo.areas.ocho}
                    parrafoSeis={props.data.areas.equipo.areas.diez}
                    parrafoSiete={props.data.areas.equipo.areas.catorce}
                    href="/areas/aduanas"
                    href2="/areas/industriasnav"
                    href3="/areas/institucionesasist"
                    href4="/areas/institucionesF"
                    href5="/areas/planeacionp"
                    href6="/areas/represenfis"
                    href7="/areas/seguros"

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