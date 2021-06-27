import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/pabloC.jpg';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc11="#656565"
                fc11="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img={fotoSocio}
                        data={props.data}
                        rol={props.data.areas.equipo.socios}
                        nombreEquipo="Pablo Fernández de Cevallos y Torres"
                        correoEquipo="pfdecevallos@turanzas.com.mx"
                        linkCorreo="mailto:pfdecevallos@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    parrafoDos={props.data.areas.equipo.areas.uno}
                    parrafoTres={props.data.areas.equipo.areas.cinco}
                    href="/areas/asesoriafis"
                    href2="/areas/aduanas"
                    href3="/areas/institucionesF"

                    badgeName4={props.data.areas.practica.principales}
                    parrafoDos4={props.data.areas.equipo.areas.doce}
                    parrafoTres4={props.data.areas.equipo.areas.treintayuno}
                    parrafoCuatro4={props.data.areas.equipo.areas.veinticinco}
                    parrafoCinco4={props.data.areas.equipo.areas.dieciocho}
                    parrafoSeis4={props.data.areas.equipo.areas.treinta}
                    parrafoSiete4={props.data.areas.equipo.areas.diecisiete}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.PFuno}
                    parrafoDos2={props.data.areas.equipo.educacion.PFdos}
                    parrafoTres2={props.data.areas.equipo.educacion.curso1}


                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.FOdos}
                />

            </section>

        </div>
    )
}

export default Abogado;