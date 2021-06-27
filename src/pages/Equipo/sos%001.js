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
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    parrafoDos={props.data.areas.equipo.areas.tres}
                    parrafoTres={props.data.areas.equipo.areas.cinco}
                    parrafoCuatro={props.data.areas.equipo.areas.seis}
                    parrafoCinco={props.data.areas.equipo.areas.dieciseis}
                    href="/areas/asesoriafis"
                    href2="/areas/industriasnav"
                    href3="/areas/institucionesF"
                    href4="/areas/litigiofiscal"
                    href5="/areas/contribuciones"

                    badgeName4={props.data.areas.practica.principales}
                    
                    parrafoCuatro4={props.data.areas.equipo.areas.once}
                    parrafoCinco4={props.data.areas.equipo.areas.catorce}
                    parrafoSeis4={props.data.areas.equipo.areas.diecisiete}
                    parrafoSiete4={props.data.areas.equipo.areas.dieciocho}
                    parrafoOcho4={props.data.areas.equipo.areas.diecinueve}
                    parrafoNueve4={props.data.areas.equipo.areas.veinte}
                    parrafoDiez4={props.data.areas.equipo.areas.veinticinco}
                    parrafoOnce4={props.data.areas.equipo.areas.veintisiete}

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