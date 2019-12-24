import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webMA.png';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc = "#656565"
            fc = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                <HeaderEquipo
                    img={fotoSocio}
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Mauricio Ambrosi Herrera"
                    correoEquipo="mauricioambrosi@turanzas.com.mx"
                    linkCorreo="mailto:mambrosi@turanzas.com.mx"
                />
                 
                </div>
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.tres}
                    parrafoCuatro={props.data.areas.equipo.areas.cuatro}
                    parrafoCinco={props.data.areas.equipo.areas.cinco}
                    parrafoSeis={props.data.areas.equipo.areas.seis}
                    parrafoSiete={props.data.areas.equipo.areas.nueve}
                    parrafoOcho={props.data.areas.equipo.areas.once}
                    parrafoNueve={props.data.areas.equipo.areas.catorce}
                    parrafoDiez={props.data.areas.equipo.areas.dieciseis}
                    parrafoOnce={props.data.areas.equipo.areas.diecisiete}
                    href="/areas/aduanas"
                    href2="/areas/asesoriafis"
                    href3="/areas/industriasnav"
                    href4="/areas/institucionesasist"
                    href5="/areas/institucionesF"
                    href6="/areas/litigiofiscal"
                    href7="/areas/proyectosinfra"
                    href8="/areas/tributacion"
                    href9="/areas/seguros"
                    href10="/areas/contribuciones"
                    href11="/areas/fundaciones"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.MAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.MAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.MAtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.MAuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.MAdos}
                    parrafoTres3={props.data.areas.equipo.asociaciones.MAtres}
                />


            </section>

        </div>
    )
}

export default Abogado;