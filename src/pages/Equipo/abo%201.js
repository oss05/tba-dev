import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webLR.png';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc21 = "#656565"
            fc21 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    img={fotoSocio}
                    data={props.data}
                    rol={props.data.areas.equipo.asociados} 
                    nombreEquipo="Luis Alberto Rosas Ortiz"
                    correoEquipo="lrosas@turanzas.com.mx"
                    linkCorreo="mailto:lrosas@turanzas.com.mx"
                />
                  <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.tres}
                    parrafoTres={props.data.areas.equipo.areas.cinco}
                    parrafoCuatro={props.data.areas.equipo.areas.seis}
                    parrafoCinco={props.data.areas.equipo.areas.nueve}
                    href="/areas/aduanas"
                    href2="/areas/industriasnav"
                    href3="/areas/institucionesF"
                    href4="/areas/litigiofiscal"
                    href5="/areas/proyectosinfra"
                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.LAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.LAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.LAtres}
                />

            </section>

        </div>
    )
}

export default Abogado;