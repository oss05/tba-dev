import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/rodrigorio.jpg';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc108="#656565"
                fc108="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img={fotoSocio}
                        data={props.data}
                        rol={props.data.areas.equipo.socios}
                        nombreEquipo="Rodrigo Garza del Río"
                        correoEquipo="rgarza@turanzas.com.mx"
                        linkCorreo="mailto:rgarza@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.treintaydos}
                    parrafoDos={props.data.areas.equipo.areas.seis}
                    parrafoTres={props.data.areas.equipo.areas.treintaytres}
                    parrafoCuatro={props.data.areas.equipo.areas.treintaycuatro}
                    parrafoCinco={props.data.areas.equipo.areas.treintaycinco}
                    parrafoSeis={props.data.areas.equipo.areas.treintayseis}
                    href="/es/equipo/sos008"
                    href2="/es/equipo/sos008"
                    href3="/es/equipo/sos008"
                    href4="/es/equipo/sos008"
                    href5="/es/equipo/sos008"
                    href6="/es/equipo/sos008"

                    badgeName4={props.data.areas.practica.principales}
                    parrafoCuatro4={props.data.areas.equipo.areas.veinitidos}
                    parrafoCinco4={props.data.areas.equipo.areas.treintaysiete}
                    parrafoSeis4={props.data.areas.equipo.areas.trece}
                    parrafoSiete4={props.data.areas.equipo.areas.doce}
                    parrafoOcho4={props.data.areas.equipo.areas.treintayocho}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.RGR}
                    parrafoDos2={props.data.areas.equipo.educacion.RGR2}
                    parrafoTres2={props.data.areas.equipo.educacion.RGR3}
                    parrafoCuatro2={props.data.areas.equipo.educacion.RGR4}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.RGR}
                />
            </section>
        </div>
    )
}

export default Abogado;